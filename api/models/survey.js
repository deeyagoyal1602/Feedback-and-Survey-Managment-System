const mongoose = require('mongoose');

const SurveySchema = new mongoose.Schema({
  title: { type: String, required: true },
  question: { type: String, required: true },
  feedbacks: [{ type: String }]
});

module.exports = mongoose.model('Survey', SurveySchema);