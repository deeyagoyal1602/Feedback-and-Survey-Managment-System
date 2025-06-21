const express = require('express');
const router = express.Router();
const Survey = require('../models/Survey');

router.post('/', async (req, res) => {
  const { surveyId, feedback } = req.body;
  if (!surveyId || !feedback) {
    return res.status(400).json({ message: 'Invalid feedback data' });
  }
  const survey = await Survey.findById(surveyId);
  if (!survey) {
    return res.status(404).json({ message: 'Survey not found' });
  }
  survey.feedbacks.push(feedback);
  await survey.save();
  res.status(200).json({ message: 'Feedback submitted successfully' });
});

module.exports = router;