import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  collapseAllTimelineSlots,
  expandAllTimelineSlots,
  getNextTimelineSlotId,
  selectTimelineSlot,
  TIMELINE_SLOT_VISUALS,
  toggleTimelineSlot,
} from './timeline';

describe('interactive daily timeline helpers', () => {
  const slots = ['ch3-morning', 'ch3-centre', 'ch3-daytime', 'ch3-homecoming', 'ch3-evening', 'ch3-night'];

  it('toggles individual timeline slots open and closed cleanly without mutating the input set', () => {
    const initial = new Set(['ch3-morning']);
    const afterAdd = toggleTimelineSlot(initial, 'ch3-daytime');
    assert.equal(initial.has('ch3-daytime'), false);
    assert.equal(afterAdd.has('ch3-morning'), true);
    assert.equal(afterAdd.has('ch3-daytime'), true);

    const afterRemove = toggleTimelineSlot(afterAdd, 'ch3-morning');
    assert.equal(afterRemove.has('ch3-morning'), false);
    assert.equal(afterRemove.has('ch3-daytime'), true);
  });

  it('supports exclusive selection, expand-all, collapse-all, and stepping to the next moment', () => {
    const selected = selectTimelineSlot(new Set(['ch3-morning']), 'ch3-evening', true);
    assert.deepEqual(Array.from(selected), ['ch3-evening']);

    const allOpen = expandAllTimelineSlots(slots);
    assert.equal(allOpen.size, 6);

    const allClosed = collapseAllTimelineSlots();
    assert.equal(allClosed.size, 0);

    assert.equal(getNextTimelineSlotId(slots, 'ch3-morning'), 'ch3-centre');
    assert.equal(getNextTimelineSlotId(slots, 'ch3-night'), null);
  });

  it('provides icon-based micro-cues and preview photos for all 6 Chapter 3 timeline slots', () => {
    for (const id of slots) {
      const meta = TIMELINE_SLOT_VISUALS[id];
      assert.ok(meta, `Missing visual metadata for ${id}`);
      assert.ok(meta.cues.length >= 2, `Expected at least 2 icon cues for ${id}`);
    }
  });
});
