const accountSettingsButton = document.getElementById('accountSettingsButton');
const accountSettingsMenu = document.getElementsByClassName('accountSettingsMenu')[0];
const logoutButton = document.getElementById('logoutButton');

accountSettingsButton.addEventListener('click', function () {
    if (accountSettingsMenu.style.display === 'flex') {
        accountSettingsMenu.style.display = 'none';
    } else {
        accountSettingsMenu.style.display = 'flex';
    }
});

logoutButton.addEventListener('click', function () {
    window.open('../auth.html', '_self');
});

const noOfLikesElem = document.getElementById('likesNumber');
const noOfSharesElem = document.getElementById('sharesNumber');

function getNumberOfLikes() {
    noOfLikesElem.innerText = noOfLikesElem.innerText || 12;
}

function getNumberOfShares() {
    noOfSharesElem.innerText = noOfSharesElem.innerText || 17
}

function getReactionData() {
    getNumberOfLikes();
    getNumberOfShares();
}

getReactionData();

const likeButton = document.getElementById('likeButton');
const sharesButton = document.getElementById('shareButton');

let isLiked = false;
let isShared = false;

likeButton.addEventListener('click', function () {
    isLiked = !isLiked;

    if (isLiked) {
        noOfLikesElem.innerText = Number(noOfLikesElem.innerText) + 1;
    } else {
        noOfLikesElem.innerText = Number(noOfLikesElem.innerText) - 1;
    }

    this.classList.toggle('touched')
});

sharesButton.addEventListener('click', function () {
    noOfSharesElem.innerText = Number(noOfSharesElem.innerText) + 1;

    this.classList.add('touched')
});

const commentButton = document.getElementById('commentButton');
const commentInput = document.getElementById('commentInput');
const commentInputButton = document.getElementById('commentInputButton');

const commentMessage = document.getElementById('commentMessage');
const removeCommentButton = document.getElementById('removeCommentButton');

const initialComment = commentMessage.innerText;
commentMessage.innerText = localStorage.getItem('comment') || commentMessage.innerText; // luam valoarea aferenta cheii comment

commentButton.addEventListener('click', function () {
    commentInput.focus();
    // commentInput.blur(); // opusul lui focus
});

function setComment() {
    commentMessage.innerText = commentInput.value;
    localStorage.setItem('comment', JSON.stringify(commentInput.value)) // adaugam pt cheia "comment" o valoare in local storage
    commentInput.value = '';
}

commentInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        setComment();
        this.blur();
    }
});

removeCommentButton.addEventListener('click', function() {
    // localStorage.clear(); // sterge tot din local storage
    localStorage.removeItem('comment'); // sterge din local storage numai elementul cu cheia mentionata
    commentMessage.innerText = initialComment;
})