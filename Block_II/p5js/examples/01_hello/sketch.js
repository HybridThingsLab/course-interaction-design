// globals
size_square = 100;

// setup
async function setup() {

  // init canvas
  canvas = createCanvas(600, 600);

}

// draw
function draw() {

  // background
  background(0);

  // re-calculate size of square based mouse position
  size_square = map(mouseX, 0, width, 50, 200);

  // draw square
  noStroke();
  fill(255);
  rectMode(CENTER);
  rect(width/2, height/2, size_square, size_square);
}