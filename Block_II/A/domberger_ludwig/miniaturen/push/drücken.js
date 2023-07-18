let button;

function setup() {
  createCanvas(1920, 1080);
  button = createButton("+");
  button.mouseClicked(moveButton);
  button.size(100, 100);
  button.position(10, 10);
  button.style("font-size", "48px");
  button.style("background-color", "lightblue");
} 

function draw() { 
  background(220);
  /*button.style("font-size",
               map(mouseX, 0, width, 0, 128) + "px");*/
}

function moveButton() {
  button.position(random(windowWidth-100), random(windowHeight-100));
}

function windowResized() {
  // if window resized
  // update variables
  w = windowWidth;
  h = windowHeight;
  // assigns new values 
  resizeCanvas(w, h);
}