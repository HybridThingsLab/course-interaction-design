var x = 400;
var y = 400;
var button;
var score = 0;
// var s = second();
var timer = 60;
var rx = 0;
var health = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  button = createButton("+");
  button.position(x, y);
  button.mousePressed(randomLocation);
  button.size(100, 100);
  button.style("background-color", "green");
  button.style("font-size", "48px");
}

function draw() {
  background(150);
  timer = timer - 1;
  if (timer === 0) {
    button.position(random(x), random(y));
    timer = 50;
  }
  stroke(0);
  strokeWeight(15);
  noFill();
  rect(windowWidth/8, windowHeight-200, 600, 60);
  
  noStroke();
  fill(255, 0, 0);
  rect(windowWidth/8, windowHeight-200, score*60, 60);
  if(score > 10){
    reset();
  }
}

function randomLocation() {
  x = random(windowWidth-100)
  y = random(windowHeight-100)
  button.position(x, y);
  score = score + 1
  timer = 50;
}

function reset(){
  score = 0;
}

function windowResized() {
  // if window resized
  // update variables
  w = windowWidth;
  h = windowHeight;
  // assigns new values 
  resizeCanvas(w, h);
}