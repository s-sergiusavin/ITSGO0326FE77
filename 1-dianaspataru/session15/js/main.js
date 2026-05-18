// Scope

// let testLet = "let-global";
// const testConst = "const-global";
// var testVar = 'var-global';

// //let & const cannot be redeclared in the same scope

// if(true){
//     let testLet = "if-global";
//     const testConst = "if-global";
//     var testVar = 'if-global';
//     console.log(testLet)
//     console.log(testConst)
//     console.log(testVar)

//     if(true){
//         console.log('--------IF 2------------')
//         let testLet = "if2-global";
//         const testConst = "if2-global";
//         var testVar = 'if2-global';
//         console.log(testLet)
//         console.log(testConst)
//         console.log(testVar)
//         console.log('--------END IF 2------------')
//     }
// }

// console.log('--------END IF------------')

// console.log(testLet)
// console.log(testConst)
// console.log(testVar)

let outsideVar = "Outside variable";

if (true) {
  let outsideVar = "Inside variable";
  console.log(outsideVar);
}
console.log(outsideVar);

let globalVariable = "unchanged";

function addTwo(number) {
  globalVariable = "changed";
  console.log(number + 2);
}

// console.log(globalVariable);
// addTwo(2);
// console.log(globalVariable);

let needMoney = true;

if (needMoney) {
  addTwo(5);
}

console.log(globalVariable);

//Hoisting

showTimisoara();
function showTimisoara() {
  console.log("Timisoara");
}

showTimisoara();

//showCluj(); nu poate fi apelata ininate de initializare doar cele definite cu function
const showCluj = () => {
  console.log("cluj");
};

showCluj();

//returned value of funtions
const convertLeiTuEur = (value) => {
  const convertedValue = value * 5;
  return `Ai Schimbat ${value} euro in ${convertedValue} lei`;
};
const message = convertLeiTuEur(10);
console.log(message);

const showHowReturnWorks = () => {
  return "aceasta este valoarea returnata";
  console.log("dupa return.acest code nu se executa");

  return undefined; //fictiv
};

const message2 = showHowReturnWorks();
console.log(message2);

//Arrow function syntax exceptions

// const addFive = (number) => {
//     return number + 5;
// }

//Daca avem un singur parametru, parantezele rotunde sunt optionale , pot sa lipseasca
//Daca avem o singura expresie acoladele pot sa lipseasca , iar returnul este implicit

const addFive = (number) => number + 5;

//Function with default paramas
//default params functions the same for all function types

const makeBurger = (ingredient = "vita") => {
  if (ingredient === undefined) {
    ingredient = "porc";
  }
  console.log("Burgerul meu preferat este cu " + ingredient);
};

makeBurger("pui");
makeBurger();

const designCar = (power = 150, color, brand = "vW") => {
  console.log(
    `Ai creat masina ${brand}, care are culoarea ${color}, si are ${power} cai putere`,
  );
};

designCar(200, "red", "audi");
designCar();
designCar(undefined, undefined, "porche");

//recap

// const rateMovie = (movie) =>{
//     if(movie === 'The Godfather'){
//         console.log(`Filmul e de nota 10`)
//     } else if(movie === 'Stapanul inelelor'){
//         console.log(`Filmul e de nota 9`)
//     }else if(movie === 'Avatar'){
//         console.log(`Filmul e de nota 8`)
//     }else if(movie === 'Titanic'){
//         console.log(`Filmul e de nota 7`)
//     }else if(movie === 'Man in black'){
//         console.log(`Filmul e de nota 6`)
//     }else if(movie === 'Terminator'){
//         console.log(`Filmul e de nota 5`)
//     }else {
//         console.log(`te rugam sa introduci numnele filmului`)
//     }

// }

const rateMovie = (movie) => {
  switch (movie) {
    case "The Godfather":
      console.log(`Filmul e de nota 10`);
      break;
    case "Stapanul inelelor":
      console.log(`Filmul e de nota 9`);
      break;
    case "Avatar":
      console.log(`Filmul e de nota 8`);
      break;
    case "Titanic":
      console.log(`Filmul e de nota 7`);
      break;
    case "Man in black":
      console.log(`Filmul e de nota 6`);
      break;
    case "Terminator":
      console.log(`Filmul e de nota 5`);
      break;
    default:
      console.log(`te rugam sa introduci numnele filmului`);
  }
};

rateMovie("The Godfather"); //filmul e de nota 10
rateMovie("Stapanul inelelor"); //filmul e de nota 9
rateMovie("Avatar"); //filmul e de nota 8
rateMovie("Titanic"); //filmul e de nota 7
rateMovie("Man in black"); //filmul e de nota 6
rateMovie("Terminator"); //filmul e de nota 5
rateMovie(); //te rugam sa introduci numnele filmului

//objects with function as properties

const complexObject = {
  name: "Diana",
  address: {
    city: "Brasov",
    zip: 500500,
  },
  favMovies: ["Avatar", "Titanic", "Man in black"],
  hasPass: true,
  hobbies: ["dance", "travel", "music"],
  watchMovie: function (movie) {
    console.log("uita te la " + movie);
  },
  sleep: () => {
    console.log("du te la somn");
  },
  work() {
    console.log("Mergi la munca");
  },
  age: 25,
};

console.log(complexObject.name);
console.log(complexObject.address.city);
complexObject.watchMovie(complexObject.favMovies[1]);
complexObject.sleep();
complexObject.work();

//Flip a coin

let valoriMoneda = ["cap", "stema"];

console.log(valoriMoneda[0]);
console.log(valoriMoneda[1]);
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.round(Math.random()))

if(valoriMoneda[Math.round(Math.random())] ==='cap'){
    console.log('a iesit cap')
} else {
    console.log('a iesit stema')
}
