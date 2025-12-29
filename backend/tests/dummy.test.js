const dummy = (moods) => {
  return 1;
};

const totalMoods = (moods) => {
  return moods.reduce((acc, blog) => acc + blog, 0);
};

const moodCounts = (moods) => {
  const moodTally = {};

  moods.forEach((mood) => {
    moodTally[mood.emoji] = moodTally[mood.emoji]
      ? moodTally[mood.emoji] + 1
      : 1;
  });

  return moodTally;
};

module.exports = { dummy, totalMoods, moodCounts };
