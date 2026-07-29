// 'use strict';

// Primitives: string, number, boolean, undefined, null, symbol, bigInt
// References: objects: array, function

let myString = 'Test';
console.log(myString.toUpperCase());

let numberFive = '5';

console.log(numberFive + 5);
console.log(Number(numberFive) + 5);

// Array maniopulation methods

let myArr = [1, 2, 3];
myArr.push(4); // adaugam o valoare
myArr.pop(); // scoatem o valoare de la finalul arrayului
myArr.sort( (a,b) => a - b);
myArr.filter( item => item === 'ceva'); // returnam numai elementele care indeplindesc conditia
myArr.map( item => item * 2) // parcurgem un array si returnam un nou array cu elementele vechi care au trecut sau nu printr-o expresie
myArr.forEach(item => console.log(item)) // nu returneaza nimic, doar pargurgem un array
myArr.reduce( (acc, cur) => acc + cur); // mai rar folosita, dar frecvent folosita la interviuri

function declaration() {
    console.log('Do something');
}

const functionExpression = function() {
    console.log('Log in function expression')
}

const arrowFunction = () => {
    console.log('Arrow function log')
}

const singleParamException = singleParam => {
    console.log('Daca avem un singur parametru, parantezele rotunde sunt optionale');
}

const allArrowExceptions = singleParam => console.log('Parantezele acolade pot lipsi, iar ierturnul este implicit');

const myObj = {
    firstName: 'Sergiu',
    age: 20,
    address: {
        city: 'Brasov'
    },
    hobbies: ['reading', 'writting'],
    doSomething: function() {
        console.log('Function expression in obj')
    },
    arrowFunction: () => {
        console.log('Arrow function in obj')
    },
    method() {
        console.log('Method/ function property of an obj')
    },
    logSomething() {
        console.log(`Salut, eu sunt ${this.firstName}`);
    }
}

console.log('----------');
console.log(window);
console.log(this);

const functionCopy = singleParamException;
functionCopy();

const methodCopy = myObj.logSomething;
methodCopy();




