/**
 * Scope
 */

let testLet = "let-global";
const testConst = "const-global";
var testVar = "var-global";

//let & const cannot be redeclared in the same scope
//let testLet = '3';
//const testConst = '5';
// var testVar = '3';

// if (true) {
//     let testLet = 'let-if';
//     const testConst = 'const-if';
//     var testVar = 'var-if';
//
//     console.log(testLet);
//     console.log(testConst);
//     console.log(testVar);
//     if (true) {
//         console.log('---- IF 2 ----');
//         let testLet = 'let-if2';
//         const testConst = 'const-if2';
//         var testVar = 'var-if2';
//
//         console.log(testLet);
//         console.log(testConst);
//         console.log(testVar);
//         console.log('---- END IF 2 ----');
//     }
// }

// console.log('------- END IF -------');

// console.log(testLet);
// console.log(testVar);
// console.log(testConst);

let outsideVar = "Outside variable";

if (true) {
  let outsideVar = "Inside variable";
  console.log(outsideVar);
}
console.log(outsideVar);

if (true) {
  let declaredInIf = "Declared in if";
  console.log(declaredInIf);
}

// console.log(declaredInIf);

let globalVariable = "unchanged";
function addTwo(number) {
  globalVariable = "changed!!!";
  console.log(number + 2);
}

// console.log(globalVariable);
// addTwo(3);
// console.log(globalVariable);

let needMoney = true;
if (needMoney) {
  addTwo(5);
}

console.log(globalVariable);

/**
 * Hoisting
 */

showTimisoara();
function showTimisoara() {
  console.log("Timisoara");
}
showTimisoara(); // poate fi apelata inainte de declaratie HOISTING

// console.log(testLetHoisting);
// console.log(testConstHoisting);
console.log(testVarHoisting);

let testLetHoisting = "Let is not hoisted";
const testConstHoisting = "Const is not hoisted";
var testVarHoisting = "Var is hoisted";

// showCluj(); // eroare - nu poate fi apelata inainte de declaratie/initializare
const showCluj = () => {
  console.log("Cluj");
};
showCluj();

const showBrasov = function () {
  console.log("Brasov");
};
showBrasov();

/**
 * Returned value of functions
 */

const convertLeiToEur = (value) => {
  const convertedValue = value * 5;
  // return `Ai schimbat ${value} EUR in ${convertedValue} RON.`;
  console.log("By default se returneaza undefined");
};
const message = convertLeiToEur(10);
console.log(message);

const showHowReturnWorks = () => {
  return "Aceasta este valoare returnata";

  console.log("Dupa return. Acest cod nu se va executa");

  return undefined; // Fictiv. Ne imaginam ca asta se intampla la finalul oricarei functii
};

const message2 = showHowReturnWorks();
console.log(message2);

// Arrow function syntax exception

// const addFive = (number) => {
//     return number + 5;
// };

// Daca aven un singur parametru, parantezele rotunde sunt optionale. Pot sa lipseasca.
// Daca aven o singura expresie, parantezele acolade pot sa lipseasca, iar returnul este implicit

const addFive = (number) => number + 5;

/**
 * Functions with default params
 * parametrii default fucntioneaza la fel pentru toate tipurile de functii
 */

const makeBurger = (ingredient = "vita") => {
  if (ingredient === undefined) {
    ingredient = "porc";
  }
  console.log("Burgerul meu preferat este cu " + ingredient);
};
makeBurger("pui");
makeBurger(); // ingredient va fi undefined
makeBurger(5);
makeBurger("peste");
const designCar = (power = 150, color, brand = "vw") => {
  console.log(
    `Ai creat masina ${brand} care are culoarea ${color} si are ${power} cai putere`,
  );
};

designCar(200, "red", "audi");
designCar();
designCar(undefined, undefined, "porche");

let number5 = 5;
let string5 = "5";

if (number5 === string5) {
  console.log("egale");
} else {
  console.log("inegale");
}

