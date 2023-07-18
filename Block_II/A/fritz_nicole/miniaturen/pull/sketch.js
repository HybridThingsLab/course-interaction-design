let bl = 50;
let xl;
let b1 = 255;
let b2 = 255;
let m = 20;
let u = 150;
let backg = 0;
let myboolean = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  xl = width / 2;
}

function draw() {
  background(backg);
  stroke(255);
  fill(250);
  line(width / 2, 0, width / 2, bl);
  noStroke();
  rectMode(CENTER);
  rect(xl, bl, width / 40, width / 40);
  fill(b1);
  circle(width / 4, height / 5, m); //m
  fill(b2);
  circle(width / 4 * 3, height / 4 * 3, u); //u

  if (myboolean) {
    b1 += 250 / mouseY;
    b2 += 250 / mouseY;
    backg -= 250 / mouseY;
  }

}

function mouseDragged() {
  bl = mouseY;
  m++;
  u--;
}

function mouseReleased() {
  bl = 50;
  m = 70;
  u = 150;
  b1 = 0;
  b2 = 0;
  backg = 255;

  myboolean = true;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  xl = width / 2;
}
