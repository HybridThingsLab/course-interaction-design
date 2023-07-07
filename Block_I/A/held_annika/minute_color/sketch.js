let bgColor;
let circleColor;
let radius;
let numCircles = 60;
let angle;
let startColor, endColor;
let colors = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color(0);
  circleColor = color(255);
  radius = min(width, height) / 2 * 0.9; // 90% vom Screen
  angle = TWO_PI / numCircles;

  startColor = color(255, 0, 0); // rot
  endColor = color(255, 255, 0); // gelb

  // array mit Farben
  for (let i = 0; i < numCircles; i++) {
    let c = lerpColor(startColor, endColor, i / numCircles);
    colors.push(c);
  }
}

function draw() {
  background(bgColor);
  noStroke();

  // Kreise verschwinden
  let numVisible = Math.floor(map(frameCount % (numCircles * 60), 0, numCircles * 60, numCircles, 0));

  // neuer radius für responsive
  radius = min(width, height) / 2 * 0.9;

  for (let i = 0; i < numCircles; i++) {
    if (i < numVisible) {
      fill(colors[i]);
    } else {
      fill(bgColor);
    }

    let x = width / 2 + cos(i * angle) * radius;
    let y = height / 2 + sin(i * angle) * radius;
    circle(x, y, radius * 0.1);
  }
}
//für responsive
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}