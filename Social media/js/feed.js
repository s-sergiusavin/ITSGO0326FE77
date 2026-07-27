// Protect feed: if user is not logged in → redirect
const loggedUser = localStorage.getItem("loggedUser");

if (!loggedUser) {
    window.location.href = "login.html";
}

// Load posts
let posts = JSON.parse(localStorage.getItem("posts")) || [];

const feedSection = document.getElementById("feed");
const postBtn = document.getElementById("post-btn");
const postText = document.getElementById("post-text");
const logoutBtn = document.getElementById("logout-btn");

// Display posts
function renderPosts() {
    feedSection.innerHTML = "";

    posts.slice().reverse().forEach(post => {
        const div = document.createElement("div");
        div.className = "post";

        div.innerHTML = `
            <h3>${post.username}</h3>
            <p>${post.text}</p>
            <small>${post.date}</small>
        `;

        feedSection.appendChild(div);
    });
}

renderPosts();

// Create new post
postBtn.addEventListener("click", () => {
    const text = postText.value.trim();

    if (text === "") return;

    const newPost = {
        username: loggedUser,
        text: text,
        date: new Date().toLocaleString()
    };

    posts.push(newPost);
    localStorage.setItem("posts", JSON.stringify(posts));

    postText.value = "";
    renderPosts();
});

// Logout
logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedUser");
    window.location.href = "login.html";
});
