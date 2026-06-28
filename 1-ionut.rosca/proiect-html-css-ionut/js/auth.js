// Elemente din DOM
const loginForm = document.querySelector("form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberCheckbox = document.getElementById("rememberUser");

// Simulare utilizatori existenți
const users = [
  { username: "jerry", password: "pufosenie123" },
  { username: "tom", password: "motanelul13" },
  { username: "luna", password: "whiskers2026" }
];

// Dacă userul a fost salvat anterior, îl precompletăm
window.addEventListener("DOMContentLoaded", () => {
  const savedUser = localStorage.getItem("catUser");
  if (savedUser) {
    usernameInput.value = savedUser;
    rememberCheckbox.checked = true;
  }
});

// Funcție de autentificare
function authenticate(username, password) {
  return users.find(u => u.username === username && u.password === password);
}

// Gestionare formular
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  // Validare simplă
  if (!username || !password) {
    alert("Te rog completează toate câmpurile.");
    return;
  }

  const foundUser = authenticate(username, password);

  if (foundUser) {
    alert(`Bun venit în Casa pentru pisici, ${foundUser.username}! 🐾`);

    // Remember me
    if (rememberCheckbox.checked) {
      localStorage.setItem("catUser", username);
    } else {
      localStorage.removeItem("catUser");
    }

    // Redirecționare către feed
    window.location.href = "feed.html";
  } else {
    alert("Username sau parolă incorectă.");
  }
});
