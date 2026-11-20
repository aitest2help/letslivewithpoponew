import type { GuideChapter } from '../data/types';

export type ChapterViewId = 'ch1' | 'ch2' | 'ch3' | 'ch4' | 'ch5' | 'ch6';
export type GuideViewId = 'home' | ChapterViewId;
export type MobileNavTabId = 'home' | 'chapters' | 'routine' | 'kitchen';

export interface ChapterOverviewMeta {
  id: ChapterViewId;
  number: number;
  summary_id: string;
  summary_en: string;
  topics_id: string;
  topics_en: string;
}

export interface ResolvedNavigationTarget {
  view: GuideViewId;
  sectionId?: string;
}

const VALID_CHAPTER_IDS = new Set<string>(['ch1', 'ch2', 'ch3', 'ch4', 'ch5', 'ch6']);

/**
 * Plain-language chapter overviews displayed on the Welcome screen and in the mobile chapter sheet
 * so readers immediately know what each chapter contains before choosing where to read.
 */
export const CHAPTER_OVERVIEW_META: ChapterOverviewMeta[] = [
  {
    id: 'ch1',
    number: 1,
    summary_id:
      'Kenali sifat hangat Popo, masa mudanya yang pernah merantau, hal yang masih ia kerjakan sendiri, serta lagu dan hobi yang ia sukai.',
    summary_en:
      'Meet Popo’s warm nature, her early years starting anew in Hong Kong, what she still does herself, and the songs and hobbies she enjoys.',
    topics_id: 'Kisah hidup · Mandiri · Lagu & hobi',
    topics_en: 'Life story · Independence · Songs & hobbies',
  },
  {
    id: 'ch2',
    number: 2,
    summary_id:
      'Pahami bagaimana demensia memengaruhi ingatan tanpa menghapus perasaan, serta cara berbicara yang hangat dan menjaga martabat.',
    summary_en:
      'Understand how dementia affects memory while feelings stay real, and how gentle conversation protects Popo’s dignity.',
    topics_id: 'Ingatan & perasaan · Cara bicara · Pendampingan',
    topics_en: 'Memory & feelings · Gentle talk · Respectful care',
  },
  {
    id: 'ch3',
    number: 3,
    summary_id:
      'Ikuti 6 momen sehari-hari dari pagi hingga malam dalam alur visual interaktif: ke pusat lansia, tugas rumah, akhir pekan, dan tidur.',
    summary_en:
      'Explore 6 daily moments from morning to night in an interactive visual timeline: day centre, home rhythm, weekends, and sleep.',
    topics_id: 'Timeline 6 momen · Akhir pekan · Pola makan & tidur',
    topics_en: '6-slot timeline · Weekends · Meals & sleep',
  },
  {
    id: 'ch4',
    number: 4,
    summary_id:
      'Langkah tenang saat Popo murung, lupa, atau gelisah, kapan menghubungi keluarga lebih awal, serta tanda darurat medis untuk 999.',
    summary_en:
      'Calm steps when Popo feels upset or unsettled, when to message family early, and urgent medical red flags for calling 999.',
    topics_id: '4 langkah tenang · Kabari keluarga · Tanda 999',
    topics_en: '4 calm steps · Message family · 999 red flags',
  },
  {
    id: 'ch5',
    number: 5,
    summary_id:
      'Komitmen kami soal dapur bebas babi, ruang ibadah, hak istirahat, cara bekerja sama dengan keluarga, dan pesan pribadi dari Lis.',
    summary_en:
      'Our family’s promise on a pork-free kitchen, prayer respect, protected rest days, teamwork with us, and a personal handover note from Lis.',
    topics_id: 'Dapur bebas babi · Hak & ibadah · Pesan dari Lis',
    topics_en: 'Pork-free kitchen · Faith & rest · Note from Lis',
  },
  {
    id: 'ch6',
    number: 6,
    summary_id:
      'Alat bantu harian saat bertugas: template pesan WhatsApp siap salin, batas tensi & keselamatan api, serta foto masakan & menu 7 hari.',
    summary_en:
      'Everyday tools on duty: one-tap WhatsApp templates, blood pressure and fire safety, plus real dish photos and 7-day meal ideas.',
    topics_id: 'Template WhatsApp · Tensi & api · Foto & menu 7 hari',
    topics_en: 'WhatsApp templates · BP & fire safety · 7-day meals',
  },
];

export const CHAPTER_OVERVIEW_BY_ID: Record<ChapterViewId, ChapterOverviewMeta> =
  CHAPTER_OVERVIEW_META.reduce(
    (acc, item) => {
      acc[item.id] = item;
      return acc;
    },
    {} as Record<ChapterViewId, ChapterOverviewMeta>
  );

/**
 * Resolves any view ID, chapter ID, or section hash (e.g. '#ch6-cookbook', '#ch3', '#top', 'home')
 * into a structured target view and optional in-chapter section ID.
 */
export function resolveNavigationTarget(rawTarget: string): ResolvedNavigationTarget {
  const cleaned = rawTarget.trim().replace(/^#/, '');
  if (!cleaned || cleaned === 'home' || cleaned === 'top' || cleaned === 'daftar-bab' || cleaned === 'main-content') {
    return { view: 'home' };
  }

  if (VALID_CHAPTER_IDS.has(cleaned)) {
    return { view: cleaned as ChapterViewId };
  }

  const chapterPrefixMatch = cleaned.match(/^(ch[1-6])-(.+)$/);
  if (chapterPrefixMatch && VALID_CHAPTER_IDS.has(chapterPrefixMatch[1])) {
    return {
      view: chapterPrefixMatch[1] as ChapterViewId,
      sectionId: cleaned,
    };
  }

  return { view: 'home' };
}

/**
 * Returns the previous and next chapters for a given active chapter view.
 */
export function getAdjacentChapters(
  chapters: GuideChapter[],
  activeView: GuideViewId
): { prev: GuideChapter | null; next: GuideChapter | null } {
  if (activeView === 'home') {
    return { prev: null, next: null };
  }
  const index = chapters.findIndex((ch) => ch.id === activeView);
  if (index === -1) {
    return { prev: null, next: null };
  }
  return {
    prev: index > 0 ? chapters[index - 1] : null,
    next: index < chapters.length - 1 ? chapters[index + 1] : null,
  };
}

/**
 * Computes normalized vertical reading progress in the [0, 1] range.
 */
export function computeReadingProgress(
  scrollY: number,
  scrollHeight: number,
  innerHeight: number
): number {
  const maxScroll = scrollHeight - innerHeight;
  if (maxScroll <= 0) return 0;
  const ratio = scrollY / maxScroll;
  return Math.max(0, Math.min(1, Number.isFinite(ratio) ? ratio : 0));
}

/**
 * Maps the active view to the active mobile thumb-zone bottom bar tab.
 */
export function getActiveMobileTab(activeView: GuideViewId): MobileNavTabId {
  if (activeView === 'home') return 'home';
  if (activeView === 'ch3') return 'routine';
  if (activeView === 'ch6') return 'kitchen';
  return 'chapters';
}
