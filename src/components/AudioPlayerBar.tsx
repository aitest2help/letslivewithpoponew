import React from 'react';
import { Pause, Play, Square, Volume2, X, Info } from 'lucide-react';
import type { Lang } from '../data/types';
import type { AudioNoticeCode, AudioPlaybackState } from '../utils/speech';

interface AudioPlayerBarProps {
  lang: Lang;
  audioState: AudioPlaybackState;
  notice: AudioNoticeCode | null;
  onPause: () => void;
  onResume: () => void;
  onStop: () => void;
  onDismissNotice: () => void;
}

export const AudioPlayerBar: React.FC<AudioPlayerBarProps> = ({
  lang,
  audioState,
  notice,
  onPause,
  onResume,
  onStop,
  onDismissNotice,
}) => {
  const isActive = audioState.status !== 'idle';
  if (!isActive && !notice) return null;

  const getNoticeText = (code: AudioNoticeCode) => {
    if (code === 'missing') {
      return lang === 'id'
        ? 'Perangkat atau browser ini belum memasang suara Bahasa Indonesia. Kami tidak menggantinya dengan suara Inggris agar tetap nyaman—Anda dapat membaca teksnya langsung atau mengaktifkan suara Bahasa Indonesia di pengaturan ponsel.'
        : 'This device or browser does not have an English voice available right now. You can read the section directly or check your phone’s speech settings.';
    }
    if (code === 'unsupported') {
      return lang === 'id'
        ? 'Browser ini belum mendukung pembacaan suara otomatis. Semua teks panduan tetap lengkap untuk dibaca.'
        : 'This browser does not support automatic speech reading. All guide text remains fully readable on screen.';
    }
    if (code === 'blocked') {
      return lang === 'id'
        ? 'Browser menunda pemutaran suara. Ketuk tombol Dengarkan sekali lagi untuk mencoba.'
        : 'The browser paused speech playback. Tap Listen once more to try again.';
    }
    return lang === 'id'
      ? 'Suara tidak dapat diputar saat ini. Coba ketuk ulang tombol Dengarkan pada kartu yang diinginkan.'
      : 'Voice playback could not start just now. Please tap Listen again on the card you want to hear.';
  };

  return (
    <div
      role="region"
      aria-live="polite"
      aria-label={lang === 'id' ? 'Pemutar suara per kartu' : 'Section audio player'}
      className="fixed inset-x-0 bottom-14 lg:bottom-0 z-40 border-t border-[var(--line-strong)] bg-[var(--surface)]/95 backdrop-blur-md shadow-[0_-4px_20px_rgba(20,28,23,0.08)]"
    >
      <div className="mx-auto max-w-4xl px-4 py-3 sm:px-6">
        {notice && (
          <div className="flex items-start justify-between gap-3 rounded-xl border border-[var(--warm-border)] bg-[var(--warm-bg)] px-4 py-3 text-xs sm:text-sm text-[var(--ink)]">
            <div className="flex items-start gap-2.5">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-[var(--warm-ink)]" aria-hidden="true" />
              <p className="leading-relaxed">{getNoticeText(notice)}</p>
            </div>
            <button
              type="button"
              onClick={onDismissNotice}
              aria-label={lang === 'id' ? 'Tutup pemberitahuan suara' : 'Dismiss voice notice'}
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[var(--warm-ink)] hover:bg-black/5 cursor-pointer"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        )}

        {isActive && (
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--sage-soft)] text-[var(--sage)]">
                <Volume2 className="h-4 w-4" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-[var(--ink)]">
                  {audioState.label}
                </p>
                <p className="text-xs text-[var(--muted)]">
                  {audioState.status === 'preparing'
                    ? lang === 'id'
                      ? 'Menyiapkan suara…'
                      : 'Preparing voice…'
                    : audioState.status === 'paused'
                      ? lang === 'id'
                        ? 'Dijeda · berhenti di akhir kartu ini'
                        : 'Paused · stops at end of this card'
                      : lang === 'id'
                        ? `Membacakan bagian ${Math.min(audioState.index + 1, Math.max(audioState.total, 1))} dari ${Math.max(audioState.total, 1)}`
                        : `Reading part ${Math.min(audioState.index + 1, Math.max(audioState.total, 1))} of ${Math.max(audioState.total, 1)}`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {audioState.status === 'playing' ? (
                <button
                  type="button"
                  onClick={onPause}
                  className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl border border-[var(--line-strong)] bg-[var(--bg)] px-3.5 py-2 text-xs font-semibold text-[var(--ink)] hover:border-[var(--sage)] cursor-pointer"
                >
                  <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{lang === 'id' ? 'Jeda' : 'Pause'}</span>
                </button>
              ) : audioState.status === 'paused' ? (
                <button
                  type="button"
                  onClick={onResume}
                  className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl bg-[var(--sage)] px-3.5 py-2 text-xs font-semibold text-white dark:text-[#102016] cursor-pointer"
                >
                  <Play className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{lang === 'id' ? 'Lanjut' : 'Resume'}</span>
                </button>
              ) : null}

              <button
                type="button"
                onClick={onStop}
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl border border-[var(--line-strong)] bg-[var(--surface)] px-3 py-2 text-xs font-medium text-[var(--muted)] hover:text-[var(--ink)] cursor-pointer"
                aria-label={lang === 'id' ? 'Hentikan pemutaran suara' : 'Stop voice playback'}
              >
                <Square className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="hidden sm:inline">{lang === 'id' ? 'Berhenti' : 'Stop'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
