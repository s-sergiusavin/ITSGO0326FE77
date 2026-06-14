const demoBoxElement = document.getElementById("testBox");

console.dir(demoBoxElement);

demoBoxElement.className = "red";
demoBoxElement.className = "";

demoBoxElement.classList.add("red");
demoBoxElement.classList.add("blue");

demoBoxElement.classList.remove("blue");
demoBoxElement.classList.remove("red");

demoBoxElement.classList.toggle("blue");
demoBoxElement.classList.toggle("blue");
demoBoxElement.classList.toggle("blue");

// get or set attrb

const demoImageElement = document.getElementById("demoImage");
const newImageElement = document.getElementById("newImage");

const imgSrc = demoImageElement.getAttribute("src");
console.log(imgSrc);

newImageElement.setAttribute("src", imgSrc);

const ulElem = document.getElementsByTagName("ul")[0];

// ulElem.addEventListener("click", () => {
//     ulElem.classList.toggle('blue')
// });

const listItemsElements = document.querySelectorAll("li");

listItemsElements.forEach((listItem) => {
  //   listItem.addEventListener("mouseover", function () {
  //     this.classList.add("red");
  //   });

  //   listItem.addEventListener("mouseout", function () {
  //     this.classList.remove("red");
  //   });

  listItem.addEventListener("click", toggleListItems);
});

function toggleListItems() {
  const toggleValue = this.classList.toggle("red");
  console.log("toggleValue", toggleValue);

  if (toggleValue) {
    const span = document.createElement("span");
    span.innerText = "x";
    this.appendChild(span);
  } else {
    this.getElementsByTagName("span")[0].remove();
  }
}

const clickMeElement = document.getElementById("clickMe");
clickMeElement.style.cursor = "pointer";
clickMeElement.style.display = "inline-block";

const demoInputElement = document.getElementById("demoInput");

demoInputElement.addEventListener("keypress", function (event) {
  if (event.key === "Enter" && demoInputElement.value.length > 3) {
    demoInputElement.style.backgroundColor = "lightgreen";
  }
});
