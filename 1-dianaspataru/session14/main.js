//Recap

let myNumber = 5;
let secondNumber = 2;
let result;

result = myNumber + secondNumber;

console.log(result);

//Loops

let marksOf10Lei = 0;

// marksOf10Lei = marksOf10Lei + 1;
// marksOf10Lei += 1;
// marksOf10Lei++;
// marksOf10Lei += 3;

let total = 10;

console.log(marksOf10Lei);

//while loop

// while(marksOf10Lei <10){
//     marksOf10Lei +=1;
// }

// console.log(`Avem ${marksOf10Lei} bancnote`);

let roomTemparature = 19;
let desiredTemperature = 24;

let isAcOn = false;

//FOR loop

// for(initializare, conditie, operatiune la finalul executiei)
let marksOf5Lei = 0;
let total5Lei = 5;

const index = 7;

for (let index = 0; index < total5Lei; index++) {
  console.log(index);
  marksOf5Lei += 1;
}

let countries = ["romania", "bulgaria", "ucraina", "turcia"];

for (let index = 0; index < countries.length; index++) {
  console.log(countries[index]);
}

console.log("--------inversate----------");

for (let index = countries.length - 1; index >= 0; index--) {
  console.log(countries[index]);
}

//if/else

// ==  verifica valoarea  doua valori
// === verifica valoare a doua valori si tipul acestora, mandatory to use

let val1 = 5;
let val2 = "5";

if (val1 === val2) {
  console.log("say something");
} else {
  console.log("nothing to say");
}

// truthy vs falsy
// falsy: 0, '',  false, null, undefined

if (val1 !== val2) {
  console.log("say something");
} else {
  console.log("nothing to say");
}

if ({}) {
  console.log("valoarea  este adevarata");
} else {
  console.log("valoarea este falsa");
}

let temperature = 530;
let idealTemperature = 24;
let maxTemp = 35;

if (temperature >= idealTemperature) {
  if (temperature < maxTemp) {
    console.log("OK");
  } else {
    console.log("NOK");
  }
} else {
  console.log("NOK1");
}

if (temperature >= idealTemperature && temperature < maxTemp) {
  console.log("OK");
} else {
  console.log("NOK1");
}

let pizzaPrice = 35;
let hasGor = true;

if (pizzaPrice <= 40 && hasGor && pizzaPrice <= 45) {
  console.log("pret decent");
} else {
  console.log("pret exagerat");
}

// ternary operator - sunt 3 parti
// conditie ? valoare de adevar : valoare in caz de fals

val1 = 5;
val2 = "5";

val1 === val2 ? console.log("egale") : console.log("diferite");

//expresie identica cu cea din operatorul ternar

//functions

//function declaration  -> function keyword urmat de numele functiei (){}
//                      -> helper function apelata oriunde in cod

function logSomething() {
  console.log("functia a fost apelata/invocata/called");
}

logSomething();

// function expression

const doSomething = function () {
  console.log("do something");
};

doSomething();

//arrow function

const doArrowFunction = () => {
  console.log("do arrow function");
};

doArrowFunction();

// functions with params

function addToFive(number) { //number => parametru (param)
  let result = 5 + number;
  console.log(result)
}

addToFive(3);
addToFive(10);

const substractFrom100 = (number) => {
 console.log(`rezultatul este ${100-number}`)
}

substractFrom100(20);
substractFrom100('Marcel');// not a number -> NaN
substractFrom100('5');