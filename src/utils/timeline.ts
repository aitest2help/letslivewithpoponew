import type { PhotoKey } from '../data/types';

export interface TimelineMicroCue {
  icon: 'bag' | 'breakfast' | 'music' | 'pill' | 'van' | 'weather' | 'art' | 'broom' | 'coffee' | 'jelly' | 'sparkle' | 'bath' | 'dinner' | 'tv' | 'lotion' | 'bed' | 'moon' | 'doctor';
  label_id: string;
  label_en: string;
}

export interface TimelineSlotVisualMeta {
  slotId: string;
  short_id: string;
  short_en: string;
  period_id: string;
  period_en: string;
  previewPhoto?: PhotoKey;
  cues: TimelineMicroCue[];
}

export const TIMELINE_SLOT_VISUALS: Record<string, TimelineSlotVisualMeta> = {
  'ch3-morning': {
    slotId: 'ch3-morning',
    short_id: 'Pagi',
    short_en: 'Morning',
    period_id: 'Bangun & sarapan',
    period_en: 'Waking & breakfast',
    previewPhoto: 'morning-corn-breakfast',
    cues: [
      { icon: 'bag', label_id: 'Tas & cuci muka sendiri', label_en: 'Bag & self-wash' },
      { icon: 'breakfast', label_id: 'Sarapan akrab berdua', label_en: 'Familiar breakfast' },
      { icon: 'music', label_id: 'Musik TV & koran lobi', label_en: 'TV music & paper' },
      { icon: 'pill', label_id: 'Obat pagi & tensi', label_en: 'Morning meds & BP' },
    ],
  },
  'ch3-centre': {
    slotId: 'ch3-centre',
    short_id: 'Berangkat',
    short_en: 'Off to centre',
    period_id: 'Siap & jemputan',
    period_en: 'Dressing & pickup',
    previewPhoto: 'popo-in-vehicle',
    cues: [
      { icon: 'van', label_id: 'Kabar jemputan tenang', label_en: 'Calm pickup handover' },
      { icon: 'weather', label_id: 'Baju nyaman sesuai cuaca', label_en: 'Weather-ready layers' },
    ],
  },
  'ch3-daytime': {
    slotId: 'ch3-daytime',
    short_id: 'Siang',
    short_en: 'Midday',
    period_id: 'Pusat & waktu Anda',
    period_en: 'Centre & your time',
    previewPhoto: 'popo-colouring-focused',
    cues: [
      { icon: 'art', label_id: 'Popo melukis & makan siang', label_en: 'Popo’s art & lunch' },
      { icon: 'broom', label_id: 'Beres-beres rumah', label_en: 'Household tasks' },
      { icon: 'coffee', label_id: 'Waktu istirahat Anda', label_en: 'Time to rest & recharge' },
    ],
  },
  'ch3-homecoming': {
    slotId: 'ch3-homecoming',
    short_id: 'Pulang',
    short_en: 'Afternoon',
    period_id: 'Camilan & mandi',
    period_en: 'Snack & bath',
    previewPhoto: 'popo-enjoying-lis-pandan-jelly',
    cues: [
      { icon: 'jelly', label_id: 'Camilan sore & air madu', label_en: 'Afternoon snack & drink' },
      { icon: 'sparkle', label_id: 'Bersihkan barang luar', label_en: 'Wipe outside items' },
      { icon: 'bath', label_id: 'Mandi sendiri & cuci baju', label_en: 'Own bath & laundry split' },
    ],
  },
  'ch3-evening': {
    slotId: 'ch3-evening',
    short_id: 'Makan malam',
    short_en: 'Evening',
    period_id: 'Makan & komedi',
    period_en: 'Dinner & comedy',
    previewPhoto: 'F13',
    cues: [
      { icon: 'dinner', label_id: 'Makan malam lembut & sup', label_en: 'Soft dinner & soup' },
      { icon: 'tv', label_id: 'Nonton komedi bersama', label_en: 'Comedy together' },
      { icon: 'lotion', label_id: 'Losion, gigi palsu & tensi', label_en: 'Evening care & BP' },
    ],
  },
  'ch3-night': {
    slotId: 'ch3-night',
    short_id: 'Malam',
    short_en: 'Night',
    period_id: 'Tidur & tenang',
    period_en: 'Settling & sleep',
    cues: [
      { icon: 'bed', label_id: 'Bantal, selimut & teduh', label_en: 'Pillow & calm room' },
      { icon: 'moon', label_id: 'Pola bangun & hak tidur Anda', label_en: 'Night pattern & your rest' },
      { icon: 'doctor', label_id: 'Sulit tidur: panduan dokter', label_en: 'Clinician sleep plan' },
    ],
  },
};

/**
 * Toggles a single timeline slot open or closed in a Set of open slot IDs.
 */
export function toggleTimelineSlot(openIds: ReadonlySet<string>, slotId: string): Set<string> {
  const next = new Set(openIds);
  if (next.has(slotId)) {
    next.delete(slotId);
  } else {
    next.add(slotId);
  }
  return next;
}

/**
 * Opens a specific slot (closing others when exclusive=true) for quick daylight ribbon selection.
 */
export function selectTimelineSlot(
  openIds: ReadonlySet<string>,
  slotId: string,
  exclusive = false
): Set<string> {
  if (exclusive) {
    return new Set([slotId]);
  }
  const next = new Set(openIds);
  next.add(slotId);
  return next;
}

export function expandAllTimelineSlots(slotIds: readonly string[]): Set<string> {
  return new Set(slotIds);
}

export function collapseAllTimelineSlots(): Set<string> {
  return new Set<string>();
}

export function getNextTimelineSlotId(slotIds: readonly string[], currentId: string): string | null {
  const idx = slotIds.indexOf(currentId);
  if (idx === -1 || idx >= slotIds.length - 1) return null;
  return slotIds[idx + 1];
}
