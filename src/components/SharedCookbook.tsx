import React, { useMemo, useState } from 'react';
import {
  Search,
  ExternalLink,
  ZoomIn,
  ShieldCheck,
  UtensilsCrossed,
  PlayCircle,
  X,
} from 'lucide-react';
import type { CookbookCategory, FoodDish, Lang, PhotoKey } from '../data/types';
import {
  COOKING_VIDEOS,
  FOOD_DISHES,
  WEEKLY_MEAL_IDEAS,
} from '../data/cookbookData';
import { PHOTO_ASSETS } from '../data/photos';
import { filterFoodDishes } from '../utils/cookbook';

interface SharedCookbookProps {
  lang: Lang;
  onOpenLightbox: (key: PhotoKey) => void;
}

const CATEGORIES: { id: CookbookCategory; label_id: string; label_en: string }[] = [
  { id: 'all', label_id: 'Semua hidangan', label_en: 'All dishes' },
  { id: 'breakfast', label_id: 'Sarapan', label_en: 'Breakfast' },
  { id: 'mains', label_id: 'Makan Siang & Malam', label_en: 'Lunch & Dinner' },
  { id: 'snacks_drinks', label_id: 'Camilan & Minuman', label_en: 'Snacks & Drinks' },
  { id: 'weekly_menu', label_id: 'Ide Menu 7 Hari', label_en: '7-Day Meal Ideas' },
];

