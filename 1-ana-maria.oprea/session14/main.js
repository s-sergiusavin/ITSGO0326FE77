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
 * Strings
 * siruri de caractere
 */

let myString = "Acesta este un mesaj.";
//myString = 'O'heary'; - da eroare
myString = 'O\'heary';
myString = "O'heary";

myString = `Rezultatul este ${result}`;
myString = `Rezultatul pt 2 + 2 + 1 este ${2 + 2 + result}`;

console.log(myString);

/** 
 * Booleans
 */

let lightsOn = false;

/**
 * Array
 * liste
 * vectori
 */

const myArray = ['string', 5, undefined, null, true, false[5.3, 1], { name: 'Ana-Maria' }];

console.log(myArray[1]); //5
console.log(myArray[6][1]); //1
console.log(myArray[7].name); //Ana-Maria

/**
 * Objects
 * 
    */

const myObj = {
    burger: 'Big Tasty',
    'juice': 'Cola zero',
    'french-fries': 'Big Size',
    adress ={
        street: 'Street',
        number: 1
    },
    "sauce": ["Ketchup", "Mayo"]
};

console.log(myObj.juice); //Cola zero
console.log(myObj['french-fries']); //Big Size
console.log(myObj.sauce);

/**
 * Loops (bucle)
 * structuri iterative
 */

let marksOf10Lei = 0;
//Expresiile de mai jos fac acelasi lucru
//marksOf10Lei = marksOf10Lei + 1;
//marksOf10Lei += 1;
//marksOf10Lei++;
//marksOf10Lei+= 3;

let total = 10;
marksOf10Lei = marksOf10Lei + 1;
marksOf10Lei = marksOf10Lei + 1;
//...
marksOf10Lei = marksOf10Lei + 1;

console.log(marksOf10Lei);

//while loop

while (marksOf10Lei < total) {
    marksOf10Lei += 1;
};

console.log(`Avem ${marksOf10Lei} bacnote de 10 lei`);

let roomTemperature = 19;
let desiredTemperature = 24;

while (roomTemperature < desiredTemperature) {
    roomTemperature++;
};

let isAcOn = false;

while (roomTemperature > desiredTemperature) {
    roomTemperature--;
};

isAcOn = false;

//do {
    //action
//} while()

//for loop

//for (initializare; conditie; operatiune la finalul executiei)
    //codul din interiorul parantezelor acolade va fi denumit bloc de executie

let marksOf5Lei = 0;
let total5Lei = 5;

const index = 7;

for (let index = 0; index < total5Lei; index++) {
    console.log(index);
    marksOf5Lei+= 1;
};

let countries = ['Romania', 'Bulgaria', 'Ucraina', 'Turcia'];
console.log(countries[0]); //Romania
console.log(countries[1]); //Bulgaria
console.log(countries[2]); //Ucraina
console.log(countries[3]); //Turcia

for (let index = 0; index < countries.length; index++) {
    console.log(countries[index]);
};

console.log('---Inversate---');

for (let index = countries.length - 1; index >= 0; index--) {
    console.log(countries[index]);
};

// if/else - conditional structures/blocks

// == - verificam egalitatea a doua valori
// === - verifica egalitatea a doua valori si tipul acestora (recomandat sa folosim acest operator mereu)

let val1 = 5;
let val2 = '5';

if (val1 === val2) {
    console.log('Variabilele sunt egale');
} else {
    console.log('Variabilele nu sunt egale');
}

//Truthy vs falsy values
//Falsy: 0, '', false, null, undefined

//!== - verifica inegalitatea a doua valori sau tipul acestora

if (val1 !==val2) {
    console.log('Variabilele nu sunt egale');
} else {
    console.log('Variabilele sunt egale');
}

if ('') {
    console.log('Valoarea din conditie este adevarata');
} else {
    console.log('Valoarea din conditie este falsa');
} //o sa arate fals; daca punem ' ' (spatiu) o sa arate adevarat

if ([]) { //sau if({})
    console.log('Valoarea din conditie este adevarata');
} else {
    console.log('Valoarea din conditie este falsa');
} //o sa arate adevarat pentru ca un array gol sau un obiect gol sunt considerate valori adevarate

let temperature = 17;
let idealTemperature = 24;
let maxTemperature = 35;

if (temperature >= idealTemperature) {
    if (temperature < maxTemperature) {
        console.log('Temperatura este ideala');
    } else {
        console.log('Afara este mult prea cald');
    }
} else {
    console.log('Afara este urat');
}

//Logical operators
// && - and (si) - daca cel putin o conditie este falsa, totul este fals aka toate conditiile trebuie sa fie adevarate pentru ca rezultatul sa fie considerat adevarat
// || - or (sau) - daca cel putin o conditie este adevarata, totul este adevarat

if (temperature >= idealTemperature && temperature < maxTemperature) {
    console.log('Afara este superb');
} else {
    console.log('Afara este urat');
}

let pizzaPrice = 35;
let hasGorgonzola = true;

//hasGorgonzola este totuna cu hasGorgonzola === true
//!hasGorgonzola este totuna cu hasGorgonzola !== true

if (pizzaPrice <= 40 && (hasGorgonzola && pizzaPrice <= 45)) {
    console.log('Pizza are un pret decent');
} else {
    console.log('Pretul pentru pizza este exagerat');
}


// Ternary operator - operator ternar - sunt 3 parti
// conditie ? valoare de adevar : valoare in caz de fals
val1 = 5;
val2 = '5';
val1 === val2 ? console.log('Egale') : console.log('Diferite');

// expresie identica cu cea din operatorul ternar

if (val1 === val2) {
    console.log('Egale');
} else {
    console.log('Diferite');
}

/**
 * Functions
 */

//Function declaration: function keyword urmat de numele funtiei, paranteze rotunde, paranteze acolade

function logSometring() {
    console.log('Functia logSomething a fost apelata/invocata/called');
}

logSometring(); //apelarea/invocarea functiei
logSometring; //se mentioneaza functia, nu se apeleaza


//Function expression

const doSomething = function () {
    console.log('Do something');
}

doSomething();


//Arrow function

const doArrowFunction = () => {
    console.log('Do arrow function');
}

doArrowFunction();

// Function with params
let number = 800; //variabila number nu va interfera cu parametrul cu aceeasi denumire

function addToFive(number) { //number se numeste parametru (param)
    let result = 5 + number;
    console.log(result);
}

addToFive(3);
addToFive(10);

const substractFrom100 = (number) => {
    console.log(`Rezultatul este ${100 - number}`);
}

substractFrom100(20);
substractFrom100('Marcel'); // NaN - Not a Number, modul js-ului de a ne spune ca am facut o operatie matematica unde am folosit ceva care nu este un numar
substractFrom100('5');

console.log(100 + '5');
console.log(100 + 'Marcel');
console.log(100 + '' + 3);