let isLoginPage = true;

const ref = {
    switchButton: document.getElementById('switchButton'),
    loginButton: document.getElementById('loginButton'),
    emailField: document.getElementById('username'),
    passwordField: document.getElementById('password'),
    error: document.getElementById('error'),
};

ref.switchButton.addEventListener('click', function () {
    const headerTitle = document.getElementById('headerTitle');
    const forgotPassword = document.getElementById('forgotPassword');

    isLoginPage = !isLoginPage;

    if (isLoginPage) {
        headerTitle.innerText = 'Login';
        forgotPassword.style.visibility = 'visible';
        ref.loginButton.value = 'Log in';
        this.innerText = 'Create an account';
    } else {
        headerTitle.innerText = 'Create new account';
        forgotPassword.style.visibility = 'hidden';
        ref.loginButton.value = 'Sign up';
        this.innerText = 'Back to login';
    }
});

const showError = (message) => {
    ref.error.style.display = 'block';
    ref.error.innerText = message;
    ref.error.style.color = 'red';
};

const validateEmail = (value, pattern) => {
    return !!value.match(pattern);
};

const validatePassword = (value) => {
    return value.length > 3;
};

const clearInputs = () => {
    ref.emailField.value = '';
    ref.passwordField.value = '';
};

ref.loginButton.addEventListener('click', function (event) {
    event.preventDefault();

    const emailValue = ref.emailField.value;
    const passwordValue = ref.passwordField.value;
    const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

    if (emailValue === '' || passwordValue === '') {
        showError('Toate campurile sunt obligatorii');
        return;
    }

    if (!validateEmail(emailValue, regexEmailPattern) || !validatePassword(passwordValue)) {
        showError('Email sau parola incorecte');
        clearInputs();
        return;
    }

    if (isLoginPage) {
        login(emailValue, passwordValue).then(function () {
            clearInputs();
            window.open('pages/feed.html', '_self');
        });
    } else {
        createAccount(emailValue, passwordValue).then(function () {
            window.open('pages/feed.html', '_self');
        });
    }
});

async function login(emailValue, passwordValue) {
    const loginUrl = 'https://reqres.in/api/login';

    const loginData = {
        email: 'eve.holt@reqres.in',
        password: 'cityslicka'
    };

    const loginConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'free_user_3Ex0RLGjQgptLlFTpJkPhoxoqKP'
        },
        body: JSON.stringify(loginData)
    };

    const response = await fetch(loginUrl, loginConfig);

    return response.json();
}

async function createAccount(emailValue, passwordValue) {
    const createAccountUrl = 'https://reqres.in/api/register';

    const createAccountData = {
        email: 'eve.holt@reqres.in',
        password: 'pistol'
    };

    const createAccountConfig = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': 'free_user_3Ex0RLGjQgptLlFTpJkPhoxoqKP'
        },
        body: JSON.stringify(createAccountData)
    };

    const response = await fetch(createAccountUrl, createAccountConfig);

    return response.json();
}
