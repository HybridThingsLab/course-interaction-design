function setup() {
  createCanvas(800, 800);
}

function draw() {
  let h = hour();
  let m = minute();
  let s = second();
  background(255);
  line(10, 10, 10, 10 + (h * 10));
  line(20, 10, 20, 10 + (m * 10));
  line(30, 10, 30, 10 + (s * 10));
}