const accountSettingsButton = document.getElementById("accountSettingsButton");
const accountSettingsMenu = document.getElementsByClassName(
  "accountSettingsMenu",
)[0];
const logoutButton = document.getElementById("logoutButton");

accountSettingsButton.addEventListener("click", function () {
  if (accountSettingsMenu.style.display === "flex") {
    accountSettingsMenu.style.display = "none";
  } else {
    accountSettingsMenu.style.display = "flex";
  }
});

logoutButton.addEventListener("click", function () {
  window.open("../auth.html", "_self");
});

//likeButton
//shareButton

const numberOfLikeElem = document.getElementById("likesNumber");
const numberOfSharesElem = document.getElementById("sharesNumber");

function getNumberOfLikes() {
  numberOfLikeElem.innerText = numberOfLikeElem.innerText || 12;
}

function getNumberOfShares() {
  numberOfSharesElem.innerText = numberOfSharesElem.innerText || 17;
}

function getReactionData() {
  getNumberOfLikes();
  getNumberOfShares();
}

getReactionData();

const likeButton = document.getElementById("likeButton");
const shareButton = document.getElementById("shareButton");

let isLiked = false;
let isShared = false;

likeButton.addEventListener("click", function () {
  isLiked = !isLiked;
  if (isLiked) {
    numberOfLikeElem.innerText = Number(numberOfLikeElem.innerText) + 1;
  } else {
    numberOfLikeElem.innerText = Number(numberOfLikeElem.innerText) - 1;
  }

  this.classList.toggle("touched");
});

shareButton.addEventListener("click", function () {
  numberOfSharesElem.innerText = Number(numberOfSharesElem.innerText) + 1;

  this.classList.toggle("touched");
});

const commentButton = document.getElementById("commentButton");
const commentInput = document.getElementById("commentInput");
const commentInputButton = document.getElementById("commentInputButton");

const commentMessage = document.getElementById("commentMessage");
const removeCommentButton = document.getElementById("removeCommentButton");

const initialComment = commentMessage.innerText;
commentMessage.innerText=localStorage.getItem('comment') || commentMessage.innerText // luam valoarea aferenta chei comment

commentButton.addEventListener("click", function () {
  commentInput.focus();
});

function setComment() {
  commentMessage.innerText = commentInput.value;
  localStorage.setItem("comment", JSON.stringify(commentInput.value)); // adaugam pt cheia comment o valoare in localstorage
  commentInput.value = "";
}
commentInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    setComment();
    this.blur();
  }
});

removeCommentButton.addEventListener("click", function () {
    //localStorage.clear() -> sterge tot din local storage
    localStorage.removeItem('comment')//sterge din local storage doar elementul cu cheia mentionata 
  commentMessage.innerText = initialComment;
});
