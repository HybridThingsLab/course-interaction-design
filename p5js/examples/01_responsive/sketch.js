var w,h;

function setup() {
  w = windowWidth;
  h = windowHeight;
  canvas = createCanvas(w, h);
}

function draw() {
  background(255, 255, 128);
  // A rectangle
  noStroke();
  fill(200, 200, 200);
  // uses global variables for width and height
  rect(50, 50, w - 100, h - 100);
  fill(255, 0, 0);
  ellipse(w / 2, h / 2, w / 1.5, w / 1.5)
}

function windowResized() {
  // if window resized
  // update variables
  w = windowWidth;
  h = windowHeight;
  // assigns new values 
  resizeCanvas(w, h);
}
