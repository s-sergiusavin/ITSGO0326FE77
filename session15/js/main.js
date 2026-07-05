<<<<<<< HEAD

//Functiile sunt actiuni, le folosim pt caracterul repetitiv si au 
// denumiri/declarari de verbe:show, add, convert...
=======
>>>>>>> fdf62882ed83b422fd8c2c4f66d9555c410c2aad
/**
 * Scope
 */

let testLet = 'let-global';
const testConst = 'const-global';
var testVar = 'var-global';

<<<<<<< HEAD
// let e asemanatoare cu var, var are chiar mai multa libertate, iar const nu ii poti schimba valoarea
// let & const cannot be redeclared in the same scope, nu pot fi suprascrise
// -scopul e domeniul de 
// vizibilitate al unei variabile, un bloc de executie
// let testLet = 3;
//const testConst = 5;
//var testVar = 7;-toata declaratia asta va da eroare in consola
// nu avem voie sa redeclaram variabilele, dar o putem face in interior-vezi mai jos

if (true) {
    let testLet = 'let-if';
    const testConst = 'const-if';
    var testVar = 'var-if';

    console.log(testLet);
    console.log(testConst);
    console.log(testVar);
   
}

console.log('-----END IF------');


let outsideVar = 'Outside variable;'
=======
// let & const cannot be redeclared in the same scope
// let testLet = 3;
// const testConst = 5;
// var testVar = 7;

// if (true) {
//     let testLet = 'let-if';
//     const testConst = 'const-if';
//     var testVar = 'var-if';

//     console.log(testLet);
//     console.log(testConst);
//     console.log(testVar);

//     if (true) {
//         console.log('---- IF 2 ------')
//         let testLet = 'let-if2';
//         const testConst = 'const-if2';
//         var testVar = 'var-if2';

//         console.log(testLet);
//         console.log(testConst);
//         console.log(testVar);
//         console.log('---- END IF 2 ------')
//     }
// }

// console.log('------- END IF ------');

// console.log(testLet);
// console.log(testConst);
// console.log(testVar);


let outsideVar = 'Outside variable';
>>>>>>> fdf62882ed83b422fd8c2c4f66d9555c410c2aad

if (true) {
    let outsideVar = 'Inside variable';
    console.log(outsideVar)
}
console.log(outsideVar)

if (true) {
    let declaredInIf = 'declared in if';
    console.log(declaredInIf);
}

<<<<<<< HEAD
// console.log(declaredInIf);variabila nu poate fi folosita, pt ca e in afara declaratiei,
// dar mai sus merge pt ca e in interior


let globalVariable = 'unchanged';
function addTwo (number) {
    globalVariable = 'changed!!!';
    console.log(number + 2)
}
//vom vedea in consola unchanged, pt ca variabila nu e apelata
//global-nu e declarata la blocul de executie, ci la nivelul global al fisierului
 console.log (globalVariable);
 addTwo(3);
 console.log(globalVariable);
 //acum vom vedea unchanged, 5 si changed pt ca functia addTwo e apelata prin addTwo



let needMoney = false;
=======
//  console.log(declaredInIf);

let globalVariable = 'unchanged';
function addTwo(number) {
    globalVariable = 'changed!!!';
    console.log(number + 2)
}

// console.log(globalVariable);
// addTwo(3);
// console.log(globalVariable);

let needMoney = true;

>>>>>>> fdf62882ed83b422fd8c2c4f66d9555c410c2aad
if (needMoney) {
    addTwo(5);
}
console.log(globalVariable);

<<<<<<< HEAD


/**
 * Hoisting
 */
//nu prea mai e folosit, in bune practici nu e indicat sa apelezi o functie
//inainte sa o declari

=======
/**
 * Hoisting
 */

showTimisoara(); // poate fi apelata inainte de declaratie HOSTING
>>>>>>> fdf62882ed83b422fd8c2c4f66d9555c410c2aad
function showTimisoara() {
    console.log('Timisoara');
}
showTimisoara();
<<<<<<< HEAD
//console.log(testLetHoisting);-eroare
//console.log(testConstHoisting);-eroare
console.log(testVarHoisting);
//aici u va da eroare, va arata undefined

 
 

let testLetHoisting = 'let is not hoisted';
const testConstHoisting = 'Const is not hoisted';
var testVarHoisting = 'Var is hoisted';

showCluj();//eroare - nu poate fi apelata inainte de declaratie/initializare, doar dupa cum e mai jos
=======

// console.log(testLetHoisting);
// console.log(testConstHoisting);
console.log(testVarHoisting);

let testLetHoisting = 'Let is not hoisted';
const testConstHoisting = 'Const is not hoisted';
var testVarHoisting = 'Var is hoisted';

// showCluj(); // eroare nu poate fi apelata inainte de declaratie/initializare
>>>>>>> fdf62882ed83b422fd8c2c4f66d9555c410c2aad
const showCluj = () => {
    console.log('Cluj');
}

