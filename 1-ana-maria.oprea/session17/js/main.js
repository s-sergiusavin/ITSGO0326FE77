/**
 * Array methods
 */

const array = [1, 2, 3, "4", 5, 6, 7];

// array[1] = 100;
// array[4] = 5;
// array[10] = 11;

console.log(array);

/**
 * Add or remove elements in array
 */

array.push(5); //adaugam ceva la finalul array-ului
console.log(array);
array.pop(); //scoatem ultimul element de la finalul array-ului
console.log(array);
console.log(array.unshift("zero")); //returneaza lenght-ul nou dupa aceasta operatiune
console.log(array.shift()); //returneaza elementul scos

console.log(array);

// lifo = last in first out
// fifo = first in first out

// for (let i = 0; (i = array.length - 1); i++) {
//  console.log(array[i]);
// }

// array.forEach(function () {});
// array.forEach( () => {});

// array.forEach(iterateInArray);
// function iterateInArray(element) {
//   console.log(element);
// }

array.forEach(function (element) {
  console.log("Elementul: " + element);
});

// console.clear();

// .map() methode => iterated through an array and RETURNS this manipulated values into a new array

const newArray = array.map((element) => {
  return element + 1; //e important sa punem return ca altfel afiseaza undefined
});
// .forEach nu returneaza nimic

console.log(newArray);

// const newArray = array.map((element) => element + 1);

/**
 * Returneaza indexut (pozitia) unui element
 * .indexOf()
 */

console.log("Indexul elementului 3 este " + array.indexOf(3));
array[2] = 7;
console.log(array);
array[array.indexOf("4")] = 777;
console.log(array);
console.log(array.indexOf("dsjhfsjhdf")); // daca elementul nu exista, va returna -1 intotdeauna

// copy array elements

let myNum = 7;
let anotherNum = myNum;
myNum = 5;

console.log(myNum);
console.log(anotherNum);

console.clear();
console.log(array);

const arrayCopy = array;
array[0] = "zero";

console.log(array);
console.log(arrayCopy);

/**
 * .slice()
 * slice method
 * copy portion of an array
 */

const copyOfArray = array.slice(2); // copiaza toate elementele de la pozitia specificata
console.log("Array dupa slice: " + array);
console.log(copyOfArray);

copyOfArray = array.slice(2, 5); // copiaza de la indexul specificat prin primul paramentru pana la cel de al doilea; copiaza doar ce e intre aceste index-uri exceptand valorile cu index-urile numite
console.log(copyOfArray);

/**
 * .splice()
 * Splice method
 * cut portions of an array
 */

console.log("-----Sprice-----");

console.log(array);

// let changedArray = array.splice(2); // decupeaza toate elementele unui array incepand de la pozitia specificata

// console.log(array);
// console.log(changedArray);

const changedArray = array.splice(2, 3); // decupeaza toate elementele unui array incepand cu indexul initial si NUMARUL DE ELEMENTE PE CARE O SA IL DECUPEZE
console.log(array);
console.log(changedArray);

/**
 * .filter()
 * Filtering array elements
 * Returneaza un nou array cu elementele initiale care indeplinesc o anumita conditie
 * NU modifica array-ul initial
 */

const lessThanThree = array.filter((element) => {
  return element < 3;
});

console.log(array);
console.log(lessThanThree);

/**
 * .find()
 * returneaza PRIMUL ELEMENT care indeplineste o conditie
 */

const arrayToFind = [1, 2, 78, 9, 2, 45];

const value2 = arrayToFind.find((element) => {
  return element === 2;
});

console.log(value2);

const nameAndCity = [
  { name: "Alex", city: "Kiev" },
  { name: "Ioana", city: "Bucharest" },
  { name: "Sergiu", city: "Hong Kong" },
  { name: "Cipri", city: "Bankok" },
  { name: "Roxana", city: "Roma" },
  { name: "Sergiu", city: "Tokyo" },
  { name: "Rares", city: "Berlin" },
];

const foundPerson = nameAndCity.find((element) => {
  return element.name === "Sergiu";
});

console.log(foundPerson);

/**
 * .reverse()
 * Reverse array
 * MODIFICA array-ul original
 */
console.clear();

console.log(array);
array.reverse();
console.log(array);

// .toReversed - nu modifica array-ul initial pe care este aplicata aceasta metoda

const toReversed = array.toReversed();
console.log(array);
console.log(toReversed);

/**
 * .concat();
 * Imbinarea array-urilor
 */

const concatArray = ["add", "me"];
// const newConcatinatedArray = array.concat(concatArray);
// console.log(newConcatinatedArray);

console.log(array.concat(concatArray));
console.log(concatArray.concat(array));
console.log([1, 2, 3].concat(concatArray));

/**
 * .join()
 * Transforma array into string
 */

const redeclaredArray = [1, 2, 3, 4, 5];
const stringFromArray = redeclaredArray.join(""); //afiseaza valorile fara spatiu
const stringFromArray = redeclaredArray.join(); //afiseaza stringul cu spatiu
const stringFromArray = redeclaredArray.join("x"); //afiseaza stringul cu x intre ele

console.log(stringFromArray);

/**
 * .reduce()
 * Reduce array-ul
 * Ia un array si-l transforma intr-o valoare
 */

const complexArray = [1, 2, 3, 4];
const result = complexArray.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(result);

/**
 * .sort()
 * Sorting an array
 * modifica array-ul initial
 *
 * toSorted() face acelasi lucru dar nu modifica arrayul initial
 */

const arrayToSort = [1, 7, 200, 34, -8, 1024, 855, 11.4, "asd", "aac", "sum"];

// console.log(arrayToSort.sort());

arrayToSort.sort((a, b) => {
  // return a - b; - pt valoare crescatoare
  return b - a; // - pt valoare descrescatoare
});
console.log(arrayToSort);

/**
 * .includes()
 * verificam daca un element exista intr-un array
 */

let includedElem = arrayToSort.includes(1024);
console.log(includedElem);

//------------------------------------------------------------

/**
 * Classes
 */

const Car = {
  wheels: 5,
  doors: 4,
  speed: 100,
};

class Car {
  wheels = 4;

  constructor(model, maxSpeedKmh) {
    this.model = model;
    this.maxSpeedKmh = maxSpeedKmh;
  }
}

const vw = new Car("vw", 150);
const porche = new Car("porche", 450);

vw.maxSpeedKmh = 200;

console.log(vw);
console.log(porche);

/**
 * Context in js
 * this
 */

const person = {
  name: "Ana-Maria",
  lastName: "Oprea",
  age: 26,
  adress: { city: "Brasov" },
  sayHi: function () {
    console.log(`${this.name} says hi`);
  },
  sayHiArrow: () => {
    console.log(`${this.lastName} says hi.`); //daca folosim this, sa nu il folosim in arrow functions
  },
};

person.sayHi();
person.sayHiArrow();
