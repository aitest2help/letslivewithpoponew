import React from 'react';
import { ArrowRight, ZoomIn } from 'lucide-react';
import type { Lang, PhotoKey } from '../data/types';
import { PHOTO_ASSETS } from '../data/photos';

interface FoodIntroStripProps {
  lang: Lang;
  onOpenLightbox: (key: PhotoKey) => void;
  onNavigate?: (target: string) => void;
}

const FEATURED_FOOD_KEYS: { key: PhotoKey; code: string; label_id: string; label_en: string }[] = [
  { key: 'R01', code: 'F01', label_id: 'Bubur putih & Daliang milk', label_en: 'Plain congee & Daliang milk' },
  { key: 'F02', code: 'F02', label_id: 'Jagung manis, telur & susu', label_en: 'Sweet corn, egg & milk' },
  { key: 'R02', code: 'F04', label_id: 'Cheung fun kukus & air madu lemon', label_en: 'Steamed rice rolls & honey-lemon water' },
  { key: 'R04', code: 'F09', label_id: 'Popo membungkus pangsit Shanghai', label_en: 'Popo making Shanghai wontons' },
  { key: 'R09', code: 'F13', label_id: 'Ikan kukus jahe & caisim', label_en: 'Steamed fish with ginger & choy sum' },
  { key: 'DIN05', code: 'F15', label_id: 'Ayam kukus lili kering & jamur kuping', label_en: 'Steamed chicken, lily buds & cloud ear' },
  { key: 'R10', code: 'F26', label_id: 'Kari Jepang kentang & ayam', label_en: 'Mild Japanese chicken curry' },
  { key: 'R07', code: 'F41', label_id: 'Buah naga kesukaan Popo', label_en: 'Popo’s favourite dragon fruit' },
  { key: 'S01', code: 'F50', label_id: 'Sup manis ubi & jamur salju', label_en: 'Sweet potato & snow fungus soup' },
];

export const FoodIntroStrip: React.FC<FoodIntroStripProps> = ({
  lang,
  onOpenLightbox,
  onNavigate,
}) => {
  return (
    <div className="mt-5 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs font-semibold text-[var(--sage)]">
            {lang === 'id'
              ? 'Galeri hidangan asli dari dapur Popo'
              : 'Real dishes from Popo’s kitchen'}
          </p>
          <h4 className="mt-1 font-display text-lg sm:text-xl font-medium text-[var(--ink)]">
            {lang === 'id'
              ? 'Sekilas menu harian yang sudah akrab dengan Popo'
              : 'A visual glimpse of Popo’s everyday meals'}
          </h4>
        </div>

        <button
          type="button"
          onClick={() => onNavigate?.('#ch6-cookbook')}
          data-open-ch6-cookbook
          className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl border border-[var(--line-strong)] bg-[var(--bg)] px-4 py-2 text-xs sm:text-sm font-semibold text-[var(--sage)] hover:border-[var(--sage)] transition-colors whitespace-nowrap cursor-pointer"
        >
          <span>
            {lang === 'id'
              ? 'Buka Dapur & Menu 7 Hari (Bab 6)'
              : 'Open Meals & 7-Day Ideas (Ch. 6)'}
          </span>
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURED_FOOD_KEYS.map((item) => {
          const asset = PHOTO_ASSETS[item.key];
          return (
            <figure
              key={item.key}
              className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg)]/70"
            >
              <button
                type="button"
                onClick={() => onOpenLightbox(item.key)}
                className="group relative flex w-full items-center justify-center bg-[var(--surface-photo)] p-2.5 text-left cursor-zoom-in"
                aria-label={
                  lang === 'id'
                    ? `Perbesar foto ${item.label_id}`
                    : `Enlarge photo of ${item.label_en}`
                }
              >
                <img
                  src={asset.src}
                  alt={lang === 'id' ? asset.alt_id : asset.alt_en}
                  loading="eager"
                  decoding="async"
                  className="h-56 w-auto max-w-full rounded-lg object-contain shadow-xs ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3.5 bottom-3.5 inline-flex h-7 w-7 items-center justify-center rounded-md bg-[var(--surface)]/90 text-[var(--ink)] opacity-0 shadow-xs transition-opacity group-hover:opacity-100"
                >
                  <ZoomIn className="h-3.5 w-3.5" />
                </span>
              </button>
              <figcaption className="px-3.5 py-2.5">
                <span className="font-mono-tabular text-[11px] font-medium text-[var(--sage)]">
                  {item.code}
                </span>
                <p className="mt-0.5 text-sm font-medium leading-snug text-[var(--ink)]">
                  {lang === 'id' ? item.label_id : item.label_en}
                </p>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </div>
  );
};
