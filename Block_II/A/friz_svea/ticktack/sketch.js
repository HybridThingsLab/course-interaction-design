var lifeMax = 10;
var lifeNow = 10;
var start=false;

var toleranceVal = 700; // Hier konfigurieren ab wann click ok is
var toleranceOk = false;
// let windowWidth = 600;
// let windowHeight = 600;
let degr=0;
let img;
var radiusDin = 0;

var lock = false; // False = klick geht, True = geht nicht
var lastSecond = 0;
var clickable = true; // Klickbar

let seconds, milliseconds;

function setup() {
  angleMode(DEGREES);
}

function draw() {
	createCanvas(windowWidth, windowHeight);
	noStroke();
  

	milliseconds = int(millis() % 60000);
	seconds = milliseconds / 1000;
	// Sekunde vergangen abfangen
	if(int(seconds) > int(lastSecond) || (int(seconds) == 0 && lastSecond>seconds))
	{
		// Wenn noch leben > 0 und nicht geklickt aka !lock
		if(!lock && start)
		{
			reduceDegr(); // Abzugsfunktion
		}
		lock = false; // Aufschließen, bei neuer Sekunde
	}
    
	// Refresh
	lastSecond = seconds;

	translate(windowWidth / 2, windowHeight / 2);
	rotate(-90);
	fill(0);

	// arc(0, 0, arcRadius, arcRadius, 0, 0+degr, PIE);
	if(windowWidth<=windowHeight){
		arc(0, 0, windowWidth-windowWidth/3, windowWidth-windowWidth/3, 0, 0+degr, PIE);
		noFill();
		stroke(1);
		ellipse(0,0, windowWidth-windowWidth/3,windowWidth-windowWidth/3);
	}
	else{
		arc(0, 0, windowHeight-windowHeight/3, windowHeight-windowHeight/3, 0, 0+degr, PIE);
		noFill();
		stroke(1);
		ellipse(0,0, windowHeight-windowHeight/3,windowHeight-windowHeight/3);
	}
  
	// console.log(milliseconds);
    fill(140,140,140);
    if(milliseconds%1000>toleranceVal){
		fill(0,0,255);
		toleranceOk = true;
		if(start==false){
			document.getElementById("cursor").style.visibility="visible"; 
		}
    }
	else{
		toleranceOk = false;
		document.getElementById("cursor").style.visibility="hidden"; 
	}

	if(windowWidth<=windowHeight){
		arc(0, 0, windowWidth/2-windowWidth/6, windowWidth/2-windowWidth/6, 0, -seconds*6*60, PIE);
		radiusDin = windowWidth/2-windowWidth/6;
	}
	else{
		arc(0, 0, windowHeight/2-windowHeight/6, windowHeight/2-windowHeight/6, 0, -seconds*6*60, PIE);
		radiusDin = windowHeight/2-windowHeight/6;
	}
	radiusDin /= 2; // Lol, funzt wohl
	distan(); // Für Mouse anzeige (muss hier untne sein, weil Wert erst hier unten refresht wird)
}
function mousePressed(event){
	// if(milliseconds%1000>toleranceVal && !lock && clickable){
	if(toleranceOk && !lock && clickable){
		degr+=6;
		lock = true; // Abschließen
		if(start==false){
			start=true;
			document.getElementById("cursor").style.visibility="hidden"; // Weg mit cursor
		}
		if(lifeNow<lifeMax)
			lifeNow += 1;
	}
	else{
		if(start){
			reduceDegr(); // Abzugsfunktion
		}
	}
}

function distan(){
	// Für cursor dist gedöns
	var x1 = windowWidth * 0.5;
	var y1 = windowHeight * 0.5;
	
	// Überprüfe, ob die Maus über einer Ecke ist und zeichne einen Kreis, um dies anzuzeigen
	if (dist(mouseX, mouseY, x1, y1) < radiusDin) {
		document.body.style.cursor="pointer";
		clickable = true;
	}
	else {
		document.body.style.cursor="context-menu";
		clickable = false;
	}
}

function reduceDegr()
{
	if(degr > 0){
		degr-=6;
	}
	// Jetzt <= 0?
	if(degr <= 0){
		document.getElementById("cursor").style.visibility="visible"; // Weg mit cursor
		start = false;
	}
}