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

commentInputButton.addEventListener('click', setComment);

removeCommentButton.addEventListener('click', function () {
    // localStorage.clear(); // sterge tot din local storage
    localStorage.removeItem('comment'); // sterge din local storage numai elementul cu cheia mentionata
    commentMessage.innerText = initialComment;
});

const commentText = document.getElementsByClassName('user-comment-text')[0];
commentText.addEventListener('mouseover', function () {
    removeCommentButton.style.display = 'inline-block';
});
commentText.addEventListener('mouseout', function () {
    removeCommentButton.style.display = 'none';
});

const infoIcon = document.getElementsByClassName('info-icon')[0];
const infoMessage = document.getElementsByClassName('infoMessage')[0];

infoIcon.addEventListener('click', function () {
    if (infoMessage.style.display === 'block') {
        infoMessage.style.display = 'none';
    } else {
        infoMessage.style.display = 'block';
    }
});

infoIcon.addEventListener('blur', function () {
    infoMessage.style.display = 'none';
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
    // filtrare pe BE

    const data = [
        {
            username: 'Username 1',
            likes: 10,
            shares: 15,
            comments: [],
            title: 'Ceva',
            description: 'Altceva'
        },
        {
            username: 'Username 2',
            likes: 20,
            shares: 25,
            comments: [],
            title: 'Titlu 2',
            description: 'Altceva'
        }
    ];

    // Returneaza numai rezultatele in care termenul cautat este 100% identic cu valoarea proprietatii
    // const filtredResults = data.filter( post => post.username === event.target.value);

    // Returneaza numai rezultatele in care termenul cautat este 100% identic cu valorea propreitatii, exceptand caseul
    // const filtredResults = data.filter(post => post.username.toLowerCase() === event.target.value.toLowerCase());

    // Returneaza orice rezultat care contine sirul de caractere cautat
    const filtredResults = data.filter(post => post.username.toLowerCase().includes(event.target.value));


    console.log(filtredResults)

    console.log('e ', event.target.value)

    // filterData(event.target.value).then( data => {
    //     // manipularea datelor si afisarea lor
    // }) 
});

async function filterData(searchTerm) {
    const filtredPostUrl = 'url';
    const filtredPostBody = {
        searchTerm: searchTerm
    }

    const response = await fetch(`${filtredPostUrl}?serachTerm=${searchTerm}`);

    return response.json()
}