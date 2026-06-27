
//Functiile sunt actiuni, le folosim pt caracterul repetitiv si au 
// denumiri/declarari de verbe:show, add, convert...
/**
 * Scope
 */

let testLet = 'let-global';
const testConst = 'const-global';
var testVar = 'var-global';

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

if (true) {
    let outsideVar = 'Inside variable';
    console.log(outsideVar)
}
console.log(outsideVar)

if (true) {
    let declaredInIf = 'declared in if';
    console.log(declaredInIf);
}

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
if (needMoney) {
    addTwo(5);
}
console.log(globalVariable);



/**
 * Hoisting
 */
//nu prea mai e folosit, in bune practici nu e indicat sa apelezi o functie
//inainte sa o declari

function showTimisoara() {
    console.log('Timisoara');
}
showTimisoara();
//console.log(testLetHoisting);-eroare
//console.log(testConstHoisting);-eroare
console.log(testVarHoisting);
//aici u va da eroare, va arata undefined

 
 

let testLetHoisting = 'let is not hoisted';
const testConstHoisting = 'Const is not hoisted';
var testVarHoisting = 'Var is hoisted';

showCluj();//eroare - nu poate fi apelata inainte de declaratie/initializare, doar dupa cum e mai jos
const showCluj = () => {
    console.log('Cluj');
}

showCluj();



const showBrasov = function() {
    console.log('Brasov');
}
showBrasov();
//acum va arata Brasov



/**
 * Returned value of functions
 */

const convertLeiToEur = (value) => {
    const convertedValue = value * 5;
    return 'ai schimbat ${value} EUR in $(convertedValue} RON';
}

const message = convertLeiToEur(10);
console.log(message);


const showHowReturnWorks = () => {
    return 'aceasta e valoarea returnata';

    console.log('dupa return, acest cod nu se va executa');



    return undefined;//fictiv, ne imaginam ca asta se intampla la finalul oricarei functii
    // dupa return codul nu se mai executa
}

const message2 = showHowReturnWorks()
console.log(message2);




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
 */

const makeBurger = (ingredient = 'vita') => {
    if (ingredient === undefined) {
        ingredient = 'porc';
    }
    // ca sa nu se mai vada in consola burgerul meu este cu "undefined"
    console.log('burgerul meu preferat este cu ' + ingredient);
}

makeBurger('pui');
makeBurger();// se vede in consola burgerul meu este cu "undefined"
makeBurger(5);
makeBurger('peste');

const designCar = (power = 150, color, brand = 'Alfa') => {
    console.log('ai creat masina  ${brand} care are culoarea ${color} si are ${power} cai putere')
}

designCar(200, 'red', 'audi');
designCar();
designCar(undefined, undefined, 'porsche');


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