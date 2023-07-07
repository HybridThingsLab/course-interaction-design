let w = 800
let h = 800;
let seconds, milliseconds;

function setup() {
  createCanvas(w, h);
  angleMode(DEGREES);
}

function draw() {

  background(255);

  //milliseconds = int(millis() % 60000);
  milliseconds = int(millis());

  let hour = map(milliseconds, 0, 24000*60*60, 0, 360);

  // draw background
  fill(0);
  noStroke();
  ellipse(w / 2, h / 2, w / 2, w / 2);


  // milliseconds
  push();
  translate(w / 2, h / 2);

  rotate(hour);
  fill(100,60,100);
  ellipse(0, -50, 30, 30);

  rotate(hour * 60);
  fill(170,90,170);
  ellipse(0, -100, 23, 23);

  rotate(hour * 60 * 60);
  fill(255,160,225);
  ellipse(0, -150, 16, 16 );

  pop();

}