// Elemente din DOM
const nameInput = document.getElementById("name");
const reserveButton = document.getElementById("callToActionButton");

// Efect vizual pe buton
reserveButton.addEventListener("mouseover", () => {
  reserveButton.style.transform = "scale(1.05)";
});

reserveButton.addEventListener("mouseout", () => {
  reserveButton.style.transform = "scale(1)";
});

// Click pe "Rezervă acum"
reserveButton.addEventListener("click", () => {
  const name = nameInput.value.trim();

  if (!name) {
    alert("Te rog introdu numele tău.");
    return;
  }

  localStorage.setItem("reservationName", name);

  alert(`Mulțumim, ${name}! Un pet sitter te va contacta în curând 🐾`);

  window.location.href = "feed.html";
});

