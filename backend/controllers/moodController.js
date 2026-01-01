const Mood = require('../models/Mood');
const User = require('../models/User');

exports.getMoods = async (req, res) => {
  try {
    const moods = await Mood.find({ user: req.user._id })
      .populate('user', {
        email: 1,
      })
      .sort({ date: -1 });

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

    if (mood.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: 'Unauthorized' });
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
    const user = req.user;

    const mood = await Mood.create({
      emoji,
      note,
      date,
      user: user._id,
    });

    user.moods = user.moods.concat(mood._id);
    await user.save();

    res.status(201).json(mood);
  } catch (error) {
    console.error('createMood error', error);
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateMood = async (req, res) => {
  try {
    const { id } = req.params;

    const mood = await Mood.findById(id);

    if (!mood) {
      return res.status(404).json({ error: 'Mood not found' });
    }

    if (mood.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

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

    const mood = await Mood.findById(id);

    if (!mood) {
      return res.status(404).json({ error: 'Mood not found' });
    }

    if (mood.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    await Mood.findByIdAndDelete(id);

    res.json({ message: 'Mood successfully deleted' });
  } catch (error) {
    console.error('deleteMood error', error);
    res.status(500).json({ error: 'Server error' });
  }
};
