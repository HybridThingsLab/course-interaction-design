let canvas;
let dist = -150;
let diameter = 400;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  angleMode(DEGREES);
}

function draw() {
  let speed = frameCount / 10;
  let smallerDimension = min(width, height);
  diameter = smallerDimension * 0.5;

  background(255);

  fill(255);
  rect(0, 0, width, height);

  noStroke();
  translate(width/2, height/2);

  push();
  blendMode(DIFFERENCE);
  let angle1 = speed * 4;
  rotate(angle1);
  translate(0, dist);
  fill(255);
  circle(0, 0, diameter);
  strokeWeight(10);
  stroke(255, 127, 0);
  pop();

  push();
  blendMode(DIFFERENCE);
  let angle2 = speed;
  rotate(angle2);
  translate(0, dist);
  fill(191);
  circle(0, 0, diameter);
  strokeWeight(10);
  stroke(224, 17, 95);
  pop();

  push();
  blendMode(DIFFERENCE);
  let angle3 = speed * 2;
  rotate(angle3);
  translate(0, dist);
  fill(127);
  circle(0, 0, diameter);
  strokeWeight(10);
  stroke(80, 200, 120);
  pop();

  if (speed >= 360) {
    frameCount = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
