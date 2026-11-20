import type { GuideCard } from '../data/types';

export type DayTimeTone = 'morning' | 'departure' | 'midday' | 'afternoon' | 'evening' | 'night';

export interface DayToneStyle {
  tone: DayTimeTone;
  nodeBg: string;
  nodeBorder: string;
  nodeIcon: string;
  cueText: string;
  ribbonActiveBg: string;
  lineColor: string;
}

const DAY_TONES: Record<DayTimeTone, DayToneStyle> = {
  morning: {
    tone: 'morning',
    nodeBg: 'bg-[#FBF1D9] dark:bg-[#352A16]',
    nodeBorder: 'border-[#DFC07D] dark:border-[#6D5627]',
    nodeIcon: 'text-[#8C6118] dark:text-[#F0C97A]',
    cueText: 'text-[#8A5F16] dark:text-[#ECC474]',
    ribbonActiveBg: 'bg-[#FBF1D9] border-[#DFC07D] text-[#6E4B10] dark:bg-[#352A16] dark:border-[#6D5627] dark:text-[#F2CE82]',
    lineColor: 'bg-[#DFC07D]/60 dark:bg-[#6D5627]/60',
  },
  departure: {
    tone: 'departure',
    nodeBg: 'bg-[#E5F0E3] dark:bg-[#1E3325]',
    nodeBorder: 'border-[#B6D0B5] dark:border-[#3D634A]',
    nodeIcon: 'text-[#2E6244] dark:text-[#8CC49E]',
    cueText: 'text-[#2E6244] dark:text-[#8CC49E]',
    ribbonActiveBg: 'bg-[#E5F0E3] border-[#B6D0B5] text-[#244E36] dark:bg-[#1E3325] dark:border-[#3D634A] dark:text-[#A4D3B3]',
    lineColor: 'bg-[#B6D0B5]/70 dark:bg-[#3D634A]/70',
  },
  midday: {
    tone: 'midday',
    nodeBg: 'bg-[#E3EFEA] dark:bg-[#1A312B]',
    nodeBorder: 'border-[#A8CEC0] dark:border-[#356355]',
    nodeIcon: 'text-[#245E4F] dark:text-[#81C5B2]',
    cueText: 'text-[#245E4F] dark:text-[#81C5B2]',
    ribbonActiveBg: 'bg-[#E3EFEA] border-[#A8CEC0] text-[#1D4C40] dark:bg-[#1A312B] dark:border-[#356355] dark:text-[#96D4C3]',
    lineColor: 'bg-[#A8CEC0]/70 dark:bg-[#356355]/70',
  },
  afternoon: {
    tone: 'afternoon',
    nodeBg: 'bg-[#F9EAE0] dark:bg-[#36231A]',
    nodeBorder: 'border-[#E1BCA5] dark:border-[#6E4532]',
    nodeIcon: 'text-[#8F4A27] dark:text-[#EBB190]',
    cueText: 'text-[#8F4A27] dark:text-[#EBB190]',
    ribbonActiveBg: 'bg-[#F9EAE0] border-[#E1BCA5] text-[#753A1C] dark:bg-[#36231A] dark:border-[#6E4532] dark:text-[#F0BE9F]',
    lineColor: 'bg-[#E1BCA5]/70 dark:bg-[#6E4532]/70',
  },
  evening: {
    tone: 'evening',
    nodeBg: 'bg-[#F5E8DC] dark:bg-[#32241B]',
    nodeBorder: 'border-[#D9B99F] dark:border-[#634835]',
    nodeIcon: 'text-[#7A4B2A] dark:text-[#E6B894]',
    cueText: 'text-[#7A4B2A] dark:text-[#E6B894]',
    ribbonActiveBg: 'bg-[#F5E8DC] border-[#D9B99F] text-[#613A1F] dark:bg-[#32241B] dark:border-[#634835] dark:text-[#EDC6A6]',
    lineColor: 'bg-[#D9B99F]/70 dark:bg-[#634835]/70',
  },
  night: {
    tone: 'night',
    nodeBg: 'bg-[#E6EAF2] dark:bg-[#1E2534]',
    nodeBorder: 'border-[#BAC4D8] dark:border-[#3F4E6C]',
    nodeIcon: 'text-[#3B4E73] dark:text-[#A2B6DC]',
    cueText: 'text-[#3B4E73] dark:text-[#A2B6DC]',
    ribbonActiveBg: 'bg-[#E6EAF2] border-[#BAC4D8] text-[#2D3C5A] dark:bg-[#1E2534] dark:border-[#3F4E6C] dark:text-[#B5C6E6]',
    lineColor: 'bg-[#BAC4D8]/70 dark:bg-[#3F4E6C]/70',
  },
};

const TONE_ORDER: DayTimeTone[] = ['morning', 'departure', 'midday', 'afternoon', 'evening', 'night'];

export function getDayMomentTone(index: number): DayToneStyle {
  const safeIndex = Math.max(0, Math.min(index, TONE_ORDER.length - 1));
  return DAY_TONES[TONE_ORDER[safeIndex]];
}

/**
 * Determines whether a card should span full width (e.g. horizontal photo-split card,
 * structured handover table, standalone quote, or safety banner) versus sitting in a
 * scannable 2-column visual card grid.
 */
export function shouldCardSpanFullWidth(card: GuideCard, totalCardsInSection: number): boolean {
  if (totalCardsInSection === 1) return true;
  if (card.image) return true;
  if (card.rows && card.rows.length > 0) return true;
  if (card.quote_id) return true;
  if (card.kind === 'safety') return true;
  return false;
}
