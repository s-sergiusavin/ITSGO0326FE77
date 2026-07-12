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

accountSettingsButton.addEventListener("blur", () => {
  accountSettingsMenu.style.display = "none";
});

const messagesButton = document.getElementById("messagesButton");
const messagesMenu = document.getElementsByClassName("messagesMenu")[0];
const viewAllMessagesButton = document.getElementById("viewAllMessagesButton");

messagesButton.addEventListener("click", function () {
  if (messagesMenu.style.display === "flex") {
    messagesMenu.style.display = "none";
  } else {
    messagesMenu.style.display = "flex";
  }
});

messagesButton.addEventListener("blur", () => {
  messagesMenu.style.display = "none";
});

const noOfLikesElem = document.getElementById("likesNumber");
const noOfSharesElem = document.getElementById("sharesNumber");
const noOfSavesElem = document.getElementById("savesNumber");

function getNumberOfLikes() {
  noOfLikesElem.innerText = noOfLikesElem.innerText || 12;
}

function getNumberOfShares() {
  noOfSharesElem.innerText = noOfSharesElem.innerText || 17;
}

function getNumberOfSaves() {
  noOfSavesElem.innerText = noOfLikesElem.innerText || 12;
}

function getReactionData() {
  getNumberOfLikes();
  getNumberOfShares();
  getNumberOfSaves();
}

getReactionData();

const likeButton = document.getElementsByClassName("like")[0];
const saveButton = document.getElementsByClassName("save")[0];
const sharesButton = document.getElementsByClassName("share")[0];

let isLiked = false;
let isShared = false;
let isSaved = false;

likeButton.addEventListener("click", function () {
  isLiked = !isLiked;

  if (isLiked) {
    noOfLikesElem.innerText = Number(noOfLikesElem.innerText) + 1;
  } else {
    noOfLikesElem.innerText = Number(noOfLikesElem.innerText) - 1;
  }

  this.classList.toggle("touched");
});

sharesButton.addEventListener("click", function () {
  noOfSharesElem.innerText = Number(noOfSharesElem.innerText) + 1;

  this.classList.add("touched");
});

saveButton.addEventListener("click", function () {
  isSaved = !isSaved;

  if (isSaved) {
    noOfSavesElem.innerText = Number(noOfSavesElem.innerText) + 1;
  } else {
    noOfSavesElem.innerText = Number(noOfSavesElem.innerText) - 1;
  }

  this.classList.toggle("touched");
});

const commentButton = document.getElementById("commentButton");
const commentInput = document.getElementById("commentInput");
const commentButton1 = document.getElementsByClassName("comment")[0];
const commentInput1 = document.getElementsByClassName("new-comment-filed")[0];

const commentInputButton = document.getElementById("commentInputButton");

const commentMessage = document.getElementById("commentMessage");
const removeCommentButton = document.getElementById("removeCommentButton");

const initialComment = commentMessage.innerText;
commentMessage.innerText =
  localStorage.getItem("comment") || commentMessage.innerText; // luam valoarea aferenta cheii comment

commentButton.addEventListener("click", function () {
  commentInput.focus();
});

commentButton1.addEventListener("click", function () {
  commentInput1.focus();
});

function setComment() {
  commentMessage.innerText = commentInput.value;
  localStorage.setItem("comment", JSON.stringify(commentInput.value));
  commentInput.value = "";
}

commentInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    setComment();
    this.blur();
  }
});

commentInputButton.addEventListener("click", setComment);

removeCommentButton.addEventListener("click", function () {
  localStorage.removeItem("comment");
  commentMessage.innerText = initialComment;
});

const commentText = document.getElementsByClassName("user-comment-text")[0];
commentText.addEventListener("mouseover", function () {
  removeCommentButton.style.display = "inline-block";
});
commentText.addEventListener("mouseout", function () {
  removeCommentButton.style.display = "none";
});

const infoIcon = document.getElementsByClassName("info-icon")[0];
const infoMessage = document.getElementsByClassName("infoMessage")[0];

infoIcon.addEventListener("click", function () {
  if (infoMessage.style.display === "block") {
    infoMessage.style.display = "none";
  } else {
    infoMessage.style.display = "block";
  }
});

infoIcon.addEventListener("blur", function () {
  infoMessage.style.display = "none";
});

const profileOptionsButton =
  document.getElementsByClassName("profile-options")[0];
const profileOptionsDropdown = document.getElementsByClassName(
  "profileOptionsDropdown",
)[0];

profileOptionsButton.addEventListener("click", function () {
  if (
    profileOptionsDropdown.style.display === "none" ||
    profileOptionsDropdown.style.display === ""
  ) {
    profileOptionsDropdown.style.display = "flex";
  } else {
    profileOptionsDropdown.style.display = "none";
  }
});

profileOptionsButton.addEventListener("blur", () => {
  profileOptionsDropdown.style.display = "none";
});

const followButton = document.getElementsByClassName("follow")[0];
const follow = followButton.innerText;
followButton.addEventListener("click", function () {
  if (followButton.innerText === "Follow") {
    followButton.style.color = "darkblue";
    followButton.innerText = "Following";
  } else {
    followButton.innerText = follow;
    followButton.style.color = "royalblue";
  }
});

const friend = document.getElementsByClassName("friend")[0];
const sendMessage = document.getElementsByClassName("sendMessage")[0];
const messagesNumber = document.getElementsByClassName("messagesNumber")[0];
const messageContent = document.getElementById("messageContent");
const messageSendBtn = document.getElementById("messageSendBtn");

friend.addEventListener("click", function () {
  if (sendMessage.style.display === "none") {
    sendMessage.style.display = "flex";
  } else {
    sendMessage.style.display = "none";
  }
});
function setMessageNotif() {
  messagesNumber.innerText = Number(messagesNumber.innerText) + 1;
  messagesNumber.style.display = "flex";
}

sendMessage.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    messageContent.value = "";
    setMessageNotif();
  }
});

messageSendBtn.addEventListener("click", function () {
  messageContent.value = "";
  setMessageNotif();
});
