const { dummy, totalMoods, moodCounts } = require('../utils/list_helper');

describe('dummy', () => {
  test('returns 1', () => {
    const moods = [];
    expect(dummy(moods)).toBe(1);
  });
});
