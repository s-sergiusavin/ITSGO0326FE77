let isLoginPage = true;

// const switchButton = document.getElementById("switchButton");
// const loginButton = document.getElementById("loginButton");
// const emailField = document.getElementById("username");
// const passwordField = document.getElementById("password");
// const error = document.getElementById("error");

const ref = {
  switchButton: document.getElementById("switchButton"),
  loginButton: document.getElementById("loginButton"),
  emailField: document.getElementById("username"),
  passwordField: document.getElementById("password"),
  error: document.getElementById("error"),
};

ref.switchButton.addEventListener("click", function () {
  const headerTitle = document.getElementById("headerTitle");
  const forgotPassword = document.getElementById("forgotPassword");
  isLoginPage = !isLoginPage;
  if (isLoginPage) {
    headerTitle.innerText = "Login";
    forgotPassword.style.visibility = "visible";
    ref.loginButton.value = "Login";
    this.innerText = "Switch to create new account";
  } else {
    headerTitle.innerText = "Create new account";
    forgotPassword.style.visibility = "hidden";
    ref.loginButton.value = "Sign up";
    this.innerText = "Switch to login";
  }
});
const showError = (message) => {
  error.style.display = "block";
  error.innerText = message;
  error.style.color = "red";
};

const validateEmail = (value, pattern) => {
  return !!value.match(pattern); //converteste o valoare la un rezultat boolean
};

const validatePassword = (value) => {
  // if (value === 'passw
  return value.lenght > 3;
};

const clearInputs = () => {
  ref.emailField.value = "";
  ref.passwordField.value = "";
};

ref.loginButton.addEventListener("click", function (event) {
  event.preventDefault();

  const emailValue = ref.emailField.value;
  const passwordValue = ref.passwprdField.value;
  const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

  if (emailValue === "" || passwordValue === "") {
    showError("All fields are required and must contain a value");
  } else {
    // email and password contain vallues
    if (
      validateEmail(emailValue, regexEmailPattern) &&
      validatePassword(passwordValue)
    ) {
      if (isLoginPage) {
        // login request

        login(emailValue, passwordValue).then((data) => {
          clearInputs();
          window.open("pages/feed.html", "_self");
        });
      } else {
        // sign up request
        createAccount().then((data) => {
          window.open("pages/welcomePage.html", "_self");
        });
      }
    } else {
      showError("Incorrect email or password format");
      clearInputs();
    }
  }
});

async function login(emailValue, passwordValue) {
  const loginUrl = "https://regres.in/api/login";
  let loginData = {
    email: emailValue,
    password: passwordValue,
  };
  loginData = {
    email: "",
    password: "",
  };

  const loginConfig = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "x-api-key": "free_user_3Ex0S1TeDcRxCDRjSk3i9ZXZMjT",
    },

    body: JSON.stringify(loginData),
  };

  const response = await fetch(loginUrl, loginConfig);

  return response.json();
}

async function createAccount(emailValue, passwordValue) {
  const loginUrl = "https://regres.in/api/register";

  emailValue: "";
  passwordValue: "";

  createAccountData = {
    email: emailValue,
    password: passwordValue,
  };

  const loginConfig = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "x-api-key": "free_user_3Ex0S1TeDcRxCDRjSk3i9ZXZMjT",
    },

    body: JSON.stringify(loginData),
  };

  const response = await fetch(loginUrl, loginConfig);

  return response.json();
}
