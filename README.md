🔍 Project Overview
The project is divided into two major folders:

app → Frontend

api → Backend

The project includes full-stack features: creating, distributing, and managing surveys and feedbacks using:

Frontend: HTML, Tailwind CSS, JavaScript

Backend: Node.js, Express.js, MongoDB

✅ Here's a Complete README.md File for Your Project:
markdown
Copy
Edit
# Feedback and Survey Management System

A full-stack web application that allows users to create, distribute, and manage surveys and feedback responses in real time.

---

## 🔧 Technologies Used

### 🌐 Frontend (in `/app`)
- HTML5
- Tailwind CSS
- JavaScript

### 🌍 Backend (in `/api`)
- Node.js
- Express.js
- MongoDB (Mongoose)

---

## 📁 Project Structure

Feedback-and-Survey/
│
├── app/ # Frontend
│ ├── css/ # Tailwind CSS styles
│ ├── js/ # Frontend logic (fetch API, DOM)
│ ├── pages/ # HTML Pages (Create, Give Feedback, All Surveys)
│ └── index.html # Entry page (dashboard or home)
│
├── api/ # Backend
│ ├── models/ # Mongoose schema definitions (survey, feedback)
│ ├── routes/ # Express routes
│ ├── controllers/ # Logic for handling requests
│ └── server.js # App entry point
│
├── .gitignore
├── package.json
└── README.md

yaml
Copy
Edit

---

## 🚀 Features

- Create a survey with title, questions, and multiple options.
- Automatically generate a unique distribution link.
- Share the link to allow users to give feedback anonymously.
- View all submitted responses and summary.
- Delete or edit existing surveys.
- Responsive and clean UI using Tailwind CSS.
- Real-time communication between frontend and backend via Fetch API.

---

## 📦 Installation & Run Instructions

### 1. Clone the repository
```bash
git clone https://github.com/yourusername/feedback-and-survey.git
cd feedback-and-survey
2. Backend Setup (/api)
bash
Copy
Edit
cd api
npm install
node server.js
Make sure MongoDB is running locally or use a cloud database like MongoDB Atlas.

3. Frontend Setup (/app)
Just open index.html or host it using any static server:

bash
Copy
Edit
cd ../app
live-server .
# OR
npx serve .
🌐 API Endpoints (Express)
Method	Endpoint	Description
POST	/api/surveys	Create a new survey
GET	/api/surveys	Get all surveys
GET	/api/surveys/:id	Get a specific survey
DELETE	/api/surveys/:id	Delete a survey
POST	/api/feedback/:surveyId	Submit feedback
GET	/api/feedback/:surveyId	View feedback results

📸 UI Preview
Create Survey Page

Survey Distribution Link

Give Feedback Form

All Surveys Dashboard

View Survey Results

(Screenshots can be added in the repo)

🧑‍💻 Author
Name: Deeya Goyal (Assumed from filename metadata)

Tech Stack: MERN Developer | Full-stack Projects

📄 License
This project is licensed under the MIT License.

yaml
Copy
Edit

---

Would you like me to **save this README file** directly inside your project’s root folder (`Feedback and Survey/README.md`)? ​:contentReference[oaicite:0]{index=0}​







