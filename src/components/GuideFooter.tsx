import React from 'react';
import { ArrowLeft, ArrowUp, BookMarked } from 'lucide-react';
import type { Lang } from '../data/types';
import type { GuideViewId } from '../utils/navigation';
import { GUIDE_SOURCES } from '../data/cookbookData';

interface GuideFooterProps {
  lang: Lang;
  activeView: GuideViewId;
  onNavigate: (target: string) => void;
}

export const GuideFooter: React.FC<GuideFooterProps> = ({ lang, activeView, onNavigate }) => {
  const isHome = activeView === 'home';

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--surface-subtle)]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        {/* Authoritative Sources */}
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <BookMarked className="mt-0.5 h-5 w-5 shrink-0 text-[var(--sage)]" aria-hidden="true" />
            <div>
              <p className="text-xs font-semibold text-[var(--sage)]">
                {lang === 'id' ? 'Rujukan kesehatan, keselamatan & hak kerja' : 'Care, safety & workplace references'}
              </p>
              <h2 className="mt-1 font-display text-lg sm:text-xl font-medium text-[var(--ink)]">
                {lang === 'id'
                  ? 'Sumber rujukan panduan ini'
                  : 'Sources supporting this family guide'}
              </h2>
            </div>
          </div>

          <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 text-sm text-[var(--muted)]">
            {GUIDE_SOURCES.map((source) => (
              <li
                key={source.org}
                className="rounded-xl bg-[var(--surface-subtle)]/75 px-3.5 py-2.5"
              >
                <span className="font-semibold text-[var(--ink)]">{source.org}</span>
                <span> — {source.title}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Quiet Closing Row */}
        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--line)] pt-6 text-xs sm:text-sm text-[var(--muted)]">
          <div className="space-y-1 max-w-2xl">
            <p className="font-display text-base font-medium text-[var(--ink)]">
              Let’s Live with Popo
            </p>
            <p>
              {lang === 'id'
                ? 'Panduan pendampingan keluarga — tanpa nomor pribadi, alamat rumah, atau daftar obat rinci pada halaman publik. Detail pribadi dibagikan langsung secara aman saat serah terima.'
                : 'Family onboarding guide — private phone numbers, home address and detailed medicine instructions are kept off this public page and shared privately at handover.'}
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              if (isHome) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                onNavigate('home');
              }
            }}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[var(--line-strong)] bg-[var(--surface)] px-4 py-2 text-xs sm:text-sm font-semibold text-[var(--ink)] hover:border-[var(--sage)] hover:text-[var(--sage)] transition-colors cursor-pointer"
          >
            {isHome ? (
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            ) : (
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            )}
            <span>
              {isHome
                ? lang === 'id'
                  ? 'Kembali ke atas'
                  : 'Back to top'
                : lang === 'id'
                  ? 'Semua 6 bab panduan'
                  : 'All 6 chapters'}
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};
