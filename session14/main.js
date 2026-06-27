
//Numbers
 
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
 * String-valoarea lui e intre ghilimele, care pot fi simple, duble sau backtick
 * siruri de caractere
 */

let myString = "acesta e un mesaj";
myString = 'o\'heary';
myString = "o'heary";

myString = `rezultatul este ${result}`;
myString =`rezultatul pt 2+ 2 + 1 este ${2 + 2 + result}`

console.log(myString);

/**
 * Boolean
 */

let lightsOn = false;

/**
 * Array
 * liste
 * vectori
 */


const myArray = ['string', 5, undefined, null, true, false, [5.3, 1], {name: 'Ionut'}];

console. log(myArray[1]); // 5 in consola
console. log(myArray[6][1]); // 1 in consola
console. log(myArray[7].name); // ionut in consola

/**
 * Objects
 */

const myObj = {
    burger: 'big tasty',
    'juice': 'cola-zero',
'french-fries': 'big-size',
adress: {
      street:'street',
      number: 1
},
 sauce: ['ketchup', 'mayo']
};  

console.log(myObj.juice);
console.log(myObj["french-fries"]);


/**
 * Loops (bucle)
 * structuri iterative
 */

let marksOf10lei = 0;
//expresiile d mai jos fac acelasi lucru
marksOf10lei = marksOf10lei +1;
marksOf10lei +=1;
marksOf10lei++;
//ca sa vad in consola 1
console.log(marksOf10lei);

//while loop
whilw (marksOf10lei , total){
    marksOf10lei += 1;

}

console.log('Avem ${marksOf10lei} bancnote de 10 lei');

let roomTemperature = 19;
let desiredTemperature = 24;

while (roomTemperature < desiredTemperature) {
 
    roomTemperature ++;
}

let isAcOn = true;
 
while (roomTemperature > desiredTemperature) {
 
    roomTemperature --;
}

let isAcOn = false;


//For loop

//for (initializare ; conditie ; operatiune la finalul executiei)
    //codul din interiorul parantezelor va fi denumit bloc de executie

let marksOf5lei = 0;
let total5lei = 5;

for ( index = 0; index < total5lei; index++) {
    console. log(index);
    marksOf5lei +=1;

}


let countries = ['Romania', 'Bulgaria', 'Ucraina', 'Turcia'];

console.log(countries[0]);
console.log(countries[1]);
console.log(countries[2]);
console.log(countries[3]);

//sau, daca avem 1000 tari putem trece:

for (let index = 0; index < countries.length; index++) {
    console.log(countries[index]);
} 

console.log('---Inversate---');

//apar in consola tarile invers

for (let index= countries.length - 1; index >=0; index--){
    console.log(countries[index]);
}

// If/else-conditional structures/blocks

// == verifica egalitatea a 2 valori 
// ===verifica egalitatea a 2 valori si tipul acestora

let vall1 = 5;
let vall2 = '5';

if (val1 == val2) {
    console.log('variabilele sunt egale');

} else {
    console.log('variabilele nu sunt egale');
}

//truthy vs falsy values
//falsy:0, '' , false, null, undefined

if(val1 !==val2) {
    console.log('variabilele nu sunt egale');

} else {
    console.log('variabilele  sunt egale');
}
// !-diferit

if(' ') {
     console.log('valoarea din conditie e adevarata');
} else {
    console.log('valoarea din conditie e falsa');
}
//un spatiu intre '' este o valoare

//''-string
//()-array
//{}-object

let temperature = 17;
let idealTemperature = 24;
let maxTemperature = 35;

if (temperature >= idealTemperature) 
     if (temperature < maxTemperature) {
        console.log('Temperatura este ideala');
    } else {
    console.log('Afara e cald');
 } else {
    console.log('Afara e urat');
}

//logical operators

//&&-and (si)-daca cel putin o conditie e falsa, totul este fals aka toate conditiile trbuie sa fie adevarate 
//pt ca rezultatul sa fie considerat adevarat

//||-or (sau)-daca cel putin o conditie e adevarata, totul e adevarat

if (temperature >= idealTemperature && temperature < maxTemperature) {
    console.log('afara este superb');
} else {
    console.log('afara este urat');
}

let pizzaPrice = 35;
let hasGorgonzola = true;
// hasGorgonzola e totuna cu hasGorgonzola === true
// has Gorgonzla e totuna cu hasGorgonzola !== true

if (pizzaPrice <= 40 && (hasGorgonzola && pizzaPrice <=45)) {
    console.log('pizza are u pret decent');
} else {
    console.log('pretul pentru pizza e exagerat');
}

// ternary operator - sunt 3 parti in acest operator-1 conditie ?
//                                                   1 valoare de adevar :
//                                                    1 valoare in caz de fals 


val1 = 5;
val2 = '5';
val1===val2 ? console.log('egale') : console.log('diferite');

//expresie identica cu cea din operatorul ternar

if(val1===val2) {
    console.log('egale');
} else {
    console.log('diferite');
}


/**
 * Functions
 */

//Function declaration: function keyword urmat de numele functiei, paranteze rotunde, paranteze acolade

function logSomething() {
    console.log('functia logSomething() a fost apelata/invocata/called');
}

logSomething();


//function expression

const doSomething = function(){
    console.log('do something');
}

//arrow function

const doArrowFunction = () => {
    console.log('do arrow function');
}
doArrowFunction();


// functions with params
let number =800; // variabila number nu va interfera cu parametrul cu acceeasi denumire
function addToFive(number) {  //number se numeste parametru (param)
    let result = 5 + number;
    console.log(result);
}

addToFive(3);
addToFive(10);

const substractFrom100 = (number) => {
    console.log(' rezultatul este ${100 - number}');
}

substractFrom100(20);
//vedem in consola 80

substractFrom100('marcel');
// vedem in consola NaN-not a number, modul js-ului de a ne spune 
//ca am facut o operatie matematica unde am folosirt ceva care nu e numar