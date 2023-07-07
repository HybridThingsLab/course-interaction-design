let minuteAngle = 0;
let angle = 0;
let angleDirection = 1;
let pendulumX = 0;
let pendulumY = 0;
let number = 0;
let pendulumSpeed = 0.01; // Initial pendulum swing speed

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textSize(40);
  textFont("Courier New");
}

function draw() {
  background(0);

  // Draw the clock face
  let clockSize = min(width, height) * 0.4; // Calculate clock size based on window dimensions
  strokeWeight(4);
  ellipse(width / 2, height / 2, clockSize, clockSize);

  // Draw the number
  let numberPosition = createVector(width / 2, height / 2 - clockSize / 2 - 60); // Calculate number position based on clock size
  fill(255);
  text(number.toString(), numberPosition.x, numberPosition.y);

  // Draw the pendulum
  let pendulumLength = clockSize ; // Set pendulum length based on clock size
  let angleChange = pendulumSpeed; // Adjust the angleChange for pendulum swing speed
  let angleLimit = PI / 4;

  angle += angleDirection * angleChange;
  if (angle > angleLimit || angle < -angleLimit) {
    angleDirection *= -1;
  }

  pendulumX = width / 2 + pendulumLength * sin(angle);
  pendulumY = height / 2 + pendulumLength * cos(angle);

  // Check for mouse hover over the pendulum circle
  let isHovering = dist(mouseX, mouseY, pendulumX, pendulumY) < clockSize * 0.05;
  if (isHovering) {
    cursor(HAND); // Set cursor to hand when hovering over the pendulum
  } else {
    cursor(ARROW); // Set cursor to arrow otherwise
  }

  strokeWeight(3);
  stroke(255);
  line(width / 2, height / 2, pendulumX, pendulumY);
  fill(255);
  ellipse(pendulumX, pendulumY, clockSize * 0.15, clockSize * 0.15);

  // Draw the clock hands
  push();
  translate(width / 2, height / 2);
  rotate(-HALF_PI); // rotate to have 0 radians at the top
  strokeWeight(4);
  stroke(0);
  rotate(minuteAngle);
  line(0, 0, clockSize * 0.375, 0); // minute hand
  pop();

  // Update the number and pendulum speed as minute hand completes a full rotation
  if (minuteAngle >= TWO_PI) {
    minuteAngle = 0;
    number = (number + 1) % 10; // Increment the number by 1 and wrap around to 0 after reaching 9
    pendulumSpeed += 0.01; // Increase the pendulum swing speed
  }
}

function mouseClicked() {
  if (dist(mouseX, mouseY, pendulumX, pendulumY) < 20) {
    minuteAngle += radians(6); // Move the minute hand forward by 6 degrees (1/10th of an hour)
    if (minuteAngle >= TWO_PI) {
      minuteAngle = 0;
      number = (number + 1) % 10; // Increment the number by 1 and wrap around to 0 after reaching 9
      pendulumSpeed += 0.01; // Increase the pendulum swing speed
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
