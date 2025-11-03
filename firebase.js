// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCcp0zUPYeODb_JJMWyKNxQpcaW7c2mZM8",
  authDomain: "chat-with-me-1aa70.firebaseapp.com",
  databaseURL: "https://chat-with-me-1aa70-default-rtdb.firebaseio.com",
  projectId: "chat-with-me-1aa70",
  storageBucket: "chat-with-me-1aa70.firebasestorage.app",
  messagingSenderId: "1042127185759",
  appId: "1:1042127185759:web:4f6f1b5705f05663f8b8ea",
  measurementId: "G-3V2BNKNTYH"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
