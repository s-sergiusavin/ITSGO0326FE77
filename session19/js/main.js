const demoBoxElement = document.getElementById('testBox');

console.dir(demoBoxElement);

demoBoxElement.className = 'red';
demoBoxElement.className = '';

demoBoxElement.classList.add('blue');
demoBoxElement.classList.add('red');

demoBoxElement.classList.remove('blue');
demoBoxElement.classList.remove('red');

demoBoxElement.classList.toggle('blue');
demoBoxElement.classList.toggle('blue');
demoBoxElement.classList.toggle('blue');

/**
 * get or set attributes
 */

const demoImageElement = document.getElementById('demoImage');
const newImageElement = document.getElementById('newImage');

const imgSrc = demoImageElement.getAttribute('src');
console.log(imgSrc);

newImageElement.setAttribute('src', imgSrc);
newImageElement.setAttribute('src', 'https://cdn.royalcanin-weshare-online.io/SVfA44sBBKJuub5q3BB6/v3/labrador-puppy-sitting-in-grass-16-9');

const ulElem = document.getElementsByTagName('ul')[0];

// ulElem.addEventListener('click', () => {
//     ulElem.classList.toggle('blue');
// });

let listItemsElements = document.querySelectorAll('li');

console.dir(listItemsElements);

listItemsElements.forEach(listItem => {
    // listItem.addEventListener('mouseover', function() {
    //     this.classList.add('red');
    // });

    // listItem.addEventListener('mouseout', function() {
    //     this.classList.remove('red');
    // });

    listItem.addEventListener('click', toggleListItems);
});

function toggleListItems() {
    const toggleValue = this.classList.toggle('red');
    console.log('toggleValue', toggleValue)

    if (toggleValue) {
        const span = document.createElement('span');
        span.innerText = 'x';
        this.appendChild(span);
    } else {
        this.getElementsByTagName('span')[0].remove();

        console.dir(this);
        console.dir(document);
    }
}

const clickMeElement = document.getElementById('clickMe');
clickMeElement.style.cursor = 'pointer';
clickMeElement.style.display = 'inline-block';

const demoInputElement = document.getElementById('demoInput');

demoInputElement.addEventListener('keypress', function (event) {
    console.log(event);

    if (event.key === 'Enter' && demoInputElement.value.length > 3) {
        demoInputElement.style.backgroundColor = 'lightgreen';
    }
});

clickMeElement.addEventListener('click', function () {
    const newLiElement = document.createElement('li');
    ulElem.appendChild(newLiElement);
    listItemsElements = document.querySelectorAll('li');
    if (demoInputElement.value) {
        newLiElement.innerText = demoInputElement.value;
        demoInputElement.value = '';
    } else {
        newLiElement.innerText = 'Elem ' + listItemsElements.length;
    }
});

const toDoInputElement = document.getElementById('toDoInput');
const addButtonElement = document.getElementsByClassName('addButton')[0];
const toDoListElement = document.getElementsByClassName('toDoListItems')[0];

function addItemsInTheList() {
    const canAdd = checkPlan()

    if (canAdd) {
        if (toDoInputElement.value !== '') {
            const newListItemElement = document.createElement('li');
            newListItemElement.className = 'newListItems';
            toDoListElement.appendChild(newListItemElement);
            newListItemElement.innerText = toDoInputElement.value;
            toDoInputElement.value = '';
        } else {
            // alert('Te rugam sa introduci o valoare mai intai');
            // prompt('Te rugam sa introduci o valoare mai intai');
            // confirm('Te rugam sa introduci o valoare mai intai!')
            toDoInputElement.classList.toggle('red');
        }
    } else {
        alert('Te rugam sa treci la un plan superior');
        toDoInputElement.value = '';
    }
}

addButtonElement.addEventListener('click', addItemsInTheList);
toDoInputElement.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addItemsInTheList();
    }
});

function checkPlan() {
    // returneaza o valoare booleana adevarat || fals

    const newListItemsNumber = document.getElementsByClassName('newListItems').length

    return newListItemsNumber < 3;

    // if (newListItemsNumber < 3) {
    //     return true;
    // } else {
    //     return false
    // }
}

/**
 * RegExp - Regular Expresions
 * tipare care cauta anumite combinatii de caractere
 * https://regexr.com/
 * https://regex101.com/
 */

let string = 'abcdef';
let pattern = /de/;

console.log(pattern.exec(string));
console.log(pattern.test(string));
console.log(string.match(pattern));

const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

const myFormElement = document.getElementById('myForm');

myFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event)

    const emailAddressValue = event.target[0].value;

    if (regexEmailPattern.test(emailAddressValue)) {
        alert('Este email');
    } else {
        alert('Nu este email');
    }
});