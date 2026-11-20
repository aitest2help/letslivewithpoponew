import React from 'react';
import {
  ArrowRight,
  BookOpen,
  Clock,
  Heart,
  Sparkles,
  HandHeart,
  Users,
  ClipboardList,
  ZoomIn,
} from 'lucide-react';
import type { GuideChapter, Lang, PhotoKey } from '../data/types';
import { PHOTO_ASSETS } from '../data/photos';
import { CHAPTER_OVERVIEW_BY_ID, type ChapterViewId } from '../utils/navigation';

interface GuideCoverProps {
  lang: Lang;
  chapters: GuideChapter[];
  onNavigate: (target: string) => void;
  onOpenLightbox: (key: PhotoKey) => void;
}

const CHAPTER_ICONS = [Heart, Sparkles, Clock, HandHeart, Users, ClipboardList];

export const GuideCover: React.FC<GuideCoverProps> = ({
  lang,
  chapters,
  onNavigate,
  onOpenLightbox,
}) => {
  const heroPhoto = PHOTO_ASSETS['lis-with-popo'];

  return (
    <section id="top" className="bg-[var(--bg)]">
      <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6 sm:py-7">
        {/* 1. Compact, Warm Welcome Strip (zero orphan CTA buttons; immediately introduces the handbook) */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-center lg:gap-8">
          <div className="lg:col-span-8 space-y-2.5 sm:space-y-3">
            <p className="text-xs sm:text-[13px] font-semibold text-[var(--sage)]">
              {lang === 'id'
                ? 'Panduan keluarga · Bahasa Indonesia & English'
                : 'Family onboarding guide · Indonesian & English'}
            </p>

            <h1 className="font-display text-2xl sm:text-3xl lg:text-[2.45rem] font-medium leading-[1.15] tracking-[-0.02em] text-[var(--ink)]">
              {lang === 'id'
                ? 'Selamat datang di rumah Popo.'
                : 'Welcome to Popo’s home.'}
            </h1>

            <p className="max-w-2xl text-sm sm:text-[15.5px] leading-[1.65] text-[var(--muted)]">
              {lang === 'id'
                ? 'Disusun bersama Lis—yang merawat Popo selama 6 tahun—agar Anda mengenal keseharian Popo, masakan akrabnya, dan cara kami saling mendukung. Pilih salah satu dari 6 bab di bawah ini sesuai yang ingin Anda baca terlebih dahulu.'
                : 'Written together with Lis—who cared for Popo for 6 years—so you can get to know Popo’s daily rhythm, familiar meals, and how our family supports you. Choose any of the 6 chapters below to begin wherever helps you most.'}
            </p>

            {/* Quiet unboxed reassurance line (middot only when inline on sm+, clean gap wrap on mobile) */}
            <ul className="flex flex-wrap items-center gap-x-3.5 gap-y-1 pt-0.5 text-xs sm:text-[13px] text-[var(--muted)]">
              <li className="font-medium text-[var(--ink)]">
                {lang === 'id' ? 'Dapur bebas babi' : 'Pork-free kitchen'}
              </li>
              <li aria-hidden="true" className="hidden sm:inline text-[var(--line-strong)]">·</li>
              <li>
                {lang === 'id' ? 'Foto asli rumah & masakan' : 'Real home & dish photos'}
              </li>
              <li aria-hidden="true" className="hidden sm:inline text-[var(--line-strong)]">·</li>
              <li>
                {lang === 'id' ? 'Audio di setiap kartu' : 'Audio reader on every card'}
              </li>
            </ul>
          </div>

          {/* Compact Uncropped Real Family Photo */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <figure className="w-full max-w-[270px] lg:max-w-[248px] overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] shadow-[0_2px_10px_rgba(34,52,43,0.05)]">
              <button
                type="button"
                onClick={() => onOpenLightbox('lis-with-popo')}
                className="group relative flex w-full items-center justify-center bg-[var(--surface-photo)] p-2 text-left cursor-zoom-in"
                aria-label={
                  lang === 'id'
                    ? 'Perbesar foto Lis bersama Popo'
                    : 'Enlarge photograph of Lis with Popo'
                }
              >
                <img
                  src={heroPhoto.src}
                  alt={lang === 'id' ? heroPhoto.alt_id : heroPhoto.alt_en}
                  loading="eager"
                  decoding="async"
                  className="mx-auto max-h-[215px] lg:max-h-[176px] w-auto max-w-full rounded-xl object-contain shadow-xs ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-[1.015]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3 bottom-3 inline-flex h-7 w-7 items-center justify-center rounded-md bg-[var(--surface)]/90 text-[var(--ink)] opacity-0 shadow-xs transition-opacity group-hover:opacity-100"
                >
                  <ZoomIn className="h-3.5 w-3.5" />
                </span>
              </button>
              <figcaption className="border-t border-[var(--line)] px-3 py-2 text-center text-xs leading-snug text-[var(--muted)]">
                {lang === 'id'
                  ? 'Lis bersama Popo · 6 tahun merawat'
                  : 'Lis with Popo · 6 years of care'}
              </figcaption>
            </figure>
          </div>
        </div>

        {/* 2. All 6 Self-Explanatory Chapters Immediately Visible Above the Fold */}
        <div
          id="daftar-bab"
          aria-labelledby="chapters-overview-heading"
          className="mt-6 border-t border-[var(--line)] pt-5"
        >
          <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
            <h2
              id="chapters-overview-heading"
              className="font-display text-lg sm:text-xl font-medium text-[var(--ink)]"
            >
              {lang === 'id'
                ? 'Isi panduan — 6 bab yang mudah dipilih'
                : 'Inside this guide — all 6 chapters'}
            </h2>
            <p className="text-xs sm:text-[13px] text-[var(--muted)]">
              {lang === 'id'
                ? 'Setiap kartu menjelaskan isi babnya — ketuk untuk langsung membaca'
                : 'Each card previews what is inside — tap any chapter to open it'}
            </p>
          </div>

          <div
            data-chapter-grid
            className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-4"
          >
            {chapters.map((chapter, idx) => {
              const Icon = CHAPTER_ICONS[idx] || BookOpen;
              const meta = CHAPTER_OVERVIEW_BY_ID[chapter.id as ChapterViewId];
              const title = lang === 'id' ? chapter.short_id : chapter.short_en;
              const summary = meta
                ? lang === 'id'
                  ? meta.summary_id
                  : meta.summary_en
                : lang === 'id'
                  ? chapter.subtitle_id
                  : chapter.subtitle_en;
              const topics = meta ? (lang === 'id' ? meta.topics_id : meta.topics_en) : '';

              return (
                <button
                  key={chapter.id}
                  type="button"
                  data-chapter-card={chapter.id}
                  onClick={() => onNavigate(chapter.id)}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 sm:p-4.5 text-left transition-all duration-150 hover:border-[var(--sage)] hover:bg-[var(--sage-tint)]/45 hover:shadow-[0_4px_16px_rgba(45,90,61,0.08)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sage)] cursor-pointer"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--sage-soft)] text-[var(--sage)] transition-colors group-hover:bg-[var(--sage)] group-hover:text-white dark:group-hover:text-[#102016]">
                          <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                        </span>
                        <span className="font-mono-tabular text-xs font-semibold text-[var(--sage)]">
                          {lang === 'id' ? `Bab 0${chapter.number}` : `Chapter 0${chapter.number}`}
                        </span>
                      </div>

                      <ArrowRight
                        className="h-4 w-4 shrink-0 text-[var(--muted)] transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-[var(--sage)]"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="mt-3 font-display text-[17px] sm:text-lg font-medium leading-snug text-[var(--ink)] group-hover:text-[var(--sage)] transition-colors">
                      {title}
                    </h3>

                    <p className="mt-1.5 text-[13px] sm:text-[13.5px] leading-[1.58] text-[var(--muted)]">
                      {summary}
                    </p>
                  </div>

                  {topics && (
                    <p className="mt-3.5 border-t border-[var(--line)]/75 pt-2.5 text-[11.5px] font-medium text-[var(--sage)]">
                      {topics}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
