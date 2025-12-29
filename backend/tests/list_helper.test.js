const { dummy, totalMoods, moodCounts } = require('../utils/list_helper');

describe('dummy', () => {
  test('returns 1', () => {
    const moods = [
      {
        emoji: '😊',
        note: 'Mood note',
      },
    ];
    expect(dummy(moods)).toBe(1);
  });
});

describe('totalMoods', () => {
  test('of empty array is 0', () => {
    const moods = [];
    expect(totalMoods(moods)).toBe(0);
  });

  test('of array with one mood is 1', () => {
    const moods = [
      {
        emoji: '😊',
        note: 'Mood note',
      },
    ];
    expect(totalMoods(moods)).toBe(1);
  });

  test('of array with multiple moods is calculated correctly', () => {
    const moods = [
      {
        emoji: '😊',
        note: 'Mood note',
      },
      {
        emoji: '😊',
        note: 'Mood note two',
      },
      {
        emoji: '😊',
        note: 'Mood note three',
      },
    ];
    expect(totalMoods(moods)).toBe(3);
  });
});

describe('moodCounts', () => {
  test('of empty array is empty object', () => {
    const moods = [];

    expect(moodCounts(moods)).toEqual({});
  });

  test('counts emojis correctly', () => {
    const moods = [
      {
        emoji: '😊',
        note: 'Mood note one',
      },
      {
        emoji: '😊',
        note: 'Mood note two',
      },
      {
        emoji: '😊',
        note: 'Mood note three',
      },
    ];

    expect(moodCounts(moods)).toEqual({ '😊': 3 });
  });

  test('counts multiple different emojis correctly', () => {
    const moods = [
      { emoji: '😊', note: 'Happy' },
      { emoji: '😢', note: 'Sad' },
      { emoji: '😊', note: 'Happy again' },
    ];

    expect(moodCounts(moods)).toEqual({ '😊': 2, '😢': 1 });
  });
});
