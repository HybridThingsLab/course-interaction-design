let r = 5;
let circleSize = 50; // diameter of each circle
let circleSpacing = 300; // spacing between each circle
let angleSpacing = r; // angle spacing between each circle
let startAngle = -(Math.PI); // starting angle for the circle
let colors = ["#F8B195", "#F67280", "#6C5B7B", "#F0B5D4"]; // array of colors to choose from
let circleCount = 0; // number of circles added so far
let prevX, prevY; // position of the previous circle

let rotationAngle = 0; // angle of rotation

function setup() {
  createCanvas(800, 800);
  background(0);
  noStroke();
  setInterval(addCircle, 1000); // add one new circle per second
}

function draw() {
  let centerX = width / 2; // x-coordinate of the center of the canvas
  let centerY = height / 2; // y-coordinate of the center of the canvas

  // rotate the canvas around its center
  translate(centerX, centerY);
  rotate(rotationAngle);
  translate(-centerX, -centerY);

  // calculate the size of the circles based on the circle count
  let sizeFactor = 1 - circleCount / 60;

  for (let i = 0; i < circleCount; i++) {
    // calculate the position of the circle based on the circle count
    let positionFactor = i / 60;
    let x = centerX + cos(startAngle + i * angleSpacing * 2) * (circleSize + circleSpacing) * positionFactor;
    let y = centerY + sin(startAngle + i * angleSpacing * 2) * (circleSize + circleSpacing) * positionFactor;
    let c = colors[i % colors.length]; // choose a color from the array based on the circle index

    fill(c);
    ellipse(x, y, circleSize * sizeFactor, circleSize * sizeFactor);

    // Draw a line between the new circle and the previous one
    if (i > 0) {
      stroke(c);
      line(x, y, prevX, prevY);
      noStroke();
    }

    // Update the position of the previous circle
    prevX = x;
    prevY = y;
  }

  // if 60 circles have been drawn, reset the circle count and angle of rotation
  if (circleCount === 60) {
    circleCount = 0;
    prevX = undefined; // reset previous circle position
    prevY = undefined; // reset previous circle position
    r = random(3, 9);
    rotationAngle = random(PI/8, PI/2);

    // fade out the circles and turn the background to black
    fadeOut();
  }

  rotationAngle += TWO_PI / 3600; // rotate 360 degrees over 60 seconds
}

function addCircle() {
  circleCount++; // increment the circle count
}

function fadeOut() {
  let alpha = 255;
  let fadeInterval = setInterval(function() {
    background(0, alpha);
    alpha -= 5;
    if (alpha <= 0) {
      clearInterval(fadeInterval);
    }
  }, 50);
}
