import type { CookbookCategory, FoodDish, Lang, PhotoAsset, WhatsAppTemplate } from '../data/types';

export function filterFoodDishes(
  dishes: readonly FoodDish[],
  category: CookbookCategory,
  searchQuery = ''
): FoodDish[] {
  if (category === 'weekly_menu') {
    return [];
  }

  const normalizedQuery = searchQuery.trim().toLowerCase();
  return dishes.filter((dish) => {
    const matchesCategory = category === 'all' || dish.category === category;
    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;

    const haystack = [
      dish.code,
      dish.title_id,
      dish.title_en,
      dish.caption_id ?? '',
      dish.caption_en ?? '',
      dish.secondaryCaption_id ?? '',
      dish.secondaryCaption_en ?? '',
      ...dish.notes_id,
      ...dish.notes_en,
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(normalizedQuery);
  });
}

export function getWhatsAppDraft(template: WhatsAppTemplate, lang: Lang): string {
  return (lang === 'id' ? template.message_id : template.message_en).trim();
}

export function auditPhotoAssets(assets: Record<string, PhotoAsset>): {
  total: number;
  invalidPaths: string[];
  unmarkedReferences: string[];
} {
  const entries = Object.values(assets);
  const invalidPaths: string[] = [];
  const unmarkedReferences: string[] = [];

  for (const asset of entries) {
    if (!asset.src.startsWith('./assets/')) {
      invalidPaths.push(asset.key);
    }
    if (asset.provenance === 'recipe_reference') {
      const mentionsRef =
        /ilustrasi|rujukan/i.test(asset.alt_id) &&
        /illustration|reference/i.test(asset.alt_en);
      if (!mentionsRef) {
        unmarkedReferences.push(asset.key);
      }
    }
  }

  return {
    total: entries.length,
    invalidPaths,
    unmarkedReferences,
  };
}
