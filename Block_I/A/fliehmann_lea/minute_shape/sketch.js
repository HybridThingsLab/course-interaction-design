// https://p5js.org/examples/input-clock.html

let w = 800;
let h = 800;
let seconds, milliseconds;

function setup() {
  createCanvas(windowWidth, windowHeight);

  merke = -1;
  zaehler = 250;
  aufwerter = 10;

  r = random(0, 256);
  g = random(0, 256);
  b = random(0, 256);

  r2 = 255,
  g2 = 255;
  b2 = 255;

  noStroke();
}

function draw() {
  background(r2, g2, b2);
  milliseconds = int(millis() % 60000);
  seconds = int(milliseconds / 1000);
  w = width;
  h = height;

  hoehe =seconds * h/60;

  fill(r,g,b);
  rect(0, (milliseconds%1000)-zaehler, w, h/60);

  
  rect(0, h - hoehe, w, hoehe);

  if(seconds != merke){
    merke = seconds;
    zaehler += aufwerter;
    aufwerter+= 0.000125 * h;

    if(seconds == 0){
      zaehler= 250;
      aufwerter = 0.0125 * h;

      r2 = r;
      g2 = g;
      b2 = b;

      r = random(0, 256);
      g = random(0, 256);
      b = random(0, 256);
    }
  }


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}