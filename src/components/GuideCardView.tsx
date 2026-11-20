import React from 'react';
import { Volume2, Pause, Square, AlertTriangle, MessageSquareQuote, ZoomIn } from 'lucide-react';
import type { GuideCard, Lang, PhotoKey } from '../data/types';
import type { AudioPlaybackState } from '../utils/speech';
import { PHOTO_ASSETS } from '../data/photos';

interface GuideCardViewProps {
  card: GuideCard;
  lang: Lang;
  audioState: AudioPlaybackState;
  horizontalPhotoSplit?: boolean;
  onPlayCard: (card: GuideCard) => void;
  onStopAudio: () => void;
  onOpenLightbox: (key: PhotoKey) => void;
}

export const GuideCardView: React.FC<GuideCardViewProps> = ({
  card,
  lang,
  audioState,
  horizontalPhotoSplit = false,
  onPlayCard,
  onStopAudio,
  onOpenLightbox,
}) => {
  const isSafety = card.kind === 'safety';
  const isSupport = card.kind === 'support';
  const isThisCardActive = audioState.key === card.id;
  const isPlaying = isThisCardActive && audioState.status === 'playing';
  const isPaused = isThisCardActive && audioState.status === 'paused';
  const isPreparing = isThisCardActive && audioState.status === 'preparing';

  const title = lang === 'id' ? card.title_id : card.title_en;
  const body = (lang === 'id' ? card.body_id : card.body_en) || [];
  const bodyLabels = (lang === 'id' ? card.body_labels_id : card.body_labels_en) || [];
  const bullets = (lang === 'id' ? card.bullets_id : card.bullets_en) || [];
  const note = lang === 'id' ? card.note_id : card.note_en;
  const standaloneQuote = lang === 'id' ? card.quote_id : card.quote_en;

  const primaryPhoto = card.image ? PHOTO_ASSETS[card.image] : null;
  const secondaryPhoto = card.secondaryImage ? PHOTO_ASSETS[card.secondaryImage] : null;
  const lisPortrait = PHOTO_ASSETS['lis-portrait'];

  // Use crisp horizontal side-by-side photo+text card when spanning full width with 1 photo
  const useHorizontalSplit = Boolean(horizontalPhotoSplit && primaryPhoto && !secondaryPhoto);

  const cardSurfaceClass = isSafety
    ? 'border-[var(--warm-border)] bg-[var(--warm-bg)]'
    : isSupport
      ? 'border-[var(--line-strong)] bg-[var(--sage-tint)]'
      : 'border-[var(--line)] bg-[var(--surface)]';

  const listenCompactLabel = isPreparing
    ? lang === 'id'
      ? 'Menyiapkan…'
      : 'Loading…'
    : isPlaying
      ? lang === 'id'
        ? 'Jeda'
        : 'Pause'
      : isPaused
        ? lang === 'id'
          ? 'Lanjut'
          : 'Resume'
        : lang === 'id'
          ? 'Dengarkan'
          : 'Listen';

  const renderPhotoFigure = (photo: (typeof PHOTO_ASSETS)[PhotoKey], compactHeight = false) => {
    const caption = lang === 'id' ? photo.caption_id : photo.caption_en;
    return (
      <figure
        key={photo.key}
        className="overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface-photo)] flex flex-col justify-between h-full"
      >
        <button
          type="button"
          onClick={() => onOpenLightbox(photo.key)}
          className="group relative flex flex-1 w-full items-center justify-center p-2 text-left cursor-zoom-in"
          aria-label={
            lang === 'id'
              ? `Perbesar foto: ${photo.alt_id}`
              : `Enlarge photo: ${photo.alt_en}`
          }
        >
          <img
            src={photo.src}
            alt={lang === 'id' ? photo.alt_id : photo.alt_en}
            loading="eager"
            decoding="async"
            className={`w-auto max-w-full rounded-lg object-contain shadow-xs ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-[1.02] ${
              compactHeight ? 'max-h-[260px]' : 'max-h-[340px]'
            }`}
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-3 bottom-3 inline-flex h-7 w-7 items-center justify-center rounded-md bg-[var(--surface)]/90 text-[var(--ink)] opacity-0 shadow-xs transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
          >
            <ZoomIn className="h-3.5 w-3.5" />
          </span>
        </button>
        {caption && (
          <figcaption className="border-t border-[var(--line)] bg-[var(--surface)]/85 px-3 py-2 text-[11.5px] leading-snug text-[var(--muted)]">
            {caption}
          </figcaption>
        )}
      </figure>
    );
  };

  const renderTextColumn = () => (
    <div className="flex flex-col justify-between h-full">
      <div>
        {/* Safety kicker if safety card */}
        {isSafety && (
          <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-[var(--warm-ink)]">
            <AlertTriangle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span>{lang === 'id' ? 'Penting untuk keselamatan' : 'Important for safety'}</span>
          </div>
        )}

        {/* Card Headline + Mobile-Friendly 44px Per-Card Audio Control */}
        <div className="flex items-start justify-between gap-3">
          <h4 className="font-display text-[17px] sm:text-[19px] font-medium leading-[1.3] text-[var(--ink)] pt-1">
            {title}
          </h4>

          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => onPlayCard(card)}
              aria-pressed={isPlaying || isPaused}
              aria-label={
                lang === 'id'
                  ? `${listenCompactLabel} bagian ini: ${title}`
                  : `${listenCompactLabel} to this card: ${title}`
              }
              title={
                lang === 'id'
                  ? 'Bacakan hanya kartu ini dan berhenti di akhir kartu'
                  : 'Reads only this card and stops automatically'
              }
              className={`inline-flex min-h-[44px] items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                isPlaying || isPaused || isPreparing
                  ? 'border-[var(--sage)] bg-[var(--sage)] text-white dark:text-[#102016]'
                  : 'border-[var(--line-strong)] bg-[var(--bg)] text-[var(--muted)] hover:border-[var(--sage)] hover:text-[var(--sage)]'
              }`}
            >
              {isPlaying ? (
                <Pause className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              ) : (
                <Volume2 className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              )}
              <span>{listenCompactLabel}</span>
            </button>

            {isThisCardActive && (
              <button
                type="button"
                onClick={onStopAudio}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--line-strong)] bg-[var(--surface)] text-[var(--muted)] hover:text-[var(--ink)] transition-colors cursor-pointer"
                aria-label={lang === 'id' ? 'Hentikan suara' : 'Stop voice'}
              >
                <Square className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        {/* Body Paragraphs */}
        {body.length > 0 && (
          <div className="mt-2.5 space-y-2.5 text-[14.5px] sm:text-[15px] leading-[1.68] text-[var(--ink)]/90">
            {body.map((paragraph, idx) => (
              <div key={idx} className="space-y-1">
                {bodyLabels[idx] && (
                  <p className="text-xs font-semibold text-[var(--sage)]">
                    {bodyLabels[idx]}
                  </p>
                )}
                <p>{paragraph}</p>
              </div>
            ))}
          </div>
        )}

        {/* Bullet List */}
        {bullets.length > 0 && (
          <ul className="mt-3 space-y-2 text-[14.5px] sm:text-[15px] leading-[1.62] text-[var(--ink)]/90">
            {bullets.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span
                  aria-hidden="true"
                  className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${
                    isSafety ? 'bg-[var(--warm-ink)]' : 'bg-[var(--sage)]'
                  }`}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Structured Key-Value Handover Rows (soft tonal surface, no double border clutter) */}
        {card.rows && card.rows.length > 0 && (
          <dl className="mt-3.5 divide-y divide-[var(--line)] rounded-xl bg-[var(--surface-subtle)]/75">
            {card.rows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 gap-1 px-3.5 py-2.5 sm:grid-cols-12 sm:gap-4"
              >
                <dt className="text-xs font-semibold text-[var(--muted)] sm:col-span-4">
                  {lang === 'id' ? row.label_id : row.label_en}
                </dt>
                <dd className="text-sm text-[var(--ink)] sm:col-span-8">
                  {lang === 'id' ? row.value_id : row.value_en}
                </dd>
              </div>
            ))}
          </dl>
        )}

        {/* Adaptable Everyday Dialogue Box */}
        {card.dialogue && card.dialogue.length > 0 && (
          <div className="mt-3.5 rounded-xl bg-[var(--surface-subtle)]/85 p-3.5">
            <div className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-[var(--muted)]">
              <MessageSquareQuote className="h-3.5 w-3.5 text-[var(--sage)]" aria-hidden="true" />
              <span>
                {lang === 'id'
                  ? 'Contoh kalimat (sesuaikan dalam bahasa Kanton)'
                  : 'Adaptable example · not verbatim from Lis'}
              </span>
            </div>
            <div className="space-y-1.5">
              {card.dialogue.map((turn, idx) => {
                const speakerLabel =
                  turn.speaker === 'Helper'
                    ? lang === 'id'
                      ? 'Anda'
                      : 'You'
                    : turn.speaker === 'Family'
                      ? lang === 'id'
                        ? 'Keluarga'
                        : 'Family'
                      : 'Popo';
                return (
                  <div key={idx} className="text-sm leading-relaxed">
                    <span className="font-semibold text-[var(--sage)]">{speakerLabel}: </span>
                    <span className="text-[var(--ink)]">
                      “{lang === 'id' ? turn.text_id : turn.text_en}”
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Standalone Verbatim Lis Quote (e.g. Closing Message in Ch. 5) */}
        {standaloneQuote && (
          <div className="mt-3.5 rounded-xl bg-[var(--sage-tint)] p-4">
            <div className="flex items-start gap-3">
              <img
                src={lisPortrait.src}
                alt={lang === 'id' ? lisPortrait.alt_id : lisPortrait.alt_en}
                loading="eager"
                decoding="async"
                className="h-11 w-11 shrink-0 rounded-full border border-[var(--line-strong)] object-cover object-top bg-[var(--surface-photo)]"
              />
              <div className="min-w-0 flex-1 space-y-1.5">
                <p className="text-xs font-semibold text-[var(--sage)]">
                  {lang === 'id'
                    ? `Dari ${card.author || 'Lis'} · Kata-kata asli`
                    : `From ${card.author || 'Lis'} · Original words`}
                </p>
                <blockquote
                  lang="id"
                  translate="no"
                  className="font-display text-[15.5px] sm:text-base italic leading-relaxed text-[var(--ink)]"
                >
                  “{card.quote_id}”
                </blockquote>
                {lang === 'en' && card.quote_en && (
                  <p className="text-xs sm:text-sm leading-relaxed text-[var(--muted)]">
                    <span className="font-semibold text-[var(--ink)]">English translation: </span>
                    {card.quote_en}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Portrait-Marked Verbatim Lis Quote inside a Card */}
        {card.lis_quote && (
          <div className="mt-3.5 rounded-xl bg-[var(--sage-tint)] p-3.5">
            <div className="flex items-start gap-3">
              <img
                src={lisPortrait.src}
                alt={lang === 'id' ? lisPortrait.alt_id : lisPortrait.alt_en}
                loading="eager"
                decoding="async"
                className="h-10 w-10 shrink-0 rounded-full border border-[var(--line-strong)] object-cover object-top bg-[var(--surface-photo)]"
              />
              <div className="min-w-0 flex-1 space-y-1">
                <p className="text-xs font-semibold text-[var(--sage)]">
                  {lang === 'id' ? 'Dari Lis · Kata-kata Lis sendiri' : 'Dari Lis · In Lis’s words'}
                </p>
                <blockquote
                  lang="id"
                  translate="no"
                  className="font-display text-[15px] italic leading-relaxed text-[var(--ink)]"
                >
                  “{card.lis_quote.text_id}”
                </blockquote>
                {lang === 'en' && (
                  <p className="text-xs sm:text-[13px] leading-relaxed text-[var(--muted)]">
                    <span className="font-semibold text-[var(--ink)]">English translation: </span>
                    {card.lis_quote.text_en}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Supporting Footnote */}
      {note && (
        <p className="mt-3 text-xs leading-relaxed text-[var(--muted)]">
          {note}
        </p>
      )}
    </div>
  );

  return (
    <article
      id={card.id}
      data-card-id={card.id}
      className={`h-full rounded-2xl border p-4 sm:p-5 shadow-[0_1px_3px_rgba(34,52,43,0.04)] ${cardSurfaceClass}`}
    >
      {useHorizontalSplit && primaryPhoto ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-12 md:items-start">
          <div className="md:col-span-5">{renderPhotoFigure(primaryPhoto, true)}</div>
          <div className="md:col-span-7">{renderTextColumn()}</div>
        </div>
      ) : (
        <div className="flex flex-col h-full">
          {primaryPhoto && (
            <div
              className={`mb-4 grid gap-3 ${
                secondaryPhoto ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
              }`}
            >
              {[primaryPhoto, secondaryPhoto]
                .filter((p): p is (typeof PHOTO_ASSETS)[PhotoKey] => Boolean(p))
                .map((photo) => renderPhotoFigure(photo, Boolean(secondaryPhoto)))}
            </div>
          )}
          <div className="flex-1">{renderTextColumn()}</div>
        </div>
      )}
    </article>
  );
};
