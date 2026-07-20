let isLoginPage = true;

const toggleAuthButton = document.getElementById("toggleAuthButton");
const loginButton = document.getElementById("loginButton");

const emailField = document.getElementById("userInput");
const passwordField = document.getElementById("passwordInput");

const error = document.getElementById("error");

toggleAuthButton.addEventListener("click", function () {
  const headerTitleElement = document.getElementsByClassName("headerTitle")[0];
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
});

const showError = (message) => {
  error.style.display = "block";
  error.innerText = message;
  error.style.color = "red";
};

const validateEmail = (value, pattern) => {
  return !!value.match(pattern);
};

const validatePassword = (value) => {
  return value.length > 3;
};

const clearInputs = () => {
  emailField.value = "";
  passwordField.value = "";
};

loginButton.addEventListener("click", function (event) {
  event.preventDefault();

  const emailValue = emailField.value;
  const passwordValue = passwordField.value;

  const regexEmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  error.style.display = "none";

  if (emailValue === "" || passwordValue === "") {
    showError("All fields are requierd");
  } else {
    if (
      validateEmail(emailValue, regexEmailPattern) &&
      validatePassword(passwordValue)
    ) {
      if (isLoginPage) {
        //login request
        login(emailValue, passwordValue).then((data) => {
          console.log(data);
          clearInputs();
          window.open('news.html', '_self')
        });
      } else {
        //register request
        createAccount(emailValue, passwordValue).then((data) => {
          clearInputs();
          console.log(data);
          window.open('news.html', '_self')
        });
      }
    } else {
      showError("fields are not correct");
      clearInputs();
    }
  }
});

async function login(emailValue, passwordValue) {
  const loginUrl = "https://reqres.in/api/login";
  let loginData = {
    email: emailValue,
    password: passwordValue,
  };

  loginData = { email: "eve.holt@reqres.in", password: "cityslicka" };

  const loginConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "free_user_3Ex0MOL80rYwgjm0xcTjDNMDfhn",
    },
    body: JSON.stringify(loginData),
  };

  const response = await fetch(loginUrl, loginConfig);
  return response.json();
}

async function createAccount(emailValue, passwordValue) {
  const registerUrl = "https://reqres.in/api/register";
  let registerData = {
    email: emailValue,
    password: passwordValue,
  };

  registerData = { email: "eve.holt@reqres.in", password: "pistol" };

  const registerConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "free_user_3Ex0MOL80rYwgjm0xcTjDNMDfhn",
    },
    body: JSON.stringify(registerData),
  };

  const response = await fetch(registerUrl, registerConfig);
  return response.json();
}
