const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Fake in-memory database
let surveys = [];

app.use(cors());
app.use(express.json());

// ✅ Ping test
app.get('/ping', (req, res) => {
  res.send('SurveyPro backend is live!');
});

// ✅ Submit survey
app.post('/submitSurvey', (req, res) => {
  const surveyData = req.body;

  if (!surveyData || Object.keys(surveyData).length === 0) {
    return res.status(400).json({ message: 'Invalid survey data' });
  }

  surveys.push(surveyData);
  res.status(200).json({ message: 'Survey submitted successfully' });
});

// ✅ Get surveys
app.get('/getSurveys', (req, res) => {
  res.json(surveys);
});

// ✅ Get single survey by index (for detail page)
app.get('/api/surveys/:id', (req, res) => {
  const idx = parseInt(req.params.id, 10);
  if (isNaN(idx) || idx < 0 || idx >= surveys.length) {
    return res.status(404).json({ message: 'Survey not found' });
  }
  res.json(surveys[idx]);
});

// ✅ Add feedback to a survey
app.post('/api/surveys/:id/feedback', (req, res) => {
  const idx = parseInt(req.params.id, 10);
  const { feedback } = req.body;
  if (isNaN(idx) || idx < 0 || idx >= surveys.length) {
    return res.status(404).json({ message: 'Survey not found' });
  }
  if (!feedback || typeof feedback !== 'string') {
    return res.status(400).json({ message: 'Invalid feedback' });
  }
  if (!surveys[idx].feedbacks) surveys[idx].feedbacks = [];
  surveys[idx].feedbacks.push(feedback);
  res.json({ message: 'Feedback added' });
});

app.listen(PORT, () => {
  console.log(`✅ Server is running at http://localhost:${PORT}`);
});
