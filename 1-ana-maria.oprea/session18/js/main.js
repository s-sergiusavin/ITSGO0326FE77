/**
 * Test object demo
 */

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

/**
 * Methods to get html element by any selector
 * .querrySelector() / .querrySelectorAll()
 */

// returneaza PRIMUL element pe care il gaseste

const redSquare = document.querySelector(".red-square");
console.dir(redSquare);

redSquare.style.backgroundColor = "green";

// css background-color => js backgroundColor
// css padding-left => js paddingLeft

const blueSquares = document.querySelectorAll(".blue-square"); // cauta dupa clasa
// const blueSquares = document.querySelectorAll('#blue-square'); // cauta dupa id
// const blueSquares = document.querySelectorAll('div'); // cauta dupa TAG name

console.dir(blueSquares);

blueSquares[0].style.backgroundColor = "yellow";
blueSquares[1].style.backgroundColor = "orange";
blueSquares[2].style.backgroundColor = "violet";

blueSquares.forEach((element) => {
  element.style.backgroundColor = "orange";
});

/**
 * Method to get element by ID
 * .getElementById()
 */

const changedListElem = document.getElementById("changed-list");

console.dir(changedListElem);
changedListElem.style.border = "1px solid black";
changedListElem.style.backgroundColor = "lightblue";

/**
 * Method to get elements by TAG name
 * .getElementsByTagName()
 */

const paragraphElems = document.getElementsByTagName("p");
console.dir(paragraphElems);

paragraphElems[1].innerText = "This text was added later with JS !!!";
paragraphElems[2].style.textTransform = "uppercase";

/**
 * Method to get elements by class name
 * .getElementsByClassName()
 */

const styledMessages = document.getElementsByClassName("styled-messages");
console.dir(styledMessages);

// styledMessages.forEach( element => {
//     // do something
// })

for (let i = 0; i < styledMessages.length; i++) {
  const tagName = styledMessages[i].tagName;
  styledMessages[i].innerText =
    `This message was a ${tagName} and was styled by JS!!!`;
}

const greenSquare = document.querySelector(".green-square");

function changeGreenSquare() {
  greenSquare.style.backgroundColor = "lightgreen";
}

function mouseEnter() {
  greenSquare.style.backgroundColor = "purple";
  greenSquare.style.border = "";
  greenSquare.innerText = "";
}

function mouseLeave() {
  greenSquare.style.backgroundColor = "white";
  greenSquare.style.border = "3px solid black";
  greenSquare.innerText = "black";
}

const focusInput = () => {
  greenSquare.style.backgroundColor = "red";
  document.getElementsByTagName("label")[0].innerText =
    "Changed after focus event";
};

const blurInput = () => {
  greenSquare.style.backgroundColor = "black";
};

const onKeyDown = () => {
  greenSquare.style.backgroundColor = "teal";
  console.log("On Key Down");
};

const demoKeyTextElem = document.getElementById("demoKeyText");
const onKeyUp = () => {
  greenSquare.style.backgroundColor = "pink";
  demoKeyTextElem.innerText = document.getElementById("demoKey").value;
  console.dir(document.getElementById("demoKey"));
};

const doSomething = () => {
  greenSquare.style.backgroundColor = "green";
  greenSquare.style.border = "";
  greenSquare.innerText = "";
};

const readInput = () => {
  const readValueInputElem = document.getElementById("readInputValue");
  document.getElementById("textFromReadInput").innerText =
    readValueInputElem.value;
  // document.getElementById('textFromReadInput').innerText = document.getElementById('readInputValue').value;
};

const innnerHtmlMessageElem = document.getElementById("innerHtmlMessage");

const styleThisText = () => {
  innnerHtmlMessageElem.innerHTML =
    "This text was <strong>styled</strong> by <u>JS</u>";
};
