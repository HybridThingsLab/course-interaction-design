// https://p5js.org/examples/input-clock.html

let w = 800;
let h = 800;
let seconds, milliseconds;

function setup() {

  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CORNER);

  fill(0);
  noStroke();

  x = -8.5;  
  merke = -1;
  farbe1 = 255;
}

function draw() {
  background(127,170,128);
  milliseconds = int(millis() % 60000);
  seconds = int(milliseconds / 1000);
  push();
  w = width;
  h = height;
  translate(w/2, h / 2);
  

  if(seconds != merke){
    farbe1 += x;
    if(farbe1 == 0 || farbe1 == 255){
      x = -x;
    }
    merke = seconds;
  } 



  fill(farbe1,83,0,60);
  ellipse(4 * w / 60, 0, w/2, w/2);
  fill(0,255,farbe1, 50);
  ellipse(-4 * w / 60, 0, w/2, w/2);

  
 
  pop();

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}