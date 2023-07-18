let x = 15;

function setup() {

  createCanvas(windowWidth, windowHeight);
  background(255);
} 


function draw() {
  if (frameCount % 60 == 0) {
    x+=6;
  }
  fill(255, x, x);
  noStroke();
  circle(width/2, height/2, width/3);
  if (x >= 255) {
    x = 15;
  }
}