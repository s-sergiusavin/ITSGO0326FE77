console.log("diana");

//Data types

//Primitives: number, string, boolean, undefined, null, symbol, bigInt
//References: objects: array, function

//var declaration types:

//var - not used anymore usually
//let - variabila dinamica , i se poate schimba valoarea
//const - variabila statica , nu se poate schimba valoarea

//Number

const oneNumber = 11;
const anotherNumber = 5;
let total;

console.log(oneNumber);
console.log(anotherNumber);
console.log(total);

total = oneNumber + anotherNumber;
total = oneNumber - anotherNumber;
total = oneNumber * anotherNumber;
total = oneNumber / anotherNumber;
total = oneNumber % anotherNumber; //modulo => restul impartirii
total = oneNumber ** anotherNumber; //ridicare la putere

console.log(total);

//String

const fullName = "Diana Ioana";
const adress = "Netherlands";
const zipCode = `456789`;

const age = 30;
const personalInfo =
  "Salut, \n" + fullName + " cu varsta de " + age + " Bine ai venit la curs!";
const powerfullString = `Salut
${fullName}, cu varsta de ${age} de ani. 
Cum ti s-a parut cursul de azi ?`;

console.log(personalInfo);
console.log(powerfullString);

//Boolean

let lightsOn = false;
lightsOn = true;

// undefined vs null

let dogName = null;
console.log(dogName);

//Array - list

const random = [1, "doi", null, true, "false", [3, "patru"]];
console.log(random);
console.log(random.length);
console.log(random[0]);
console.log(random[3]);
console.log(random[5][1]);
console.log(random[random.length - 1][1]);

const daysOfWeek = ["Monday", "Tuesday", "Wednesday", 4];

console.log(daysOfWeek);
const index = daysOfWeek.length;

console.log(daysOfWeek[index - 1]);
console.log(daysOfWeek[3]);
daysOfWeek[3] = "thursday";
console.log(daysOfWeek);

//Objects

const person = {
  fullName: "Diana",
  age: 30,
  lovesSummer: true,
  adress: {
    city: "Bucharest",
    zip: "500500",
  },
  residencePermit: "false",
  "resindece-permit": "true",
  hobbies: ["music", "sports", "dev"],
};

console.log(person);
console.log(person.fullName);
console.log(person.adress.zip);
console.log(person["resindece-permit"]);

person.fullName = "something";
console.log(person.fullName);

const testString = "test";
const copyString = testString;

console.log(copyString);
