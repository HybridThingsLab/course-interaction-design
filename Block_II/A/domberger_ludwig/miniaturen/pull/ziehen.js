let x = 100,
  y = 100,
  angle1 = 0.0,
  laenge = 50;

  

function setup() {
  createCanvas(1920, 1080);
  strokeWeight(20.0);
  stroke(0, 50);
}

function draw() {
  background(100);

  if(mouseIsPressed){
    dx = mouseX - x;
    dy = mouseY - y;
    angle1 = atan2(dy, dx);
    x = mouseX - cos(angle1) * laenge;
    y = mouseY - sin(angle1) * laenge;
  }
  segment(x, y, angle1);
  fill(0);
  ellipse(x, y, 20, 20);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, laenge, 0);
  pop();
}

function windowResized() {
  // if window resized
  // update variables
  w = windowWidth;
  h = windowHeight;
  // assigns new values 
  resizeCanvas(w, h);
}