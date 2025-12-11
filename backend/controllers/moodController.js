const Mood = require('../models/Mood');

exports.getMoods = async (req, res) => {
  try {
    const moods = await Mood.find({ user: req.user._id }).sort({ date: -1 });

    res.json(moods);
  } catch (error) {
    console.error('getMood error', error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getMoodById = async (req, res) => {
  try {
    const { id } = req.params;

    const mood = await Mood.findById(id);

    if (!mood) {
      return res.status(404).json({ error: 'Mood not found' });
    }

    res.json(mood);
  } catch (error) {
    console.error('getMoodById error', error);
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
      user: req.user._id,
    });

    res.status(201).json(mood);
  } catch (error) {
    console.error('createMood error', error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateMood = async (req, res) => {
  try {
    const { id } = req.params;

    const { emoji, note, date } = req.body;

    const updateFields = {};
    if (emoji) updateFields.emoji = emoji;
    if (note !== undefined) updateFields.note = note;
    if (date) updateFields.date = date;

    const updatedMood = await Mood.findByIdAndUpdate(id, updateFields, {
      new: true,
    });

    if (!updatedMood) {
      return res.status(404).json({ error: 'Mood not found' });
    }

    res.json(updatedMood);
  } catch (error) {
    console.error('updateMood error', error);
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
