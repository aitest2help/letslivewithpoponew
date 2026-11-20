import React, { useEffect, useState } from 'react';
import {
  Home,
  BookOpen,
  Clock,
  Utensils,
  X,
  ArrowRight,
} from 'lucide-react';
import type { GuideChapter, Lang } from '../data/types';
import {
  CHAPTER_OVERVIEW_BY_ID,
  getActiveMobileTab,
  type ChapterViewId,
  type GuideViewId,
} from '../utils/navigation';

interface MobileBottomNavProps {
  lang: Lang;
  chapters: GuideChapter[];
  activeView: GuideViewId;
  onNavigate: (target: string) => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  lang,
  chapters,
  activeView,
  onNavigate,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const activeTab = getActiveMobileTab(activeView);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [drawerOpen]);

  const handleSelect = (target: string) => {
    setDrawerOpen(false);
    onNavigate(target);
  };

  return (
    <>
      {/* Slide-Up Explanatory Chapter Sheet (Mobile & Tablet) */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end bg-black/45 backdrop-blur-[2px]"
          role="dialog"
          aria-modal="true"
          aria-label={lang === 'id' ? 'Daftar 6 bab panduan' : 'All 6 guide chapters'}
          onClick={() => setDrawerOpen(false)}
        >
          <div
            data-mobile-chapter-sheet
            className="mx-auto w-full max-w-lg rounded-t-3xl border-t border-[var(--line-strong)] bg-[var(--surface)] shadow-[0_-8px_32px_rgba(16,28,20,0.2)] pb-safe"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drag Handle */}
            <div className="flex justify-center pt-3 pb-1">
              <div className="h-1.5 w-10 rounded-full bg-[var(--line-strong)]" aria-hidden="true" />
            </div>

            <div className="flex items-center justify-between border-b border-[var(--line)] px-5 py-3">
              <div>
                <h2 className="font-display text-lg font-medium text-[var(--ink)]">
                  {lang === 'id' ? 'Pilih bab panduan (1–6)' : 'Choose a chapter (1–6)'}
                </h2>
                <p className="text-xs text-[var(--muted)]">
                  {lang === 'id'
                    ? 'Ringkasan singkat isi tiap bab sebelum Anda membukanya'
                    : 'A quick preview of each chapter before you open it'}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label={lang === 'id' ? 'Tutup daftar bab' : 'Close chapter menu'}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--bg)] text-[var(--muted)] hover:text-[var(--ink)] cursor-pointer"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav
              aria-label={lang === 'id' ? 'Navigasi 6 bab mobile' : 'Mobile chapter navigation'}
              className="max-h-[68vh] overflow-y-auto divide-y divide-[var(--line)] px-3 py-2"
            >
              {chapters.map((chapter) => {
                const isCurrent = activeView === chapter.id;
                const meta = CHAPTER_OVERVIEW_BY_ID[chapter.id as ChapterViewId];
                const summary = meta
                  ? lang === 'id'
                    ? meta.summary_id
                    : meta.summary_en
                  : lang === 'id'
                    ? chapter.subtitle_id
                    : chapter.subtitle_en;

                return (
                  <button
                    key={chapter.id}
                    type="button"
                    data-sheet-chapter={chapter.id}
                    onClick={() => handleSelect(chapter.id)}
                    className={`flex w-full min-h-[62px] items-center justify-between gap-3 rounded-xl px-3 py-3 text-left transition-colors cursor-pointer ${
                      isCurrent
                        ? 'bg-[var(--sage-tint)] text-[var(--sage)]'
                        : 'text-[var(--ink)] hover:bg-[var(--bg)]'
                    }`}
                  >
                    <div className="flex items-start gap-3 min-w-0">
                      <span
                        className={`mt-0.5 font-mono-tabular flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold ${
                          isCurrent
                            ? 'bg-[var(--sage)] text-white dark:text-[#102016]'
                            : 'bg-[var(--sage-soft)] text-[var(--sage)]'
                        }`}
                      >
                        0{chapter.number}
                      </span>
                      <div className="min-w-0">
                        <p className="font-display text-[15px] font-medium leading-snug">
                          {lang === 'id' ? chapter.short_id : chapter.short_en}
                        </p>
                        <p className="mt-0.5 text-xs leading-snug text-[var(--muted)] line-clamp-2">
                          {summary}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 opacity-70" aria-hidden="true" />
                  </button>
                );
              })}
            </nav>
          </div>
        </div>
      )}

      {/* Fixed Thumb-Zone Mobile Bottom Tab Bar (56px height; TopBar 56px + BottomNav 56px = 112px <= 15% cap) */}
      <nav
        aria-label={lang === 'id' ? 'Navigasi cepat bawah' : 'Quick bottom navigation'}
        data-mobile-bottom-nav
        className="fixed inset-x-0 bottom-0 z-40 border-t border-[var(--line)] bg-[var(--surface)]/95 backdrop-blur-md lg:hidden pb-safe"
      >
        <div className="mx-auto grid h-14 max-w-lg grid-cols-4 items-center px-1">
          <button
            type="button"
            onClick={() => handleSelect('home')}
            data-mobile-nav-tab="home"
            aria-current={activeTab === 'home' && !drawerOpen ? 'page' : undefined}
            className={`flex min-h-[44px] flex-col items-center justify-center gap-0.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'home' && !drawerOpen
                ? 'text-[var(--sage)] font-semibold'
                : 'text-[var(--muted)] font-medium'
            }`}
          >
            <Home className="h-5 w-5" aria-hidden="true" />
            <span className="text-[11px] leading-none whitespace-nowrap">
              {lang === 'id' ? 'Beranda' : 'Overview'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setDrawerOpen((prev) => !prev)}
            aria-expanded={drawerOpen}
            data-mobile-nav-tab="chapters"
            className={`flex min-h-[44px] flex-col items-center justify-center gap-0.5 rounded-lg transition-colors cursor-pointer ${
              drawerOpen || activeTab === 'chapters'
                ? 'text-[var(--sage)] font-semibold'
                : 'text-[var(--muted)] font-medium'
            }`}
          >
            <BookOpen className="h-5 w-5" aria-hidden="true" />
            <span className="text-[11px] leading-none whitespace-nowrap">
              {lang === 'id' ? 'Bab 1–6' : 'Chapters'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => handleSelect('ch3')}
            data-mobile-nav-tab="routine"
            aria-current={activeTab === 'routine' && !drawerOpen ? 'page' : undefined}
            className={`flex min-h-[44px] flex-col items-center justify-center gap-0.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'routine' && !drawerOpen
                ? 'text-[var(--sage)] font-semibold'
                : 'text-[var(--muted)] font-medium'
            }`}
          >
            <Clock className="h-5 w-5" aria-hidden="true" />
            <span className="text-[11px] leading-none whitespace-nowrap">
              {lang === 'id' ? 'Sehari' : 'Day'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => handleSelect('ch6-cookbook')}
            data-mobile-nav-tab="kitchen"
            aria-current={activeTab === 'kitchen' && !drawerOpen ? 'page' : undefined}
            className={`flex min-h-[44px] flex-col items-center justify-center gap-0.5 rounded-lg transition-colors cursor-pointer ${
              activeTab === 'kitchen' && !drawerOpen
                ? 'text-[var(--sage)] font-semibold'
                : 'text-[var(--muted)] font-medium'
            }`}
          >
            <Utensils className="h-5 w-5" aria-hidden="true" />
            <span className="text-[11px] leading-none whitespace-nowrap">
              {lang === 'id' ? 'Dapur' : 'Kitchen'}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};
