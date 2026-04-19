// Press — example approach

// globals
let pressed = false;
let scale = 1.0;
let targetScale = 1.0;
let color_stroke = '#ffffff';
let color_signal_stroke = '#00ff00';
let size_rect = 100;
let targetScale_pressed = 0.25;
let targetScale_released = 1.0;
let smooth_interpolation = 0.15;

// setup
function setup() {

  // init canvas
  createCanvas(600, 600);

}

// draw
function draw() {

  // background color
  background(0);

  // smooth interpolation — make press feel tangible
  scale = lerp(scale, targetScale, smooth_interpolation);

  translate(width / 2, height / 2);

  // reactive shape
  noFill();
  strokeWeight(4);
  if (pressed) {
    stroke(color_signal_stroke);
  } else {
    stroke(color_stroke);
  }
  rectMode(CENTER);
  rect(0, 0, size_rect * scale, size_rect * scale);
}

// interaction
function mousePressed() {
  if (dist(mouseX, mouseY, width / 2, height / 2) < size_rect / 2) {
    pressed = true;
    targetScale = targetScale_pressed;
  }
}

function mouseReleased() {
  pressed = false;
  targetScale = targetScale_released;
}
