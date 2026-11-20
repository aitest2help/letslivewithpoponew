import React from 'react';
import {
  CheckCircle2,
  Heart,
  HandHelping,
  Sparkles,
  Music,
  VolumeX,
  MessageCircleHeart,
  PhoneCall,
  AlertOctagon,
  UtensilsCrossed,
  MoonStar,
  Clock,
  ShieldCheck,
  BookOpen,
  MessageSquare,
  Stethoscope,
  ArrowRight,
  Shirt,
  Smile,
  XCircle,
} from 'lucide-react';
import type { Lang, PhotoKey } from '../data/types';
import { PHOTO_ASSETS } from '../data/photos';

interface VisualBoardProps {
  lang: Lang;
  onOpenLightbox?: (key: PhotoKey) => void;
  onNavigate?: (target: string) => void;
}

/**
 * CHAPTER 1 — Visual Life-Snapshot Strip + Independence vs. Quiet Help Graphic
 */
export const Chapter1VisualBoard: React.FC<VisualBoardProps> = ({ lang, onNavigate }) => {
  const snapshots: {
    key: PhotoKey;
    href: string;
    tag_id: string;
    tag_en: string;
    line_id: string;
    line_en: string;
  }[] = [
    {
      key: 'popo-sunglasses',
      href: '#ch1-welcome',
      tag_id: 'Kepribadian',
      tag_en: 'Personality',
      line_id: 'Ramah & senang pujian tulus',
      line_en: 'Warm & loves sincere compliments',
    },
    {
      key: 'popo-young',
      href: '#ch1-story',
      tag_id: 'Pernah merantau',
      tag_en: 'Started afresh',
      line_id: 'Kerja ART muda saat tiba di HK',
      line_en: 'First HK job was as a young helper',
    },
    {
      key: 'popo-painting',
      href: '#ch1-pride',
      tag_id: 'Kebanggaan',
      tag_en: 'Pride & purpose',
      line_id: '“Manajer Ruang Sampel” 91 thn',
      line_en: '91-year-old “Sample Room Manager”',
    },
    {
      key: 'popo-reading',
      href: '#ch1-loves',
      tag_id: 'Kegemaran',
      tag_en: 'Everyday joy',
      line_id: 'Membaca koran & lagu Kanton',
      line_en: 'Reading newspapers & Cantonese songs',
    },
  ];

  const selfItems =
    lang === 'id'
      ? [
          'Cuci muka, sikat gigi & mandi sendiri',
          'Cuci tangan baju yang baru dipakai sebelum mandi',
          'Menata tas, laci & lipat handuk kecil',
        ]
      : [
          'Washes face, brushes teeth & bathes herself',
          'Hand-washes clothes worn right before bathing',
          'Checks her bag, drawers & folds small towels',
        ];

  const quietHelpItems =
    lang === 'id'
      ? [
          'Jemur baju yang dicuci Popo & siapkan ganti baju',
          'Cuci pakaian lain & seprai diam-diam tanpa ribut',
          'Tetap di dekat kamar mandi & nyalakan kipas ventilasi',
        ]
      : [
          'Hang clothes she washed & help dress warmly after',
          'Wash remaining clothes & bedding quietly without fuss',
          'Stay nearby during bath & turn on ventilation fan',
        ];

  return (
    <div className="mb-8 space-y-4">
      {/* 4-Photo At-a-Glance Jump Strip */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {snapshots.map((item) => {
          const asset = PHOTO_ASSETS[item.key];
          return (
            <a
              key={item.key}
              href={item.href}
              onClick={(e) => {
                if (onNavigate) {
                  e.preventDefault();
                  onNavigate(item.href);
                }
              }}
              className="group overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] text-left transition-colors hover:border-[var(--sage)]"
            >
              <div className="flex h-36 sm:h-40 w-full items-center justify-center bg-[var(--surface-photo)] p-2">
                <img
                  src={asset.src}
                  alt={lang === 'id' ? asset.alt_id : asset.alt_en}
                  loading="eager"
                  decoding="async"
                  className="h-full w-auto max-w-full rounded-lg object-contain shadow-xs ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between gap-1">
                  <p className="text-xs font-semibold text-[var(--sage)]">
                    {lang === 'id' ? item.tag_id : item.tag_en}
                  </p>
                  <ArrowRight className="h-3.5 w-3.5 text-[var(--muted)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--sage)]" aria-hidden="true" />
                </div>
                <p className="mt-0.5 text-xs sm:text-[13px] font-medium leading-snug text-[var(--ink)]">
                  {lang === 'id' ? item.line_id : item.line_en}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      {/* Visual Independence vs Quiet Support Graphic */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="rounded-2xl border border-[var(--line-strong)] bg-[var(--sage-tint)] p-4 sm:p-5">
          <div className="flex items-center gap-2.5 text-[var(--sage)]">
            <Smile className="h-5 w-5 shrink-0" aria-hidden="true" />
            <h3 className="font-display text-base sm:text-lg font-medium text-[var(--ink)]">
              {lang === 'id' ? 'Popo kerjakan sendiri' : 'Popo does herself'}
            </h3>
          </div>
          <ul className="mt-3 space-y-2 text-sm text-[var(--ink)]/90">
            {selfItems.map((line) => (
              <li key={line} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sage)]" aria-hidden="true" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-[var(--warm-border)] bg-[var(--warm-bg)]/75 p-4 sm:p-5">
          <div className="flex items-center gap-2.5 text-[var(--warm-ink)]">
            <Shirt className="h-5 w-5 shrink-0" aria-hidden="true" />
            <h3 className="font-display text-base sm:text-lg font-medium text-[var(--ink)]">
              {lang === 'id' ? 'Anda bantu dengan halus' : 'You help quietly'}
            </h3>
          </div>
          <ul className="mt-3 space-y-2 text-sm text-[var(--ink)]/90">
            {quietHelpItems.map((line) => (
              <li key={line} className="flex items-start gap-2">
                <HandHelping className="mt-0.5 h-4 w-4 shrink-0 text-[var(--warm-ink)]" aria-hidden="true" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

/**
 * CHAPTER 2 — Visual Dementia Diagram ("Memory Fades, Feelings Stay") + Quick Do/Don't Board
 */
export const Chapter2VisualBoard: React.FC<VisualBoardProps> = ({ lang }) => {
  const pairs = [
    {
      avoid_id: 'Mengoreksi: “Popo sudah cerita tadi!”',
      avoid_en: 'Correcting: “You already told me!”',
      try_id: 'Dengarkan hangat seperti pertama kali',
      try_en: 'Listen warmly as if it is new',
    },
    {
      avoid_id: 'Menguji ingatan seperti ulangan',
      avoid_en: 'Quizzing her memory like a test',
      try_id: 'Ajak ngobrol santai soal koran & papan toko',
      try_en: 'Chat casually about signs & newspapers',
    },
    {
      avoid_id: 'Memaksa saat ia sedang bingung/kesal',
      avoid_en: 'Pushing when she feels upset',
      try_id: 'Beri jeda tenang, lagu akrab, atau candaan',
      try_en: 'Give calm space, familiar music or gentle humour',
    },
  ];

  return (
    <div className="mb-8 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-6">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-center">
        {/* Custom Clean Botanical SVG Concept Diagram */}
        <div className="lg:col-span-5 flex flex-col items-center rounded-xl border border-[var(--line)] bg-[var(--sage-tint)]/70 p-4 text-center">
          <svg
            viewBox="0 0 280 148"
            className="h-32 w-full max-w-[260px]"
            role="img"
            aria-label={
              lang === 'id'
                ? 'Ilustrasi ingatan memudar namun perasaan tetap hangat dan nyata'
                : 'Illustration showing memory fading gently while feelings remain warm and bright'
            }
          >
            {/* Left subtle fading cloud/pages for memory */}
            <g opacity="0.55">
              <circle cx="72" cy="72" r="42" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 5" className="text-[var(--muted)]" />
              <circle cx="72" cy="72" r="26" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 4" className="text-[var(--muted)]" />
              <text x="72" y="76" textAnchor="middle" fontSize="11" fontWeight="600" fill="currentColor" className="text-[var(--muted)]">
                {lang === 'id' ? 'Ingatan' : 'Memory'}
              </text>
            </g>

            {/* Gentle connecting wave */}
            <path d="M 118 72 C 132 62, 148 82, 162 72" fill="none" stroke="currentColor" strokeWidth="1.75" className="text-[var(--sage)]" />

            {/* Right warm glowing solid heart circle for feelings */}
            <g>
              <circle cx="206" cy="72" r="46" fill="currentColor" className="text-[var(--warm-bg)]" />
              <circle cx="206" cy="72" r="46" fill="none" stroke="currentColor" strokeWidth="1.75" className="text-[var(--sage)]" />
              <path
                d="M206 90 C206 90 186 77 186 64 C186 56 192 52 198 52 C202 52 205 55 206 58 C207 55 210 52 214 52 C220 52 226 56 226 64 C226 77 206 90 206 90 Z"
                fill="currentColor"
                className="text-[var(--sage)]"
              />
              <text x="206" y="135" textAnchor="middle" fontSize="11" fontWeight="600" fill="currentColor" className="text-[var(--sage)]">
                {lang === 'id' ? 'Perasaan tetap utuh' : 'Feelings stay real'}
              </text>
            </g>
          </svg>
          <p className="mt-1 text-xs leading-relaxed text-[var(--muted)]">
            {lang === 'id'
              ? 'Popo mungkin lupa kalimat tadi, tapi ia langsung merasakan nada suara dan ketenangan Anda.'
              : 'Popo may forget recent words, yet she immediately feels your warm tone and calm presence.'}
          </p>
        </div>

        {/* Visual Avoid vs Try Quick Pairs */}
        <div className="lg:col-span-7 space-y-2.5">
          <p className="text-xs font-semibold text-[var(--sage)]">
            {lang === 'id' ? 'Kunci cepat memahami demensia' : 'Quick guide to dementia care'}
          </p>
          {pairs.map((p, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 gap-2 rounded-xl bg-[var(--surface-subtle)]/75 p-3 sm:grid-cols-2"
            >
              <div className="flex items-start gap-2 text-xs sm:text-[13px] text-[var(--muted)]">
                <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#A85242] dark:text-[#E28A7A]" aria-hidden="true" />
                <span>{lang === 'id' ? p.avoid_id : p.avoid_en}</span>
              </div>
              <div className="flex items-start gap-2 text-xs sm:text-[13px] font-medium text-[var(--ink)]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sage)]" aria-hidden="true" />
                <span>{lang === 'id' ? p.try_id : p.try_en}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * CHAPTER 4 — Visual 4-Step Calm De-Escalation Flow + Family vs 999 Urgency Board
 */
export const Chapter4VisualBoard: React.FC<VisualBoardProps> = ({ lang }) => {
  const steps = [
    {
      num: '01',
      icon: Heart,
      title_id: 'Tetap tenang',
      title_en: 'Stay calm',
      sub_id: 'Suara lembut, jangan berdebat',
      sub_en: 'Soft tone, never argue',
    },
    {
      num: '02',
      icon: Music,
      title_id: 'Alihkan halus',
      title_en: 'Gently divert',
      sub_id: 'Lagu YouTube / minuman akrab',
      sub_en: 'YouTube songs / warm drink',
    },
    {
      num: '03',
      icon: VolumeX,
      title_id: 'Beri jeda',
      title_en: 'Step back briefly',
      sub_id: 'Biarkan suasana murung mereda',
      sub_en: 'Let the passing mood fade',
    },
    {
      num: '04',
      icon: MessageCircleHeart,
      title_id: 'Candaan & Keluarga',
      title_en: 'Humour & Family',
      sub_id: 'Cairkan suasana & WhatsApp kami',
      sub_en: 'Joke warmly & message family',
    },
  ];

  return (
    <div className="mb-8 space-y-4">
      {/* 4-Step Calm Flow Visual Strip */}
      <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5">
        <p className="text-xs font-semibold text-[var(--sage)]">
          {lang === 'id' ? '4 langkah cepat saat Popo murung atau kesal' : '4-step calm response when Popo feels upset'}
        </p>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative flex flex-col justify-between rounded-xl border border-[var(--line)] bg-[var(--sage-tint)]/60 p-3.5"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--surface)] text-[var(--sage)] border border-[var(--line)]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="font-mono-tabular text-xs font-semibold text-[var(--sage)]">
                    {step.num}
                  </span>
                </div>
                <div className="mt-3">
                  <h3 className="font-display text-base font-medium text-[var(--ink)]">
                    {lang === 'id' ? step.title_id : step.title_en}
                  </h3>
                  <p className="mt-0.5 text-xs leading-relaxed text-[var(--muted)]">
                    {lang === 'id' ? step.sub_id : step.sub_en}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <ArrowRight
                    aria-hidden="true"
                    className="hidden lg:block absolute -right-2.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 rounded-full bg-[var(--surface)] text-[var(--sage)]"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* 2-Zone Urgency Board: Family vs 999 */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="rounded-2xl border border-[var(--line-strong)] bg-[var(--surface)] p-4">
          <div className="flex items-center gap-2.5 text-[var(--sage)]">
            <PhoneCall className="h-5 w-5 shrink-0" aria-hidden="true" />
            <h3 className="font-display text-base font-medium text-[var(--ink)]">
              {lang === 'id' ? 'Kabari Keluarga lebih awal' : 'Message / Call Family early'}
            </h3>
          </div>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[var(--muted)]">
            {lang === 'id'
              ? 'Suasana hati sulit reda · Nafsu makan berubah · Gelisah berulang · Anda butuh bantuan atau bingung mengambil langkah.'
              : 'Mood stays unsettled · Appetite shifts · Repeated restlessness · You need support or a quick check-in.'}
          </p>
        </div>

        <div className="rounded-2xl border border-[var(--warm-border)] bg-[var(--warm-bg)] p-4">
          <div className="flex items-center gap-2.5 text-[var(--warm-ink)]">
            <AlertOctagon className="h-5 w-5 shrink-0" aria-hidden="true" />
            <h3 className="font-display text-base font-medium text-[var(--ink)]">
              {lang === 'id' ? 'Langsung 999 (Darurat Medis)' : 'Call 999 Immediately (Emergency)'}
            </h3>
          </div>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[var(--ink)]/90">
            {lang === 'id'
              ? 'Jatuh / benturan kepala / tidak bangun · Wajah mencong / lengan lemah / bicara pelo (Stroke) · Sesak napas / nyeri dada · Bingung mendadak hebat.'
              : 'Fall / head injury / unable to get up · Face droop / arm weakness / slurred speech (Stroke) · Breathing trouble or chest pain · Sudden severe confusion.'}
          </p>
        </div>
      </div>
    </div>
  );
};

/**
 * CHAPTER 5 — Visual "Our Care & Respect Promise" 4-Tile Board
 */
export const Chapter5VisualBoard: React.FC<VisualBoardProps> = ({ lang }) => {
  const promises = [
    {
      icon: UtensilsCrossed,
      title_id: 'Dapur 100% bebas babi',
      title_en: '100% pork-free kitchen',
      desc_id: 'Tanpa daging babi atau kaldu babi di rumah.',
      desc_en: 'No pork or pork stock in Popo’s home.',
    },
    {
      icon: MoonStar,
      title_id: 'Ibadah & kerudung dihormati',
      title_en: 'Prayer & hijab respected',
      desc_id: 'Ruang dan waktu ibadah Anda kami jaga penuh hormat.',
      desc_en: 'Your prayer times and modesty are warmly respected.',
    },
    {
      icon: Sparkles,
      title_id: 'Jangan sungkan bicara',
      title_en: 'Never hesitate to speak up',
      desc_id: 'Lelah, kurang sehat, atau bingung? Beri tahu sejak awal.',
      desc_en: 'Tired, unwell or unsure? Reach out early—we share the load.',
    },
    {
      icon: Clock,
      title_id: 'Istirahat & hak jelas',
      title_en: 'Protected rest & rights',
      desc_id: 'Hari libur dan jam istirahat Anda dijaga sesuai kontrak.',
      desc_en: 'Rest days, sleep balance and contract rights are protected.',
    },
  ];

  return (
    <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {promises.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.title_en}
            className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--sage-soft)] text-[var(--sage)]">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mt-3 font-display text-base font-medium text-[var(--ink)]">
              {lang === 'id' ? item.title_id : item.title_en}
            </h3>
            <p className="mt-1 text-xs sm:text-[13px] leading-relaxed text-[var(--muted)]">
              {lang === 'id' ? item.desc_id : item.desc_en}
            </p>
          </div>
        );
      })}
    </div>
  );
};

/**
 * CHAPTER 6 — Visual Quick-Jump Dashboard (Contacts, WhatsApp, Health/Safety, Cookbook)
 */
export const Chapter6QuickBoard: React.FC<VisualBoardProps> = ({ lang, onNavigate }) => {
  const shortcuts = [
    {
      href: '#ch6-contacts',
      icon: PhoneCall,
      title_id: 'Kontak & 999',
      title_en: 'Contacts & 999',
      sub_id: 'Slot serah terima aman',
      sub_en: 'Private handover slots',
    },
    {
      href: '#ch6-whatsapp',
      icon: MessageSquare,
      title_id: 'Pesan WhatsApp',
      title_en: 'WhatsApp Templates',
      sub_id: '5 template sekali salin',
      sub_en: '5 one-tap copy messages',
    },
    {
      href: '#ch6-bp-meds',
      icon: Stethoscope,
      title_id: 'Tensi, Obat & Api',
      title_en: 'BP, Meds & Fire',
      sub_id: 'Batas aman kesehatan',
      sub_en: 'Clinical & HK fire safety',
    },
    {
      href: '#ch6-cookbook',
      icon: BookOpen,
      title_id: 'Dapur & Menu Popo',
      title_en: 'Meals & Kitchen',
      sub_id: 'Foto masakan, ide 7 hari & video',
      sub_en: 'Meal photos, 7-day ideas & videos',
    },
  ];

  return (
    <div className="mb-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
      {shortcuts.map((item) => {
        const Icon = item.icon;
        return (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate(item.href);
              }
            }}
            className="group rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-4 hover:border-[var(--sage)] transition-colors"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--sage-soft)] text-[var(--sage)]">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <ShieldCheck
                aria-hidden="true"
                className="h-4 w-4 text-[var(--muted)] opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-[var(--sage)]"
              />
            </div>
            <h3 className="mt-3 font-display text-sm sm:text-base font-medium text-[var(--ink)] group-hover:text-[var(--sage)] transition-colors">
              {lang === 'id' ? item.title_id : item.title_en}
            </h3>
            <p className="mt-0.5 text-xs text-[var(--muted)]">
              {lang === 'id' ? item.sub_id : item.sub_en}
            </p>
          </a>
        );
      })}
    </div>
  );
};
