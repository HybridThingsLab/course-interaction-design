var lineInterval = 1000; // milliseconds
var hueInterval = 1; // color hue change per minute
var len = 80//iitial length of the lines

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES);
  background(0);
}

function draw() {

  // Farbwechsel
  colorMode(HSB);
  var currentHue = map(second(), 0, 50, 0, 360);
  var colorVal = color(currentHue, 100, 100);
  stroke(colorVal);

  // Linien generieren
  if (millis() % lineInterval < 50) {
    translate(width / 2, height);
    branch(len, 30);
  }
  
  // Länge erhöhen
  if (second() % 15== 0) {
    len += len * 0.002
  }
}

function branch(len, angle) {
  line(0, 0, 0, -len);
  translate(0, -len);
  len *= 0.7;
  angle = random(angle - 30, angle + 20);

  if (len > 2) {
    push();
    rotate(angle);
    branch(len, angle);
    pop();

    push();
    rotate(-angle);
    branch(len, angle);
    pop();
  }
}
