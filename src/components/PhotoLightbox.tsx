import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import type { Lang, PhotoKey } from '../data/types';
import { PHOTO_ASSETS } from '../data/photos';

interface PhotoLightboxProps {
  photoKey: PhotoKey | null;
  lang: Lang;
  onClose: () => void;
}

export const PhotoLightbox: React.FC<PhotoLightboxProps> = ({ photoKey, lang, onClose }) => {
  useEffect(() => {
    if (!photoKey) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [photoKey, onClose]);

  if (!photoKey) return null;

  const photo = PHOTO_ASSETS[photoKey];
  if (!photo) return null;

  const isReference = photo.provenance === 'recipe_reference';
  const caption =
    (lang === 'id' ? photo.caption_id : photo.caption_en) ||
    (lang === 'id' ? photo.alt_id : photo.alt_en);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={lang === 'id' ? photo.alt_id : photo.alt_en}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 sm:p-6 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 border-b border-[var(--line)] px-4 py-3">
          <p
            className={`font-mono-tabular text-xs font-medium uppercase tracking-[0.1em] ${
              isReference ? 'text-[var(--warm-ink)]' : 'text-[var(--sage)]'
            }`}
          >
            {isReference
              ? lang === 'id'
                ? `${photo.key} · Ilustrasi rujukan — bukan masakan rumah`
                : `${photo.key} · Reference illustration — not family cooking`
              : lang === 'id'
                ? 'Foto panduan keluarga'
                : 'Family guide photograph'}
          </p>
          <button
            type="button"
            onClick={onClose}
            aria-label={lang === 'id' ? 'Tutup foto' : 'Close photograph'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--bg)] text-[var(--ink)] hover:border-[var(--sage)] hover:text-[var(--sage)] transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="flex-1 overflow-auto bg-[var(--surface-photo)] p-3 sm:p-5">
          <img
            src={photo.src}
            alt={lang === 'id' ? photo.alt_id : photo.alt_en}
            className="mx-auto max-h-[65vh] w-auto max-w-full rounded-lg object-contain"
          />
        </div>

        <div className="border-t border-[var(--line)] bg-[var(--surface)] px-5 py-3.5 text-sm leading-relaxed text-[var(--ink)]">
          {caption}
        </div>
      </div>
    </div>
  );
};
