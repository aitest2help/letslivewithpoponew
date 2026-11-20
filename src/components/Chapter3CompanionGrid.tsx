import React, { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import type { GuideCard, GuideSection, Lang, PhotoKey } from '../data/types';
import type { AudioPlaybackState } from '../utils/speech';
import { PHOTO_ASSETS } from '../data/photos';
import { shouldCardSpanFullWidth } from '../utils/layout';
import { SectionIcon } from './SectionIcon';
import { GuideCardView } from './GuideCardView';

interface Chapter3CompanionGridProps {
  sections: GuideSection[];
  lang: Lang;
  audioState: AudioPlaybackState;
  onPlayCard: (card: GuideCard) => void;
  onStopAudio: () => void;
  onOpenLightbox: (key: PhotoKey) => void;
  renderEmbeddedWidget: (widget: GuideSection['embedWidget']) => React.ReactNode;
}

const COMPANION_META: Record<
  string,
  { short_id: string; short_en: string; cue_id: string; cue_en: string; photo?: PhotoKey }
> = {
  'ch3-weekends': {
    short_id: 'Akhir pekan & libur',
    short_en: 'Days without centre',
    cue_id: 'Taman, mal & es krim santai',
    cue_en: 'Park, mall & ice cream outings',
    photo: 'popo-ice-cream-outing-01',
  },
  'ch3-together': {
    short_id: 'Obrolan & kegiatan',
    short_en: 'Meaningful activities',
    cue_id: 'Membaca papan toko & cerita akrab',
    cue_en: 'Reading signs & warm family chats',
    photo: 'popo-reading',
  },
  'ch3-meals': {
    short_id: 'Menu akrab & galeri foto',
    short_en: 'Meals & photo gallery',
    cue_id: '9 foto hidangan asli dapur Popo',
    cue_en: '9 real dishes from Popo’s kitchen',
    photo: 'F07',
  },
  'ch3-comfort': {
    short_id: 'Air, cahaya & suhu',
    short_en: 'Water, light & comfort',
    cue_id: 'Minum rutin, pakaian & lampu sore',
    cue_en: 'Hydration, layers & dusk lighting',
  },
};

export const Chapter3CompanionGrid: React.FC<Chapter3CompanionGridProps> = ({
  sections,
  lang,
  audioState,
  onPlayCard,
  onStopAudio,
  onOpenLightbox,
  renderEmbeddedWidget,
}) => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeSection = sections.find((s) => s.id === activeId) || null;

  return (
    <div className="mt-10 border-t border-[var(--line)] pt-8">
      <div className="mb-4">
        <p className="text-xs font-semibold text-[var(--sage)]">
          {lang === 'id'
            ? 'Pelengkap harian & akhir pekan · ketuk untuk membuka'
            : 'Beyond the weekday timeline · tap any tile to expand'}
        </p>
        <h3 className="mt-1 font-display text-xl sm:text-2xl font-medium text-[var(--ink)]">
          {lang === 'id'
            ? 'Akhir pekan, kegiatan, menu & kenyamanan rumah'
            : 'Weekends, activities, familiar meals & home comfort'}
        </h3>
      </div>

      {/* 4 Interactive Visual Companion Tiles */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {sections.map((section) => {
          const meta = COMPANION_META[section.id];
          const isSelected = activeId === section.id;
          const thumb = meta?.photo ? PHOTO_ASSETS[meta.photo] : null;

          return (
            <button
              key={section.id}
              id={section.id}
              type="button"
              onClick={() => setActiveId(isSelected ? null : section.id)}
              aria-expanded={isSelected}
              data-companion-tile={section.id}
              className={`scroll-mt-20 group flex flex-col justify-between overflow-hidden rounded-2xl border text-left transition-all cursor-pointer ${
                isSelected
                  ? 'border-[var(--sage)] bg-[var(--sage-tint)] ring-2 ring-[var(--sage)]/25'
                  : 'border-[var(--line)] bg-[var(--surface)] hover:border-[var(--sage)]/70'
              }`}
            >
              {thumb ? (
                <div className="flex h-36 w-full items-center justify-center border-b border-[var(--line)] bg-[var(--surface-photo)] p-2">
                  <img
                    src={thumb.src}
                    alt=""
                    aria-hidden="true"
                    loading="eager"
                    decoding="async"
                    className="h-full w-auto max-w-full rounded-lg object-contain shadow-xs ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>
              ) : (
                <div className="flex h-36 w-full items-center justify-center border-b border-[var(--line)] bg-[var(--sage-tint)]/75 text-[var(--sage)]">
                  <SectionIcon name={section.icon} className="h-8 w-8" />
                </div>
              )}

              <div className="p-3.5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[var(--sage-soft)] text-[var(--sage)]">
                      <SectionIcon name={section.icon} className="h-3.5 w-3.5" />
                    </span>
                    <ChevronDown
                      className={`h-4 w-4 text-[var(--muted)] transition-transform duration-200 ${
                        isSelected ? 'rotate-180 text-[var(--sage)]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </div>
                  <h4 className="mt-2 font-display text-base font-medium leading-snug text-[var(--ink)]">
                    {meta
                      ? lang === 'id'
                        ? meta.short_id
                        : meta.short_en
                      : lang === 'id'
                        ? section.title_id
                        : section.title_en}
                  </h4>
                  {meta && (
                    <p className="mt-0.5 text-xs leading-relaxed text-[var(--muted)]">
                      {lang === 'id' ? meta.cue_id : meta.cue_en}
                    </p>
                  )}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Expanded Detail Drawer for Selected Companion Tile */}
      {activeSection && (
        <div
          data-companion-panel={activeSection.id}
          className="mt-4 rounded-2xl border border-[var(--line-strong)] bg-[var(--surface)] p-4 sm:p-6 shadow-[0_2px_10px_rgba(34,52,43,0.06)]"
        >
          <div className="mb-4 flex items-start justify-between gap-3 border-b border-[var(--line)] pb-3.5">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--sage-soft)] text-[var(--sage)]">
                <SectionIcon name={activeSection.icon} className="h-4 w-4" />
              </span>
              <div>
                <h4 className="font-display text-lg sm:text-xl font-medium text-[var(--ink)]">
                  {lang === 'id' ? activeSection.title_id : activeSection.title_en}
                </h4>
                {(activeSection.intro_id || activeSection.intro_en) && (
                  <p className="mt-0.5 text-sm text-[var(--muted)]">
                    {lang === 'id' ? activeSection.intro_id : activeSection.intro_en}
                  </p>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setActiveId(null)}
              aria-label={lang === 'id' ? 'Tutup bagian ini' : 'Close this panel'}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--bg)] text-[var(--muted)] hover:text-[var(--ink)] cursor-pointer"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
            {activeSection.cards.map((card) => {
              const spanFull = shouldCardSpanFullWidth(card, activeSection.cards.length);
              return (
                <div key={card.id} className={spanFull ? 'md:col-span-2' : ''}>
                  <GuideCardView
                    card={card}
                    lang={lang}
                    audioState={audioState}
                    horizontalPhotoSplit={spanFull}
                    onPlayCard={onPlayCard}
                    onStopAudio={onStopAudio}
                    onOpenLightbox={onOpenLightbox}
                  />
                </div>
              );
            })}
          </div>

          {activeSection.embedWidget && renderEmbeddedWidget(activeSection.embedWidget)}
        </div>
      )}
    </div>
  );
};
