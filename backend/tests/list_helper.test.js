const { dummy, totalMoods, moodCounts } = require('../utils/list_helper');

describe('dummy', () => {
  test('returns 1', () => {
    const moods = [];
    expect(dummy(moods)).toBe(1);
  });
});

describe('totalMoods', () => {
  test('of empty array is 0', () => {
    const moods = [];
    expect(totalMoods(moods)).toBe(0);
  });

  test('of array with one mood is 1', () => {
    const moods = [{}];
    expect(totalMoods(moods)).toBe(1);
  });
});
