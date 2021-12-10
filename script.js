/* Dies ist das Script für unser Mühle-Spiel. 
Code abgeleitet von externen Ressourcen ist entsprechend gekennzeichnet. 
Die Funktionen sind einzeln beschrieben.*/

// ----------------------------- Funktion 1 Beginn ----------------------------- //
/* 
Zeichnen des Spielbretts und der Spielfiguren
*/

var spielbrett = document.getElementById("leinwand");
spielfeld = spielbrett.getContext("2d");

var spielbild = new Image ();
spielbild.src = "pictures/spiel1.png";
spielbild.onload=function() {
    spielfeld.drawImage(spielbild, 200, 0);
}

var spielfigur1s = new Image();
spielfigur1s.src = "pictures/spielfigur_schwarz1.png";
spielfigur1s.onload=function() {
    spielfeld.drawImage(spielfigur1s, 0, 10);
}

var spielfigur2s = new Image();
spielfigur2s.src = "pictures/spielfigur_schwarz1.png";
spielfigur2s.onload=function() {
    spielfeld.drawImage(spielfigur2s, 0, 60);
}

var spielfigur3s = new Image();
spielfigur3s.src = "pictures/spielfigur_schwarz1.png";
spielfigur3s.onload=function() {
    spielfeld.drawImage(spielfigur3s, 0, 110);
}

var spielfigur4s = new Image();
spielfigur4s.src = "pictures/spielfigur_schwarz1.png";
spielfigur4s.onload=function() {
    spielfeld.drawImage(spielfigur4s, 0, 160);
}

var spielfigur1w = new Image();
spielfigur1w.src = "pictures/spielfigur_weiss1.png";
spielfigur1w.onload=function() {
    spielfeld.drawImage(spielfigur1w, 850, 10);
}


// ----------------------------- Funktion 1 Ende ----------------------------- //


// ----------------------------- Funktion 2 Anfang ----------------------------- //
/* 
Definieren der Anleitung 
*/

let klickbare_anleitung = getElementById("anleitung");
// klickbare_anleitung.addEventListener("mouseenter");

// ----------------------------- Funktion 2 Ende ----------------------------- //
