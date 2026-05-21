function logStuff(stuff) {
  console.log(`Rezultatul este ${stuff}`);
}

logStuff(10);

let sum = 0;

function addToSum(number) {
  return (sum += number);
}

addToSum(3);
logStuff(addToSum(10));

// sum = 13;
let totalSum = addToSum(10); // 23
addToSum(5);
logStuff(totalSum); // 23
logStuff(sum); // 28

const sumNumbersArrow = (number1, number2) => {
  return number1 + number2;
};

const result = sumNumbersArrow(5, 7);
console.log(result);
console.log(sumNumbersArrow(10, 7));
console.log(sumNumbersArrow(-1, 7));

const verifyEquality = (val1, val2) => {
  if (val1 === val2) {
    return true;
  } else {
    return false;
  }
};

console.log(verifyEquality(3, 3)); // true
console.log(verifyEquality(3, 4)); // false
console.log(verifyEquality(3, "3")); // false
console.log(verifyEquality("3", " 3 ")); // false

const verifyEqualitySimplified = (val1, val2) => {
  return val1 === val2;
};

console.log(verifyEquality(3, 3)); // true
console.log(verifyEquality(3, 4)); // false
console.log(verifyEquality(3, "3")); // false
console.log(verifyEquality("3", " 3 ")); // false

console.clear();

const doubleValue = (value) => {
  // logStuff('Stuff');
  return value * 3; // tot ce este dupa return,
  logStuff("Sergiu are mere");
};
logStuff(doubleValue(1));

const addEventValues = (val1, val2) => {
  if (val1 % 2 === 0 && val2 % 2 === 0) {
    return val1 + val2;
  }
  return "Numerele nu sunt pare";
};

logStuff(addEventValues(4, 6)); // 10
logStuff(addEventValues(4, 5)); // Numerele nu sunt pare;

// debugger;

// F8 revine la normal, iesim din procesul de debug
// F10 sare un pas
// F11 intra in executia unei functii
// Shift + F11 iese din executia unei functii

const greet = (name = "John String") => {
  console.log(`Salut ${name}`);
};

greet();
greet("Mihai");
greet(" ");
greet("@!#$@%#@%");
greet(57);
greet(null);

function removeFromBiggest(num1, num2) {
  if (num1 > num2) {
    return num1 - num2;
  } else {
    return num2 - num1;
  }
}

logStuff(removeFromBiggest(5, 7)); // 2
logStuff(removeFromBiggest(15, 7)); // 8
logStuff(removeFromBiggest(-5, -3)); // 2

function verifyNumber(number) {
  if (number > 10 && number < 50) {
    return "Da";
  } else {
    return "Nu";
  }
}

logStuff(verifyNumber(90)); // Nu
logStuff(verifyNumber(10.001)); // Da
logStuff(verifyNumber(10)); // Nu

const puppy = {
  name: "Rex",
  age: 1,
  favouriteToys: ["Duck", "Cat", "Bone"],
  bark: function () {
    console.log("Ham");
  },
  barkLoud() {
    console.log("HAM!!!");
  },
};

const anotherPuppy = puppy;
console.log(anotherPuppy);
anotherPuppy.name = "Grivei";
console.log(puppy);
console.log(anotherPuppy);
puppy.bark();
anotherPuppy.bark();
anotherPuppy.barkLoud();

function nameDog(name) {
  return `Dog ${name}`;
}

const rex = nameDog("Rex");
console.log(rex);

const nameDogCopy = nameDog;
console.log(nameDogCopy);
console.log(nameDogCopy("Azorel"));

function addOne(value) {
  return value + 1;
}

function showValue(value) {
  return value;
}

function showValue(value, functieCallback) {
    return functieCallback(value);
}
 
const totalValueCallback = showValue(5, addOne);
console.log(totalValueCallback);

// in cazul declaratiei functiei, valorile primite se numesc parametrii
// in cazul apelului unei functii, valorile trimise se numesc argumente

const menu = {
    burger: 'Big Mac',
    juice: 'Cola',
    size:'Big',
    price:35,
    'french-fries': 'No salt'
}

console.log(menu.burger);
console.log(menu["french-fries"]);

let num3 = 3;
let letA = 'a';
let stringConcat = 'x';
stringConcat = stringConcat + num3;
stringConcat += letA;
console.log(stringConcat);

const firstWord = 'Primul';
const link = 'si';
const secondWord = 'al Doilea';
const concatenatedString = firstWord + ' ' + link + ' ' + secondWord + '!';

console.log( concatenatedString.toUpperCase());

const createString = (arr) => {
    let string = '';
    for (let i = 0; i < arr.lenght; i++) {
string = string + arr[i] + ' * ';
    }
    return string;
}

console.log(createString([3, '5', 7, 2, 1])); // 35721
console.log(createString([2, '3425', 17, 22, 1])); // 2342517221

const reverseArray = (array) => {
    const newArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        newArray.push(array[i]);
    }

    return newArray;
}

console.log(reverseArray([1, 2, 3, 4])) // [4, 3, 2, 1]