// Ternary operator ===> conditie ? expresie pt adevar : expresie pt fals
number5 === string5 ? console.log("egale") : console.log("inegale");

// const rateMovie = (movie) => {
//   if (movie === "The godfather") {
//     console.log("Filmul e de nota 10");
//   } else if (movie === "The dark knight") {
//     console.log("Filmul e de nota 9");
//   } else if (movie === "The shawshank redemption") {
//     console.log("Filmul e de nota 8");
//   } else if (movie === "The lord of the rings") {
//     console.log("Filmul e de nota 7");
//   } else if (movie === "The matrix") {
//     console.log("Filmul e de nota 6");
//   } else if (movie === "The avengers") {
//     console.log("Filmul e de nota 5");
//   } else {
//     console.log("Te rugam sa introduci numele filmului");
//   }
// };

rateMovie("The godfather"); // Filmul e de nota 10
rateMovie("The dark knight"); // Filmul e de nota 9
rateMovie("The shawshank redemption"); // Filmul e de nota 8
rateMovie("The lord of the rings"); // Filmul e de nota 7
rateMovie("The matrix"); // Filmul e de nota 6
rateMovie("The avengers"); // Filmul e de nota 5
rateMovie(); // Te rugam sa introduci numele filmului

switch (movie) {
  case "The godfather":
    console.log("Filmul e de nota 10");
    break;
  case "The dark knight":
    console.log("Filmul e de nota 9");
    break;
  case "The shawshank redemption":
    console.log("Filmul e de nota 8");
    break;
  case "The lord of the rings":
    console.log("Filmul e de nota 7");
    break;
  case "The matrix":
    console.log("Filmul e de nota 6");
    break;
  case "The avengers":
    console.log("Filmul e de nota 5");
    break;
  default:
    console.log("Te rugam sa introduci numele filmului");
}

// Objects with functions as properties

const complexObject = {
  name: "Ana-Maria",
  adress: {
    city: "Brasov",
    zip: 500500,
  },
  favouriteMovies: [
    "The godfather",
    "The dark knight",
    "The shawshank redemption",
  ],
  hasPassport: true,
  hobbies: ["travel", "eat", "drink"],
  watchMovie: function (movie) {
    console.log("Uita-te la " + movie);
  },
  sleep: () => {
    console.log("Du-te la culcare");
  },
  Work() {
    console.log("Mergi la munca");
  },
  age: 25,
};

console.log(complexObject.name);
console.log(complexObject.adress.city);
console.log(complexObject.favouriteMovies[0]);
complexObject.watchMovie(complexObject.favouriteMovies[1]);
complexObject.sleep();
complexObject.Work();

console.clear();
console.log(console);
console.warn("Acesta este un warning");
console.error("Aceasta este o eroare");

console.log(complexObject.oriceDenumireImiTrecePrinCap); // undefined
// console.log(complexObject.oriceDenumireImiTrecePrinCap.ceva); //eroare pt ca nu exista undefined.ceva/undefined este o valoare primitiva, nu un obiect, deci nu putem accesa proprietati pe ea

// Flip a coin

let valoriMoneda = ["cap", "stema"];
console.log(valoriMoneda[0]); // cap
console.log(valoriMoneda[1]); // stema
console.log(Math.random()); // genereaza un numar random intre 0 si 1
console.log(Math.random());
console.log(Math.random());
console.log(Math.round(Math.random())); // 0 sau 1

if (valoriMoneda[Math.round(Math.random())] === "cap") {
  console.log("A iesit cap");
} else {
  console.log("A iesit stema");
}

// Palindrom game

const palindrome = [1, 9, 7, 8, 7, 9, 1];

const checkPalindrome = (array) => {
  for (let i = 0; i < array.length / 2; i++) {
    if (array[i] !== array[array.length - 1 - i]) {
      return "Arrayul nu este palindrom";
    }
  }
  return "Arrayul este palindrom";
};

console.log(checkPalindrome(palindrome));
