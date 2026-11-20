import React from 'react';
import { Moon, Sun } from 'lucide-react';
import type { GuideChapter, Lang } from '../data/types';
import type { GuideViewId } from '../utils/navigation';

interface TopBarProps {
  lang: Lang;
  onChangeLang: (next: Lang) => void;
  chapters: GuideChapter[];
  activeView: GuideViewId;
  onNavigate: (target: string) => void;
  readingProgress: number;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({
  lang,
  onChangeLang,
  chapters,
  activeView,
  onNavigate,
  readingProgress,
  isDark,
  onToggleTheme,
}) => {
  const isHome = activeView === 'home';

  return (
    <header
      className="sticky top-0 z-40 h-14 border-b border-[var(--line)] bg-[var(--bg)]/95 backdrop-blur-md"
      role="banner"
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        {/* Zone 1: Brand wordmark — returns cleanly to the 6-chapter Welcome Overview */}
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="font-display text-base sm:text-lg font-medium tracking-[-0.01em] text-[var(--ink)] hover:text-[var(--sage)] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
        >
          Let’s Live with Popo
        </button>

        {/* Zone 2: Functional desktop navigation bar (Overview + Chapters 01–06) */}
        <nav
          aria-label={lang === 'id' ? 'Navigasi utama panduan' : 'Main handbook navigation'}
          className="hidden lg:flex items-center gap-0.5"
        >
          <button
            type="button"
            onClick={() => onNavigate('home')}
            data-topnav-tab="home"
            aria-current={isHome ? 'page' : undefined}
            className={`px-2.5 py-1.5 text-[13px] whitespace-nowrap shrink-0 transition-colors border-b-2 cursor-pointer ${
              isHome
                ? 'border-[var(--sage)] font-semibold text-[var(--sage)]'
                : 'border-transparent font-medium text-[var(--muted)] hover:text-[var(--ink)]'
            }`}
          >
            {lang === 'id' ? 'Beranda' : 'Overview'}
          </button>

          <span
            aria-hidden="true"
            className="mx-1 h-4 w-px bg-[var(--line-strong)] shrink-0"
          />

          {chapters.map((chapter) => {
            const isActive = activeView === chapter.id;
            return (
              <button
                key={chapter.id}
                type="button"
                onClick={() => onNavigate(chapter.id)}
                data-topnav-tab={chapter.id}
                aria-current={isActive ? 'page' : undefined}
                title={lang === 'id' ? chapter.title_id : chapter.title_en}
                className={`px-2 py-1.5 text-[13px] whitespace-nowrap shrink-0 transition-colors border-b-2 cursor-pointer ${
                  isActive
                    ? 'border-[var(--sage)] font-semibold text-[var(--sage)]'
                    : 'border-transparent font-medium text-[var(--muted)] hover:text-[var(--ink)]'
                }`}
              >
                {lang === 'id' ? chapter.nav_id : chapter.nav_en}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Language switch & quiet theme toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <div
            role="group"
            aria-label={lang === 'id' ? 'Pilih bahasa' : 'Choose language'}
            className="inline-flex items-center rounded-lg border border-[var(--line-strong)] bg-[var(--surface)] p-0.5"
          >
            <button
              type="button"
              onClick={() => onChangeLang('id')}
              aria-pressed={lang === 'id'}
              className={`min-h-[38px] min-w-[40px] rounded-md px-2.5 text-xs font-semibold tracking-wide transition-colors whitespace-nowrap cursor-pointer ${
                lang === 'id'
                  ? 'bg-[var(--sage)] text-white dark:text-[#102016]'
                  : 'text-[var(--muted)] hover:text-[var(--ink)]'
              }`}
            >
              ID
            </button>
            <button
              type="button"
              onClick={() => onChangeLang('en')}
              aria-pressed={lang === 'en'}
              className={`min-h-[38px] min-w-[40px] rounded-md px-2.5 text-xs font-semibold tracking-wide transition-colors whitespace-nowrap cursor-pointer ${
                lang === 'en'
                  ? 'bg-[var(--sage)] text-white dark:text-[#102016]'
                  : 'text-[var(--muted)] hover:text-[var(--ink)]'
              }`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={
              isDark
                ? lang === 'id'
                  ? 'Ganti ke tampilan terang'
                  : 'Switch to light mode'
                : lang === 'id'
                  ? 'Ganti ke tampilan gelap lembut'
                  : 'Switch to dark mode'
            }
            title={
              isDark
                ? lang === 'id'
                  ? 'Tampilan terang'
                  : 'Light mode'
                : lang === 'id'
                  ? 'Tampilan gelap'
                  : 'Dark mode'
            }
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--ink)] hover:border-[var(--line-strong)] transition-colors cursor-pointer"
          >
            {isDark ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Hairline compositor-only reading progress indicator (active inside chapters) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[2px] bg-transparent overflow-hidden"
      >
        <div
          className="h-full w-full origin-left bg-[var(--sage)]/80 transition-transform duration-150 ease-out"
          style={{ transform: `scaleX(${isHome ? 0 : readingProgress})` }}
        />
      </div>
    </header>
  );
};
