// Adaugă postare în feed
document.getElementById("addPostBtn").addEventListener("click", () => {
    const feed = document.getElementById("feed");
    const post = document.createElement("div");
    post.className = "post";
    post.innerHTML = `
        <h3>Miti a postat</h3>
        <p>Am găsit o cutie nouă, e perfectă!</p>
        <button class="likeBtn">Like</button>
        <span class="likes">0</span> ❤️
        <hr>
    `;
    feed.prepend(post);

    addNotification("Miti a adăugat o postare");
});

// Like funcțional
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("likeBtn")) {
        const likes = e.target.nextElementSibling;
        likes.textContent = Number(likes.textContent) + 1;
    }
});

// Adaugă jucărie
document.getElementById("addToyBtn").addEventListener("click", () => {
    const toy = prompt("Numele jucăriei:");
    if (toy) {
        const li = document.createElement("li");
        li.textContent = toy;
        document.getElementById("toyList").appendChild(li);
        addNotification(`Jucărie nouă: ${toy}`);
    }
});

// Dark mode
document.getElementById("darkModeBtn").addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

// Notificări
function addNotification(text) {
    const box = document.getElementById("notifications");
    const note = document.createElement("p");
    note.textContent = text;
    box.prepend(note);
}
