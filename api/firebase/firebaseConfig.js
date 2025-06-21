import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyA8s0PLhYd6IMrzQr2RVaQgBTYqA3XHNBg",
  authDomain: "feedback-94cc9.firebaseapp.com",
  projectId: "feedback-94cc9",
  storageBucket: "feedback-94cc9.appspot.com", // Fixed here
  messagingSenderId: "342423286323",
  appId: "1:342423286323:web:73ae25a99b9f3f94b56946"
};

export const app = initializeApp(firebaseConfig);