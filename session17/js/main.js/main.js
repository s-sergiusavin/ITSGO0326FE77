
/**
 *Array methods 
 */




const array = [1, 2, 3, '4'];

array[1] = 100;
array[4] = 5; // vedem in consola 5 care l-am adaugat cu indexul 4
array[10] = 11; // vedem in consola 11 care l-am adaugat cu indexul 10, iar intre indexul 4 si 10 este gol

console.log(array);

/**
 * Add or remove elements in array
 */

array.push(5); //adaugam ceva la finalul array ului, in cazul asta 5
console.log(array);
array.pop(); //scoatem ultimul element de la finalul array ului, in cazul asta tot 5
console.log(array);
console.log(array.unshift('zero')); //adauga un elem la inceput de array,
// returneaza functia cu lenght ul nou dupa aceasta operatiune
console.log(array.shift()); //scoate un elem la inceput de array,
//  returneaza functia cu elementul scos


console.log(array);

// metodele prin care adugam un element au un argument in paranteza, iar cele prin care scoatem nu


// Metode de operare a listelor

//lifo-last in first out
// fifo-first in first out -unshift si shift opereaza dupa metoda asta

for (let i = 0; i < array.length; i++) {
    console.log(array(i));
} // pt a vedea toate elementele din paranteza individual
//SAU

// array.forEach(function () {}) SAU array.forEach (    ()  => {})
// array.forEach(iterateInArray);
//function iteratInArray(element) {
//console.log(element)
//}

array.forEach(function (element) {
    console.log('Elementul:' + element);
});

// console.clear();

// .map()  method => iterates through an array and RETURNS this manipulated values into a NEW ARRAY

const newArray = array.map((element) => {
    return element + 1;
});

// vedem in consola la ultimul element 41 adica stringul '4' + elementul nou adaugat 1

console.log(newArray);                      // SAU

// const newArray = array.map( element => element + 1);


/**
 * Returneaza indexul unui element intr un array 
 * .indexOf()
 */

console.log('Indexul elementului 3 este' + array.indexOf(3));
array[array.indexOf(3)] = 7;
console.log(array);
array[array.indexOf('4')] = 777; //acelais lucru cu array[3] = 777;
console.log(array);
console.log(array.indexOf(-15)); //daca elementul nu exista va returna intotdeauna -1


// Copy array elements

let myNum = 7;
let anotherNum = myNum;

myNum = 5; // vedem in consola 5 si 7, in ordinea asta
console.log(myNum);
console.log(anotherNum);

const arrayCopy = array;
array[0] = 'zero';

console.log(array);
console.log(arrayCopy);

/**
 *  .slice()
 * Slice method
 * copy portion of an array
 */

const copyOfArray = array.slice(2); // copiaza toate elementele de la pozitia specificata, adica 2
console.log('Array dupa slice:' + array);
console.log(copyOfArray);

copyOfArray = array.slice(2, 5); /// copiaza de la indexul specificat prin primul parametru pana
//la cel de al doilea, adica de la 2 la 5 fara ca indexul 5 sa fie inclus


/**
 *  .splice()
 * Splice method
 * cut portions of an array
 */

console.log('-----splice----');

console.log(array);

let changedArray = array.splice(2); // decupeaza toate elementele  unui array incepand
// de la pozitia specificata

// console.log(array);
// console.log(changedArray);

const changedArray = array.splice(2, 3); // decupeaza toate elementele unui array
// incepand cu indexul initial si NUMARUL DE ELEMENTE, adica de la index 2 decupeaza 3 elemente

console.log(array);
console.log(changedArray);

/**
 *  .filter()
 * Filtering  array elements
 * returneaza UN NOU  array cu elementele initiale care indeplinesc o anumita conditie
 * NU modifica arrayul initial
 */

const lessThanThree = array.filter((element) => {
    return element < 3;
});

console.log(array);
console.log(lessThanThree);

/**
 * . find()
 * Returneaza PRIMUL ELEMENT(OBIECT)  care indeplineste o conditie
 */

const arrayToFind = [1, 2, 78, 9, 2, 45];

const value2 = arrayToFind.find((element) => {
    return element === 2;
});

console.log(value2);

