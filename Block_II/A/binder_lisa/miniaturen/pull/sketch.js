let posX, posY, diameter;
let pullX, pullY;
let isDragging;
let cursorStyle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  posX = width / 2;
  posY = height / 2;
  diameter = 50;
  pullX = posX;
  pullY = posY;
  isDragging = false;
}

function draw() {
  background(0);

  // Calculate force vector and display it as an arrow
  let forceX = pullX - posX;
  let forceY = pullY - posY;
  let forceMagnitude = dist(posX, posY, pullX, pullY);
  let forceAngle = atan2(forceY, forceX);
  let forceLength = map(forceMagnitude, 0, width, 0, 50);
  push();
  translate(posX, posY);
  rotate(forceAngle);
  strokeWeight(2);
  stroke(255);
  fill(255);
  triangle(diameter / 2 + 10, 0, diameter / 2 - 10, -5, diameter / 2 - 10, 5);
  pop();

  // Draw circle
  noStroke();
  fill(255);
  ellipse(posX, posY, diameter);

  // Update position if circle is being dragged
  if (isDragging) {
    posX = mouseX;
    posY = mouseY;
  } else {
    // Apply force if circle is not being dragged
    let force = createVector(forceX, forceY).normalize().mult(forceLength);
    posX += force.x;
    posY += force.y;
  }

  // Constrain circle to canvas
  posX = constrain(posX, diameter / 2, width - diameter / 2);
  posY = constrain(posY, diameter / 2, height - diameter / 2);

  // Change cursor style when hovering over circle
  let distance = dist(mouseX, mouseY, posX, posY);
  if (distance <= diameter / 2) {
    cursorStyle = 'grab';
  } else {
    cursorStyle = 'default';
  }
  cursor(cursorStyle);
}

function mousePressed() {
  // Check if mouse is inside circle
  let distance = dist(mouseX, mouseY, posX, posY);
  if (distance <= diameter / 2) {
    isDragging = true;
    cursorStyle = 'grabbing';
    cursor(cursorStyle);
  }
}

function mouseReleased() {
  isDragging = false;
  cursorStyle = 'grab';
  cursor(cursorStyle);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
