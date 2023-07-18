var w, h;
var r, g, b;
var x, y;
var px, py;
var sw;

function preload() {
}

function setup() {
  w = windowWidth;
  h = windowHeight;
  canvas = createCanvas(w, h);
  f = 0;
  sw = 5;
}

function draw() {
  x = mouseX;
  y = mouseY;
  px = pmouseX;
  py = pmouseY;
  
  background(r, g, b);
  strokeWeight(sw);
  stroke(255);
  
  var centerX = w / 2;
  var centerY = h / 2;
  var endX = centerX + (x - centerX) * (w / 6) / dist(centerX, centerY, x, y);
  var endY = centerY + (y - centerY) * (w / 6) / dist(centerX, centerY, x, y);
  
  fill(0);
  ellipse(centerX, centerY, w / 2.5);
  fill(255);
  line(centerX, centerY, endX, endY);
  
  var angle = atan2(y - centerY, x - centerX);
  var lerpedValue = map(angle, -PI, PI, 0, 1);
  
  // Lerp zwischen den Farben Rot und Grün basierend auf dem Winkel des Mauszeigers
  var lerpedColor = lerpColor(color(255, 0, 0), color(0, 255, 0), lerpedValue);
  
  if (
    mouseIsPressed && dist(centerX, centerY, x, y) <= w / 6 &&
    ((x <= centerX && y <= centerY && px <= x && py >= y) ||
      (x >= centerX && y <= centerY && px <= x && py <= y) ||
      (x <= centerX && y >= centerY && py >= y && px >= x) ||
      (x >= centerX && y >= centerY && px >= x && py <= y))
  ) {
    r = red(lerpedColor);
    g = green(lerpedColor);
    b = blue(lerpedColor);
    sw = 5;
    cursor('grabbing'); // Geschlossene Faust
  } else if (
    mouseIsPressed && dist(centerX, centerY, x, y) <= w / 6 &&
    ((x <= centerX && y <= centerY && px >= x && py <= y) ||
      (x >= centerX && y <= centerY && px >= x && py >= y) ||
      (x <= centerX && y >= centerY && py <= y && px <= x) ||
      (x >= centerX && y >= centerY && px <= x && py >= y))
  ) {
    r = red(lerpedColor);
    g = green(lerpedColor);
    b = blue(lerpedColor);
    sw = 5;
    cursor('grabbing'); // Offene Hand
  } else {
    r = 0;
    g = 0;
    b = 0;
    sw = 5;
    cursor(); // Standardcursor
  }

  if (dist(centerX, centerY, x, y) < w / 6 && !mouseIsPressed) {
    cursor('grab');
  }

}

function windowResized() {
  w = windowWidth;
  h = windowHeight;
  resizeCanvas(w, h);
}
