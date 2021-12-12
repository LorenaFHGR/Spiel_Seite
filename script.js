/* Dies ist das Script für unser Mühle-Spiel. 
Code abgeleitet von externen Ressourcen ist entsprechend gekennzeichnet. 
Die Funktionen sind einzeln beschrieben.*/


// ----------------------------- Funktion 1 Anfang ----------------------------- //
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
Mapping der Daten Bretts in der Tabelle, analog zu den ID's im HTML-Code
*/

const brett = [
    "steinS1", "steinS2", null, null, null, null, null, null, null, "steinW1", "steinW2",
    "steinS3", "steinS4", null, null, null, null, null, null, null, "steinW3", "steinW4",
    "steinS5", "steinS6", null, null, null, null, null, null, null, "steinW5", "steinW6",
    "steinS7", "steinS8", null, null, null, null, null, null, null, "steinW7", "steinW8",
    null, "steinS9", null, null, null, null, null, null, null, "steinW9", null,
    null, null, null, null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null, null, null, null
]

// ----------------------------- Funktion 2 Ende ----------------------------- //

// ----------------------------- Funktion 3 Anfang ----------------------------- //
/* 
Definieren der benötigten Variablen 
*/

const zellen = document.querySelectorAll("td");
let schwarzeFiguren = document.querySelectorAll(".schwarzerStein");
let weisseFiguren = document.querySelectorAll(".weisserStein");

/* Speichern des Spielstandes mit der Anzahl Steine */

let amZug = true; // true steht für den weissen Spielzug, false für den schwarzen
let schwarzSpielstand = 9;
let weissSpielstand = 9; 
let spielsteine;

// ----------------------------- Funktion 3 Ende ----------------------------- //

// ----------------------------- Funktion 4 Anfang ----------------------------- //
/* 
Das folgende Object beschreibt den vom Spieler ausgewählten Stein und seine möglichen Bewegungen auf dem Mühle-Brett 
*/

let ausgewählterStein = {
    steinID: -1,
    brettIndex: -1,
    nachOben: false,
    nachUnten: false,
    nachRechts: false,
    nachLinks: false
}

// ----------------------------- Funktion 4 Ende ----------------------------- //

// ----------------------------- Funktion 5 Anfang ----------------------------- //
/* 
Die Spielsteine erhalten einen event listener für das Drag 
*/

function spielsteineMitEventListener() {
    if (amZug) {
        for (let i = 0; i < weisseFiguren.length; i++) {
            weisseFiguren[i].addEventListener("drag", holSpielsteine);
        }
    }
    else {
        for (let i = 0; i < schwarzeFiguren.length; i++) {
            schwarzeFiguren[i].addEventListener("drag", holSpielsteine);
        }
    }
}

// ----------------------------- Funktion 5 Ende ----------------------------- //

// ----------------------------- Funktion 6 Anfang ----------------------------- //
/* 
asdfjklö
*/


// ----------------------------- Funktion 6 Ende ----------------------------- //

// ----------------------------- Funktion 7 Anfang ----------------------------- //
/* 
asdf jklö
*/



// ----------------------------- Funktion 7 Ende ----------------------------- //

// ----------------------------- Funktion 8 Anfang ----------------------------- //
/* 
asdfjklö
*/



// ----------------------------- Funktion 8 Ende ----------------------------- //

// ----------------------------- Funktion 9 Anfang ----------------------------- //
/* 
asdfjklö
*/


// ----------------------------- Funktion 9 Ende ----------------------------- //

// ----------------------------- Funktion x Anfang ----------------------------- //
/* 
asdfjkl
*/


// ----------------------------- Funktion x Ende ----------------------------- //

// ----------------------------- Funktion x Anfang ----------------------------- //
/* 
asdfjkl
*/


// ----------------------------- Funktion x Ende ----------------------------- //


// ----------------------------- Funktion x Anfang ----------------------------- //
/* 
Definieren der Anleitung 
*/

let klickbare_anleitung = getElementById("anleitung");

// ----------------------------- Funktion x Ende ----------------------------- //



spielsteineMitEventListener()