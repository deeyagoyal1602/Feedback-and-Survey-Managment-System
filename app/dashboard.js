import { auth } from "../api/firebaseConfig.js";

const userInfo = document.getElementById("user-info");
const logoutBtn = document.getElementById("logout-btn");

auth.onAuthStateChanged((user) => {
  if (user) {
    if (userInfo) {
      userInfo.textContent = `Logged in as ${user.displayName || user.email}`;
    }
  } else {
    window.location.href = "login.html";
  }
});

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    auth.signOut()
      .then(() => {
        window.location.href = "login.html";
      })
      .catch((error) => {
        alert("Logout failed: " + error.message);
      });
  });
}