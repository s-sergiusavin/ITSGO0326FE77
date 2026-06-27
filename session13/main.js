console.log('Ionut');

// aceasta este o linie comentata

/**
 * multi line comment
 * care nu va fi luat in considerare
 * gfhgljjkl;fgv
 */

/**
 * DATA TYPES
 */
// Primitives (primitive) :number, string, boolean, undefined, null, symbol, bigInt
// References (referinte) :objects-array, function

/**
 * variable declaration types
 */

// var-nu se mai foloseste
// let - variabila dinamica, i se poate schimba valoarea
// const - valoare statica, nu i se poate schimba valoarea

/**
 * number
 */

const oneNumber = 11;
//variabila        valoare
const anotherNumber = 5;
let total;

console.log(oneNumber);
console.log(anotherNumber);
console.log(total);
// console.log(sadffdsd);-cauezeaza eroare

total = oneNumber + anotherNumber;
total = oneNumber - anotherNumber;
total = oneNumber * anotherNumber;
total = oneNumber / anotherNumber;
total = oneNumber % anotherNumber; // modulo operator => restul impartirii
total = oneNumber ** anotherNumber; // ridicare la putere

console.log(total);

/**
 * string
 * siruri de caractere-()
 */

const fullName = 'Ionut Dragos';
const adress = 'Bucuresti, Romania';
const zipCode = `500500`; //backtick

const age = 40;
const personalInfo = 'Salut, \n'+ fullName + ' cu varsta de ' + age + ' bine ai venit la curs'; //in acest caz + face concatenare, nu adunare 
// iar \n inseamna enter sau mai nou se foloseste sintaxa:
const powerfullString = `Salut
${fullName}, cu varsta de ${age} de ani.
cum ti s-a parut cursul pana acum?`;

console.log(personalInfo);
console.log(powerfullString);

/**
 * Boolean
 * adevarat sau fals
 */

let lightsOn = false;
lightsOff = true;

/**
 * undefined vs /null
 */

let dogName;
dogName = null;
console.log(dogName);


/**
 * Array-[]
 * sunt o lista ordonata, mai multe elemente sau posibilitatea a mai multe elemente
 */

const random = [1, 'doi', null, true, 'false', [3, 'patru']];
/**
 * aici avem 6 elemente dar numerotarea lor incepe de la 0 
random e tot ce e in paranteza dreapta
*/

console.log(random)
console.log(random.length);
console.log(random[0]);
//afiseaza in consola elementul "1"
console.log(random[3]);
//afiseaza in consola elementul "true"
console.log(random[5][1]);
//afiseaza in consola elementul "patru" 
console.log(random[random.length - 1][1]);

const daysOfWeek = ['monday', 'tuesday', 'wednesday', 4];
console.log(daysOfWeek);
const index = daysOfWeek. length;
console. log(daysOfWeek[index - 1]);
// index-1 inseamna ca in consola vom vedea 4, adica 4-1=3, al treilea element care este 4

console. log(daysOfWeek[3]);
daysOfWeek[3] = 'thursday'
//in consola va arata monday...thursday, inlocuim 4(al 3lea element)  cu thursday,
// nu eroare, pt ca putem modifica o subvaloare din []  dar nu intreaga valoare

daysOfWeek = ['friday'];

console. log(daysOfWeek);
//acum va arata eroare, pt ca a inlocuit intreaga valoare( monday...4) cu friday

/**
 * objects-{}-le ordoneaza in consola in ordinea alfabetica a proprietatilor
 */

const person = {
    fullName = 'ionut dragos',
    age : 40,
    lovesSummer : true,
    adress:  {
          city: 'Bucuresti',
          zip: `50500`
},
residencePermit: 'false',
hobbies: ['travel', 'swimming']
};

console.log(person);
console.log(person.fullName)
console.log(person['fullName']);
console.log(person.adress.zip);
//ca sa vedem in consola codul postal, pt ca zip face parte din adresa
//daca modificam tot obiectul, adica tot ce e in {}, va da eroare












