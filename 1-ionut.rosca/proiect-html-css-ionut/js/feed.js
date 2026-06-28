
// Afișare user logat


const loggedUser = localStorage.getItem("loggedCat");
const profileName = document.querySelector(".profile-card p");

if (loggedUser) {
  profileName.textContent = `Profilul lui ${loggedUser} 🐾`;
} else {
  profileName.textContent = "Vizitator";
}



// Sistem de LIKE la recenzie


const likeBtn = document.querySelector(".like-btn");
let likeCount = 0;

likeBtn.addEventListener("click", () => {
  likeCount++;
  likeBtn.textContent = `🐾 Like (${likeCount})`;
});



// Sistem de comentarii

const reviewCard = document.querySelector(".cat-review-card");

function addComment(text) {
  const comment = document.createElement("div");
  comment.classList.add("msg", "owner");
  comment.textContent = text;
  reviewCard.appendChild(comment);
}

const commentBtn = document.querySelector(".cat-review-actions .btn:nth-child(2)");
commentBtn.addEventListener("click", () => {
  const text = prompt("Scrie comentariul tău:");
  if (text) addComment(text);
});



// Share (simulare)

const shareBtn = document.querySelector(".cat-review-actions .btn:nth-child(3)");
shareBtn.addEventListener("click", () => {
  alert("Recenzia a fost distribuită! 📤");
});



// trimitere mesaje


const chatInput = document.querySelector(".chat-input input");
const chatBody = document.querySelector(".chat-body");
const chatSendBtn = document.querySelector(".chat-input button");

chatSendBtn.addEventListener("click", () => {
  const text = chatInput.value.trim();
  if (!text) return;

  const msg = document.createElement("div");
  msg.classList.add("msg", "owner");
  msg.textContent = text;

  chatBody.appendChild(msg);
  chatInput.value = "";
});



// Enter - trimite mesajul


chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    chatSendBtn.click();
  }
});
