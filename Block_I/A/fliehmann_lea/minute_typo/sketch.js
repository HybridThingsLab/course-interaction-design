// https://p5js.org/examples/input-clock.html

let w = 800;
let h = 800;
let seconds, milliseconds;

function setup() {

  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  textSize(0.05 * width);
  textAlign(CENTER, CORNER);
  background(255);

  fill(0);
  noStroke();
  w = width;
  h = height;
  ellipse(w / 2, h / 2, w / 2, w / 2);

  merke = -1;
  farbe = 255;
  opaz = 50;
  minute = true;
}

function draw() {
  milliseconds = int(millis() % 60000);
  seconds = int(milliseconds / 1000);
  w = width;
  h = height;

  let s = map(seconds, 0, 60, 0, 360) - 90 ;
  push();
  translate(w / 2, h / 2);
  rotate(s);

  fill(farbe, opaz);

  if(seconds != merke){
    text("Sekunden", -w/80, -w/40, w/4, w/4);
    merke = seconds;
    if(seconds == 59 && minute){
      farbe = 0;
      opaz = 300;
      minute = false;
      stroke(0);
    }
    else if(seconds == 59 && minute == false){
      farbe = 255;
      opaz = 50;
      minute = true;
      noStroke();
    }
    
  }
 
  pop();

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  ellipse(w / 2, h / 2, w / 2, w / 2);
}