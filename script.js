import { db } from "./firebase.js";
import { ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

const messagesRef = ref(db, "messages");
const messagesDiv = document.getElementById("messages");
const input = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");

// Assign random username automatically
const username = "User_" + Math.floor(Math.random() * 10000);

sendBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text) {
    push(messagesRef, { user: username, text });
    input.value = "";
  }
});

// Listen for new messages in real time
onChildAdded(messagesRef, (snapshot) => {
  const { user, text } = snapshot.val();
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message");
  if (user !== username) msgDiv.classList.add("other");
  msgDiv.textContent = `${user}: ${text}`;
  messagesDiv.appendChild(msgDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
});
