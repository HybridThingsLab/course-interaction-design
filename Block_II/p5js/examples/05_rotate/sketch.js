// Rotate — example approach

// globals
let angle = 0;
let rotating = false;
let color_stroke = '#ffffff';
let color_signal_stroke = '#00ff00';
let size_rect= 24;
let length_line = 0;

// setup
function setup() {

  // init canvas
  createCanvas(600, 600);

}

// draw
function draw() {

  // background color
  background(0);

  // calculate line length to mouse position
  length_line = dist(mouseX, mouseY, width / 2, height / 2);

  translate(width / 2, height / 2);

  // main pointer — only visible when rotating
  if (rotating) {
    stroke(color_signal_stroke);
    strokeWeight(2);
    line(0, 0, cos(angle) * length_line, sin(angle) * length_line);
  }

  // center point
  noFill();
  if (rotating) {
    stroke(color_signal_stroke);
  } else {
    stroke(color_stroke);
  }
  rectMode(CENTER);
  rect(0, 0, size_rect, size_rect);
}

// interaction
function mousePressed() {
  rotating = true;
  angle = atan2(mouseY - height / 2, mouseX - width / 2);
}

function mouseDragged() {
  if (rotating) {
    angle = atan2(mouseY - height / 2, mouseX - width / 2);
  }
}

function mouseReleased() {
  rotating = false;
}
