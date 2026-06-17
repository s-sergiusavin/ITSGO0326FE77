const accountSettingsButton = document.getElementById("accountSettingsButton");
const accountSettingsMenu = document.getElementById("accountSettingsMenu");
const logoutButton = document.getElementById("logoutButton");

accountSettingsButton.addEventListener("click", function () {
  if (accountSettingsMenu.style.display === "flex") {
    accountSettingsMenu.style.display === "none";
  } else {
    accountSettingsMenu.style.display === "flex";
  }
});

logoutButton.addEventListener("click", function () {
  window.open("../auth.html", "_self");
});

const noOfLikedElem = document.getElementById('likesNumber');
const noOfSharesElem = document.getElementById('likesShares');

function getNumberOfLikes() {
    noOfLikedElem = noOfLikedElem.innerText || 12;
}

function getNumberOfShares() {
    noOfSharesElem = noOfSharesElem.innerText || 17;
}

let isLiked = false;
let isShared = false;

const commentButton
