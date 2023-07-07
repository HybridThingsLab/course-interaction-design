let c1, c2, c3, c4, c5;
let circleColor;
let bgColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  c1 = color(7, 19, 51);
  c2 = color(99, 82, 147);
  c3 = color(225, 133, 174);
  c4 = color(247, 189, 163);
  c5 = color(105, 210, 231);

  circleColor = color(255, 255, 255);
  bgColor = c1;
}

function draw() {
  background(bgColor);

  // Circle Color Change
  let t = map(millis() % 60000, 0, 60000, 0, 1);
  circleColor = lerpColor(color(255, 255, 255), color(255, 246, 143), t);

  // Draw Circle
  let centerX = width / 2;
  let centerY = height / 2;
  let circleSize = min(width, height) * 0.4;
  noStroke();
  fill(circleColor);
  circle(centerX, centerY, circleSize);

  // Background Color Change
  let t2 = map(millis() % 60000, 0, 60000, 0, 1);
  if (t2 < 0.2) {
    bgColor = lerpColor(c1, c2, t2 * 5);
  } else if (t2 < 0.4) {
    bgColor = lerpColor(c2, c3, (t2 - 0.2) * 5);
  } else if (t2 < 0.6) {
    bgColor = lerpColor(c3, c4, (t2 - 0.4) * 5);
  } else if (t2 < 0.8) {
    bgColor = lerpColor(c4, c5, (t2 - 0.6) * 5);
  } else {
    bgColor = lerpColor(c5, c1, (t2 - 0.8) * 5);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
