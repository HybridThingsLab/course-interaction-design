let x = 0;
let y = 0;
let speed = 8;
let alpha = 200;
let circleAlpha = 200;
let startColor, endColor;
let elapsed = 0;

function setup() {
  createCanvas(700, 700);
  startColor = color(0, 0, 128);
  endColor = color(244, 208, 63);
  noStroke();
}

function draw() {
  background(255, 244, 184, 20);

  fill(0, 0, 128, alpha);
  rect(x, y, 700, 700);

  y -= speed;
  alpha += 5;

  if (y < -height) {
    y = 0;
    alpha = 200;
  }

  let duration = 60000;
  let t = elapsed / duration;
  let currentColor = lerpColor(startColor, endColor, t);

  fill(currentColor);
  ellipse(width/2, height/2, 200, 200);

  circleAlpha += 5;
  if (circleAlpha >= 255) {
    circleAlpha = 200;
  }

  elapsed += deltaTime;
  if (elapsed > duration) {
    elapsed = 0; 
  }
}
