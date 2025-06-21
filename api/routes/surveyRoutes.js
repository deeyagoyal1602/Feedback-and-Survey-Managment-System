const express = require('express');
const router = express.Router();
const Survey = require('../models/Survey'); // Survey mongoose model

// GET all surveys
router.get('/', async (req, res) => {
  const surveys = await Survey.find();
  res.json(surveys);
});

// POST create survey
router.post('/', async (req, res) => {
  const { title, question } = req.body;
  if (!title || !question) {
    return res.status(400).json({ message: 'Invalid survey data' });
  }
  const survey = new Survey({ title, question, feedbacks: [] });
  await survey.save();
  res.status(200).json({ message: 'Survey submitted successfully' });
});

// GET survey by ID
router.get('/:id', async (req, res) => {
  try {
    const survey = await Survey.findById(req.params.id);
    if (!survey) return res.status(404).json({ message: 'Survey not found' });
    res.json(survey);
  } catch (err) {
    res.status(400).json({ message: 'Invalid survey ID' });
  }
});

// Add feedback to a survey
router.post('/:id/feedback', async (req, res) => {
  try {
    const { feedback } = req.body;
    if (!feedback || typeof feedback !== 'string') {
      return res.status(400).json({ message: 'Invalid feedback' });
    }
    const survey = await Survey.findById(req.params.id);
    if (!survey) {
      return res.status(404).json({ message: 'Survey not found' });
    }
    survey.feedbacks.push(feedback);
    await survey.save();
    res.json({ message: 'Feedback added' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update survey
router.put('/:id', async (req, res) => {
  const { title, question } = req.body;
  try {
    const survey = await Survey.findByIdAndUpdate(
      req.params.id,
      { title, question },
      { new: true }
    );
    if (!survey) return res.status(404).json({ message: 'Survey not found' });
    res.json({ message: 'Survey updated', survey });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete survey
router.delete('/:id', async (req, res) => {
  try {
    const survey = await Survey.findByIdAndDelete(req.params.id);
    if (!survey) return res.status(404).json({ message: 'Survey not found' });
    res.json({ message: 'Survey deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;