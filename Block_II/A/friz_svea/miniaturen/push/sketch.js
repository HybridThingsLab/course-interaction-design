let bearSize = 150; // Größe des Bärens in Pixeln
let handleWidth = 20; // Breite des Griffs in Pixeln
let handleHeight = 50; // Höhe des Griffs in Pixeln
let mouseXpos, mouseYpos; // Variablen für die Position der Maus
let bear = []; // Array für die ausgestochenen Kekse
var modus=0;
var yval;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor(); // Verstecke den Mauszeiger
}

function draw() {
  background( 245,222,179); // Änderung der Hintergrundfarbe
  
  
  // Zeichne jeden ausgestochenen Keks im Array
  for (let i = 0; i < bear.length; i++) {
    let x = bear[i].x;
    let y = bear[i].y;
    stroke(80, 52, 35);
    strokeWeight(3);
    noFill(); // Gelbe Farbe für den Keks
    ellipse(x, y, bearSize, bearSize); // Kopf
    ellipse(x - 0.3 * bearSize, y - 0.3 * bearSize, 0.3 * bearSize, 0.3 * bearSize); // Linkes Ohr
    ellipse(x + 0.3 * bearSize, y - 0.3 * bearSize, 0.3 * bearSize, 0.3 * bearSize); // Rechtes Ohr
    
    ellipse(x - 0.15 * bearSize, y + 0.1 * bearSize, 0.3 * bearSize, 0.4 * bearSize); // Linkes Auge
    ellipse(x + 0.15 * bearSize, y + 0.1 * bearSize, 0.3 * bearSize, 0.4 * bearSize); // Rechtes Auge
    
    ellipse(x - 0.1 * bearSize, y + 0.2 * bearSize, 0.1 * bearSize, 0.1 * bearSize); // Linkes Pupille
    ellipse(x + 0.1 * bearSize, y + 0.2 * bearSize, 0.1 * bearSize, 0.1 * bearSize); // Rechtes Pupille
    
  }
  if (mouseXpos && mouseYpos) { // Überprüfe, ob die Maus bewegt wurde
    // Zeichne die Ausstechform an der Position der Maus
    let x = mouseXpos;
    let y = mouseYpos;
    stroke(0);
    strokeWeight(2);
    noFill();
    ellipse(x, y, bearSize, bearSize); // Kopf
    ellipse(x - 0.3 * bearSize, y - 0.3 * bearSize, 0.3 * bearSize, 0.3 * bearSize); // Linkes Ohr
    ellipse(x + 0.3 * bearSize, y - 0.3 * bearSize, 0.3 * bearSize, 0.3 * bearSize); // Rechtes Ohr
    fill(255);
    ellipse(x - 0.15 * bearSize, y + 0.1 * bearSize, 0.3 * bearSize, 0.4 * bearSize); // Linkes Auge
    ellipse(x + 0.15 * bearSize, y + 0.1 * bearSize, 0.3 * bearSize, 0.4 * bearSize); // Rechtes Auge
    fill(0);
    ellipse(x - 0.1 * bearSize, y + 0.2 * bearSize, 0.1 * bearSize, 0.1 * bearSize); // Linkes Pupille
    ellipse(x + 0.1 * bearSize, y + 0.2 * bearSize, 0.1 * bearSize, 0.1 * bearSize); // Rechtes Pupille
    fill(150);
    noStroke();
    rect(x - handleWidth / 2, y + bearSize / 2, handleWidth, handleHeight); // Griff
  }
}

function mouseMoved() {
  // Speichere die Position der Maus in Variablen
  if (modus==0)
  {
    mouseXpos = mouseX;
    mouseYpos = mouseY;
  }
 
  console.log("run modus: "+modus);
}

function mouseDragged(){
  console.log("yval: "+yval+" / mouseY: "+mouseY);
  if(modus==1&&mouseY>yval){
  let newBear = {
    x: mouseXpos,
    y: mouseYpos
  };
  bear.push(newBear);}
  console.log("drag modus: "+modus);

}

function mousePressed() {

  console.log("la");
  modus=1;
  yval=mouseY;
}
 
function mouseReleased(){
  
  modus=0;
  console.log("blub");
 }

