const mongoose = require('mongoose');

const MoodSchema = new mongoose.Schema({
  emoji: { type: String, required: true },
  note: { type: String },
  date: { type: Date, default: Date.now },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Mood', MoodSchema);
