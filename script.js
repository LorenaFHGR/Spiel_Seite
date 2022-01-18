/* Dies ist das Script für unser Mühle-Spiel. 
Die Theorie des Codes stammt von W3Schools, JavaScript Tutorial. 
Das unbenutzte Mapping ist von der Schach-Anleitung abgeleitet (siehe Quellenverzeichnis der Dokumentation) 
Die Funktionen sind einzeln beschrieben.*/


// ----------------------------- Funktion 1 Anfang ----------------------------- //
/* 
Drag and drop der Spielfiguren.
*/

function allowDrop(event) { /* Dadurch wird im HTML gekennzeichnet, wo gedroppt werden darf (nicht auf alle Zellen erlaubt) */
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id); /* Die Metadaten des gedraggten Objektes werden kopiert */
}

function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text"); /* Metadaten werden geholt... */
    event.target.appendChild(document.getElementById(data)); /* ...und eingefügt */
}

// ----------------------------- Funktion 1 Ende ----------------------------- //

// ----------------------------- Funktion 2 Anfang ----------------------------- //
/* 
Event-Listener hinzugefügt für den Refresh-Button, um die Seite (und somit das Spiel) auf Knopfdruck
neu zu laden bzw. neu zu beginnen. Das refresh-div wird anhand des querySelectors ausgewählt. 
*/

document.querySelector(".refresh").addEventListener("click", function reload (){
    reload=location.reload(); 
})

/*
Hier wird der Cursor beim Hovering über den Refresh-Button zu einem "Pointer" geändert, um das Klickbare
abzubilden und ihn optisch und intuitiv vom Anleitungs-Button zu unterscheiden (beim Anleitungs-Button 
wird default-mässig beim Hover der Text-Cursor gezeigt, um ein Lesen deutlich zu machen). 
*/
document.querySelector(".refresh").style.cursor="pointer";

// ----------------------------- Funktion 2 Ende ----------------------------- //

// ----------------------------- Funktion 3 Anfang ----------------------------- //
/* 
Mapping der Daten Bretts in der Tabelle, analog zu den ID's im HTML-Code

Anmerkung: Dieses Mapping wurde nicht verwendet. Es sollte für das Hintergrund-Mapping des Spiels
dienlich sein, um Spielzüge zu erkennen und (evtl.) zu speichern. Es wurde absichtlich drin gelassen, um den Versuch
zu veranschaulichen und für allfällige Erweiterungen im nächsten WEBP-Kurs. 
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

// ----------------------------- Funktion 3 Ende ----------------------------- //