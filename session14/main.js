/**
 * Numbers
 */

let myNumber = 5;
let secondNumber = 2;
let result;

result = myNumber + secondNumber;
result = myNumber - secondNumber;
result = myNumber * secondNumber;
result = myNumber / secondNumber;
result = myNumber % secondNumber;

console.log(result);

/**
 * String
 * siruri de caractere
 */

let myString = "Acesta este un mesaj";
myString = "O'heary";
myString = "O'heary";

myString = `Rezultatul este ${result}`;
myString = `Rezultatul pt 2 + 2 + 1 este ${2 + 2 + result}`;

console.log("myString");

/**
 * Boolean
 */

let lightOn = false;

/**
 * Array
 * liste
 * vectori
 */

const myArray = [
  "String",
  5,
  undefined,
  null,
  true,
  false,
  [5.3, 1],
  { name: "Sergiu" },
];

console.log(myArray[1]); // 5
console.log(myArray[6][1]); // 1
console.log(myArray[7].name); // Sergiu

/**
 * Objects
 */

const my0bj = {
  burger: "Big Tasty",
  juice: "Cola Zero",
  "french-fries": "Big Size",
  address: {
    street: "Street",
    number: 1,
  },
  sauce: ["Ketchup", "Mayo"],
};

console.log(my0bj.juice);
console.log(my0bj["french-fries"]);
console.log(my0bj.sauce);

/**Loops (bucle)
 * structuri iterative
 */

let marksOf10lei = 0;
// Expresiile de mai jos fac acelasi lucru
//  marksOf10lei = marksOf10lei + 1;
//  marksOf10lei += 1;
//  marksOf10lei ++;
//  marksOf10lei += 3;

let total = 10;
// marksOf10lei = marksOf10lei + 1;
// marksOf10lei = marksOf10lei + 1;
// // ...
// marksOf10lei = marksOf10lei + 1; // a 10 -a oara ca sa ajungem la total

console.log(marksOf10lei);

// while loop

while (marksOf10lei < total) {
  marksOf10lei += 1;
}

console.log(`Avem ${marksOf10lei} bancnote de 10 lei`);

let roomTemperature = 19;
let desiredTemperature = 24;

while (roomTemperature < desiredTemperature) {
  roomTemperature++;
}

let isAcOn = true;

while (roomTemperature > desiredTemperature) {
  roomTemperature--;
}

isAcOn = false;

// do {
//   // action
// } while()

// For loop

// for (initializare ; conditie ; operatiune la finalul executiei)
// codul din interiorul parantezelor acolade va fi denumit bloc de executie

let marksOf5lei = 0;
let total5lei = 5;

// const index = 7;

for (index = 0; index < total5lei; index++) {
  console.log(index);
  marksOf5lei += 1;
}

let countries = ["Romania", "Bulgarie", "Ucraina", "Turcia"];
console.log(countries[0]);
console.log(countries[1]);
console.log(countries[2]);
console.log(countries[3]);

for (let index = 0; index < countries.length; index++) {
  console.log(countries[index]);
}

console.log("---Inversate----");

for (let index = countries.length - 1; index >= 0; index--) {
  console.log(countries[index]);
}

// If/else - conditional structures/blocks

// == verifica egalitatea a doua valori
// === verifica egalitatea a doua valori si tipul acestora

let val1 = 5;
let val2 = "5";

if (val1 == val2) {
  console.log("Variabilele sunt egale");
} else {
  console.log("Variabilele nu sunt egale");
}

// Truthy vs Falsy values
// Falsy: 0, '', false, null, undefined

if (val1 !== val2) {
  console.log("Variabilele nu sunt egale");
} else {
  console.log("Variabilele sunt egale");
}

if ("") {
  console.log("Valoarea din conditie este adevarata");
} else {
  console.log("Valoarea din  conditie este falsa");
}

let temperature = 530;
let idealTemperature = 24;
let maxTemperature = 35;

if (temperature >= idealTemperature) {
  if (temperature < maxTemperature) {
    console.log("Temperatura este ideala");
  } else {
    console.log("Afara este mult prea cald");
  }
} else {
  console.log("Afara este urat");
}

// Logical operators
// && - and (si) - daca cel putin o conditie este falsa, totul este fals asa toate conditiile trebuie sa fie adevarate
// pt ca rezultatul sa fie considerat adevarat

// || - or (sau) - daca cel putin o conditie este adevarata, totul este adevarat

if (temperature >= idealTemperature && temperature < maxTemperature) {
  console.log("Afara este superb");
} else {
  console.log("Afara este urat");
}

let pizzaPrice = 35;
let hasGorgonzola = true;

// hasGorgonzola este totuna cu hasGorgonzola === true
// !hasGoegonzola este totuna cu hasGorgonzola !== true

if (pizzaPrice <= 40 && hasGorgonzola && pizzaPrice <= 45) {
  console.log("Pizza are un pret decent");
} else {
  console.log("Pretu pentru pizza este exagerat");
}

// Ternary operator - sunt 3 parti
// conditie ? valoarea de adevar : valoare in caz de fals

val1 = 5;
val2 = "5";
val1 === val2 ? console.log("Eagle") : console.log("Diferite");

// expresie identica cu cea din operatorul ternar

if (val1 === val2) {
  console.log("Eagle");
} else {
  console.log("Diferite");
}

/**
 * Functions
 */

//Function declaration: function keyword urmat de numele functiei, paranteze rotunde, paranteze acolade

function logSomething() {
  console.log('Functia logSomething() a fost apelata/invocata/called');
}

logSomething();
logSomething();

// Function expresion

const doSomething = function () {
  console.log('Do something');
}

doSomething();

// Arrow function

const doArrowFunction = () => {
  console.log('Do arrow function');
}

doArrowFunction();

// Functions with params
let number = 800; // variabila number nu va interfera cu parametrul cu acceasi denumire
function addToFive(number) { // number se numeste parametru (param)
  let result = 5 + number;
  console.log(result);
}

addToFive(3);
addToFive(10);

const substractFrom100 = (number) => {
  console.log(`Rezultatul este ${100 - number}`);
}

substractFrom100(20);
substractFrom100('Marcel'); // NaN - not a number, modul js-ului de a ne spune
// ca am facut o operatie matematica unde am folosit ceva care nu este un numar
substractFrom100('5');

console.log(100 + '5');
console.log(100 + 'marcel');
console.log(100 + '' + 3);
