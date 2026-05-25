//Array methods

const array = [1, 2, 3, "4", 5, 6, 7];

console.log(array);

//add or remove elemnts in array

array.push(6); //add method at the end
console.log(array);

array.pop(); //delete the last elem from array
console.log(array);

console.log(array.unshift("zero")); //returneaza lenghtul nou
console.log(array.shift()); //returneaza elementul pe care l a eliminat
console.log(array);

//lifo - last in first out
//fifo - first in first out

// array.forEach(function () {}) => echivalent cu  functia 'for'

// array.forEach (() => {})

// array.forEach(iterateInArray);
// function iterateInArray(element) {
//   console.log(element);
// }

array.forEach(function (element) {
  console.log("elementul:" + element);
});

// console.clear();

//.map() method => iterates trough an array and returns this manipulated values into a new array

const newArray = array.map((element) => {
  return element + 1;
});

console.log(newArray);

//.indexOf() pozitia elemntului din array

console.log("index-ul elemntului 3 este " + array.indexOf(3));

array[array.indexOf(3)] = 7;
array[array.indexOf("4")] = 777;
console.log(array);
console.log(array.indexOf(-15)); //daca elemntul nu exista va returna -1 mereu
console.log(array.indexOf("kjbjhgjh")); //daca elemntul nu exista va returna -1 mereu

//coppy array ekemnts

let myNum = 7;
let anotherNum = myNum;

myNum = 5;

console.log(myNum);
console.log(anotherNum);

console.log(array);
const arrayCopy = array;

array[0] = "zero";

console.log(array);
console.log(arrayCopy);

//.slice() => copy portion  of an array
let copyOfarray = array.slice(2); // copiaza toate elemntele de la pozitia specificata
console.log("Array dupa slice " + array);
console.log("New Array " + copyOfarray);

copyOfarray = array.slice(2, 5); // copiaza de la indexul specificat prin primul parametru pana la cel de al doilea
console.log(copyOfarray);

//splice() => cut portion of an array

console.log("---------Splice--------");
console.log(array);

// let changedArray = array.splice(2); // decupeaza toate elementele unui array incepand de la pozitia specificata

// console.log(array);
// console.log(changedArray);

const changedArray = array.splice(2, 3); // decupeaza toate elementele unui array incepand cu indexul initial si nr de elemente
console.log(changedArray);
console.log(array);

//filter() => filtering array elements => returneaza un nour array cu elementele initiale care indeplinesc o anumita conditie, NU modifica array ul initial
console.log("------------Filter------------");
const lessThanThree = array.filter((element) => {
  return element > 3;
});

console.log(array);
console.log(lessThanThree);

// .find() => returneaza primul ELEMENT care indeplineste o conditie

const arrayToFind = [1, 2, 78, 9, 2, 45];
const value2 = arrayToFind.find((element) => {
  return element === 2;
});
console.log(value2);

const nameCity = [
  { name: "Alex", city: "Kiev" },
  { name: "Ioana", city: "Bucharest" },
  { name: "Sergiu", city: "Hong Kong" },
  { name: "Cipri", city: "Bangkok" },
  { name: "Roxana", city: "Roma" },
  { name: "Sergiu", city: "Tokyo" },
  { name: "Rares", city: "Berlin" },
];

const foundPerson = nameCity.find((element) => {
  return element.name === "Sergiu";
});

console.log(foundPerson);
console.clear();

//reverse() , modifica array ul original
console.log(array);

array.reverse();

console.log(array);
//toReversed() nu modifica array ul original
const toReversed = array.toReversed();

console.log(array);
console.log(toReversed);

//.concat => imbinarea arrayurilor

const concatArray = ["add", "me"];
const newConcatArray = array.concat(concatArray);
console.log(newConcatArray);

//.join() => transforma array into string

const redeclaredArray = [1, 2, 3, 4, 5];
const stringFromArray = redeclaredArray.join(" ");
console.log(stringFromArray);

//.reduce() => ia un array si-l transforma intr - o valoare

const complexArray = [1, 2, 3, 4];
const result = complexArray.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

console.log(result);

// .sort() => modifica arrayul original
//.toSorted() => face acelasi lucru dar nu modifica array ulinitial

const arrayTosort = [1, 7, 200, 34, -8, 1024, 855, 11.4, "asd", "aac", "sum"];

// console.log(arrayTosort.sort())
// console.log(arrayTosort.sort((a, b) => a - b));

arrayTosort.sort((a, b) => {
  //return a - b; //crescatoare
  return b - a; //descrescatoare
});

console.log(arrayTosort);

//.includes() => verificam daca un element exista intr un array

let includedElem = arrayTosort.includes(1024);
console.log(includedElem);

//--------------------------------------------------

// Classes

class Car {
  wheels = 4;
  constructor(model, maxSpeedKmh) {
    this.model = model;
    this.maxSpeed = maxSpeedKmh;
  }
}

const vw = new Car("vw", 150);
const porsche = new Car("porsche", 450);

console.log(vw)
console.log(porsche)
