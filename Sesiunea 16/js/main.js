function logStuff(stuff) {
    console.log(`rezultatul este ${stuff}`);
}

logStuff(10);

let sum = 0;

function assToSum(number) {
    return sum+= number;
}

addToSum(3);
logStuff(addToSum(10));

// sum = 13;
let totalSum = addToSum(10); // 23
addToSum(5);
logStuff(totalSum); // 23
logStuff(sum); // 28

const sumNumberArrow = (number1, number2) => {
    return number1 + number2;
}