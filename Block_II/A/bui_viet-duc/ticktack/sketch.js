let circle1Diameter = 500;
let circle1Border = 5;
let circle2Diameter = 100;

let scaleSize = 100;
let updatedSize = 100;
let r = 0;
let g = 0;
let b = 0;

let isInsideCircle = false;

function setup() {
  createCanvas(1400, 800);
}

function draw() {
  background(255);
  
  // Zeichne Kreis 1 ohne Füllung und mit Border
  noFill();
  stroke(r, g, b);
  strokeWeight(circle1Border);
  ellipse(1000, height / 2, circle1Diameter, circle1Diameter);
  
  // Zeichne Kreis 2 mit schwarzer Füllung
  fill(r, g, b);
  noStroke();
  ellipse(1000, height / 2, circle2Diameter, circle2Diameter);
  
  // animierter Kreis
  noFill();
  stroke(0);
  strokeWeight(5);
  ellipse(400, height / 2, 500);

  scaleSize += (500 - updatedSize) / 60;
  if (scaleSize > 500) {
    scaleSize = updatedSize;
    updatedSize = scaleSize + (500 - 100) / 60;
  }

  fill(0);
  noStroke();
  ellipse(400, height / 2, scaleSize);
  
  if (circle2Diameter > updatedSize) {
    r = 0;
    g = 255;
    b = 0;
  } else {
    r = 255;
    g = 0;
    b = 0;
  }
  
  if (circle2Diameter >= 500) {
    textSize(60);
    text("Du hast gewonnen!", width / 2 - 250, 750);
  } else if (updatedSize > 500) {
    fill(0);
    strokeWeight(0);
    textSize(60);
    text("Loser!", width / 2 - 80, 700);
    scaleSize = 500;
  }
  
  let distance = dist(mouseX, mouseY, 1000, height / 2);
  if (distance <= circle2Diameter / 2) {
    isInsideCircle = true;
  } else {
    isInsideCircle = false;
  }
  
  if (isInsideCircle) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
}

function mouseClicked() {
  // Vergrößere Kreis 2, wenn die Maus geklickt wird
  circle2Diameter += 1.3;
  
  // Überprüfe, ob Kreis 2 den Durchmesser von 500px erreicht hat
  if (circle2Diameter > 500) {
    // Setze den Durchmesser von Kreis 2 wieder auf 100px zurück
    circle2Diameter = 500;
  }
}

function resetGame() {
  circle2Diameter = 100;
  updatedSize = 100;
  r = 0;
  g = 0;
  b = 0;
}
