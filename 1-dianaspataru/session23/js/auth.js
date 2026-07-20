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
  const headertitle = document.getElementById("headerTitle");
  const forgotPass = document.getElementById("forgotPassword");

  isLoginPage = !isLoginPage;

  if (isLoginPage) {
    headertitle.innerText = "Login";
    forgotPass.style.visibility = "visible";
    ref.loginButton.value = "Login";
    this.innerText = "Switch to create ew account";
  } else {
    headertitle.innerText = "Create new account";
    forgotPass.style.visibility = "hidden";
    ref.loginButton.value = "Sign up";
    this.innerText = "Switch to login";
  }
});

const showError = (message) => {
  ref.error.style.display = "block";
  ref.error.innerText = message;
  ref.error.style.color = "red";
};

const validateEmail = (value, pattern) => {
  return !!value.match(pattern);
};

const validatePassword = (value) => {
  return value.length > 3;
};

const clearInputs = () => {
  ref.emailField.value = "";
  ref.passwordField.value = "";
};

ref.loginButton.addEventListener("click", function () {
  event.preventDefault();

  const emailValue = ref.emailField.value;
  const passwordValue = ref.passwordField.value;
  const regexEmailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailValue === "" && passwordValue === "") {
    showError("All fields are required and must contain a value");
  } else {
    //email and pass has values
    if (
      validateEmail(emailValue, regexEmailPattern) &&
      validatePassword(passwordValue)
    ) {
      if (isLoginPage) {
        //login request
        login(emailValue,passwordValue).then(data =>{
            clearInputs()
            window.open('pages/feed.html', '_self')
        })
      } else {
        //sign up
        createAccount().then(data =>{
            window.open('pages/welcomPage.html','_self')
        })
      }
    } else {
      showError("Incorrect email or password");
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
  const createAccountUrl = "https://reqres.in/api/register";

  let createAccountData = {
    email: emailValue,
    password: passwordValue,
  };

  createAccountData = {"email": "eve.holt@reqres.in", "password": "pistol"}

  const createAccountConfig = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "free_user_3Ex0MOL80rYwgjm0xcTjDNMDfhn",
    },
    body: JSON.stringify(createAccountData),
  };

  const response = await fetch(createAccountUrl, createAccountConfig);
  return response.json();
}
