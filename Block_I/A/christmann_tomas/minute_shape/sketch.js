// https://p5js.org/examples/input-clock.html
let d, x, height, relHeight;
let seconds, milliseconds;
cY=[60000];
cX=[60000];

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  stroke(255);
}

function draw() {

  background(0);
  milliseconds = int(millis() % 60000);
  seconds = int(milliseconds / 1000);
  welle = int(millis() % 2000);

  d = map(milliseconds, 0, 60000, 20, windowWidth/8);
  x = map(milliseconds, 0, 60000, d/2, windowWidth/2);
  height = map(seconds, 0, 60, 0, windowHeight/2-d/2,);
  relHeight = sin(radians(map(welle, 0, 2000, 360, 0)));
  fill(255);
  circle(x,relHeight*height+windowHeight/2,d);
  circle(windowWidth-x,-relHeight*height+windowHeight/2,d);
  line(x,relHeight*height+windowHeight/2,windowWidth-x,-relHeight*height+windowHeight/2);
  strokeWeight(1);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}