const nameAndCity = [
    { name: 'Alex', city: 'Kiev' },
    { name: 'Ioana', city: 'Bucharest' },
    { name: 'Ionut', city: 'Hong Kong' },
    { name: 'Cipri', city: 'Bnangkok' },
    { name: 'Roxana', city: 'Roma' },
    { name: 'Ionut', city: 'Tokio' },
];

const foundPerson = nameAndCity.find(element => {
    return element.name === 'Sergiu'
});

console.log(foundPerson);
// in consola va fi afisat IONUT HOMG KONG pt ca e primul IONUT in lista-
//invers e .findLast

/**
 * .reverse()
 * Reverse array
 * MODIFICA arrayul original


console.log(array);
array.reverse();
console.log(array);



// .toReversed - NU MODIFICA arrayul initial pe care e aplicata aceasta metoda

const toReversed = array.toReversed();
console.log(array);
console.log(toReversed);




/**
 * .concat()
 * Imbinarea array urilor
 */

const concatArray = ['add', 'me'];
//const newConcatenatedArray = array.concat(concatArray);
//console.log(newConcatenatedArray);
//vedem in consola arrayul initial la care adauga add si me

console.log(array.concat(concatArray));
console.log(concatArray.concat(array));// afiseaza invers, adica incepe cu add si me si apoi arrayul initial
console.log([1, 2, 3].concat(concatArray));




/**
 * .join()
 * Transform array into string
 */


const redeclaredArray = [1, 2, 3, 4, 5];
const stringFromArray = redeclaredArray.join(' ');// vedem nr in consola fara virgula, cu spatiu intre ele

console.log(stringFromArray);



/**
 * .reduce()
 * Reduce array - ia un array si il transforma intr-o SINGURA valoare(suma, inmultire) 
 */

const complexArray = [1, 2, 3, 4];
 const result = complexArray.reduce( (accumulator, currentValue) => {
          return accumulator + currentValue;
 });

 console.log(result);

 // accumulator = acc
 //currentValue = cur
 //la adunare vedem in consola 10, unde 1 e acc iar 2 cur, apoi 3 e cur iar acc 1+2 si tot asa 
 //la inmultire vedm 24





/**
 * .sort()
 * Sorting an array
 * modifica arrayul initial
 * 
 * .toSorted() face acelasi lucru dar NU MODIFICA array ul initial
 */

const arrayToSort = [1, 7, 200, 34, -8, 1024, 11.4,  'aasd', 'sum'];
//face sortare alfanumerica, adica incepe cu -8 si continua cu val urmatoare 1, apoi 1024, apoi 11.4, etc SAU
//Alexandru
//Andreea
//Carmen
//Cipri
//Costi
//Radu


console.log(arrayToSort.sort());

arrayToSort.sort((a, b) => {
    return a - b; //acum le vedem in ordine crescatoare
    //return b-a; ordine descrescatoare
});

console.log(arrayToSort);


/**
 *  .includes()
 * verificam daca un element exista intr un array
 */

let includedElem = arrayToSort.includes(11.4);
console.log(includeElem);
//la 11.4 vom vedea true
//daca trecem 2005 vom vedea false pt ca nu avem acest nr.



//------------------------------------------------------------------------------------------------
/**
 * Classes
 * folosite pentru a crea OBIECTE
 */

const car = {
    wheels:4,
    doors:4,
    speed:100
}

console.log(car);

class Car {
    wheels = 4;

    constructor(model, maxSpeedKmh) {
        this.model = model;
        this.maxPeed = maxSpeedKmh;
    }
}

const vw = newCar ('vw, 150');
const porsche = newCar('porsche, 450');

vw.maxSpedd = 200;
console.log(vw);
console.log(porsche);


/**
 * Context in js
 * THIS
 */

const person = {
    name: 'Ionut',
    lastName: 'Dragos',
    age: 41,
    adress: {city: 'Bucuresti'},
    sayHi: function() {
        console.log(`${this.name} says hi!`)// ca sa vad in consola Ionut says hi!
    },
    sayHiArrow: () => {
        console.log('${this.lastName}')//apare undefined
    }
}

//daca folosim THIS in functie nu trebuie sa mai folisim si ARROW FUNCTION!!!

person.sayHi();
person.sayHiArrow();







