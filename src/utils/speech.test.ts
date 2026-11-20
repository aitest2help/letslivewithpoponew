import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { buildCardNarrationText, chooseVoice, splitSpeechChunks } from './speech';
import type { GuideCard } from '../data/types';

describe('speech utilities', () => {
  it('selects an Indonesian voice strictly and never falls back to English', () => {
    const englishOnly = [
      { lang: 'en-GB', localService: true, name: 'Daniel' },
      { lang: 'en-US', localService: true, name: 'Samantha' },
    ];
    assert.equal(chooseVoice(englishOnly, 'id'), null);

    const mixed = [
      { lang: 'en-US', localService: true, name: 'Samantha' },
      { lang: 'id-ID', localService: false, name: 'Google Bahasa Indonesia' },
      { lang: 'id-ID', localService: true, name: 'Damayanti' },
    ];
    assert.equal(chooseVoice(mixed, 'id')?.name, 'Damayanti');
    assert.equal(chooseVoice(mixed, 'en')?.name, 'Samantha');
  });

  it('splits long prose into readable chunks within maxLength without dropping words', () => {
    const longText =
      'Popo bangun dengan tenang pada pagi hari. Setelah sarapan bersama, musik Kanton diputar di televisi untuk membawa suasana hangat dan gembira sepanjang hari di rumah.';
    const chunks = splitSpeechChunks(longText, 75);
    assert.ok(chunks.length >= 2);
    for (const chunk of chunks) {
      assert.ok(chunk.length <= 75, `Chunk too long: ${chunk.length}`);
    }
    assert.equal(chunks.join(' '), longText);
  });

  it('composes single-card narration including Lis quote and dialogue in the selected language', () => {
    const sampleCard: GuideCard = {
      id: 'test-card',
      title_id: 'Pagi yang tenang',
      title_en: 'A calm morning',
      body_id: ['Mulai pagi tanpa terburu-buru.'],
      body_en: ['Start the morning without rushing.'],
      lis_quote: {
        author: 'Lis',
        portrait: 'lis-portrait',
        text_id: 'selesai saya mengatar popo saya pulang untuk bersih bersih rumah.',
        text_en: 'After taking Popo to the centre, I return home to clean the house.',
      },
      dialogue: [
        {
          speaker: 'Helper',
          text_id: 'Mari kita minum dulu ya, Popo.',
          text_en: 'Let us have a drink first, Popo.',
        },
      ],
    };

    const idText = buildCardNarrationText(sampleCard, 'id');
    assert.match(idText, /Pagi yang tenang/);
    assert.match(idText, /Kata-kata Lis sendiri/);
    assert.match(idText, /selesai saya mengatar popo/);
    assert.match(idText, /Anda: Mari kita minum dulu/);

    const enText = buildCardNarrationText(sampleCard, 'en');
    assert.match(enText, /A calm morning/);
    assert.match(enText, /English translation of Lis’s words/);
    assert.match(enText, /After taking Popo to the centre/);
    assert.match(enText, /You: Let us have a drink first/);
  });
});
