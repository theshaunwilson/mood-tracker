const Mood = require('../models/Mood');

exports.getMoods = async (req, res) => {
  try {
    const moods = await Mood.find().sort({ date: -1 });
    res.json(moods);
  } catch (error) {
    console.error('getMood error', error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.createMood = async (req, res) => {
  try {
    const { emoji, note, date } = req.body;

    const mood = await Mood.create({
      emoji,
      note,
      date,
    });

    res.status(201).json(mood);
  } catch (error) {
    console.error('createMood error', error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteMood = async (req, res) => {
  try {
    const { id } = req.params;

    const mood = await Mood.findByIdAndDelete(id);

    if (!mood) {
      return res.status(404).json({ error: 'Mood not found' });
    }

    res.json({ message: 'Mood successfully deleted' });
  } catch (error) {
    console.error('deleteMood error', error);
    res.status(500).json({ error: 'Server error' });
  }
};