showCluj();

<<<<<<< HEAD


const showBrasov = function() {
    console.log('Brasov');
}
showBrasov();
//acum va arata Brasov


=======
// showBrasov();
const showBrasov = function () {
    console.log('Brasov');
}
showBrasov();
>>>>>>> fdf62882ed83b422fd8c2c4f66d9555c410c2aad

/**
 * Returned value of functions
 */

const convertLeiToEur = (value) => {
    const convertedValue = value * 5;
<<<<<<< HEAD
    return 'ai schimbat ${value} EUR in $(convertedValue} RON';
}

const message = convertLeiToEur(10);
console.log(message);


const showHowReturnWorks = () => {
    return 'aceasta e valoarea returnata';

    console.log('dupa return, acest cod nu se va executa');



    return undefined;//fictiv, ne imaginam ca asta se intampla la finalul oricarei functii
    // dupa return codul nu se mai executa
=======
    // return `Ai schimbat ${value} EUR in ${convertedValue} RON`;
    console.log('By default se returneaza undefined');
}
const message = convertLeiToEur(10);
console.log(message);

const showHowReturnWorks = () => {
    return 'Aceasta este valoare returnata';

    console.log('Dupa return. Acest cod nu se va executa');


    return undefined; // Fictiv. Ne imaginam ca asta se intampla la finalul oricarei functii
>>>>>>> fdf62882ed83b422fd8c2c4f66d9555c410c2aad
}

const message2 = showHowReturnWorks()
console.log(message2);

<<<<<<< HEAD



//Arrow function syntax exception

const addFive = (number) => {
    return number + 5;
}

//daca avem un singur parametru parantezele rotunde sunt optionale, pot lipsi
// daca avem o singura experesie, acolada poate lipsi iar return-ul e implicit, nu trebuie sa il scriem

const addFive = number => +5;

/**
 * Functions with default params
 * parametrii default functioneaza la fel pe toate tipurile de functii
=======
// Arrow function syntax exception

// const addFive = (number) => {
//     return number + 5;
// }

// Daca avem un singur parametru, parantezele rotunde sunt optionale. Pot sa lipseasca
// Daca avem o singura expresie, parantezele acolade pot sa lipseasca, iar return-ul este implicit

const addFive = number => number + 5;

/**
 * Functions with default params
 * Parametrii default functioneaza la fel pt toate tipurile de functii
>>>>>>> fdf62882ed83b422fd8c2c4f66d9555c410c2aad
 */

const makeBurger = (ingredient = 'vita') => {
    if (ingredient === undefined) {
        ingredient = 'porc';
    }
<<<<<<< HEAD
    // ca sa nu se mai vada in consola burgerul meu este cu "undefined"
    console.log('burgerul meu preferat este cu ' + ingredient);
}

makeBurger('pui');
makeBurger();// se vede in consola burgerul meu este cu "undefined"
makeBurger(5);
makeBurger('peste');

const designCar = (power = 150, color, brand = 'Alfa') => {
    console.log('ai creat masina  ${brand} care are culoarea ${color} si are ${power} cai putere')
=======
    console.log('Burgerul meu preferat este cu ' + ingredient);
}

makeBurger('pui');
makeBurger();
makeBurger(5);
makeBurger('peste');

const designCar = (power = 150, color, brand = 'vw') => {
    console.log(`Ai creat masina ${brand} care eare culoare ${color} si are ${power} cai putere`)
>>>>>>> fdf62882ed83b422fd8c2c4f66d9555c410c2aad
}

designCar(200, 'red', 'audi');
designCar();
designCar(undefined, undefined, 'porsche');

<<<<<<< HEAD

let number5 = 5;
let string5 = '5';

if(number5 === string5) {
    console.log("egale");

}  else {
    console.log('inegale');
}
//in consola apare inegale  SAU

//ternary operator ===> conditie ? expresie pt adevar : expresie pt fals

number5 === string5 ? console.log("egale") : console.log('inegale'); 





const rateMovie = (movie) => {
    
    switch (movie) {
        case "The godfather":
        console.log ('filmul e de nota 10');
        break;
        case "Stapanul inelelor":
        console.log ('filmul e de nota 9');
        break;
        case "Avatar":
        console.log ('filmul e de nota 8');
        break;
        case "Titanic":
        console.log ('filmul e de nota 7');
        break;
        case "Man in black":
        console.log ('filmul e de nota 6');
        break;
        case "Terminator":
        console.log ('filmul e de nota 5');
        break;
        default:
            console.log('te rugam sa introduci numele filmlui');
    }
}
// switch e recomandat in loc de if...else if




// Objects with functions as properties

