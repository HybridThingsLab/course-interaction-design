// https://p5js.org/examples/input-clock.html

let x=window.innerWidth/2;
let y=window.innerHeight/2;
let xSpeed;
let ySpeed;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  strokeWeight(3);
  fill(0);
}

// The mouse's heading when centered mid-canvas.
// Returns an angle in radians between -PI and PI.
function mouseHeading() {
}

function draw() {
  background(255);
  xSpeed=(mouseX-x)*0.1;
  ySpeed=(mouseY-y)*0.1;
  if (mouseIsPressed){
    x=x+xSpeed;
    y=y+ySpeed;
  }
  circle(x,y,20);
  line(x,y,mouseX,mouseY);
}

function windowResized(){
  resizeCanvas(window.innerWidth, window.innerHeight);
}