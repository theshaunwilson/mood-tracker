const mongoose = require('mongoose');

const moodSchema = new mongoose.Schema(
  {
    emoji: { type: String, required: true },
    note: { type: String },
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Mood', moodSchema);