const complexObject = { 
     name:'Ionut',
     adress: {
        city: 'Bucuresti',
        zip: 500500
    },
    favouriteMovies: ['Avatar', 'Titanic'],
    hasPassport: true,
    hobbies: ['travel', 'eat', ' drink'],
    watchMovie: function (movie) {
        console.log('uita-te la' + movie);
    },
    sleep: () => {
        console.log('du-te la culcare');

    },
    work() {
        console.log('mergi la munca');
    },
    age: 25

}

console.log(complexObject.name);
//vad Ionut in consola
console.log(complexObject.adress.city);
// vad Bucuresti in consola
complexObject.watchMovie(complexObject.favouriteMovies[1])
// vad in consola uita-te la titanic, am apelat functia watch care e 
// proprietate a unui obiect, complexObject, astfel ca nu e neaparat nevoie de console.log,
// apelam direct functia watch
complexObject.sleep();
//ca o functie sa fie apelata avem nevoie de (), acum vedem in consola mergi la culcare
complexObject.work();
//mergi la munca

//LOG  e o functie care apartine obiectului CONSOLE => console.log
=======
let number5 = 5;
let string5 = '5';

if (number5 === string5) {
    console.log("Egale");
} else {
    console.log('Inegale');
}

// Ternary operator ===> conditie ? expresie pt adevar : expresie pt fals

number5 === string5 ? console.log("Egale") : console.log('Inegale');

// const rateMovie = (movie) => {
//     if (movie === 'The godfather') {
//         console.log('Filmul e de nota 10');
//     } else if (movie === 'Stapanul inelelor') {
//         console.log('Filmul e de nota 9');
//     } else if (movie === 'Avatar') {
//         console.log('Filmul e de nota 8');
//     } else if (movie === 'Titanic') {
//         console.log('Filmul e de nota 7');
//     } else if (movie === 'Man in black') {
//         console.log('Filmul e de nota 6');
//     } else if (movie === 'Terminator') {
//         console.log('Filmul e de nota 5');
//     } else {
//         console.log('Te rugam sa introduci numele filmului');
//     }
// }

const rateMovie = (movie) => {
    switch (movie) {
        case "The godfather":
            console.log('Filmul e de nota 10');
            break;
        case "Stapanul inelelor":
            console.log('Filmul e de nota 9');
            break;
        case "Avatar":
            console.log('Filmul e de nota 8');
            break;
        case "Titanic":
            console.log('Filmul e de nota 7');
            break;
        case "Man in black":
            console.log('Filmul e de nota 6');
            break;
        case "Terminator":
            console.log('Filmul e de nota 5');
            break;
        default:
            console.log('Te rugam sa introduci numele filmului');
    }
}

rateMovie('The godfather'); // log Filmul e de nota 10
rateMovie('Stapanul inelelor'); // log Filmul e de nota 9
rateMovie('Avatar'); // log Filmul e de nota 8
rateMovie('Titanic'); // log Filmul e de nota 7
rateMovie('Man in black'); // log Filmul e de nota 6
rateMovie('Terminator'); // log Filmul e de nota 5
rateMovie(); // log Te rugam sa introduci numele filmului

// Objects with functions as properties

const complexObject = {
    name: 'Sergiu',
    address: {
        city: 'Brasov',
        zip: 500500
    },
    favouriteMovies: ['Avatar', 'Titanic', 'MIB'],
    hasPassport: true,
    hobbies: ['travel', 'eat', 'drink'],
    watchMovie: function (movie) {
        console.log('UIta-te la ' + movie);
    },
    sleep: () => {
        console.log('Du-te la culcare');
    },
    work() {
        console.log('Mergi la munca');
    },
    age: 25
}

console.log(complexObject.name);
console.log(complexObject.address.city);
complexObject.watchMovie(complexObject.favouriteMovies[1]);
complexObject.sleep();
complexObject.work();

console.clear();
console.log(console);
console.warn('Acesta este un warning');
console.warn('Acesta este un info');
console.error('Aceasta este o eroare');

console.log(complexObject.oriceDenumireImiTrecePrinCap);
// console.log(complexObject.oriceDenumireImiTrecePrinCap.ceva); // eroare p ca nu exista undefined.ceva

// Flip a coin

let valoriMoneda = ['cap', 'stema'];

console.log(valoriMoneda[0]);
console.log(valoriMoneda[1]);
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.round(Math.random()));

if (valoriMoneda[Math.round(Math.random())] === 'cap') {
    console.log('A iesit cap');
} else {
    console.log('A iesit stema');
}

// Palindrom game

const palindrome = [1, 9, 7, 8, 7, 9, 1];

const checkPalindrome = (array) => {
    for(let i = 0; i < array.length / 2; i++) {
        if (array[i] !== array[array.length - 1 - i]) {
            return 'Array-ul nu este palindrom';
        }
    }

    return 'Arrayul este palindrom';
}

console.log(checkPalindrome(palindrome));
>>>>>>> fdf62882ed83b422fd8c2c4f66d9555c410c2aad
