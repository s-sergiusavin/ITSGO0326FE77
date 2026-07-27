let string = 'abcdef';
let pattern = /de/;

console.log(pattern.exec(string));
console.log(pattern.test(string));
console.log(string.match(pattern));

const loginBtn = document.getElementById('login');
const emailField = document.getElementById('#email');
const passwordField = document.getElementById('#password');
const error = document.querySelector('#error');

const showError = (message) => {
    error.style.display = 'block';
    error.innertext = message;
    error.style.color = 'red';
}

const validateEmail = () => {
    return true;
}
const validatePassword = () => {
    return true;
}

loginBtn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log(event);

    const emailVale = emailField.value;
    const passwordValue = passwordField.value;
    const regaxEmail = /\D{4,}@\D{3,}\.\D{2,}/g;

    if (emailVale === '' || passwordValue === '') {
        showError('Toate campurile sunt obligatorii');
    } else {
        if (error.style.display === 'block') {
            error.style.display = 'none';
        }

        if (validateEmail(emailVale) && validatePassword(passwordValue)) {
            //login
        } else {
            //error try again
        }

    }
});

console.log ('Valoarea este: ', !!null)