console.log("sergiu");

// Aceasta este o linie comentata
/**
 * Multi line comment
 * care nu va fi luat in considerare
 *
 * dasf
 * dsaf
 * asdf
 *
 * sasdasds
 */

/**
 * Data Types
 */

// Primitives (primitive): number, string, boolean, undefined, null, symbol, bigInt
// References (referinte): objects: array, function

/**
 * Variable declaration types
 */

//var - nu se mai foloseste
// let - variabila dinamica, i se poate schimba valoarea
// const - variabila statica, nu i se poate schimba valoarea

/**
 * Number
 */

const oneNumber = 11;
const anotherNumber = 5;
let total;

console.log(oneNumber);
console.log(anotherNumber);
console.log(total);
// console.log(dvddsdfsfbg); // cauzeaza eroare

total = oneNumber + anotherNumber;
total = oneNumber - anotherNumber;
total = oneNumber * anotherNumber;
total = oneNumber / anotherNumber;
total = oneNumber % anotherNumber; // modulo operator => restul impartirii
total = oneNumber ** anotherNumber; // ridicarea la putere

console.log(total);

/**
 * String
 * Siruri de caractere
 */

const fullName = 'Sergiu Savin';
const address = "Brasov, Romania";
const zipCode = `508500`;

// fullName = "Brad Pitt";

const age = 30;
const personalInfo = 'Salut, \n' + fullName + ' cu varsta de ' + age + 'Bine ai venit la curs.';
const powerfullString = `Salut
${fullName}, cu varsta de ${age} de ani.
Cum ti s-a parut cursul pana acum?`;

console.log(personalInfo);
console.log(powerfullString);

/**
 * Boolean
 */

let lightsOn = false;
lightsOf = true;

/**
 * Undefined vs null
 */

let dogName;
dogName = null;
console.log(dogName);

/**
 * Array
 * (liste)
 */

const random = [1, 'doi', null, true, 'false',[3, 'patru']];
console.log(random.length);
console.log(random);
console.log(random[0]);
console.log(random[3]);
console.log(random[5]);
console.log(random[5][1]);
console.log(random[random.length - 1][1]);

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 4];
console.log(daysOfWeek);
const index = daysOfWeek.length;
console.log(daysOfWeek[index - 1]);

console.log(daysOfWeek[3]);
daysOfWeek[3] = 'Thursday';

// daysOfWeek = ['Friday'];

console.log(daysOfWeek);

/**
 * Objects
 */

const person = {
    fullName: 'Sergiu Savin',
    age: 30,
    lovesSummer: true,
    address: {
        city: 'Brasov',
        zip: '500500'
    },
    residencePermit: 'false',
    'residence-permit': true,
    hobbies: ['travel', 'swimming']
};

console.log(person);
console.log(person.fullName);
console.log(person.address.zip);
console.log(person["residence-permit"]);

person.fullName = 'Brad Pitt';
console.log(person.fullName)

//person = {
//     fullName: 'Tom Cruise' // !!! Error assignment to constant variabile
// };

const testString = 'Valoare de copiat';
const coppiedString = testString;

console.log(coppiedString);

const anotherPerson = person;

console.log(anotherPerson);
console.log(anotherPerson.address.city);






