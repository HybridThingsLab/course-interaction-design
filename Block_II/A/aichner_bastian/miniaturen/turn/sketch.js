let dimmerAngle = 0;
let dimmerSize;
let bgColor = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  dimmerSize = min(width, height) * 0.4;
}

function draw() {
  background(bgColor);
  
  // Dimmer-Kreis zeichnen
  push();
  translate(width/2, height/2);
  strokeWeight(10);
  noFill();
  stroke(255, 0, 0);
  ellipse(0, 0, dimmerSize, dimmerSize);
  stroke(0);
  arc(0, 0, dimmerSize, dimmerSize, 0, dimmerAngle);
  pop();
  
  // Hintergrundfarbe ändern basierend auf Dimmer-Wert
  bgColor = map(dimmerAngle, 0, 360, 0, 255);
}

function mouseDragged() {
  // Winkel des Dimmer-Kreises basierend auf Mausposition berechnen
  let dx = mouseX - width/2;
  let dy = mouseY - height/2;
  dimmerAngle = atan2(dy, dx);
  dimmerAngle = (dimmerAngle < 0) ? dimmerAngle + 360 : dimmerAngle;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  dimmerSize = min(width, height) * 0.4;
}
