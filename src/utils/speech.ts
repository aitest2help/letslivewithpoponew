import type { GuideCard, Lang } from '../data/types';

export interface VoiceLike {
  lang?: string;
  localService?: boolean;
  name?: string;
}

export type AudioStatus = 'idle' | 'preparing' | 'playing' | 'paused';
export type AudioNoticeCode = 'missing' | 'unsupported' | 'blocked' | 'error';

export interface AudioPlaybackState {
  status: AudioStatus;
  key: string | null;
  label: string;
  index: number;
  total: number;
}

/**
 * Strictly selects a voice matching the active reading language.
 * Never falls back to English when Indonesian is requested (or vice versa).
 */
export function chooseVoice<T extends VoiceLike>(voices: readonly T[], language: Lang): T | null {
  const pattern = language === 'id' ? /^(id|in)(-|_|$)/i : /^en(-|_|$)/i;
  const matching = voices.filter((voice) => pattern.test(voice.lang || ''));
  return matching.find((voice) => voice.localService) || matching[0] || null;
}

/**
 * Splits a card's prose into short chunks for smooth mobile Web Speech synthesis.
 */
export function splitSpeechChunks(text: string, maxLength = 210): string[] {
  const normalized = String(text || '').replace(/\s+/g, ' ').trim();
  if (!normalized) return [];

  const sentences = normalized.match(/[^.!?]+[.!?]+|[^.!?]+$/gu) || [normalized];
  const chunks: string[] = [];

  for (const sentence of sentences) {
    let rest = sentence.trim();
    while (rest.length > maxLength) {
      let splitAt = rest.lastIndexOf(' ', maxLength);
      if (splitAt < 30) splitAt = maxLength;
      chunks.push(rest.slice(0, splitAt).trim());
      rest = rest.slice(splitAt).trim();
    }
    if (rest) chunks.push(rest);
  }
  return chunks;
}

/**
 * Builds deterministic narration text for ONE card only, including its Lis quote
 * and adaptable dialogue if present, so playback stops cleanly at the card's end.
 */
export function buildCardNarrationText(card: GuideCard, language: Lang): string {
  const parts: string[] = [];

  const title = language === 'id' ? card.title_id : card.title_en;
  if (title) parts.push(title);

  const body = (language === 'id' ? card.body_id : card.body_en) || [];
  const bodyLabels = (language === 'id' ? card.body_labels_id : card.body_labels_en) || [];
  body.forEach((paragraph, idx) => {
    if (bodyLabels[idx]) parts.push(bodyLabels[idx]);
    if (paragraph) parts.push(paragraph);
  });

  const bullets = (language === 'id' ? card.bullets_id : card.bullets_en) || [];
  bullets.forEach((item) => {
    if (item) parts.push(item);
  });

  if (card.rows?.length) {
    card.rows.forEach((row) => {
      const label = language === 'id' ? row.label_id : row.label_en;
      const val = language === 'id' ? row.value_id : row.value_en;
      if (label && val) parts.push(`${label}: ${val}`);
    });
  }

  const standaloneQuote = language === 'id' ? card.quote_id : card.quote_en;
  if (standaloneQuote) {
    parts.push(
      language === 'id'
        ? `Pesan ${card.author || 'Lis'}: ${standaloneQuote}`
        : `Message from ${card.author || 'Lis'}: ${standaloneQuote}`
    );
  }

  if (card.dialogue?.length) {
    parts.push(
      language === 'id'
        ? 'Contoh ucapan untuk disesuaikan dalam bahasa Kanton sehari-hari.'
        : 'Example wording to adapt in everyday Cantonese.'
    );
    card.dialogue.forEach((turn) => {
      const speakerLabel =
        turn.speaker === 'Helper'
          ? language === 'id'
            ? 'Anda'
            : 'You'
          : turn.speaker === 'Family'
            ? language === 'id'
              ? 'Keluarga'
              : 'Family'
            : turn.speaker;
      const line = language === 'id' ? turn.text_id : turn.text_en;
      parts.push(`${speakerLabel}: ${line}`);
    });
  }

  if (card.lis_quote) {
    parts.push(
      language === 'id' ? 'Kata-kata Lis sendiri.' : 'English translation of Lis’s words.'
    );
    parts.push(language === 'id' ? card.lis_quote.text_id : card.lis_quote.text_en);
  }

  const note = language === 'id' ? card.note_id : card.note_en;
  if (note) parts.push(note);

  return parts.filter(Boolean).join('. ');
}

