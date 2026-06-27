const demoBoxElement = document.getElementById('testBox');

console.dir(demoBoxElement);

demoBoxElement.className = 'red';
demoBoxElement.className = '';//folosim un string gol ca sa scoatem clasa red

demoBoxElement.classList.add('red');//adaugam clasa-add
demoBoxElement.classList.add('blue');
demoBoxElement.classList.remove('blue');//scoatem clasa-remove
demoBoxElement.classList.remove('red');

demoBoxElement.classList.toggle('blue');// oscilam intre  2 stari -toggle - deschis-aprins la un intrerupator


/**
 * get or set attributes
 */

const demoImageElement = document.getElementById('demoImage');
const newImageElement = getElementById('newImage');

const imgSrc = demoImageElement.getAttribute('src');//pt ca src e atributul lui img din html
console.log(imgSrc);

newImageElement.setAttribute('src', imgSrc)



const ulElem = document.getElementsByTagName('ul')[0];

ulElem.addEventListener('click', () => {
    ulElem.classList.toggle('blue');
});

let listItemsElements = document.querySelectorAll('li');

console.dir(listItemsElements);

listItemsElements.forEach( listItem  => {
    listItem.addEventListener('mouseover', function() {
        this.classList.add('red');
    });

     listItem.addEventListener('mouseout', function() {
        this.classList.remove('red');
    });


    // prin addEventListener  cand dam click se intampla ce e in paranteza, in interiorul functiei,
//adica apare blue la toate cele 5 elemente, iar ca sa avem blue doar pe elem pe care dam click
//folosim querySelecorAll('li) dupa care  folosim forEach si THIS, care e contextul in care apelam functia


    listItem.addEventListener('click', toggleListItems);
});

function toggleListItems() {
    const toggleValue = this.classList.toggle('red');
    console.log('toggleValue', toggleValue)

    if (toggleValue) {
        const span = document.createElement('span');
        span.innerText = 'x';
        this.appendChild('span');

    } else {
        this.getElementsByTagName('span') [0].remove();

        console.dir(this);
        console.dir(document);
    }
}

const clickMeElement = document.getElementById('clickMe');
clickMeElement.style.cursor = 'pointer';
clickMeElement.style.display = 'inline-block';

const demoInputElement = document.getElementById('demoInput');

demoInputElement.addEventListener('keypress', function(event) {
    console.log(event);

    if (event.key === 'Enter' && demoInputElement.value.length > 3) {
        demoInputElement.style.backgroundColor = 'lightgreen';
    }
});


clickMeElement.addEventListener('click', function () {
   const newLiElement = document.createElement('li');
   ulElem.apppendChild(newLiElement);
   listItemsElements = document.querrySelectorAll('li');
   if(demoInputElement.value) {
    newLiElement.innerText = demoInputElement.value;
    demoInputElement.value = '';
} else {
    newLiElement.innerText = 'Elem' + listItemsElements.length;
}
});


const toDoInputElement = document.getElementById('toDoInput');
const addButtonElement = document.getElementsByClassName('addButton')[0];
const toDoListElement = document.getElementsByClassName('toDoListItems')[0];

function addItemsInTheList() {
    if (toDoInputElement.value !== '') {
        const newListItemElement = document .createElement('li');
        newListItemElement.className = 'newListItems';
        toDoListElement.appendChild(newListItemElement)
        newListItemElement.innerText = toDoInputElement.value;
        toDoInputElement.value = '';
     } else {
        //alert('Te rugam sa introduci o valoare mai intai')//
        // intrerupe executia codului din pagina!!!
        //prompt('Te rugam sa introduci o valoare mai intai')
        //confirm('Te rugam sa introduci o valoare mai intai')//aceste 3 functii nu ar trebui folosite
            toDoInputElement.classList.toggle('red');
    }
}

addButtonElement.addEventListener('click',addItemsInTheList);
toDoInputElement.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addItemsInTheList();
    }
})


function checkPlan() {
    //returneaza o valoare booleana adevarat || fals
}
const newListItemsNumber = document.getElementsByClassName('newListItems').length
return newListItemsNumber < 3;
//varianta simplificata a 
// if (newListItemsNumber < 3) {
// return true;
//} else {
//  return false 
//}


/**
 * RegExp- regular expressions
 * tipare care cauta anumite combinatii de caractere
 */


let string = 'abcdefg';
let pattern = /de/;
//3 metode de pattern
console.log(pattern.exec(string));
console.log(pattern.test(string));//verifica daca "de" e in stringul abcdesf si returneaza true
console.log(string.match(pattern));

const myFormElement = document.getElementById('myForm');

myFormElement.addEventListener('submit', (event) => {
    event.preventDefault();
    //impiedica ca atunci cand dam enter la email sa intervina validarea browserului, adica un mesaj de eroare
    //ceea ce inseamna ca trecem no validate in html la form  => email
    console.log(event);
    const emailAdressValue = event.target[0].value;

    if (regexEmailPattern.test(emailAdressValue)) {
        alert('Este email');
    } else {
        alert('Nu este email');
    }
});

//PASI

//1.luam elementul care ne intereseaza
//2.adaugam eventListeneri
//3.facem functii care sa gestineze logica actiunilor ce  vrem sa fie executate 







