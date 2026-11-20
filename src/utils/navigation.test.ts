import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { CHAPTERS_1_TO_3 } from '../data/chapters1to3';
import { CHAPTERS_4_TO_6 } from '../data/chapters4to6';
import {
  CHAPTER_OVERVIEW_BY_ID,
  CHAPTER_OVERVIEW_META,
  computeReadingProgress,
  getActiveMobileTab,
  getAdjacentChapters,
  resolveNavigationTarget,
} from './navigation';

const ALL_CHAPTERS = [...CHAPTERS_1_TO_3, ...CHAPTERS_4_TO_6];

describe('chapter-focused handbook navigation utilities', () => {
  it('computes reading progress safely and clamps between 0 and 1', () => {
    assert.equal(computeReadingProgress(0, 2000, 800), 0);
    assert.equal(computeReadingProgress(600, 2000, 800), 0.5);
    assert.equal(computeReadingProgress(1500, 2000, 800), 1);
    assert.equal(computeReadingProgress(-50, 2000, 800), 0);
    assert.equal(computeReadingProgress(100, 800, 900), 0);
  });

  it('resolves home, chapter IDs, and deep section hashes accurately', () => {
    assert.deepEqual(resolveNavigationTarget(''), { view: 'home' });
    assert.deepEqual(resolveNavigationTarget('#top'), { view: 'home' });
    assert.deepEqual(resolveNavigationTarget('home'), { view: 'home' });
    assert.deepEqual(resolveNavigationTarget('#ch3'), { view: 'ch3' });
    assert.deepEqual(resolveNavigationTarget('ch1'), { view: 'ch1' });
    assert.deepEqual(resolveNavigationTarget('#ch6-cookbook'), {
      view: 'ch6',
      sectionId: 'ch6-cookbook',
    });
    assert.deepEqual(resolveNavigationTarget('#ch1-story'), {
      view: 'ch1',
      sectionId: 'ch1-story',
    });
    assert.deepEqual(resolveNavigationTarget('#unknown-anchor'), { view: 'home' });
  });

  it('provides plain-language bilingual summaries and topic cues for all 6 chapters', () => {
    assert.equal(CHAPTER_OVERVIEW_META.length, 6);
    assert.deepEqual(
      CHAPTER_OVERVIEW_META.map((m) => m.number),
      [1, 2, 3, 4, 5, 6]
    );
    for (const meta of CHAPTER_OVERVIEW_META) {
      assert.ok(meta.summary_id.length >= 40, `${meta.id} needs a clear ID summary`);
      assert.ok(meta.summary_en.length >= 40, `${meta.id} needs a clear EN summary`);
      assert.ok(meta.topics_id.includes('·'), `${meta.id} needs concise ID topic cues`);
      assert.ok(meta.topics_en.includes('·'), `${meta.id} needs concise EN topic cues`);
      assert.equal(CHAPTER_OVERVIEW_BY_ID[meta.id].number, meta.number);
    }
  });

  it('computes previous and next chapters cleanly across boundaries', () => {
    assert.deepEqual(getAdjacentChapters(ALL_CHAPTERS, 'home'), { prev: null, next: null });

    const first = getAdjacentChapters(ALL_CHAPTERS, 'ch1');
    assert.equal(first.prev, null);
    assert.equal(first.next?.id, 'ch2');

    const middle = getAdjacentChapters(ALL_CHAPTERS, 'ch3');
    assert.equal(middle.prev?.id, 'ch2');
    assert.equal(middle.next?.id, 'ch4');

    const last = getAdjacentChapters(ALL_CHAPTERS, 'ch6');
    assert.equal(last.prev?.id, 'ch5');
    assert.equal(last.next, null);
  });

  it('maps active views cleanly to mobile bottom-bar tabs', () => {
    assert.equal(getActiveMobileTab('home'), 'home');
    assert.equal(getActiveMobileTab('ch1'), 'chapters');
    assert.equal(getActiveMobileTab('ch2'), 'chapters');
    assert.equal(getActiveMobileTab('ch3'), 'routine');
    assert.equal(getActiveMobileTab('ch4'), 'chapters');
    assert.equal(getActiveMobileTab('ch5'), 'chapters');
    assert.equal(getActiveMobileTab('ch6'), 'kitchen');
  });
});
