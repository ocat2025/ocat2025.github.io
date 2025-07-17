import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAXMKz2udLxlC_d3uuv9weFZi5Ja36KX5M",
  authDomain: "env-api-password.firebaseapp.com",
  projectId: "env-api-password",
  appId: "1:850492800142:web:47d519af1b4fbde5d85ddf"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
