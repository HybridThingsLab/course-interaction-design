

// Vars
let seconds, milliseconds;
let lock = 0;
// Start
function setup() {
	// Einmalig kreieren
	createCanvas(0,0);
	// Anfangs Canvas mit 60 Sekunde Schriftzügen füllen und alle mit invisible Class versehen,damit sie weiß sind + ReferenzID mit Sekunden-Nr
	var canvas=document.getElementById("canvas");
	for(var i=0;i<60;i++){
		canvas.innerHTML += "<span id='second"+i+"' class='invisible'>Sekunde</span> ";
	}
}
// Runtime
function draw() {
	milliseconds = int(millis() % 60000);
	seconds = milliseconds / 1000;
	var canvas=document.getElementById("canvas");
	var nowSecond = int(seconds); // Als Referenz nur einmal seconds in int parsen
	// Setze Alle Klassen immer...
	for(var i=0;i<60;i++){
		if(i>=lock)
			document.getElementById("second"+i).className = "invisible";
		else
			document.getElementById("second"+i).className = "visible";
	}
	console.log("lock: "+lock+" (PRE)");
	// kalkuliere aktuellen lock wert
	if(nowSecond==1){
		// Klasse für alle 60 auf invisible setzen,damit sie wieder weiß werden
		// 1 fest setz
		lock=1;
	}
	if(nowSecond==0 && lock>30){
		// 60.Sekunde
		lock=60;
	}
	else if(nowSecond!=lock){ // Durch ungleich wird auch Sprung nach unten möglich wenn Seite freezed....
		// canvas.innerHTML+="Sekunde"+" "; // Alt
		// Element der aktuellen Sekunde mit visible Class versehen,damit es sichtbar wird
		lock=nowSecond;
	}
}
	// Reset Sekunde
	/*if(nowSecond==1){
		// canvas.innerHTML="Sekunde "; // Alt
		// Klasse für alle 60 auf invisible setzen,damit sie wieder weiß werden
		for(var i=0;i<60;i++){
			document.getElementById("second"+i).className = "invisible";
		}
		// 1. Schriftzug mit visible klasse überschreiben, damit der hier nun sichtbar wird/bleibt (beim reset nach 60 Seks)
		document.getElementById("second0").className = "visible";
		lock=1;
	}
	if(nowSecond==0 && lock>30){
		// canvas.innerHTML+="Sekunde "; // Alt
		// Nur letztes setzen, da das hier safe die 60.Sekunde ist
		document.getElementById("second59").className = "visible";
		lock=0;
	}
	else if(nowSecond>lock){
		// canvas.innerHTML+="Sekunde"+" "; // Alt
		// Element der aktuellen Sekunde mit visible Class versehen,damit es sichtbar wird
		for(var i=0;i<=lock;i++){
			document.getElementById("second"+i).className = "visible";
		}
		// document.getElementById("second"+lock).className = "visible";
		lock=nowSecond;
	}*/
