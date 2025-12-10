const mongoose = require('mongoose');

const MoodSchema = new mongoose.Schema({
  emoji: { type: String, required: true },
  note: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Mood', MoodSchema);
