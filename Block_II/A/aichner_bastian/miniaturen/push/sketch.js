let diameter;
let pressure = 0;
let maxPressure = 1;
let fillAngle = 0;
let fillSpeed = 0.6;
let releaseSpeed = 0.3;
let maxFillAngle = 180;
let isPressed = false;
let timer = 0;
let maxTime = 3000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  diameter = min(width, height) * 0.8;
}

function draw() {
  background(255);
  noFill();
  stroke(0);
  strokeWeight(2);
  // Halbkreis
  arc(width/2, height/2, diameter, diameter, 180, 360);
  line(width/2 - diameter/2, height/2, width/2 + diameter/2, height/2);
  // Füllung des halbkreises je nach Druck
  fill(0);
  arc(width/2, height/2, diameter, diameter, 180, 180 + fillAngle);
  
  // tacho füllen
  if (isPressed && timer < maxTime) {
    fillAngle = min(fillAngle + fillSpeed, maxFillAngle);
    timer += deltaTime;
  } 
  // tacho leeren
  else if (!isPressed && fillAngle > 0) {
    fillAngle = max(fillAngle - releaseSpeed, 0);
  }
}

function mousePressed() {
  isPressed = true;
}

function mouseReleased() {
  isPressed = false;
  timer = 0;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  diameter = min(width, height) * 0.8;
}

