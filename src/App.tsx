import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ZoomIn } from 'lucide-react';
import type { GuideCard, GuideChapter, GuideSection, Lang, PhotoKey } from './data/types';
import { CHAPTERS_1_TO_3 } from './data/chapters1to3';
import { CHAPTERS_4_TO_6 } from './data/chapters4to6';
import { PHOTO_ASSETS } from './data/photos';
import {
  buildCardNarrationText,
  CardSpeechController,
  type AudioNoticeCode,
  type AudioPlaybackState,
} from './utils/speech';
import { shouldCardSpanFullWidth } from './utils/layout';
import {
  CHAPTER_OVERVIEW_BY_ID,
  computeReadingProgress,
  getAdjacentChapters,
  resolveNavigationTarget,
  type ChapterViewId,
  type GuideViewId,
} from './utils/navigation';
import { TopBar } from './components/TopBar';
import { MobileBottomNav } from './components/MobileBottomNav';
import { GuideCover } from './components/GuideCover';
import { SectionIcon } from './components/SectionIcon';
import { GuideCardView } from './components/GuideCardView';
import { DayFlowSection } from './components/DayFlowSection';
import { Chapter3CompanionGrid } from './components/Chapter3CompanionGrid';
import { FoodIntroStrip } from './components/FoodIntroStrip';
import { WhatsAppTemplatesPanel } from './components/WhatsAppTemplatesPanel';
import { SharedCookbook } from './components/SharedCookbook';
import { PhotoLightbox } from './components/PhotoLightbox';
import { AudioPlayerBar } from './components/AudioPlayerBar';
import { GuideFooter } from './components/GuideFooter';
import {
  Chapter1VisualBoard,
  Chapter2VisualBoard,
  Chapter4VisualBoard,
  Chapter5VisualBoard,
  Chapter6QuickBoard,
} from './components/ChapterInfographics';

const ALL_CHAPTERS: GuideChapter[] = [...CHAPTERS_1_TO_3, ...CHAPTERS_4_TO_6];

const INITIAL_AUDIO_STATE: AudioPlaybackState = {
  status: 'idle',
  key: null,
  label: '',
  index: 0,
  total: 0,
};

function getInitialRoute() {
  if (typeof window === 'undefined') {
    return { view: 'home' as GuideViewId, sectionId: undefined as string | undefined };
  }
  return resolveNavigationTarget(window.location.hash);
}

