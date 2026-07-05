
const photoCards = document.querySelectorAll(".photo-card");

photoCards.forEach((card, index) => {
    const likeBtn = card.querySelector(".like-btn");
    const likeCountEl = card.querySelector(".like-count");
    const commentInput = card.querySelector(".comment-input");
    const commentList = card.querySelector(".comment-list");

    

    const savedData = JSON.parse(localStorage.getItem("photoData")) || {};
    const photoData = savedData[index] || { likes: 0, comments: [] };

    likeCountEl.textContent = photoData.likes;

    photoData.comments.forEach(text => {
        const div = document.createElement("div");
        div.className = "comment";
        div.textContent = text;
        commentList.appendChild(div);
    });

    
    likeBtn.addEventListener("click", () => {
        photoData.likes++;
        likeCountEl.textContent = photoData.likes;
        savePhotoData(index, photoData);
    });

    commentInput.addEventListener("keypress", e => {
        if (e.key === "Enter" && commentInput.value.trim() !== "") {
            const text = commentInput.value.trim();

            const div = document.createElement("div");
            div.className = "comment";
            div.textContent = text;
            commentList.appendChild(div);

            photoData.comments.push(text);
            commentInput.value = "";

            savePhotoData(index, photoData);
        }
    });
});


function savePhotoData(index, data) {
    const allData = JSON.parse(localStorage.getItem("photoData")) || {};
    allData[index] = data;
    localStorage.setItem("photoData", JSON.stringify(allData));
}
