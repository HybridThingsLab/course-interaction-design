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
  a1 = (h * 255) / 24;
  a2 = (m * 255) / 60;
  a3 = (s * 255) / 60;
  background(255);
  noStroke();
  fill(r, g, b, a1);
  rect(10,10,10 + (h * 5),10 + (h * 5));
  fill(r, g, b, a2);
  rect(20 + (h * 5),10,10 + (m * 5),10 + (m * 5));
  fill(r, g, b, a3);
  rect(30 + (h * 5) + (m * 5),10,10 + (s * 5),10 + (s * 5));
}