export function App() {
  const initialRoute = useMemo(() => getInitialRoute(), []);
  const [lang, setLang] = useState<Lang>('id');
  const [isDark, setIsDark] = useState(false);
  const [activeView, setActiveView] = useState<GuideViewId>(initialRoute.view);
  const [pendingSectionId, setPendingSectionId] = useState<string | null>(
    initialRoute.sectionId ?? null
  );
  const [readingProgress, setReadingProgress] = useState<number>(0);
  const [lightboxPhoto, setLightboxPhoto] = useState<PhotoKey | null>(null);
  const [audioState, setAudioState] = useState<AudioPlaybackState>(INITIAL_AUDIO_STATE);
  const [audioNotice, setAudioNotice] = useState<AudioNoticeCode | null>(null);

  const speechControllerRef = useRef<CardSpeechController | null>(null);

  if (!speechControllerRef.current) {
    speechControllerRef.current = new CardSpeechController({
      onChange: (next) => setAudioState(next),
      onNotice: (code) => setAudioNotice(code),
    });
  }

  const activeChapter = useMemo(() => {
    if (activeView === 'home') return null;
    return ALL_CHAPTERS.find((ch) => ch.id === activeView) ?? null;
  }, [activeView]);

  const { prev: prevChapter, next: nextChapter } = useMemo(
    () => getAdjacentChapters(ALL_CHAPTERS, activeView),
    [activeView]
  );

  useEffect(() => {
    document.documentElement.lang = lang === 'id' ? 'id' : 'en';
    const baseTitle =
      lang === 'id'
        ? 'Let’s Live with Popo — Panduan Pendampingan Keluarga'
        : 'Let’s Live with Popo — Family Onboarding Guide';
    document.title = activeChapter
      ? `${lang === 'id' ? activeChapter.short_id : activeChapter.short_en} · Let’s Live with Popo`
      : baseTitle;
  }, [lang, activeChapter]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    const controller = speechControllerRef.current;
    return () => {
      controller?.stop();
    };
  }, []);

  // Sync browser Back/Forward hash navigation cleanly
  useEffect(() => {
    const onHashChange = () => {
      const target = resolveNavigationTarget(window.location.hash);
      setActiveView(target.view);
      setPendingSectionId(target.sectionId ?? null);
      if (!target.sectionId) {
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Scroll to deep-linked in-chapter section once the target chapter is rendered
  useEffect(() => {
    if (!pendingSectionId) return;
    const targetId = pendingSectionId;
    const rafId = requestAnimationFrame(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setPendingSectionId(null);
    });
    return () => cancelAnimationFrame(rafId);
  }, [activeView, pendingSectionId]);

  // Track reading progress inside the active chapter
  useEffect(() => {
    if (activeView === 'home') {
      setReadingProgress(0);
      return;
    }

    let rafId = 0;
    const updateProgress = () => {
      rafId = 0;
      const next = computeReadingProgress(
        window.scrollY,
        document.documentElement.scrollHeight,
        window.innerHeight
      );
      setReadingProgress(next);
    };
    const onScroll = () => {
      if (!rafId) {
        rafId = requestAnimationFrame(updateProgress);
      }
    };
    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [activeView]);

  const handleNavigate = useCallback(
    (rawTarget: string) => {
      const target = resolveNavigationTarget(rawTarget);
      const isViewChanging = target.view !== activeView;

      if (isViewChanging) {
        speechControllerRef.current?.stop();
        setAudioNotice(null);
      }

      const nextHash =
        target.view === 'home'
          ? ''
          : `#${target.sectionId ?? target.view}`;

      try {
        if (nextHash) {
          if (window.location.hash !== nextHash) {
            window.history.pushState(null, '', nextHash);
          }
        } else if (window.location.hash) {
          window.history.pushState(null, '', window.location.pathname + window.location.search);
        }
      } catch {
        // Ignore history pushState restrictions inside sandboxed iframes
      }

      setActiveView(target.view);

      if (target.sectionId) {
        if (isViewChanging) {
          setPendingSectionId(target.sectionId);
        } else {
          const el = document.getElementById(target.sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      } else {
        setPendingSectionId(null);
        window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      }
    },
    [activeView]
  );

  const handleChangeLang = useCallback(
    (nextLang: Lang) => {
      if (nextLang === lang) return;
      speechControllerRef.current?.stop();
      setAudioNotice(null);

      const anchors = Array.from(
        document.querySelectorAll<HTMLElement>('[data-card-id], [data-chapter-card], section[id^="ch"]')
      );
      let anchorEl: HTMLElement | null = null;
      let anchorOffset = 0;

      for (const el of anchors) {
        const rect = el.getBoundingClientRect();
        if (rect.bottom > 72) {
          anchorEl = el;
          anchorOffset = rect.top;
          break;
        }
      }

      setLang(nextLang);

      if (anchorEl) {
        const targetEl = anchorEl;
        requestAnimationFrame(() => {
          const newTop = targetEl.getBoundingClientRect().top;
          const delta = newTop - anchorOffset;
          if (Math.abs(delta) > 4) {
            window.scrollBy({ top: delta, behavior: 'instant' as ScrollBehavior });
          }
        });
      }
    },
    [lang]
  );

  const handlePlayCard = useCallback(
    (card: GuideCard) => {
      setAudioNotice(null);
      const text = buildCardNarrationText(card, lang);
      const label = lang === 'id' ? card.title_id : card.title_en;
      speechControllerRef.current?.play({
        key: card.id,
        label,
        text,
        language: lang,
      });
    },
    [lang]
  );

  const handleStopAudio = useCallback(() => {
    speechControllerRef.current?.stop();
  }, []);

  const handlePauseAudio = useCallback(() => {
    speechControllerRef.current?.pause();
  }, []);

  const handleResumeAudio = useCallback(() => {
    speechControllerRef.current?.resume();
  }, []);

  const renderEmbeddedWidget = useCallback(
    (widget: GuideSection['embedWidget']) => {
      if (widget === 'food-intro-strip') {
        return (
          <FoodIntroStrip
            lang={lang}
            onOpenLightbox={setLightboxPhoto}
            onNavigate={handleNavigate}
          />
        );
      }
      if (widget === 'whatsapp-templates') {
        return <WhatsAppTemplatesPanel lang={lang} />;
      }
      if (widget === 'shared-cookbook') {
        return <SharedCookbook lang={lang} onOpenLightbox={setLightboxPhoto} />;
      }
      return null;
    },
    [handleNavigate, lang]
  );

  const renderChapterVisualBoard = useCallback(
    (chapterId: string) => {
      if (chapterId === 'ch1') {
        return (
          <Chapter1VisualBoard
            lang={lang}
            onOpenLightbox={setLightboxPhoto}
            onNavigate={handleNavigate}
          />
        );
      }
      if (chapterId === 'ch2') {
        return <Chapter2VisualBoard lang={lang} />;
      }
      if (chapterId === 'ch4') {
        return <Chapter4VisualBoard lang={lang} />;
      }
      if (chapterId === 'ch5') {
        return <Chapter5VisualBoard lang={lang} />;
      }
      if (chapterId === 'ch6') {
        return <Chapter6QuickBoard lang={lang} onNavigate={handleNavigate} />;
      }
      return null;
    },
    [handleNavigate, lang]
  );

  const hasBottomBar = audioState.status !== 'idle' || Boolean(audioNotice);

  const renderActiveChapter = () => {
    if (!activeChapter) return null;

    const dayFlowSections = activeChapter.sections.filter((s) => Boolean(s.day_flow));
    const regularSections = activeChapter.sections.filter((s) => !s.day_flow);
    const heroPhoto = activeChapter.heroPhoto ? PHOTO_ASSETS[activeChapter.heroPhoto] : null;
    const nextMeta = nextChapter
      ? CHAPTER_OVERVIEW_BY_ID[nextChapter.id as ChapterViewId]
      : null;

    return (
      <section
        key={activeChapter.id}
        id={activeChapter.id}
        data-active-chapter={activeChapter.id}
        aria-labelledby={`${activeChapter.id}-heading`}
        className="bg-[var(--bg)]"
      >
        <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-9">
          {/* Quiet Top Breadcrumb Bar */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-2 border-b border-[var(--line)]/80 pb-3.5">
            <button
              type="button"
              onClick={() => handleNavigate('home')}
              data-back-to-overview
              className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg pr-3 text-xs sm:text-sm font-medium text-[var(--muted)] hover:text-[var(--sage)] transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{lang === 'id' ? 'Semua 6 bab panduan' : 'All 6 chapters'}</span>
            </button>

            <p className="text-xs font-semibold text-[var(--sage)]">
              <span className="font-mono-tabular">0{activeChapter.number}</span>
              <span aria-hidden="true"> / </span>
              <span className="font-mono-tabular">06</span>
              <span aria-hidden="true"> · </span>
              <span>
                {lang === 'id'
                  ? `Bab ${activeChapter.number}`
                  : `Chapter ${activeChapter.number}`}
              </span>
            </p>
          </div>

          {/* Chapter Header (optional split photo if heroPhoto exists) */}
          <header className="mb-8">
            <div
              className={
                heroPhoto
                  ? 'grid grid-cols-1 gap-6 md:grid-cols-12 md:items-center'
                  : ''
              }
            >
              <div className={heroPhoto ? 'md:col-span-7' : ''}>
                <h1
                  id={`${activeChapter.id}-heading`}
                  className="font-display text-2xl sm:text-3xl lg:text-[2.2rem] font-medium leading-[1.18] tracking-[-0.015em] text-[var(--ink)]"
                >
                  {lang === 'id' ? activeChapter.title_id : activeChapter.title_en}
                </h1>
                <p className="mt-2.5 max-w-2xl text-[15px] sm:text-base leading-[1.7] text-[var(--muted)]">
                  {lang === 'id' ? activeChapter.subtitle_id : activeChapter.subtitle_en}
                </p>
              </div>

              {heroPhoto && (
                <figure className="md:col-span-5 overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)]">
                  <button
                    type="button"
                    onClick={() => setLightboxPhoto(heroPhoto.key)}
                    className="group relative flex w-full items-center justify-center bg-[var(--surface-photo)] p-2.5 text-left cursor-zoom-in"
                    aria-label={
                      lang === 'id'
                        ? `Perbesar foto: ${heroPhoto.alt_id}`
                        : `Enlarge photograph: ${heroPhoto.alt_en}`
                    }
                  >
                    <img
                      src={heroPhoto.src}
                      alt={lang === 'id' ? heroPhoto.alt_id : heroPhoto.alt_en}
                      loading="eager"
                      decoding="async"
                      className="max-h-[240px] w-auto max-w-full rounded-xl object-contain shadow-xs ring-1 ring-black/5"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute right-3.5 bottom-3.5 inline-flex h-7 w-7 items-center justify-center rounded-md bg-[var(--surface)]/90 text-[var(--ink)] opacity-0 shadow-xs transition-opacity group-hover:opacity-100"
                    >
                      <ZoomIn className="h-3.5 w-3.5" />
                    </span>
                  </button>
                  {(activeChapter.heroCaption_id || activeChapter.heroCaption_en) && (
                    <figcaption className="border-t border-[var(--line)] px-3.5 py-2.5 text-xs text-[var(--muted)]">
                      <span className="font-medium text-[var(--ink)]">
                        {lang === 'id'
                          ? activeChapter.heroCaption_id
                          : activeChapter.heroCaption_en}
                      </span>
                    </figcaption>
                  )}
                </figure>
              )}
            </div>
          </header>

          {/* Chapter-Specific Graphical Infographic Board */}
          {renderChapterVisualBoard(activeChapter.id)}

          {/* Chapter 3 Graphical Interactive Daily Timeline */}
          {dayFlowSections.length > 0 && (
            <div>
              <DayFlowSection
                sections={dayFlowSections}
                lang={lang}
                audioState={audioState}
                onPlayCard={handlePlayCard}
                onStopAudio={handleStopAudio}
                onOpenLightbox={setLightboxPhoto}
              />
            </div>
          )}

          {/* Chapter 3 Post-Timeline Topics as 4 Click-to-Expand Visual Tiles */}
          {activeChapter.id === 'ch3' && regularSections.length > 0 && (
            <Chapter3CompanionGrid
              sections={regularSections}
              lang={lang}
              audioState={audioState}
              onPlayCard={handlePlayCard}
              onStopAudio={handleStopAudio}
              onOpenLightbox={setLightboxPhoto}
              renderEmbeddedWidget={renderEmbeddedWidget}
            />
          )}

          {/* Regular Sections for All Other Chapters */}
          {activeChapter.id !== 'ch3' && regularSections.length > 0 && (
            <div className="space-y-9 sm:space-y-11">
              {regularSections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-20">
                  <div className="mb-3.5 flex items-start gap-3">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[var(--line)] bg-[var(--sage-soft)] text-[var(--sage)]">
                      <SectionIcon name={section.icon} className="h-4 w-4" />
                    </div>
                    <div>
                      <h2 className="font-display text-xl sm:text-[22px] font-medium leading-snug text-[var(--ink)]">
                        {lang === 'id' ? section.title_id : section.title_en}
                      </h2>
                      {(section.intro_id || section.intro_en) && (
                        <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                          {lang === 'id' ? section.intro_id : section.intro_en}
                        </p>
                      )}
                    </div>
                  </div>

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
                            onPlayCard={handlePlayCard}
                            onStopAudio={handleStopAudio}
                            onOpenLightbox={setLightboxPhoto}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {section.embedWidget && renderEmbeddedWidget(section.embedWidget)}
                </div>
              ))}
            </div>
          )}

          {/* Clear Previous / Next Chapter Navigation Cards */}
          <nav
            aria-label={lang === 'id' ? 'Navigasi antar bab' : 'Chapter pagination'}
            className="mt-12 grid grid-cols-1 gap-3 border-t border-[var(--line)] pt-7 sm:grid-cols-2"
          >
            {prevChapter ? (
              <button
                type="button"
                onClick={() => handleNavigate(prevChapter.id)}
                data-chapter-prev={prevChapter.id}
                className="group flex flex-col items-start justify-between rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 text-left hover:border-[var(--sage)] hover:bg-[var(--sage-tint)]/35 transition-colors cursor-pointer"
              >
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--muted)] group-hover:text-[var(--sage)]">
                  <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>
                    {lang === 'id'
                      ? `Bab sebelumnya · 0${prevChapter.number}`
                      : `Previous chapter · 0${prevChapter.number}`}
                  </span>
                </span>
                <span className="mt-1.5 font-display text-base sm:text-lg font-medium text-[var(--ink)] group-hover:text-[var(--sage)]">
                  {lang === 'id' ? prevChapter.short_id : prevChapter.short_en}
                </span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => handleNavigate('home')}
                className="group flex flex-col items-start justify-between rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 text-left hover:border-[var(--sage)] hover:bg-[var(--sage-tint)]/35 transition-colors cursor-pointer"
              >
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--muted)] group-hover:text-[var(--sage)]">
                  <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
                  <span>{lang === 'id' ? 'Halaman utama' : 'Handbook overview'}</span>
                </span>
                <span className="mt-1.5 font-display text-base sm:text-lg font-medium text-[var(--ink)] group-hover:text-[var(--sage)]">
                  {lang === 'id' ? 'Lihat semua 6 bab' : 'View all 6 chapters'}
                </span>
              </button>
            )}

            {nextChapter ? (
              <button
                type="button"
                onClick={() => handleNavigate(nextChapter.id)}
                data-chapter-next={nextChapter.id}
                className="group flex flex-col items-start sm:items-end justify-between rounded-2xl border border-[var(--line-strong)] bg-[var(--sage-tint)]/55 p-4 text-left sm:text-right hover:border-[var(--sage)] hover:bg-[var(--sage-tint)] transition-colors cursor-pointer"
              >
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--sage)]">
                  <span>
                    {lang === 'id'
                      ? `Bab berikutnya · 0${nextChapter.number}`
                      : `Next chapter · 0${nextChapter.number}`}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
                <span className="mt-1.5 font-display text-base sm:text-lg font-medium text-[var(--ink)] group-hover:text-[var(--sage)]">
                  {lang === 'id' ? nextChapter.short_id : nextChapter.short_en}
                </span>
                {nextMeta && (
                  <span className="mt-1 text-xs text-[var(--muted)] line-clamp-1">
                    {lang === 'id' ? nextMeta.topics_id : nextMeta.topics_en}
                  </span>
                )}
              </button>
            ) : (
              <button
                type="button"
                onClick={() => handleNavigate('home')}
                className="group flex flex-col items-start sm:items-end justify-between rounded-2xl border border-[var(--line-strong)] bg-[var(--sage-tint)]/55 p-4 text-left sm:text-right hover:border-[var(--sage)] hover:bg-[var(--sage-tint)] transition-colors cursor-pointer"
              >
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--sage)]">
                  <span>{lang === 'id' ? 'Selesai membaca Bab 6' : 'End of Chapter 6'}</span>
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span className="mt-1.5 font-display text-base sm:text-lg font-medium text-[var(--ink)] group-hover:text-[var(--sage)]">
                  {lang === 'id' ? 'Kembali ke semua 6 bab' : 'Back to all 6 chapters'}
                </span>
              </button>
            )}
          </nav>
        </div>
      </section>
    );
  };

  return (
    <div
      data-active-view={activeView}
      className={`min-h-screen bg-[var(--bg)] text-[var(--ink)] ${
        hasBottomBar ? 'pb-36 lg:pb-24' : 'pb-16 lg:pb-0'
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-[var(--sage)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {lang === 'id' ? 'Langsung ke isi panduan' : 'Skip to guide content'}
      </a>

      <TopBar
        lang={lang}
        onChangeLang={handleChangeLang}
        chapters={ALL_CHAPTERS}
        activeView={activeView}
        onNavigate={handleNavigate}
        readingProgress={readingProgress}
        isDark={isDark}
        onToggleTheme={() => setIsDark((prev) => !prev)}
      />

      <main id="main-content">
        {activeView === 'home' ? (
          <GuideCover
            lang={lang}
            chapters={ALL_CHAPTERS}
            onNavigate={handleNavigate}
            onOpenLightbox={setLightboxPhoto}
          />
        ) : (
          renderActiveChapter()
        )}
      </main>

      <GuideFooter lang={lang} activeView={activeView} onNavigate={handleNavigate} />

      <MobileBottomNav
        lang={lang}
        chapters={ALL_CHAPTERS}
        activeView={activeView}
        onNavigate={handleNavigate}
      />

      <PhotoLightbox
        photoKey={lightboxPhoto}
        lang={lang}
        onClose={() => setLightboxPhoto(null)}
      />

      <AudioPlayerBar
        lang={lang}
        audioState={audioState}
        notice={audioNotice}
        onPause={handlePauseAudio}
        onResume={handleResumeAudio}
        onStop={handleStopAudio}
        onDismissNotice={() => setAudioNotice(null)}
      />
    </div>
  );
}

export default App;
