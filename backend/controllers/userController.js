const User = require('../models/User');
const Mood = require('../models/Mood');

exports.getUser = async (req, res) => {
  try {
    const users = await User.find({})
      .select('-password')
      .populate('moods', { emoji: 1, note: 1, date: 1 });
    res.json(users);
  } catch (error) {
    console.error('getUser error', error);
    res.status(500).json({ error: 'Server error' });
  }
};
