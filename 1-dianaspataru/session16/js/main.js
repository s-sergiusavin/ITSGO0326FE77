const sumNumbersArrow = (number1, number2) => {
  return number1 + number2;
};

const result = sumNumbersArrow(5, 7);
console.log(result);
console.log(sumNumbersArrow(8, 7));
console.log(sumNumbersArrow(-1, 7));

const verifyEquality = (val1, val2) => {
  if (val1 === val2) {
    return true;
  } else {
    return false;
  }
};

console.log(verifyEquality(3, 3));
console.log(verifyEquality(3, 4));
console.log(verifyEquality(3, "3"));
console.log(verifyEquality("3", " 3 "));

console.log("-------->Simplified if return<---------");

const verifyEqualitySimplified = (val1, val2) => {
  return val1 === val2;
};

console.log(verifyEqualitySimplified(3, 3));
console.log(verifyEqualitySimplified(3, 4));
console.log(verifyEqualitySimplified(3, "3"));
console.log(verifyEqualitySimplified("3", " 3 "));

console.clear();

function logStuff(stuff) {
  console.log(`Rezultatul este ${stuff}`);
}

const doubleValue = (value) => {
  //   logStuff("Stuff");

  return value * 2;
  logStuff("Diana");
};

logStuff(doubleValue(1));

const addEvenValues = (val1, val2) => {
  if (val1 % 2 === 0 && val2 % 2 === 0) {
    return val1 + val2;
  }
  return "Numerele nu sunt pare";
};

logStuff(addEvenValues(4, 6));
logStuff(addEvenValues(4, 5));

//F8 -> revine la normal, iesim din procesul de debugg
//F10 -> sare un pas
//F11 -> intra in executia unei functii
//Shift+F11 -> iese din executia unei functii

const greet = (name = "John String") => {
  console.log(`Salut ${name}`);
};

greet();
greet("Mihai");
greet(" ");
greet("23435467");

function removeFromBiggest(num1, num2) {
  if (num1 > num2) {
    return num1 - num2;
  } else {
    return num2 - num1;
  }
}

logStuff(removeFromBiggest(5, 7));
logStuff(removeFromBiggest(15, 7));
logStuff(removeFromBiggest(-5, -3));

function verifyNumber(number) {
  if (number > 10 && number < 50) {
    return "da";
  }
  return "nu";
}

logStuff(verifyNumber(90));
logStuff(verifyNumber(10.001));
logStuff(verifyNumber(10));

const puppy = {
  name: "rex",
  age: 1,
  favToys: ["duck", "cat", "bone"],
  bark: function () {
    console.log("Ham");
  },
  barkLoud() {
    console.log("Haaaaaam!!");
  },
};

const anotherPuppy = puppy;
console.log(anotherPuppy);
anotherPuppy.name = "Grivei";

puppy.bark();
anotherPuppy.barkLoud();
console.log(puppy);
console.log(anotherPuppy);

function nameDog(name) {
  return `Dog ${name}`;
}

const rex = nameDog("Rex");

console.log(rex);

const namedDogCopy = nameDog;
console.log(namedDogCopy);
console.log(namedDogCopy("Azorel"));
//-----------------------
function addOne(value) {
  return value + 1;
}

function showValue(value, functieCallback) {
  return functieCallback(value);
}

const totalValueCallback = showValue(5, addOne);

console.log(totalValueCallback);

// in cazul declaratiei functiei valorile primite se numesc parametri
// in cazul apelului unei functii valorile trimise se numesc argumente

const menu = {
  burger: "Big Mac",
  juice: "Cola",
  size: "Big",
  price: 35,
  "french-fries": "no salt",
};

console.log(menu["french-fries"]);

let num3 = 3;
let letA = "a";
let stringConcat = "x";

stringConcat = stringConcat + num3;
stringConcat += letA;
console.log(stringConcat);

const firstWord = "primul";
const link = "si";
const secondWord = "aldoilea";
//const conCatfull = firstWord+link+secondWord
const conCatfull = firstWord + " " + link + " " + secondWord;

console.log(conCatfull);
console.log(conCatfull.toUpperCase());

const createString = (arr) => {
  let string = "";
  for (let i = 0; i < arr.length; i++) {
    string = string + arr[i] + ' * ';
  }
  return string;
};

// const createString = (arr) => {

//   return arr.toString();
// };

console.log(createString([3, "5", 7, 2, 1]));
console.log(createString([2, "3425", 17, 22, 1]));


const reverseArr = (array) =>{
  const newArr=[];
  for (let i = array.length - 1; i >= 0; i--) {
    newArr.push(array[i])
  }
  return newArr
}

console.log(reverseArr([1,2,3,4]))
