let angle = 0;
let lineLength = 100;
let circleRadius = 20;
let lineEndX, lineEndY;
let isDragging = false;
let centerCircleSize = 50; // Größere Größe des verblassten Kreises
let centerCircleColor = 0;

function setup() {
  createCanvas(700, 700);
}

function draw() {
  background(255);
  fill(0);
  stroke(0);

  translate(width / 2, height / 2);

  lineEndY = sin(radians(angle)) * lineLength;
  lineEndX = cos(radians(angle)) * lineLength;

  if (dist(mouseX - width / 2, mouseY - height / 2, lineEndX, lineEndY) < circleRadius / 2) {
    cursor(MOVE);
  } else {
    cursor(ARROW);
  }

  if (dist(mouseX - width / 2, mouseY - height / 2, lineEndX, lineEndY) < circleRadius / 2 && mouseIsPressed) {
    isDragging = true;
  }

  if (!mouseIsPressed) {
    isDragging = false;
  }

  if (isDragging) {
    let dx = mouseX - width / 2;
    let dy = mouseY - height / 2;
    angle = degrees(atan2(dy, dx));
    console.log("Hallo");

    if (angle < 0) {
      angle += 360;
    }

    centerCircleSize = map(angle, 0, 360, 25, min(width, height) / 2);
    centerCircleColor = map(angle, 0, 360, 0, 255);

    centerCircleSize = constrain(centerCircleSize, 25, min(width, height) / 2);
  }

  noStroke();
  fill(centerCircleColor, 200); // Reduziere die Deckkraft des Kreises auf 50
  ellipse(0, 0, centerCircleSize * 1.5); // Größere Größe des verblassten Kreises

  fill(0);
  stroke(0);
  line(0, 0, lineEndX, lineEndY);
  ellipse(lineEndX, lineEndY, circleRadius);
}
