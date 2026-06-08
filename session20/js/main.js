/**
 * RegExp - Regular Expresions
 * tipare care cauta anumite combinatii de caractere
 * https://regexr.com/
 * https://regex101.com/
 */

setTimeout(() => {
    console.log(6)
});

let string = 'abcdef';
let pattern = /de/;

console.log(pattern.exec(string));
console.log(pattern.test(string));
console.log(string.match(pattern));

const loginBtn = document.getElementById('login');
const emailField = document.querySelector('#email');
const passwordField = document.getElementById('password');
const error = document.querySelector('#error');

const showError = (message) => {
    error.style.display = 'block';
    error.innerText = message;
    error.style.color = 'red';
}

const validateEmail = (value, pattern) => {
    console.log(value.match(pattern));

    // value.includes('@'); ==> false rezulta showError('Caracterul @ este obligatoriu in adresele de email')

    return !!value.match(pattern);
}

const validatePassword = (value) => {
    // if (value === 'password') {
    //     return true;
    // } else {
    //     return false;
    // }

    return value === 'password';
}

const clearInputs = () => {
    console.dir(emailField);

    emailField.value = '';
    passwordField.value = '';
}


loginBtn.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(event);

    const emailValue = emailField.value;
    const passwordValue = passwordField.value;
    const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

    if (emailValue === '' || passwordValue === '') {
        showError('All fields are required and must contain a value');
    } else {
        if (error.style.display === 'block') {
            error.style.display = 'none';
        }

        if (validateEmail(emailValue, regexEmailPattern) && validatePassword(passwordValue)) {
            alert('Logged in');
            clearInputs();
            window.open('https://regex101.com/', '_self');

        } else {
            alert('Try again');
            showError('Incorrect email or password');
            clearInputs()
        }
        // clearInputs();
    }
});

const testPasswordRegex = /[a-z]{1,}[A-Z]{1,}\d{1,}/g
// password.length > 6

const loginTitleElem = document.querySelector('h2.loginTitle');

const toggleLoginBtn = document.querySelector('button.toggleLogin');
let isLoginPage = true;

toggleLoginBtn.addEventListener('click', function () {
    if (isLoginPage) {
        toggleLoginBtn.textContent = 'Switch to log in';
        loginTitleElem.innerText = 'Create an account';
        loginBtn.value = 'Sign up';
    } else {
        toggleLoginBtn.textContent = 'Switch to sign up';
        loginTitleElem.innerText = 'Login';
        loginBtn.value = 'Login';
    }
    isLoginPage = !isLoginPage;
});

const firstNameElem = document.getElementById('firstName');
const lastNameElem = document.getElementById('lastName');
const ageElem = document.getElementById('age');


const firstName = 'Dua';
const lastName = 'Lipa';
const age = 25;

// firstNameElem.value = firstName;
// lastNameElem.value = lastName;
// ageElem.value = age;

/**
 * Build in functions
 */

/**
 * setTimeout
 * Executa o functie pe careo primeste ca argument pentru o singura data, dupa o anumita perioada de timp
 * Perioada de timp este exprimata in milisecunde
 * Daca perioada de timp nu este mentionata, functia se executa la 0 milisecunde DUPA CE S-A EXECUTAT TOT CODUL DIN PAGINA
 */

// setTimeout(() => {
//     firstNameElem.value = firstName;
//     lastNameElem.value = lastName;
//     ageElem.value = age;
// }, 5000)

console.log('1');
setTimeout(() => {
    console.log('2');
}, 2000)
console.log('3');
setTimeout(() => {
    console.log(4);
});
console.log(5);

function setFields() {
    firstNameElem.value = firstName;
    lastNameElem.value = lastName;
    ageElem.value = age;
}

// setTimeout(setFields, 2000);

/**
 * setInterval()
 * apeleaza o functie cu o frecventa mentionata in intervalul specificat
 */
let start = 0;
// const intervalulMeu = setInterval(() => {
//     console.log(start)
//     start += 1;

//     if (start > 10) {
//         clearInterval(intervalulMeu);
//         setFields();
//     }
// }, 2000);


/**
 * Objects recap
 */

const person = {
    firstName: 'Sergiu',
    age: 30,
    somethingUnique: 'asd',
    address: {
        street: 'street',
        country: 'ro'
    },
    sayHi: function () {
        console.log(`${this.firstName} says hi`);
    },
    somethingUnique: 'latest'
}

console.log(person.firstName);
person.sayHi();
console.log(person);
person.firstName = 'Alex';
person.sayHi();

function logStuff() {
    console.log(this);
}

logStuff();

function addToFive(number) {
    console.log('addToFive', + (number + 5))
}
addToFive(10);

const addToFiveCopy = addToFive;
addToFiveCopy(100);

const sayHiCopy = person.sayHi;
sayHiCopy();

const newPerson = person;
newPerson.firstName = 'Catalin';
console.log(person);
console.log(newPerson);

/**
 * Spread operator
 */

const anotherPerson = {...person, address: {...person.address}};
anotherPerson.firstName = 'Ana Maria';
anotherPerson.address.country = 'Bg';

console.log(person);
console.log(anotherPerson);

/**
 * Destructuring and rest operator
 */

const { somethingUnique, ...restObject} = person;

console.log(somethingUnique);
console.log(restObject);

const myArr = [111, 222, 333, 4];

const [first, second, third, ...restArray] = myArr;

console.log(first)
console.log(second)
console.log(third)
console.log(restArray)