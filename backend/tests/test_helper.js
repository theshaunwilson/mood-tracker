const Mood = require('../models/Mood');
const User = require('../models/User');

const initialMoods = [
  {
    emoji: '😊',
    note: 'Happy mood',
  },
  {
    emoji: '❄️',
    note: 'Cold mood',
  },
  {
    emoji: '✅',
    note: 'Productive mood',
  },
];

const nonExistingId = async () => {
  const mood = new Mood({
    emoji: '🗑️',
    note: 'Will be deleted',
  });
  await mood.save();
  await mood.deleteOne();

  return mood._id.toString();
};

const moodsInDb = async () => {
  const moods = await Mood.find({});
  return moods.map((mood) => mood.toJSON());
};

const usersInDb = async () => {
  const users = await User.find({});
  return users.map((user) => user.toJSON());
};

module.exports = {
  initialMoods,
  nonExistingId,
  moodsInDb,
  usersInDb,
};
