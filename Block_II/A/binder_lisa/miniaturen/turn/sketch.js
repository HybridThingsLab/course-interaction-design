let angle = 0;
let delta = 0;
let backgroundColor = 0;
let circleSize;
let textSizeValue;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSizeValue = min(width, height) * 0.1;
  textSize(textSizeValue);
  circleSize = min(width, height) * 0.7;
}

function draw() {
  background(backgroundColor);
  translate(width / 2, height / 2);

  if (delta !== 0) {
    angle += delta;
    backgroundColor = map(angle, -PI, PI, 0, 255);
  }

  rotate(angle);
  
  fill(0);
  ellipse(0, 0, circleSize, circleSize);
  
  fill(255);
  text("TWIST ME", 0, 0);
}

function mouseWheel(event) {
  let delta = event.delta;
  angle += delta / 500;
  backgroundColor = map(angle, -PI, PI, 0, 255);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  textSizeValue = min(width, height) * 0.1;
  textSize(textSizeValue);
  circleSize = min(width, height) * 0.7;
}

function setupCursor() {
  if (dist(mouseX, mouseY, width / 2, height / 2) <= circleSize / 2) {
    cursor('row-resize');
  } else {
    cursor(ARROW);
  }
}

function draw() {
  background(backgroundColor);
  translate(width / 2, height / 2);

  if (delta !== 0) {
    angle += delta;
    backgroundColor = map(angle, -PI, PI, 0, 255);
  }

  rotate(angle);
  
  fill(0);
  ellipse(0, 0, circleSize, circleSize);
  
  fill(255);
  text("TWIST ME", 0, 0);
  setupCursor();
}
