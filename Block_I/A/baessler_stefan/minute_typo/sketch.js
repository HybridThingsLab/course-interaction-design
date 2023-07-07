function preload() {
}

// called once when loaded
function setup() {
  canvas = createCanvas(windowWidth, windowHeight).parent('canvas');

  textSize(100);
  textAlign(CENTER, CENTER);
  textFont("nitti-typewriter-open");  
}

let move = 0; // Gesamtverschiebung
let direction = 1; // Bewegungsrichtung (1 = links nach rechts, -1 = rechts nach links)
let originalDirection = 1;

function draw() {
  translate(0, 0)
  push();
  let numbers = "00 01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60";
  let textLaenge = textWidth(numbers);
  background(0);
  //text(move/10, 200, 100);
  fill(255);
  translate(-move, 10); // Text nach links oder rechts verschieben
  text(numbers, width/2 + textLaenge/2, height/2); // Text horizontal zentrierend
  move += direction * 3; // Verschiebung pro Frame
  if (move/10 >= 1040) { // Wenn der Text den Rand erreicht hat
    direction *= -30; // Bewegungsrichtung umkehren
  }
  if(move <= 0){
    direction = originalDirection;
  }
  pop();
  rectMode(CENTER);
  noFill();
  strokeWeight(3);
  stroke(255);
  line(width/2, height/2 - 100, width/2, height/2 - 50) 
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}