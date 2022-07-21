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

// la fameuse fonction loadImage
/*      les fonction de callback (par exemple celles appelées par un eventListener)
        reçoivent un paramètre : le contexte de l'évènement
 */
var loadImage = function(event) {
    var myImage = document.querySelector("#myImage");
    myImage.alt = "Télécharchement en cours";
    /*      fetch() est une fonction native JS pour dire d'aller chercher quelque chose
            - le premier .then : c'est ce qui se passe quand JS a ramené le quelque chose
            - la fonction de callback du premier .then, c'est ce qu'on va faire au quelque chose qui a été ramené, le rendre exploitable
            - la seconde fonction de callback c'est ce qu'on va faire du quelque chose exploitable
    */
    fetch("https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png")
        .then(function(response) {
            myImage.alt = "Télécharchement en cours";
            return response.blob();
        })
        .then(function(blobedResponse) {
            var blobedResponseURL = URL.createObjectURL(blobedResponse);
            myImage.alt = "Logo de wikipédia";
            myImage.src = blobedResponseURL;
        });
}

// On prent l'élément du dom et on le stock dans une variable
var btn = document.querySelector('#myButton');

// Load Image est la fonction appelée quand on clique sur le bouton
btn.addEventListener('click', loadImage);
// -----------------------------------------------------------------------------

// Exercice 2:
// ➡ On va recevoir du JSON: le premier then contiendra donc response => response.json()
// ➡ C’est magique, la fonction du second then est notre JSON déjà parsé ! Rien à faire, c’est un objet JS valide
// Jetez un œil du côté des cards de bootstrap, ça claque à mort

var loadStudent = function(event) {
    // On récupère le fichier json
    fetch("https://pachyderme.net/students.json")
        // on précise que c'est du json
        .then(response => response.json())
        // on lui dit comment il doit s'afficher
        .then(function(studentsJson) {
            console.log(studentsJson);
            listStudents(studentsJson)
        });
}


// affiche les données du fichier json sous forme de card
function listStudents(json) {
    const div = document.querySelector('div');
    json.students.map(element => div.innerHTML +=
        `
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <p class="text-gray-900 text-xl leading-tight font-medium mb-2">Prénom: ${element.firstname}</p>
            <p class="text-gray-900 text-xl leading-tight font-medium mb-2">Nom: ${element.lastname}</p>
            <p class="text-gray-900 text-base mb-4">GitHub Id: ${element.githubid}</p>
            <p class="text-gray-900 text-base mb-4">Genre: ${element.sex}</p>
        </div>
        `);

    json.trainers.map(element => div.innerHTML +=
        `
        <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
            <p class="text-gray-900 text-xl leading-tight font-medium mb-2">Prénom: ${element.firstname}</p>
            <p class="text-gray-900 text-xl leading-tight font-medium mb-2">Nom: ${element.lastname}</p>
            <p class="text-gray-900 text-base mb-4">GitHub Id: ${element.githubid}</p>
            <p class="text-gray-900 text-base mb-4">Genre: ${element.sex}</p>
        </div>
        `);
}

// on écoute l'évènement qui se déclenche quand la page est totalement chargée (images, css, js, etc. chargé et traités)
document.addEventListener('readystatechange', loadStudent);
// -----------------------------------------------------------------------------

// Exercice 3:
// Vous allez créer une page web avec un champ d’input pour enregistrer en localStorage un nom de promotion.
// Vous allez créer un bouton pour charger le nom de promotion et un dernier pour supprimer le nom enregistré.

function changePromotionName(event) {
    // on récupère la valeur entrée dans l'input
    var promotionName = promoName.value;
    // on l'affiche dans la console
    console.log(promotionName);
    // on l'enregistre en localStorage avec comme nom de stockage : promotionName
    localStorage.setItem("promotionName", JSON.stringify(promotionName));
}

function deletePromotionName(event) {
    // on supprime du localStorage l'enregistrement promotionName
    localStorage.removeItem("promotionName");
}

let promoName = document.querySelector('#promotionName');
let btnChangeName = document.querySelector('#chargeName');
let btnDeleteName = document.querySelector('#deleteName');

btnChangeName.addEventListener('click', changePromotionName);
btnDeleteName.addEventListener('click', deletePromotionName);