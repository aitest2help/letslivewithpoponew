import React, { useMemo, useState } from 'react';
import {
  ChevronDown,
  ArrowRight,
  ShoppingBag,
  Utensils,
  Music,
  Pill,
  Bus,
  CloudSun,
  Palette,
  Home,
  Coffee,
  Cookie,
  Sparkles,
  Droplets,
  Tv,
  HeartHandshake,
  BedDouble,
  Moon,
  Stethoscope,
  ChevronsUpDown,
  ZoomIn,
} from 'lucide-react';
import type { GuideCard, GuideSection, Lang, PhotoKey } from '../data/types';
import type { AudioPlaybackState } from '../utils/speech';
import { PHOTO_ASSETS } from '../data/photos';
import { getDayMomentTone, shouldCardSpanFullWidth } from '../utils/layout';
import {
  collapseAllTimelineSlots,
  expandAllTimelineSlots,
  getNextTimelineSlotId,
  selectTimelineSlot,
  TIMELINE_SLOT_VISUALS,
  toggleTimelineSlot,
  type TimelineMicroCue,
} from '../utils/timeline';
import { SectionIcon } from './SectionIcon';
import { GuideCardView } from './GuideCardView';

interface DayFlowSectionProps {
  sections: GuideSection[];
  lang: Lang;
  audioState: AudioPlaybackState;
  onPlayCard: (card: GuideCard) => void;
  onStopAudio: () => void;
  onOpenLightbox: (key: PhotoKey) => void;
}

const MORNING_GALLERY_KEYS: { key: PhotoKey; label_id: string; label_en: string }[] = [
  {
    key: 'morning-corn-breakfast',
    label_id: 'Jagung manis kukus, telur, susu & air madu',
    label_en: 'Steamed sweet corn, egg, milk & honey water',
  },
  {
    key: 'morning-sandwich-breakfast',
    label_id: 'Roti panggang hangat & air lemon madu jahe',
    label_en: 'Warm toasted sandwich & lemon-honey-ginger water',
  },
  {
    key: 'F01',
    label_id: 'Bubur putih & susu asin Daliang',
    label_en: 'Plain rice congee & Daliang salted milk',
  },
];

function renderMicroCueIcon(icon: TimelineMicroCue['icon']) {
  const cls = 'h-3.5 w-3.5 shrink-0 opacity-80';
  switch (icon) {
    case 'bag':
      return <ShoppingBag className={cls} aria-hidden="true" />;
    case 'breakfast':
    case 'dinner':
      return <Utensils className={cls} aria-hidden="true" />;
    case 'music':
      return <Music className={cls} aria-hidden="true" />;
    case 'pill':
      return <Pill className={cls} aria-hidden="true" />;
    case 'van':
      return <Bus className={cls} aria-hidden="true" />;
    case 'weather':
      return <CloudSun className={cls} aria-hidden="true" />;
    case 'art':
      return <Palette className={cls} aria-hidden="true" />;
    case 'broom':
      return <Home className={cls} aria-hidden="true" />;
    case 'coffee':
      return <Coffee className={cls} aria-hidden="true" />;
    case 'jelly':
      return <Cookie className={cls} aria-hidden="true" />;
    case 'sparkle':
      return <Sparkles className={cls} aria-hidden="true" />;
    case 'bath':
      return <Droplets className={cls} aria-hidden="true" />;
    case 'tv':
      return <Tv className={cls} aria-hidden="true" />;
    case 'lotion':
      return <HeartHandshake className={cls} aria-hidden="true" />;
    case 'bed':
      return <BedDouble className={cls} aria-hidden="true" />;
    case 'moon':
      return <Moon className={cls} aria-hidden="true" />;
    case 'doctor':
      return <Stethoscope className={cls} aria-hidden="true" />;
    default:
      return <Sparkles className={cls} aria-hidden="true" />;
  }
}

