// Exercice 1:
// ➡ Créer une page HTML, mettre une image avec un id et mettre un bouton
// ➡ Créer un script JS, ajouter un listener click au bouton et lui donner le code ci-dessous
// ➡ Ça devrait marcher :)

// var myImage = document.querySelector("#myImage");
// fetch("https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png")
//     .then(response => response.blob())
//     .then(function (myBlob) {
//         var objectURL = URL.createObjectURL(myBlob);
//         myImage.src = objectURL;
//     });

// On prent l'élément du dom et on le stock dans une variable
let btn = document.querySelector('button');

// Au click du boutton on récupére le logo et on l'affiche
btn.addEventListener('click', function() {
    let myImage = document.querySelector("#myImage");
    fetch("https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png")
        .then(response => response.blob())
        .then(function(myBlob) {
            let objectURL = URL.createObjectURL(myBlob);
            myImage.src = objectURL;
        });

})

// Exercice 2:
// ➡ On va recevoir du JSON: le premier then contiendra donc response => response.json()
// ➡ C’est magique, la fonction du second then est notre JSON déjà parsé ! Rien à faire, c’est un objet JS valide
// Jetez un œil du côté des cards de bootstrap, ça claque à mort

// On récupère le fichier json
fetch("https://pachyderme.net/students.json")
    // on précise que c'est du json
    .then(response => response.json())
    // on lui dit comment il doit s'afficher
    .then(function(studentsJson) {
        listStudents(studentsJson)
    });

// affiche les données du fichier json sous forme de card
function listStudents(json) {
    const div = document.querySelector('div');
    json.students.map(element => div.innerHTML +=
        `
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <p class="text-gray-900 text-xl leading-tight font-medium mb-2">Prénom: ${element.firstname}</p>
            <p class="text-gray-900 text-xl leading-tight font-medium mb-2">Nom: ${element.lastname}</p>
            <p class="text-gray-900 text-base mb-4">Genre: ${element.sex}</p>
        </div>
        `);
}

// Exercice 3:
// Vous allez créer une page web avec un champ d’input pour enregistrer en localStorage un nom de promotion.
// Vous allez créer un bouton pour charger le nom de promotion et un dernier pour supprimer le nom enregistré.

let inputPromo = document.querySelector('input');

let myPromo = "";

inputPromo.addEventListener('change', function(e) {
    myPromo = e.target.value;
    // localStorage.setItem("nomDEnregistrementLocal", JSON.stringify(myPromo))
})

console.log(myPromo);