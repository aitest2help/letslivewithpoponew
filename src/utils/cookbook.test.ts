import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { auditPhotoAssets, filterFoodDishes, getWhatsAppDraft } from './cookbook';
import { FOOD_DISHES, WEEKLY_MEAL_IDEAS, WHATSAPP_TEMPLATES } from '../data/cookbookData';
import { PHOTO_ASSETS } from '../data/photos';
import { CHAPTERS_1_TO_3 } from '../data/chapters1to3';
import { CHAPTERS_4_TO_6 } from '../data/chapters4to6';

describe('cookbook and asset integrity utilities', () => {
  it('filters food dishes by category and bilingual search query across newly confirmed dishes', () => {
    const breakfast = filterFoodDishes(FOOD_DISHES, 'breakfast');
    assert.ok(breakfast.length > 0);
    assert.ok(breakfast.every((d) => d.category === 'breakfast'));

    const currySearch = filterFoodDishes(FOOD_DISHES, 'all', 'kari');
    assert.ok(currySearch.some((d) => d.code === 'F26'));
    assert.ok(currySearch.some((d) => d.code === 'F47'));

    const wontonSearch = filterFoodDishes(FOOD_DISHES, 'mains', 'shanghai');
    assert.ok(wontonSearch.some((d) => d.code === 'F09'));

    const eelSearch = filterFoodDishes(FOOD_DISHES, 'mains', 'belut');
    assert.ok(eelSearch.some((d) => d.code === 'F25'));

    const chickenFeetSearch = filterFoodDishes(FOOD_DISHES, 'mains', 'ceker');
    assert.ok(chickenFeetSearch.some((d) => d.code === 'F52'));

    const dragonFruitSearch = filterFoodDishes(FOOD_DISHES, 'snacks_drinks', 'dragon fruit');
    assert.ok(dragonFruitSearch.some((d) => d.code === 'F41'));

    const snowFungusSearch = filterFoodDishes(FOOD_DISHES, 'snacks_drinks', 'jamur salju');
    assert.ok(snowFungusSearch.some((d) => d.code === 'F50'));

    assert.deepEqual(filterFoodDishes(FOOD_DISHES, 'weekly_menu'), []);
  });

  it('keeps reference illustrations honestly badged and distinct from confirmed family photos', () => {
    const stuffed = FOOD_DISHES.find((d) => d.code === 'F23');
    const tofu = FOOD_DISHES.find((d) => d.code === 'F24');

    assert.equal(stuffed?.badgeType, 'reference_illustration');
    assert.equal(stuffed?.photo, 'REF01');
    assert.match(stuffed?.notes_en.join(' ') ?? '', /minced fish/i);

    assert.equal(tofu?.badgeType, 'reference_illustration');
    assert.equal(tofu?.photo, 'REF02');
    assert.match(tofu?.notes_en.join(' ') ?? '', /once every two weeks/i);
  });

  it('returns trimmed bilingual WhatsApp message templates and 7-day meal ideas', () => {
    const bpTemplate = WHATSAPP_TEMPLATES.find((t) => t.id === 'wa-bp');
    assert.ok(bpTemplate);
    assert.match(getWhatsAppDraft(bpTemplate, 'id'), /Tekanan darah/);
    assert.match(getWhatsAppDraft(bpTemplate, 'en'), /Blood pressure/);

    assert.equal(WEEKLY_MEAL_IDEAS.length, 7);
    const sunday = WEEKLY_MEAL_IDEAS.find((d) => d.day_en === 'Sunday');
    assert.match(sunday?.lunch_en ?? '', /Shanghai chicken wontons/i);
    assert.match(sunday?.dinner_en ?? '', /chicken-feet pot rice/i);
  });

  it('verifies all 42 family, food & reference assets exist on disk and reference illustrations are clearly labelled', () => {
    const report = auditPhotoAssets(PHOTO_ASSETS);
    assert.equal(report.total, 42);
    assert.deepEqual(report.invalidPaths, []);
    assert.deepEqual(report.unmarkedReferences, []);

    for (const asset of Object.values(PHOTO_ASSETS)) {
      const relative = asset.src.replace(/^\.\//, '');
      const fullPath = path.resolve(process.cwd(), 'public', relative);
      assert.ok(fs.existsSync(fullPath), `Missing photo file on disk: ${fullPath}`);
    }
  });

  it('ensures all 6 chapters exist and public privacy rules hold (no personal drug names or phone numbers)', () => {
    const allChapters = [...CHAPTERS_1_TO_3, ...CHAPTERS_4_TO_6];
    assert.equal(allChapters.length, 6);

    const dayFlowCount = allChapters
      .find((ch) => ch.id === 'ch3')
      ?.sections.filter((s) => Boolean(s.day_flow)).length;
    assert.equal(dayFlowCount, 6);

    const serialized = JSON.stringify(allChapters);
    assert.doesNotMatch(serialized, /olanzapine|melatonin/i);
    assert.doesNotMatch(serialized, /\+852\s*\d{4}/);
  });
});