export const DayFlowSection: React.FC<DayFlowSectionProps> = ({
  sections,
  lang,
  audioState,
  onPlayCard,
  onStopAudio,
  onOpenLightbox,
}) => {
  const allSlotIds = useMemo(() => sections.map((s) => s.id), [sections]);

  // Start with Slot 01 (Morning) open so the expandable icon-based pattern is immediately clear without a wall of text
  const [openSlots, setOpenSlots] = useState<Set<string>>(() =>
    allSlotIds[0] ? new Set([allSlotIds[0]]) : new Set()
  );

  const allExpanded = allSlotIds.length > 0 && openSlots.size === allSlotIds.length;
  const lisPortrait = PHOTO_ASSETS['lis-portrait'];

  const handleToggleSlot = (slotId: string) => {
    setOpenSlots((prev) => toggleTimelineSlot(prev, slotId));
  };

  const handleSelectFromRibbon = (slotId: string) => {
    setOpenSlots((prev) => selectTimelineSlot(prev, slotId, true));
    requestAnimationFrame(() => {
      const el = document.getElementById(slotId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  };

  const handleStepNext = (currentId: string) => {
    const nextId = getNextTimelineSlotId(allSlotIds, currentId);
    if (!nextId) return;
    setOpenSlots(new Set([nextId]));
    requestAnimationFrame(() => {
      const el = document.getElementById(nextId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  };

  const handleToggleAll = () => {
    setOpenSlots(allExpanded ? collapseAllTimelineSlots() : expandAllTimelineSlots(allSlotIds));
  };

  return (
    <div
      className="relative"
      aria-label={
        lang === 'id'
          ? 'Timeline harian interaktif enam momen bersama Popo'
          : 'Interactive daily timeline of six moments with Popo'
      }
    >
      {/* Top Interactive Visual Daylight Bar */}
      <div className="mb-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-5 shadow-[0_1px_4px_rgba(34,52,43,0.04)]">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <p className="text-xs font-semibold text-[var(--sage)]">
              {lang === 'id'
                ? 'Timeline visual sehari · ketuk momen untuk membuka detail'
                : 'Interactive daily timeline · tap any time slot to expand'}
            </p>
            <p className="mt-0.5 text-xs sm:text-sm text-[var(--muted)]">
              {lang === 'id'
                ? 'Gambaran ritme lembut dari pagi hingga malam—bukan jadwal jam kaku.'
                : 'A gentle morning-to-night rhythm—not a rigid clock timetable.'}
            </p>
          </div>

          <button
            type="button"
            onClick={handleToggleAll}
            data-timeline-toggle-all
            className="inline-flex min-h-[44px] items-center gap-1.5 rounded-xl border border-[var(--line-strong)] bg-[var(--bg)] px-3.5 py-2 text-xs font-semibold text-[var(--ink)] hover:border-[var(--sage)] hover:text-[var(--sage)] transition-colors whitespace-nowrap cursor-pointer"
          >
            <ChevronsUpDown className="h-3.5 w-3.5" aria-hidden="true" />
            <span>
              {allExpanded
                ? lang === 'id'
                  ? 'Ringkas semua'
                  : 'Collapse all'
                : lang === 'id'
                  ? 'Buka semua 6 momen'
                  : 'Expand all 6 slots'}
            </span>
          </button>
        </div>

        {/* Graphical Connected Daylight Icon Track */}
        <div className="relative">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-8 right-8 top-7 h-0.5 bg-gradient-to-r from-[#DFC07D] via-[#8EC0A6] via-[#E1BCA5] to-[#9DAAC7] opacity-65"
          />

          <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-6 relative z-10">
            {sections.map((section, idx) => {
              const tone = getDayMomentTone(idx);
              const meta = TIMELINE_SLOT_VISUALS[section.id];
              const isOpen = openSlots.has(section.id);
              const shortLabel = meta
                ? lang === 'id'
                  ? meta.short_id
                  : meta.short_en
                : lang === 'id'
                  ? section.title_id
                  : section.title_en;
              const periodLabel = meta
                ? lang === 'id'
                  ? meta.period_id
                  : meta.period_en
                : '';

              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => handleSelectFromRibbon(section.id)}
                  aria-pressed={isOpen}
                  data-ribbon-slot={section.id}
                  className={`group flex flex-col items-center rounded-xl border px-2.5 py-3 text-center transition-all cursor-pointer ${
                    isOpen
                      ? `${tone.ribbonActiveBg} shadow-xs ring-2 ring-[var(--sage)]/30`
                      : 'border-[var(--line)] bg-[var(--bg)]/80 hover:border-[var(--line-strong)] hover:bg-[var(--surface)]'
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full border transition-transform group-hover:scale-105 ${tone.nodeBg} ${tone.nodeBorder} ${tone.nodeIcon}`}
                  >
                    <SectionIcon name={section.icon} className="h-5 w-5" />
                  </span>
                  <span className="mt-2 font-mono-tabular text-[10px] font-semibold tracking-wider text-[var(--muted)]">
                    0{idx + 1}
                  </span>
                  <span className="mt-0.5 text-xs sm:text-[13px] font-semibold leading-tight text-[var(--ink)]">
                    {shortLabel}
                  </span>
                  {periodLabel && (
                    <span className="mt-0.5 text-[11px] leading-tight text-[var(--muted)] line-clamp-1">
                      {periodLabel}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Expandable Vertical Daylight Timeline */}
      <ol className="relative space-y-3.5 sm:space-y-4">
        {sections.map((section, idx) => {
          const isLast = idx === sections.length - 1;
          const isOpen = openSlots.has(section.id);
          const tone = getDayMomentTone(idx);
          const meta = TIMELINE_SLOT_VISUALS[section.id];
          const previewPhoto = meta?.previewPhoto ? PHOTO_ASSETS[meta.previewPhoto] : null;
          const hasLisQuote = section.cards.some((c) => Boolean(c.lis_quote || c.quote_id));
          const nextSlotId = getNextTimelineSlotId(allSlotIds, section.id);
          const nextMeta = nextSlotId ? TIMELINE_SLOT_VISUALS[nextSlotId] : null;

          const momentLabel = section.day_flow
            ? lang === 'id'
              ? section.day_flow.moment_id
              : section.day_flow.moment_en
            : '';
          const cueLabel = section.day_flow
            ? lang === 'id'
              ? section.day_flow.cue_id
              : section.day_flow.cue_en
            : '';

          return (
            <li
              key={section.id}
              id={section.id}
              data-timeline-slot={section.id}
              className="scroll-mt-20 relative flex gap-3 sm:gap-5"
            >
              {/* Left Vertical Daylight Icon Node + Connector Line */}
              <div className="relative flex flex-col items-center shrink-0 pt-2">
                <button
                  type="button"
                  onClick={() => handleToggleSlot(section.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${section.id}-panel`}
                  aria-label={
                    lang === 'id'
                      ? `${isOpen ? 'Tutup' : 'Buka'} momen ${section.title_id}`
                      : `${isOpen ? 'Collapse' : 'Expand'} ${section.title_en}`
                  }
                  className={`z-10 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border transition-all cursor-pointer ${tone.nodeBg} ${tone.nodeBorder} ${tone.nodeIcon} ${
                    isOpen ? 'ring-4 ring-[var(--sage)]/20 scale-105 shadow-sm' : 'hover:scale-105'
                  }`}
                >
                  <SectionIcon name={section.icon} className="h-5 w-5" />
                </button>
                {!isLast && (
                  <div
                    aria-hidden="true"
                    className={`mt-2 w-[2px] flex-1 rounded-full ${tone.lineColor}`}
                  />
                )}
              </div>

              {/* Right Interactive Expandable Time-Slot Container */}
              <div
                className={`min-w-0 flex-1 overflow-hidden rounded-2xl border transition-colors ${
                  isOpen
                    ? 'border-[var(--line-strong)] bg-[var(--surface)] shadow-[0_2px_10px_rgba(34,52,43,0.06)]'
                    : 'border-[var(--line)] bg-[var(--surface)]/95 hover:border-[var(--sage)]/60'
                }`}
              >
                {/* Clickable Icon-Rich Time Slot Header */}
                <button
                  type="button"
                  onClick={() => handleToggleSlot(section.id)}
                  aria-expanded={isOpen}
                  aria-controls={`${section.id}-panel`}
                  data-slot-trigger={section.id}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 sm:gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--focus-ring)]"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5">
                      <span className={`text-xs font-semibold ${tone.cueText}`}>
                        {momentLabel}
                      </span>
                      {cueLabel && (
                        <span className="text-xs text-[var(--muted)]">· {cueLabel}</span>
                      )}
                      {hasLisQuote && (
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-[var(--sage)]">
                          <span>·</span>
                          <img
                            src={lisPortrait.src}
                            alt=""
                            aria-hidden="true"
                            className="h-4 w-4 rounded-full object-cover object-top ring-1 ring-[var(--line-strong)]"
                          />
                          <span>{lang === 'id' ? 'Ada catatan Lis' : 'Lis quote'}</span>
                        </span>
                      )}
                    </div>

                    <h3 className="mt-1 font-display text-lg sm:text-[21px] font-medium leading-snug text-[var(--ink)]">
                      {lang === 'id' ? section.title_id : section.title_en}
                    </h3>

                    {/* Scannable Icon-Based Micro-Cues (replaces text walls when collapsed!) */}
                    {meta && (
                      <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-1.5">
                        {meta.cues.map((cue) => (
                          <span
                            key={cue.label_en}
                            className="inline-flex items-center gap-1.5 text-xs sm:text-[13px] text-[var(--muted)]"
                          >
                            <span className={tone.nodeIcon}>{renderMicroCueIcon(cue.icon)}</span>
                            <span>{lang === 'id' ? cue.label_id : cue.label_en}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Right Visual Preview Thumbnail + Expand Chevron */}
                  <div className="flex items-center gap-3 shrink-0">
                    {previewPhoto ? (
                      <div className="hidden sm:flex h-16 w-16 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--surface-photo)] p-1">
                        <img
                          src={previewPhoto.src}
                          alt=""
                          aria-hidden="true"
                          loading="eager"
                          decoding="async"
                          className="h-full w-full rounded-lg object-contain"
                        />
                      </div>
                    ) : (
                      <div
                        aria-hidden="true"
                        className={`hidden sm:flex h-16 w-16 items-center justify-center rounded-xl border ${tone.nodeBg} ${tone.nodeBorder} ${tone.nodeIcon}`}
                      >
                        <SectionIcon name={section.icon} className="h-6 w-6" />
                      </div>
                    )}

                    <div className="flex flex-col items-center justify-center min-w-[44px]">
                      <span
                        className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all ${
                          isOpen
                            ? 'border-[var(--sage)] bg-[var(--sage)] text-white dark:text-[#102016]'
                            : 'border-[var(--line-strong)] bg-[var(--bg)] text-[var(--muted)]'
                        }`}
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="mt-1 text-[10.5px] font-semibold text-[var(--muted)]">
                        {isOpen
                          ? lang === 'id'
                            ? 'Tutup'
                            : 'Hide'
                          : lang === 'id'
                            ? 'Buka'
                            : 'Open'}
                      </span>
                    </div>
                  </div>
                </button>

                {/* Expandable Detailed Content Panel */}
                {isOpen && (
                  <div
                    id={`${section.id}-panel`}
                    data-slot-panel={section.id}
                    className="border-t border-[var(--line)] bg-[var(--bg)]/55 p-4 sm:p-5 space-y-4"
                  >
                    {/* Special 3-Photo Morning Breakfast Gallery (with the newly uploaded Popo breakfast photos!) */}
                    {section.id === 'ch3-morning' && (
                      <div className="rounded-xl border border-[var(--line)] bg-[var(--surface)] p-3.5 sm:p-4">
                        <p className="text-xs font-semibold text-[var(--sage)] mb-2.5">
                          {lang === 'id'
                            ? 'Foto asli sarapan pagi Popo · ketuk untuk memperbesar'
                            : 'Real photos of Popo’s morning breakfasts · tap to enlarge'}
                        </p>
                        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                          {MORNING_GALLERY_KEYS.map((item) => {
                            const photo = PHOTO_ASSETS[item.key];
                            return (
                              <button
                                key={item.key}
                                type="button"
                                onClick={() => onOpenLightbox(item.key)}
                                className="group overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--bg)]/70 text-left hover:border-[var(--sage)] transition-colors cursor-zoom-in"
                              >
                                <div className="relative flex h-40 w-full items-center justify-center bg-[var(--surface-photo)] p-1.5">
                                  <img
                                    src={photo.src}
                                    alt={lang === 'id' ? photo.alt_id : photo.alt_en}
                                    loading="eager"
                                    decoding="async"
                                    className="h-full w-auto max-w-full rounded-lg object-contain shadow-xs ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-[1.03]"
                                  />
                                  <span
                                    aria-hidden="true"
                                    className="pointer-events-none absolute right-2.5 bottom-2.5 inline-flex h-6 w-6 items-center justify-center rounded-md bg-[var(--surface)]/90 text-[var(--ink)] opacity-0 shadow-xs transition-opacity group-hover:opacity-100"
                                  >
                                    <ZoomIn className="h-3.5 w-3.5" />
                                  </span>
                                </div>
                                <p className="px-3 py-2 text-xs font-medium leading-snug text-[var(--ink)]">
                                  {lang === 'id' ? item.label_id : item.label_en}
                                </p>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}

                    {/* Moment's Cards (Horizontal photo-split + 2-column compact grid) */}
                    <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2">
                      {section.cards.map((card) => {
                        const spanFull = shouldCardSpanFullWidth(card, section.cards.length);
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

                    {/* Step cleanly to next time slot */}
                    {nextSlotId && nextMeta && (
                      <div className="flex justify-end pt-1">
                        <button
                          type="button"
                          onClick={() => handleStepNext(section.id)}
                          data-next-slot-from={section.id}
                          className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[var(--line-strong)] bg-[var(--surface)] px-4 py-2 text-xs sm:text-sm font-semibold text-[var(--sage)] hover:border-[var(--sage)] hover:bg-[var(--sage-tint)] transition-colors whitespace-nowrap cursor-pointer"
                        >
                          <span>
                            {lang === 'id'
                              ? `Lanjut ke 0${idx + 2} ${nextMeta.short_id}`
                              : `Next · 0${idx + 2} ${nextMeta.short_en}`}
                          </span>
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