export class CardSpeechController {
  private synth: SpeechSynthesis | null;
  private onChange: (state: AudioPlaybackState) => void;
  private onNotice: (code: AudioNoticeCode) => void;
  private state: AudioStatus = 'idle';
  private token = 0;
  private index = 0;
  private chunks: string[] = [];
  private key: string | null = null;
  private label = '';
  private language: Lang = 'id';
  private voice: SpeechSynthesisVoice | null = null;

  constructor(options: {
    onChange: (state: AudioPlaybackState) => void;
    onNotice: (code: AudioNoticeCode) => void;
  }) {
    this.synth = typeof window !== 'undefined' && 'speechSynthesis' in window ? window.speechSynthesis : null;
    this.onChange = options.onChange;
    this.onNotice = options.onNotice;
  }

  private publish() {
    this.onChange({
      status: this.state,
      key: this.key,
      label: this.label,
      index: this.index,
      total: this.chunks.length,
    });
  }

  private async resolveVoice(language: Lang, token: number): Promise<SpeechSynthesisVoice | null> {
    if (!this.synth) return null;
    const immediate = chooseVoice(this.synth.getVoices(), language);
    if (immediate) return immediate;

    return new Promise((resolve) => {
      let timer: ReturnType<typeof setTimeout>;
      const finish = (voice: SpeechSynthesisVoice | null) => {
        clearTimeout(timer);
        this.synth?.removeEventListener?.('voiceschanged', onChanged);
        resolve(voice);
      };
      const onChanged = () => {
        const found = chooseVoice(this.synth?.getVoices() || [], language);
        if (found || token !== this.token) finish(found);
      };
      this.synth?.addEventListener?.('voiceschanged', onChanged);
      timer = setTimeout(() => finish(chooseVoice(this.synth?.getVoices() || [], language)), 1200);
      onChanged();
    });
  }

  async play(params: { key: string; label: string; text: string; language: Lang }): Promise<void> {
    if (this.key === params.key && this.state === 'playing') {
      this.pause();
      return;
    }
    if (this.key === params.key && this.state === 'paused') {
      this.resume();
      return;
    }
    if (this.key === params.key && this.state === 'preparing') {
      this.stop();
      return;
    }

    this.stop();
    if (!this.synth || typeof SpeechSynthesisUtterance === 'undefined') {
      this.onNotice('unsupported');
      return;
    }

    const token = this.token;
    this.key = params.key;
    this.label = params.label;
    this.language = params.language;
    this.chunks = splitSpeechChunks(params.text);
    if (!this.chunks.length) {
      this.stop();
      return;
    }

    this.state = 'preparing';
    this.publish();

    const voice = await this.resolveVoice(params.language, token);
    if (token !== this.token) return;
    if (!voice) {
      this.stop();
      this.onNotice('missing');
      return;
    }

    this.voice = voice;
    this.state = 'playing';
    this.index = 0;
    this.publish();
    this.speakNext(token);
  }

  private speakNext(token: number) {
    if (!this.synth || token !== this.token || this.state !== 'playing') return;
    if (this.index >= this.chunks.length) {
      this.stop();
      return;
    }

    const utterance = new SpeechSynthesisUtterance(this.chunks[this.index]);
    utterance.lang = this.language === 'id' ? 'id-ID' : 'en-GB';
    utterance.voice = this.voice;
    utterance.rate = 0.92;
    utterance.pitch = 1;
    utterance.onend = () => {
      if (token !== this.token) return;
      this.index += 1;
      this.publish();
      if (this.state === 'playing') this.speakNext(token);
    };
    utterance.onerror = (event) => {
      if (token !== this.token || event.error === 'canceled' || event.error === 'interrupted') {
        return;
      }
      this.stop();
      this.onNotice(event.error === 'not-allowed' ? 'blocked' : 'error');
    };

    try {
      this.synth.resume();
      this.synth.speak(utterance);
    } catch {
      this.stop();
      this.onNotice('error');
    }
  }

  pause() {
    if (!this.synth || this.state !== 'playing') return;
    this.state = 'paused';
    this.synth.pause();
    this.publish();
  }

  resume() {
    if (!this.synth || this.state !== 'paused') return;
    this.state = 'playing';
    this.synth.resume();
    this.publish();
    if (this.index >= this.chunks.length) {
      this.stop();
    } else if (!this.synth.speaking) {
      this.speakNext(this.token);
    }
  }

  stop() {
    this.token += 1;
    this.synth?.cancel();
    this.key = null;
    this.label = '';
    this.state = 'idle';
    this.index = 0;
    this.chunks = [];
    this.publish();
  }
}
