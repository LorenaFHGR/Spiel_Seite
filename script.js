/* Dies ist das Script für unser Mühle-Spiel. 
Code abgeleitet von externen Ressourcen ist entsprechend gekennzeichnet. 
Die Funktionen sind einzeln beschrieben.*/

// ----------------------------- Funktion 1 Beginn ----------------------------- //
/* 
Drag and drop der Spielfiguren
*/
function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}



// ----------------------------- Funktion 1 Ende ----------------------------- //


// ----------------------------- Funktion 2 Anfang ----------------------------- //
/* 
Definieren der Anleitung 
*/

let klickbare_anleitung = getElementById("anleitung");

// ----------------------------- Funktion 2 Ende ----------------------------- //
