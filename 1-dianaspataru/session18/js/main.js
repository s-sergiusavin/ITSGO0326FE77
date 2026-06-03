// test object demo

const example = {
  title: "Example object",
  sayHi() {
    console.log("Hi");
  },
};

console.log(example.title);
example.sayHi();
console.log(example);
console.dir(example);

console.log(document);
console.dir(document);

//methods to get html elements by any selector

//.querySelector() -> primul element pe care il gaseste
// // .querySelectorAll() -> toate elementele

const redSquare = document.querySelector(".red-square");
console.dir(redSquare);

redSquare.style.backgroundColor = "green";

const blueSquares = document.querySelectorAll(".blue-square"); // cauta dupa clasa
// const blueSquares = document.querySelectorAll('#blue-square'); // cauta dupa id
// const blueSquares = document.querySelectorAll('div'); // cauta dupa tag
blueSquares[0].style.backgroundColor = "yellow";
blueSquares[1].style.backgroundColor = "orange";
blueSquares[2].style.backgroundColor = "violet";

blueSquares.forEach((element) => {
  element.style.backgroundColor = "orange";
});

console.dir(blueSquares);

// method .getElementsById() by id

const chnagedListElem = document.getElementById("changed-list");

console.dir(chnagedListElem);

chnagedListElem.style.border = "1px solid black";
chnagedListElem.style.backgroundColor = "lightblue";

// method to get elements by tag name .getElementsByTagName()

const paragraphElems = document.getElementsByTagName("p");
console.dir(paragraphElems);

// method to get element by class name .getElementsByClassName()

const styledMessages = document.getElementsByClassName("style-messages");
console.dir(styledMessages);

// styledMessages.forEach(element => {
//do something
//})

for (let i = 0; i < styledMessages.length; i++) {
    const tagName = styledMessages[i].tagName;
}


const greenSquare = document.querySelector('.green-square')

function changeGreenSquare(){
    greenSquare.style.backgroundColor = 'lightgreen'
}


function mouseEnter(){
greenSquare.style.backgroundColor="purple"
greenSquare.style.border = ''
greenSquare.innerText = ""
}


function mouseLeave(){
greenSquare.style.backgroundColor="white"
greenSquare.style.border = '3px solid black'
greenSquare.innerText = "black"
}

const focusInput = () =>{
greenSquare.style.backgroundColor="red"
document.getElementsByTagName('label')[0].innerText = "change after focus event"
}

const blurInput = () =>{
    greenSquare.style.backgroundColor="black"
}