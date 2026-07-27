let isLoginPage = true;

const toggleAuthButton = document.getElementById('toggle-auth-btn');
const loginButton = document.getElementById('login-btn');
const usernameField = document.getElementById('user-input');
const passwordField = document.getElementById('password-input');
const errorField = document.getElementById('error');

// Detect mode from URL
const params = new URLSearchParams(window.location.search);
const mode = params.get('mode');

if (mode === 'register') {
    const headerTitleElement = document.getElementsByClassName('header-title')[0];
    const forgotPasswordElement = document.getElementById('forgot-password');

    headerTitleElement.innerText = 'Create new account';
    forgotPasswordElement.style.display = 'none';
    loginButton.value = 'Sign up';
    toggleAuthButton.value = 'Switch to login page';

    isLoginPage = false;
}

toggleAuthButton.addEventListener('click', function (){
    const headerTitleElement = document.getElementsByClassName('header-title')[0];
    const forgotPasswordElement = document.getElementById('forgot-password');

    if (isLoginPage){
        headerTitleElement.innerText = 'Create new account';
        forgotPasswordElement.style.display = 'none';
        loginButton.value = 'Sign up';
        this.value = 'Switch to login page';
    }else{
        headerTitleElement.innerText = 'Login';
        forgotPasswordElement.style.display = 'inline';
        loginButton.value = 'Login';
        this.value = 'Switch to create new account';
    }

    isLoginPage = !isLoginPage;
});

const showError = (message) =>{
    errorField.style.display = 'block';
    errorField.innerText = message;
    errorField.style.color = 'red';
}

const validateUsername = (username) =>{
    return username.length >= 3;
}

const validatePassword = (password) =>{
    return password.length >= 6;
}

loginButton.addEventListener('click', function(event){
    event.preventDefault();

    const usernameValue = usernameField.value;
    const passwordValue = passwordField.value;

    errorField.style.display = 'none';

    if(usernameValue === '' || passwordValue === ''){
        showError('All fields are required!');
        return;
    }

    if(!validateUsername(usernameValue) || !validatePassword(passwordValue)){
        showError('Username or password is not valid!');
        return;
    }

    // Load accounts list
    let accounts = JSON.parse(localStorage.getItem('accounts')) || [];

    if(isLoginPage){
        // LOGIN
        const found = accounts.find(acc => acc.username === usernameValue);

        if(!found){
            showError('No account found with this username.');
            return;
        }

        if(found.password !== passwordValue){
            showError('Incorrect password!');
            return;
        }

        localStorage.setItem("loggedUser", usernameValue);
        window.location.href = 'feed.html';

    }else{
        // REGISTER
        const exists = accounts.find(acc => acc.username === usernameValue);

        if(exists){
            showError('This username already exists. Choose another one.');
            return;
        }

        accounts.push({
            username: usernameValue,
            password: passwordValue
        });

        localStorage.setItem('accounts', JSON.stringify(accounts));

        localStorage.setItem("loggedUser", usernameValue);
        window.location.href = 'feed.html';
    }
});

// Modal logic
const forgotPasswordLink = document.getElementById('forgot-password');
const resetModal = document.getElementById('reset-modal');
const closeResetButton = document.getElementById('close-reset-btn');

forgotPasswordLink.addEventListener('click', (event) => {
    event.preventDefault();
    resetModal.style.display = 'flex';
});

closeResetButton.addEventListener('click', () => {
    resetModal.style.display = 'none';
});
