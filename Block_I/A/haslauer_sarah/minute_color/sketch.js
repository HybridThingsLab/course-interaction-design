let farbe = 1;
let change = 4.25;
let backFarbe = 255;
let backChange = 0.071;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(backFarbe);
  if (backFarbe <= 0) {
    background(255,0,0);
  }
  if (backFarbe >= 255) {
    background(255,0,0);
  }
  noStroke();
  fill(farbe);
  circle(windowWidth/2,windowHeight/2,windowWidth/2);
  farbe = farbe + change;
  backFarbe = backFarbe - backChange;
  if (farbe >= 255) {
    change = -change; 
 } 
  if (farbe <= 0) {
    change = -change; 
 }
  if (backFarbe < 0) {
    backChange = -backChange;
  }
  if (backFarbe > 255) {
    backChange = -backChange;
  }
}