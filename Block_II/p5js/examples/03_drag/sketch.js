// Drag — example approach

// globals
let px, py;
let dragging = false;
let trail = [];
let color_circle = '#ffffff'; // signal color — use only when justified
let color_signal_circle = '#00ff00'; // signal color — use only when justified
let size_circle = 24;

// setup
async function setup() {

  // init canvas
  createCanvas(600, 600);
  px = width / 2;
  py = height / 2;

}

// draw
function draw() {

  // backgound color
  background(0);

  // draw trail
  noFill();
  stroke(255);
  strokeWeight(1);
  beginShape();
  for (let p of trail){
    vertex(p.x, p.y);
  }
  endShape();

  // anchor point
  noStroke();
  if(dragging){
    fill(color_signal_circle);
  }else{
    fill(color_circle);
  }
  ellipse(px, py, size_circle, size_circle);
}

// interaction
function mousePressed() {
  if (dist(mouseX, mouseY, px, py) < size_circle / 2) {
    dragging = true;
    trail = [];
  }
}

function mouseDragged() {
  if (dragging) {
    px = mouseX;
    py = mouseY;
    trail.push({ x: px, y: py });
  }
}

function mouseReleased() {
  dragging = false;
}
