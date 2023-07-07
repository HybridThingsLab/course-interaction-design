// https://p5js.org/examples/input-clock.html

let w = 800;
let h = 800;
let seconds, milliseconds;

function setup() {
  createCanvas(w, h);
  angleMode(DEGREES);
}

function draw() {

  background(255);

  //milliseconds = int(millis() % 60000);
  milliseconds = int(millis());

  let hour = map(milliseconds, 0, 1000*60*60, 0, 360);

  // draw background
  fill(255);
  noStroke();
  ellipse(w / 2, h / 2, w / 2, w / 2);


  // milliseconds
  push();
  translate(w / 2, h / 2);

  noFill();
  stroke(0);
  strokeWeight(2);
  ellipse(0, 0, 300, 300);
  noStroke();

  noFill();
  stroke(0);
  strokeWeight(2);
  ellipse(0, 0, 150, 150);
  noStroke();

  rotate(hour * 60);
  fill(100);
  ellipse(0, -75, 30, 30);

  rotate(-(hour * 60 * 60));
  fill(100);
  ellipse(0, -150, 16, 16);

  pop();

}

windowResized = function() {
  resizeCanvas(w,h);
}