export const SharedCookbook: React.FC<SharedCookbookProps> = ({ lang, onOpenLightbox }) => {
  const [category, setCategory] = useState<CookbookCategory>('all');
  const [query, setQuery] = useState('');

  const filteredDishes = useMemo(
    () => filterFoodDishes(FOOD_DISHES, category, query),
    [category, query]
  );

  const isDishView =
    category === 'all' ||
    category === 'breakfast' ||
    category === 'mains' ||
    category === 'snacks_drinks';

  const getBadgeLabel = (dish: FoodDish) => {
    if (dish.badgeType === 'photo_confirmed') {
      return lang === 'id' ? 'Foto dapur terkonfirmasi' : 'Confirmed kitchen photo';
    }
    if (dish.badgeType === 'reference_illustration') {
      return lang === 'id'
        ? 'Ilustrasi rujukan · bukan masakan rumah'
        : 'Reference illustration · not family cooking';
    }
    if (dish.badgeType === 'family_addition') {
      return lang === 'id' ? 'Tambahan keluarga' : 'Family addition';
    }
    return lang === 'id' ? 'Rujukan menu akrab' : 'Familiar menu reference';
  };

  return (
    <div
      id="ch6-cookbook-panel"
      className="scroll-mt-20 mt-5 space-y-6 rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-6"
    >
      {/* Clean Tonal 6-Rule Kitchen Boundaries Strip */}
      <div className="rounded-xl bg-[var(--warm-bg)] p-4 sm:p-5">
        <div className="flex items-center gap-2 mb-3">
          <ShieldCheck
            className="h-4 w-4 shrink-0 text-[var(--warm-ink)]"
            aria-hidden="true"
          />
          <p className="text-xs font-semibold text-[var(--warm-ink)]">
            {lang === 'id' ? '6 aturan cepat dapur Popo' : '6 quick kitchen rules for Popo'}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {[
            { id: '100% bebas babi', en: '100% pork-free' },
            { id: 'Tanpa kacang', en: 'No nuts / peanuts' },
            { id: 'Tanpa cabai', en: 'No chilli / spicy' },
            { id: 'Tanpa teh & cola', en: 'No tea or cola' },
            { id: 'Tahu: 1× / 2 mgg', en: 'Tofu: 1× / 2 wks' },
            { id: 'Cek duri & empuk', en: 'Check bones & soft' },
          ].map((rule) => (
            <div
              key={rule.en}
              className="rounded-lg bg-[var(--surface)]/90 px-2.5 py-2 text-center text-xs font-semibold text-[var(--ink)]"
            >
              {lang === 'id' ? rule.id : rule.en}
            </div>
          ))}
        </div>
      </div>

      {/* Category Rail: Horizontal scroll on mobile, clean wrapped row on desktop */}
      <div
        role="tablist"
        aria-label={lang === 'id' ? 'Kategori buku masak' : 'Cookbook categories'}
        className="flex flex-nowrap md:flex-wrap gap-2 overflow-x-auto no-scrollbar pb-1 -mx-1 px-1"
      >
        {CATEGORIES.map((tab) => {
          const isActive = category === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              data-cookbook-tab={tab.id}
              onClick={() => setCategory(tab.id)}
              className={`min-h-[44px] shrink-0 whitespace-nowrap rounded-xl border px-3.5 py-2 text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                isActive
                  ? 'border-[var(--sage)] bg-[var(--sage)] text-white dark:text-[#102016]'
                  : 'border-[var(--line-strong)] bg-[var(--bg)] text-[var(--ink)] hover:border-[var(--sage)] hover:text-[var(--sage)]'
              }`}
            >
              {lang === 'id' ? tab.label_id : tab.label_en}
            </button>
          );
        })}
      </div>

      {/* Search Bar (only on dish listing tabs) */}
      {isDishView && (
        <div className="relative max-w-md">
          <label htmlFor="cookbook-search" className="sr-only">
            {lang === 'id' ? 'Cari masakan atau bahan' : 'Search dishes or ingredients'}
          </label>
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted)]"
            aria-hidden="true"
          />
          <input
            id="cookbook-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              lang === 'id'
                ? 'Cari masakan, mis. bubur, pangsit, kari, ikan, buah naga…'
                : 'Search dishes, e.g. congee, wonton, curry, fish, dragon fruit…'
            }
            className="min-h-[44px] w-full rounded-xl border border-[var(--line-strong)] bg-[var(--bg)] py-2 pl-10 pr-10 text-sm text-[var(--ink)] placeholder:text-[var(--muted)]"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              aria-label={lang === 'id' ? 'Hapus pencarian' : 'Clear search'}
              className="absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-[var(--muted)] hover:text-[var(--ink)] cursor-pointer"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </div>
      )}

      {/* Dish Grid View */}
      {isDishView && (
        <div className="space-y-6">
          {filteredDishes.length === 0 ? (
            <div className="rounded-xl border border-[var(--line)] bg-[var(--bg)] p-6 text-center text-sm text-[var(--muted)]">
              {lang === 'id'
                ? 'Tidak ada hidangan yang cocok dengan kata kunci tersebut. Coba hapus pencarian atau pilih tab lain.'
                : 'No dishes match that search term. Try clearing the search or picking another category.'}
            </div>
          ) : (
            (() => {
              const mediaDishes = filteredDishes.filter((d) => Boolean(d.photo));
              const textOnlyDishes = filteredDishes.filter((d) => !d.photo);

              const renderDishCard = (dish: FoodDish) => {
                const primaryPhoto = dish.photo ? PHOTO_ASSETS[dish.photo] : null;
                const secondaryPhoto = dish.secondaryPhoto
                  ? PHOTO_ASSETS[dish.secondaryPhoto]
                  : null;
                const notes = lang === 'id' ? dish.notes_id : dish.notes_en;
                const isReference = dish.badgeType === 'reference_illustration';

                const photoItems = [
                  primaryPhoto
                    ? {
                        photo: primaryPhoto,
                        caption:
                          (lang === 'id' ? dish.caption_id : dish.caption_en) ||
                          (lang === 'id' ? primaryPhoto.caption_id : primaryPhoto.caption_en),
                      }
                    : null,
                  secondaryPhoto
                    ? {
                        photo: secondaryPhoto,
                        caption:
                          (lang === 'id'
                            ? dish.secondaryCaption_id
                            : dish.secondaryCaption_en) ||
                          (lang === 'id'
                            ? secondaryPhoto.caption_id
                            : secondaryPhoto.caption_en),
                      }
                    : null,
                ].filter(
                  (
                    item
                  ): item is {
                    photo: NonNullable<typeof primaryPhoto>;
                    caption: string | undefined;
                  } => Boolean(item)
                );

                return (
                  <article
                    key={dish.code}
                    data-dish-code={dish.code}
                    className={`flex flex-col justify-between overflow-hidden rounded-xl border ${
                      isReference
                        ? 'border-[var(--warm-border)] bg-[var(--warm-bg)]/35'
                        : 'border-[var(--line)] bg-[var(--bg)]/65'
                    }`}
                  >
                    <div>
                      {photoItems.length > 0 && (
                        <div
                          className={`grid gap-2.5 border-b border-[var(--line)] bg-[var(--surface-photo)] p-2.5 ${
                            photoItems.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
                          }`}
                        >
                          {photoItems.map(({ photo, caption }) => (
                            <figure key={photo.key} className="flex flex-col">
                              <button
                                type="button"
                                onClick={() => onOpenLightbox(photo.key)}
                                className="group relative flex w-full items-center justify-center rounded-lg p-1 text-left cursor-zoom-in"
                                aria-label={
                                  lang === 'id'
                                    ? `Perbesar foto ${dish.title_id} (${photo.key})`
                                    : `Enlarge photo of ${dish.title_en} (${photo.key})`
                                }
                              >
                                <img
                                  src={photo.src}
                                  alt={lang === 'id' ? photo.alt_id : photo.alt_en}
                                  loading="eager"
                                  decoding="async"
                                  className="h-52 sm:h-56 w-auto max-w-full rounded-lg object-contain shadow-xs ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-[1.02]"
                                />
                                <span
                                  aria-hidden="true"
                                  className="pointer-events-none absolute right-2 bottom-2 inline-flex h-7 w-7 items-center justify-center rounded-md bg-[var(--surface)]/90 text-[var(--ink)] opacity-0 shadow-xs transition-opacity group-hover:opacity-100"
                                >
                                  <ZoomIn className="h-3.5 w-3.5" />
                                </span>
                              </button>
                              {caption && (
                                <figcaption className="mt-1.5 px-1 text-xs leading-relaxed text-[var(--muted)]">
                                  {caption}
                                </figcaption>
                              )}
                            </figure>
                          ))}
                        </div>
                      )}

                      <div className="p-4">
                        <p
                          className={`text-xs font-semibold ${
                            isReference ? 'text-[var(--warm-ink)]' : 'text-[var(--sage)]'
                          }`}
                        >
                          <span>{getBadgeLabel(dish)}</span>
                          <span aria-hidden="true"> · </span>
                          <span className="font-mono-tabular text-[var(--muted)]">{dish.code}</span>
                        </p>
                        <h5 className="mt-1 font-display text-base sm:text-[17px] font-medium leading-snug text-[var(--ink)]">
                          {lang === 'id' ? dish.title_id : dish.title_en}
                        </h5>
                        <ul className="mt-2.5 space-y-1.5 text-sm leading-relaxed text-[var(--muted)]">
                          {notes.map((line, i) => (
                            <li key={i}>{line}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {dish.videoLinks && dish.videoLinks.length > 0 && (
                      <div className="flex flex-wrap gap-3 border-t border-[var(--line)] bg-[var(--surface)]/70 px-4 py-2">
                        {dish.videoLinks.map((vid) => (
                          <a
                            key={vid.url}
                            href={vid.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-[44px] items-center gap-1.5 text-xs font-semibold text-[var(--sage)] hover:underline whitespace-nowrap"
                          >
                            <PlayCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                            <span>{lang === 'id' ? vid.label_id : vid.label_en}</span>
                            <ExternalLink className="h-3 w-3 shrink-0" aria-hidden="true" />
                          </a>
                        ))}
                      </div>
                    )}
                  </article>
                );
              };

              return (
                <>
                  {mediaDishes.length > 0 && (
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {mediaDishes.map(renderDishCard)}
                    </div>
                  )}

                  {textOnlyDishes.length > 0 && (
                    <div className={mediaDishes.length > 0 ? 'border-t border-[var(--line)] pt-5 space-y-3' : 'space-y-3'}>
                      {mediaDishes.length > 0 && (
                        <div>
                          <h5 className="font-display text-base sm:text-lg font-medium text-[var(--ink)]">
                            {lang === 'id'
                              ? 'Catatan menu tambahan & variasi keluarga'
                              : 'Additional family menu notes & ideas'}
                          </h5>
                          <p className="text-xs sm:text-sm text-[var(--muted)]">
                            {lang === 'id'
                              ? 'Hidangan akrab tambahan dan catatan bahan yang belum memiliki foto terpisah.'
                              : 'Extra familiar dishes and kitchen notes that do not have a separate photograph yet.'}
                          </p>
                        </div>
                      )}
                      <div className="grid grid-cols-1 gap-3.5 md:grid-cols-2 lg:grid-cols-3">
                        {textOnlyDishes.map(renderDishCard)}
                      </div>
                    </div>
                  )}
                </>
              );
            })()
          )}
        </div>
      )}

      {/* 7-Day Meal Ideas View */}
      {category === 'weekly_menu' && (
        <div className="space-y-4">
          <div className="rounded-xl border border-[var(--line)] bg-[var(--sage-tint)] p-4 text-sm leading-relaxed text-[var(--ink)]">
            {lang === 'id'
              ? 'Daftar 7 hari ini adalah ide menu agar Anda tidak bingung setiap minggu—bukan aturan kaku. Senin–Jumat Popo biasanya makan siang di pusat kegiatan; pilihan makan siang di bawah berguna untuk akhir pekan atau hari saat Popo di rumah.'
              : 'This 7-day grid is an inspiration bank—not a strict schedule. On Monday–Friday Popo normally has lunch at the day centre; the lunch ideas below help on weekends or stay-home days.'}
          </div>

          {/* Mobile stacked day cards */}
          <div className="grid grid-cols-1 gap-3 md:hidden">
            {WEEKLY_MEAL_IDEAS.map((row) => (
              <div
                key={row.day_en}
                className="rounded-xl border border-[var(--line)] bg-[var(--bg)]/70 p-4 space-y-2"
              >
                <h5 className="font-display text-base font-medium text-[var(--sage)]">
                  {lang === 'id' ? row.day_id : row.day_en}
                </h5>
                <dl className="space-y-1.5 text-sm">
                  <div>
                    <dt className="text-xs font-semibold text-[var(--muted)]">
                      {lang === 'id' ? 'Sarapan' : 'Breakfast'}
                    </dt>
                    <dd className="text-[var(--ink)]">
                      {lang === 'id' ? row.breakfast_id : row.breakfast_en}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-[var(--muted)]">
                      {lang === 'id' ? 'Makan siang (bila di rumah)' : 'Lunch (if at home)'}
                    </dt>
                    <dd className="text-[var(--ink)]">
                      {lang === 'id' ? row.lunch_id : row.lunch_en}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-[var(--muted)]">
                      {lang === 'id' ? 'Camilan' : 'Snack'}
                    </dt>
                    <dd className="text-[var(--ink)]">
                      {lang === 'id' ? row.snack_id : row.snack_en}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold text-[var(--muted)]">
                      {lang === 'id' ? 'Makan malam' : 'Dinner'}
                    </dt>
                    <dd className="text-[var(--ink)]">
                      {lang === 'id' ? row.dinner_id : row.dinner_en}
                    </dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>

          {/* Desktop clean table */}
          <div className="hidden md:block overflow-hidden rounded-xl border border-[var(--line)]">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-[var(--surface-subtle)] text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">
                <tr>
                  <th className="px-4 py-3 border-b border-[var(--line)]">
                    {lang === 'id' ? 'Hari' : 'Day'}
                  </th>
                  <th className="px-4 py-3 border-b border-[var(--line)]">
                    {lang === 'id' ? 'Sarapan' : 'Breakfast'}
                  </th>
                  <th className="px-4 py-3 border-b border-[var(--line)]">
                    {lang === 'id' ? 'Makan siang (di rumah)' : 'Lunch (if home)'}
                  </th>
                  <th className="px-4 py-3 border-b border-[var(--line)]">
                    {lang === 'id' ? 'Camilan' : 'Snack'}
                  </th>
                  <th className="px-4 py-3 border-b border-[var(--line)]">
                    {lang === 'id' ? 'Makan malam' : 'Dinner'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--line)] bg-[var(--surface)]">
                {WEEKLY_MEAL_IDEAS.map((row) => (
                  <tr key={row.day_en} className="align-top">
                    <td className="px-4 py-3 font-semibold text-[var(--sage)] whitespace-nowrap">
                      {lang === 'id' ? row.day_id : row.day_en}
                    </td>
                    <td className="px-4 py-3 text-[var(--ink)]">
                      {lang === 'id' ? row.breakfast_id : row.breakfast_en}
                    </td>
                    <td className="px-4 py-3 text-[var(--ink)]">
                      {lang === 'id' ? row.lunch_id : row.lunch_en}
                    </td>
                    <td className="px-4 py-3 text-[var(--ink)]">
                      {lang === 'id' ? row.snack_id : row.snack_en}
                    </td>
                    <td className="px-4 py-3 text-[var(--ink)]">
                      {lang === 'id' ? row.dinner_id : row.dinner_en}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 10 Pork-Free Cooking Video Links Reference */}
      {(category === 'all' || category === 'weekly_menu') && (
        <div className="border-t border-[var(--line)] pt-5">
          <div className="flex items-start gap-2.5 mb-3.5">
            <UtensilsCrossed
              className="mt-0.5 h-5 w-5 shrink-0 text-[var(--sage)]"
              aria-hidden="true"
            />
            <div>
              <h5 className="font-display text-base sm:text-lg font-medium text-[var(--ink)]">
                {lang === 'id'
                  ? '10 rujukan video masak YouTube (tanpa babi)'
                  : '10 pork-free YouTube cooking references'}
              </h5>
              <p className="text-xs sm:text-sm text-[var(--muted)]">
                {lang === 'id'
                  ? 'Gunakan sebagai inspirasi teknik memasak; selalu sesuaikan rasa dengan selera lembut Popo dan demo dapur bersama Lis.'
                  : 'Use as cooking technique inspiration; always match Popo’s mild seasoning and Lis’s hands-on kitchen demonstration.'}
              </p>
            </div>
          </div>

          <ol className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {COOKING_VIDEOS.map((video) => (
              <li
                key={video.number}
                className="flex flex-wrap items-center justify-between gap-2 rounded-xl border border-[var(--line)] bg-[var(--bg)]/60 px-3.5 py-2.5 text-sm"
              >
                <span className="text-[var(--ink)]">
                  <span className="font-mono-tabular mr-2 text-xs font-semibold text-[var(--sage)]">
                    {String(video.number).padStart(2, '0')}
                  </span>{' '}
                  {lang === 'id' ? video.title_id : video.title_en}
                </span>
                <span className="flex items-center gap-2 shrink-0">
                  {video.urls.map((url, idx) => (
                    <a
                      key={url}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center gap-1 text-xs font-semibold text-[var(--sage)] hover:underline whitespace-nowrap"
                    >
                      <span>
                        {video.urls.length > 1
                          ? `Video ${idx + 1}`
                          : lang === 'id'
                            ? 'Tonton'
                            : 'Watch'}
                      </span>
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </a>
                  ))}
                </span>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
};
