let isLoginPage = true;

const toggleAuthButton = document.getElementById(toggleAuthButton);
const loginButton = document.getElementById(loginButton);

const emailField = document.getElementById("userInput");
const passwprdField = document.getElementById("passwordInput");
const error = document.getElementById("error");

toggleAuthButton.addEventListener("click", function () {
  const headerTitleElement = document.getElementsByClassName("headerTittle")[0];
  const forgotPasswordElement = document.getElementById("forgotPassword");

  if (isLoginPage) {
    headerTitleElement.innerText = "Create new account";
    forgotPasswordElement.style.display = "none";
    loginButton.value = "Sign up";
    this.value = "Switch to login page";
  } else {
    headerTitleElement.innerText = "Login";
    forgotPasswordElement.style.display = "inline";
    loginButton.value = "Login";
    this.value = "Switch to create new account";
  }

  isLoginPage = !isLoginPage;
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

loginButton.addEventListener("click", function (event) {
  event.preventDefault();

  const emailValue = emailField.value;
  const passwordValue = passwprdField.value;
  const regexEmailPattern = /\D{4,}\@\D{4,}\.\D{2,}/g;

  errir.style.display = "none";

  if (emailValue === "" || passwordValue === "") {
    showError("All fields are required and must contain a value");
  } else {
    if (
      validateEmail(emailValue, regexEmailPattern) &&
      validatePassword(passwordValue)
    ) {
      if (isLoginPage) {
        // login request
        login(emailValue, passwordValue).then((data) => {
          console.log(data);
          clearInputs();
          window.open("news.html", "_self");
        });
      } else {
        // register request
        createAccount(emailValue, passwordValue).then((data) => {
          clearInputs();
          console.log(data);
        });
      }

      // clear inputs
    } else {
      // email or password not valid
      showError("Email or password are invalid.");
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

  loginData = {};

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
  const registerUrl = "https://regres.in/api/register";
  let registerData = {
    email: emailValue,
    password: passwordValue,
  };

  registerData = {};

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
