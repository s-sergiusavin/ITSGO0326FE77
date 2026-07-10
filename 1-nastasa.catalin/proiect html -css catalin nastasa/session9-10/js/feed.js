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

function getReactionData() {
    noOfSharesElem.innerText = noOfSharesElem.innerText || 5;
}

getReactionData();

const likeButton = document.getElementById('likeButton');
const shareButton = document.getElementById('shareButton');

let isLiked = false;

likeButton.addEventListener('click', function () {
    isLiked = !isLiked;

    if (isLiked) {
        noOfLikesElem.innerText = Number(noOfLikesElem.innerText) + 1;
    } else {
        noOfLikesElem.innerText = Number(noOfLikesElem.innerText) - 1;
    }

    this.classList.toggle('touched');
});

shareButton.addEventListener('click', function () {
    noOfSharesElem.innerText = Number(noOfSharesElem.innerText) + 1;

    this.classList.add('touched');
});

const commentButton = document.getElementById('commentButton');
const commentInput = document.getElementById('commentInput');
const commentInputButton = document.getElementById('commentInputButton');

const commentMessage = document.getElementById('commentMessage');
const removeCommentButton = document.getElementById('removeCommentButton');

const initialComment = commentMessage.innerText;
commentMessage.innerText = localStorage.getItem('comment') || commentMessage.innerText;

commentButton.addEventListener('click', function () {
    commentInput.focus();
});

function setComment() {
    commentMessage.innerText = commentInput.value;
    localStorage.setItem('comment', JSON.stringify(commentInput.value));
    commentInput.value = '';
}

commentInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        setComment();
        this.blur();
    }
});

commentInputButton.addEventListener('click', setComment);

removeCommentButton.addEventListener('click', function () {
    localStorage.removeItem('comment');
    commentMessage.innerText = initialComment;
});

const commentText = document.getElementsByClassName('user-comment-text')[0];
commentText.addEventListener('mouseover', function () {
    removeCommentButton.style.display = 'inline-block';
});
commentText.addEventListener('mouseout', function () {
    removeCommentButton.style.display = 'none';
});

const profileOptionsButton = document.getElementsByClassName('profile-options')[0];
const profileOptionsDropdown = document.getElementsByClassName('profileOptionsDropdown')[0];

profileOptionsButton.addEventListener('click', function () {
    if (profileOptionsDropdown.style.display === 'none' || profileOptionsDropdown.style.display === '') {
        profileOptionsDropdown.style.display = 'flex';
    } else {
        profileOptionsDropdown.style.display = 'none';
    }
});

profileOptionsButton.addEventListener('blur', () => {
    profileOptionsDropdown.style.display = 'none';
});

const searchInput = document.querySelector('.search-input');
searchInput.addEventListener('keydown', function (event) {
    const data = [
        {
            username: 'Catalin Nastasa',
            likes: 47,
            shares: 5,
            title: 'Expozitie de fluturi'
        },
        {
            username: 'Catalin Nastasa',
            likes: 23,
            shares: 2,
            title: 'Lasertag Bucuresti'
        }
    ];

    const filtredResults = data.filter(post => post.username.toLowerCase().includes(event.target.value.toLowerCase()));

    console.log(filtredResults);
});
