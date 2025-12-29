const { test, describe } = require('node:test');
const assert = require('node:assert');

const { dummy, totalMoods, moodCounts } = require('../utils/list_helper');

describe('dummy', () => {
  test('returns 1', () => {
    const moods = [{ emoji: '😊', note: 'Mood note' }];
    assert.strictEqual(dummy(moods), 1);
  });
});

describe('totalMoods', () => {
  test('of empty array is 0', () => {
    const moods = [];
    assert.strictEqual(totalMoods(moods), 0);
  });

  test('of array with one mood is 1', () => {
    const moods = [{ emoji: '😊', note: 'Mood note' }];
    assert.strictEqual(totalMoods(moods), 1);
  });

  test('of array with multiple moods is calculated correctly', () => {
    const moods = [
      { emoji: '😊', note: 'Mood note' },
      { emoji: '😊', note: 'Mood note two' },
      { emoji: '😊', note: 'Mood note three' },
    ];
    assert.strictEqual(totalMoods(moods), 3);
  });
});

describe('moodCounts', () => {
  test('of empty array is empty object', () => {
    const moods = [];
    assert.deepStrictEqual(moodCounts(moods), {});
  });

  test('counts emojis correctly', () => {
    const moods = [
      { emoji: '😊', note: 'Mood note one' },
      { emoji: '😊', note: 'Mood note two' },
      { emoji: '😊', note: 'Mood note three' },
    ];
    assert.deepStrictEqual(moodCounts(moods), { '😊': 3 });
  });

  test('counts multiple different emojis correctly', () => {
    const moods = [
      { emoji: '😊', note: 'Happy' },
      { emoji: '😢', note: 'Sad' },
      { emoji: '😊', note: 'Happy again' },
    ];
    assert.deepStrictEqual(moodCounts(moods), { '😊': 2, '😢': 1 });
  });
});
