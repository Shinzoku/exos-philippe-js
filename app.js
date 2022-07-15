// Exercice 1
// Afficher un Hello world dans la console
console.log('-- Exercice 1 --');

function HelloWorld() {
    console.log('Hello world');
}

HelloWorld();

// Exercice 2
// Afficher un Hello world dans le body
let body = document.body;
body.innerHTML += "Hello world";

// Exercice 3
// Créer une balise h1 en js avec le contenu "Hello world"
let helloWorldH1 = document.createElement("h1");
body.append(helloWorldH1);
helloWorldH1.innerHTML += "hello world";


// Exercice 4
// Ajouter une balise div qui a pour id "greetings" dans le html et utiliser querySelector pour ajouter "Hello world"
document.querySelector('#greetings').innerHTML += "Hello world";

// Exercice 5
// Afficher tous les students de l'array dans la console
console.log('-- Exercice 5 --');
let students = ["Alexandre.C", "Alexandre.B", "Benoît", "Donatien", "Hugo", "Myriam", "Youcef", "Nicolas", "Vlad", "Quentin rmc", "Quentin Kiou", "Steven", "Loïc", "Julian", "Maxence", "Thomas", "Amandine", "Tristan"];
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

// Exercice 6
// Afficher tous les Students dans le body dans une liste ul li

// Fonctionne mais cassable
// for (let j = 0; j < students.length; j++) {
//     document.querySelector('#studentsList').innerHTML += `<li>${students[j]}</li>`
// }

let studentsUl = document.querySelector("#studentsList");

students.forEach(student => {
    let li = document.createElement('li')
    li.innerHTML = student;
    studentsUl.append(li);
});

// Exercice 7
// Créer une fonction qui sera appelé par un addEventListener

// event function
function loadStyle(event) {
    if (!event.target.className) {
        event.target.className = "dynamicStyle";
    } else {
        event.target.className = "";
    }
}

document.querySelector("main").addEventListener("click", loadStyle)


// Exercie bonus 1
// Affichez le résultat de l’addition de deux nombres entrés par l’utilisateur dans des champs de type input
function addition() {
    let number1 = parseInt(document.querySelector("#number1").value);
    let number2 = parseInt(document.querySelector("#number2").value);
    let total = 0;

    total += number1 + number2;
    document.querySelector("#total").innerHTML = total;
}

document.querySelector('#addition').addEventListener("click", addition);

// Exercie bonus 2
// On a un champ d’input. À chaque fois que l’utilisateur y entre une valeur (validée en appuyant sur un bouton par exemple), vous affichez le cumul de toutes les valeurs entrées depuis le début ainsi que la moyenne des valeurs entrées.

let inputVals = [];

function cumul() {
    let totalCumul = 0;

    inputVals.push(parseInt(document.querySelector("#inputCumul").value));

    inputVals.forEach(element => {
        totalCumul += element;
    });
    document.querySelector("#totalCumul").innerHTML = totalCumul;
}

document.querySelector('#cumul').addEventListener("click", cumul);

// Exercice bonus 3