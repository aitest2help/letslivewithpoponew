import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { getDayMomentTone, shouldCardSpanFullWidth } from './layout';
import type { GuideCard } from '../data/types';

describe('layout visual helpers', () => {
  it('maps the 6 daily moments to distinct morning-to-night visual tones and clamps out-of-range indices', () => {
    const tones = [0, 1, 2, 3, 4, 5].map((i) => getDayMomentTone(i).tone);
    assert.deepEqual(tones, ['morning', 'departure', 'midday', 'afternoon', 'evening', 'night']);
    assert.equal(getDayMomentTone(-1).tone, 'morning');
    assert.equal(getDayMomentTone(99).tone, 'night');
  });

  it('spans photo, table, quote, safety, and single cards full width while pairing compact text cards in 2 columns', () => {
    const compactCard: GuideCard = {
      id: 'compact',
      title_id: 'Kartu ringkas',
      title_en: 'Compact card',
      body_id: ['Isi singkat.'],
      body_en: ['Short copy.'],
    };
    const photoCard: GuideCard = {
      ...compactCard,
      id: 'photo',
      image: 'F01',
    };
    const safetyCard: GuideCard = {
      ...compactCard,
      id: 'safety',
      kind: 'safety',
    };

    assert.equal(shouldCardSpanFullWidth(compactCard, 1), true);
    assert.equal(shouldCardSpanFullWidth(compactCard, 3), false);
    assert.equal(shouldCardSpanFullWidth(photoCard, 3), true);
    assert.equal(shouldCardSpanFullWidth(safetyCard, 3), true);
  });
});
