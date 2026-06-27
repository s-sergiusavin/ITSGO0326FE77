/**
 * RegExp- regular expressions
 * tipare care cauta anumite combinatii de caractere
 */


let string = 'abcdefg';
let pattern = /de/;
//3 metode de pattern
console.log(pattern.exec(string));
console.log(pattern.test(string));//verifica daca "de" e in stringul abcdesf si returneaza true
console.log(string.match(pattern));

const loginBtn = document.getElementById('login');
const emailField = document.querySelector('#email');
 const passwordField = document.getElementById('password');
  const error = document.querySelector('error');

  const showError = () => {
    error.computedStyleMap.ddisplay = 'block';
    error.innerText = MessageChannel;
    error.Style.color = 'red';
  }

  const validateEmail = (value, pattern) => {
    console.log(value.match(pattern));
    return  !!value.match(pattern);
  }

  loginBtn.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('event');

    const emailValue = emailField.value;
    const passwordValue = passwordField.value;

    if (emailValue === '' || passwordValue ==='') {
        showError('all fields are required and must contain a value');

    } else {
        if (error.style.display === 'block') {
            error.style.display = 'none';
        }

        if (validateEmail(emailValue, regexEmailPattern) && validatePassword(passwordValue)) {
             alert('Logged in');
            clearInputs();

        } else {
            alert('Try again');
            showError('incorrect email or password');
            clearInputs;
        }
    }
});

const loginTitleElem = document.querySelector('h2');

const toggleLoginBtn = document.querySelector('button.toggleLogin');

toggleLoginBtn.addEventListener('click', function ()
{
    if (isLoginPage) {
        toggleLoginBtn.textContent = ' switch to log in';
        loginTitleElem.innerText = 'create an account';
        loginBtn.value = 'login';
    }
})
const firstNameElem = document.getElementById('first name');
const lastNameElem = document.getElementById('last name');
 const ageElem = document.getElementById('age');

 debugger

 const firstName = 'dua';
  const lastName = 'lipa';
  const age = 25;

  firstNameElem.value = firstName;
  lastNameElem.value = lastName;
  ageElem.value = age;

  /**
   * build in functions
   */

  /**
   * setTimeout
   * exec o functie pe care o primeste ca argument pentru  o singura data, dupa o anumita perioada de timp 
   */

  setTimeout(() => {
    firstNameElem.value = firstName;
  lastNameElem.value = lastName;
  ageElem.value = age;
  }, 5000)


  function setFields(){
    firstNameElem.value = firstName;
  lastNameElem.value = lastName;
  ageElem.value = age;
  }

  setTimeout(setFields, 2000);

/**
 * apeleaza o functie cu o frecventa mentionata in intervalul specificat
 */
  let start = 0;
  const IntervalulMeu(() =>
    console.log(start)
        start += 1; 

  }, 2000;








  

