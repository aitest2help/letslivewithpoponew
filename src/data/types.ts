export type Lang = 'id' | 'en';

export type PhotoKey =
  | 'popo-sunglasses'
  | 'popo-young'
  | 'popo-painting'
  | 'popo-reading'
  | 'popo-art-ch2'
  | 'lis-portrait'
  | 'lis-with-popo'
  | 'morning-music-on-tv'
  | 'newspapers-in-lobby'
  | 'popo-colouring-focused'
  | 'popo-enjoying-lis-pandan-jelly'
  | 'popo-ice-cream-outing-01'
  | 'popo-ice-cream'
  | 'popo-in-vehicle'
  | 'popo-at-table'
  | 'popo-eating-meal'
  | 'F01'
  | 'F02'
  | 'F03'
  | 'F04'
  | 'F07'
  | 'F08'
  | 'F13'
  | 'R01'
  | 'R02'
  | 'R04'
  | 'R05'
  | 'R06'
  | 'R07'
  | 'R08'
  | 'R09'
  | 'R10'
  | 'DIN01'
  | 'DIN02'
  | 'DIN03'
  | 'DIN04'
  | 'DIN05'
  | 'S01'
  | 'REF01'
  | 'REF02'
  | 'morning-corn-breakfast'
  | 'morning-sandwich-breakfast';

export type PhotoProvenance =
  | 'confirmed_family'
  | 'lis_photo'
  | 'everyday_moment'
  | 'recipe_reference'
  | 'label_pending';

export interface PhotoAsset {
  key: PhotoKey;
  src: string;
  alt_id: string;
  alt_en: string;
  caption_id?: string;
  caption_en?: string;
  provenance: PhotoProvenance;
}

export type SectionIconName =
  | 'heart'
  | 'home'
  | 'hand'
  | 'sun'
  | 'chat'
  | 'user'
  | 'note'
  | 'walk'
  | 'bowl'
  | 'stop'
  | 'moon'
  | 'shield'
  | 'book'
  | 'clock'
  | 'phone'
  | 'sparkles';

export interface LisQuoteData {
  author: string;
  portrait: 'lis-portrait';
  text_id: string;
  text_en: string;
}

export interface DialogueTurn {
  speaker: 'Popo' | 'Helper' | 'Family';
  text_id: string;
  text_en: string;
}

export interface KeyValueRow {
  label_id: string;
  label_en: string;
  value_id: string;
  value_en: string;
}

export interface GuideCard {
  id: string;
  kind?: 'standard' | 'safety' | 'support' | 'dialogue' | 'quote';
  image?: PhotoKey;
  secondaryImage?: PhotoKey;
  reader_label_id?: string;
  reader_label_en?: string;
  title_id: string;
  title_en: string;
  body_id?: string[];
  body_en?: string[];
  body_labels_id?: string[];
  body_labels_en?: string[];
  bullets_id?: string[];
  bullets_en?: string[];
  rows?: KeyValueRow[];
  dialogue?: DialogueTurn[];
  dialogue_context_id?: string;
  dialogue_context_en?: string;
  quote_id?: string;
  quote_en?: string;
  author?: string;
  lis_quote?: LisQuoteData;
  note_id?: string;
  note_en?: string;
}

export interface DayFlowMeta {
  moment_id: string;
  moment_en: string;
  cue_id: string;
  cue_en: string;
}

export interface GuideSection {
  id: string;
  icon: SectionIconName;
  title_id: string;
  title_en: string;
  intro_id?: string;
  intro_en?: string;
  day_flow?: DayFlowMeta;
  cards: GuideCard[];
  embedWidget?: 'food-intro-strip' | 'whatsapp-templates' | 'shared-cookbook';
}

export interface GuideChapter {
  id: string;
  number: number;
  nav_id: string;
  nav_en: string;
  short_id: string;
  short_en: string;
  title_id: string;
  title_en: string;
  subtitle_id: string;
  subtitle_en: string;
  heroPhoto?: PhotoKey;
  heroCaption_id?: string;
  heroCaption_en?: string;
  heroSubcaption_id?: string;
  heroSubcaption_en?: string;
  sections: GuideSection[];
}

export type CookbookCategory =
  | 'all'
  | 'breakfast'
  | 'mains'
  | 'snacks_drinks'
  | 'weekly_menu';

export interface FoodDish {
  code: string;
  category: 'breakfast' | 'mains' | 'snacks_drinks';
  badgeType: 'photo_confirmed' | 'reference_illustration' | 'family_addition' | 'brief_reference';
  photo?: PhotoKey;
  secondaryPhoto?: PhotoKey;
  caption_id?: string;
  caption_en?: string;
  secondaryCaption_id?: string;
  secondaryCaption_en?: string;
  title_id: string;
  title_en: string;
  notes_id: string[];
  notes_en: string[];
  videoLinks?: { label_id: string; label_en: string; url: string }[];
}

export interface WeeklyMealDay {
  day_id: string;
  day_en: string;
  breakfast_id: string;
  breakfast_en: string;
  lunch_id: string;
  lunch_en: string;
  snack_id: string;
  snack_en: string;
  dinner_id: string;
  dinner_en: string;
}

export interface CookingVideoRef {
  number: number;
  title_id: string;
  title_en: string;
  urls: string[];
}

export interface WhatsAppTemplate {
  id: string;
  title_id: string;
  title_en: string;
  context_id: string;
  context_en: string;
  message_id: string;
  message_en: string;
}

export interface SourceReference {
  org: string;
  title: string;
}
