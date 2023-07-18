function setup() {
  createCanvas(800, 800);
  frameRate(1);
}

function draw() {
  let h = hour();
  let m = minute();
  let s = second();
  r = random(255);
  g = random(255);
  b = random(255);
  a = random(255);
  background(255);
  noStroke();
  fill(r, g, b, a);
  rect(10,10,10,10 + (h * 10));
  rect(20,10,10,10 + (m * 10));
  rect(30,10,10,10 + (s * 10));
}