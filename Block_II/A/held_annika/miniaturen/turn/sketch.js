let waterLevel = 0; // Wasserstand
let knobAngle = 0; // Winkel des Knopfes
let rotation = 0; // Rotation des Quadrats
let previousRotation = 0; // Vorherige Rotation des Quadrats

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  // Dusche
  fill(150);
  rect(150, 50, 100, 300);

  // Wasserstrahl
  fill(0, 0, 255);
  rect(160, 350 - waterLevel, 80, waterLevel);

  // Quadrat
  push();
  translate(width / 2, height / 2);
  rotate(rotation);
  fill(255);
  rect(-25, -25, 50, 50);
  pop();

  // cursor stuff
  if (
    mouseX > width / 2 - 25 &&
    mouseX < width / 2 + 25 &&
    mouseY > height / 2 - 25 &&
    mouseY < height / 2 + 25
  ) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }

  if (rotation < previousRotation) {
    waterLevel -= 5;
    if (waterLevel < 0) {
      waterLevel = 0;
    }
  }

  if (rotation > previousRotation) {
    waterLevel += 10;
    if (waterLevel > 300) {
      waterLevel = 300;
    }
  }

  previousRotation = rotation;
}

function mouseClicked() {
  // Wasserstand erhöhen, wenn der Knopf angeklickt wird
  if (
    mouseX > width / 2 - 25 &&
    mouseX < width / 2 + 25 &&
    mouseY > height / 2 - 25 &&
    mouseY < height / 2 + 25
  ) {
    waterLevel += 20;
    if (waterLevel > 300) {
      waterLevel = 300;
    }
    knobAngle += PI / 8;
  }
}

function mouseDragged() {
  rotation = atan2(mouseY - height / 2, mouseX - width / 2);

  if (abs(rotation - previousRotation) > PI) {
    rotation = previousRotation;
  }
}

function mouseReleased() {
  previousRotation = rotation;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function mouseReleased() {
  isDragging = false;
  previousRotation = rotation;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


