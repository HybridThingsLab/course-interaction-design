let numCircles = 6;
const smallCircleSize = 30;

let bigCircleSize = 100;
let bigCircleColor = [255, 255, 255];

const smallCircleColor = [255, 0, 0];
const smallCirclePositions = [];

let draggedCircle = null;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < numCircles; i++) {
    let x = random(smallCircleSize, width - smallCircleSize);
    let y = random(smallCircleSize, height - smallCircleSize);
    smallCirclePositions.push(createVector(x, y));
  }
}

function draw() {
  background(0);

  // Anpassung der Leinwandgröße bei Fenstergrößenänderung
  resizeCanvas(windowWidth, windowHeight);

  fill(bigCircleColor);
  ellipse(width / 2, height / 2, bigCircleSize);

  for (let i = 0; i < numCircles; i++) {
    let position = smallCirclePositions[i];
    fill(smallCircleColor);
    ellipse(position.x, position.y, smallCircleSize);

    if (draggedCircle === i) continue;

    let d = dist(width / 2, height / 2, position.x, position.y);
    if (d < bigCircleSize / 2) {
      bigCircleSize += 1;
      bigCircleColor[0] = lerp(bigCircleColor[0], smallCircleColor[0], 0.1);
      bigCircleColor[1] = lerp(bigCircleColor[1], smallCircleColor[1], 0.1);
      bigCircleColor[2] = lerp(bigCircleColor[2], smallCircleColor[2], 0.1);

      smallCirclePositions.splice(i, 1);
      numCircles--;
      break;
    }
  }

  if (draggedCircle !== null) {
    let pos = smallCirclePositions[draggedCircle];
    fill(smallCircleColor);
    ellipse(pos.x, pos.y, smallCircleSize);
  }
}

function mousePressed() {
  for (let i = 0; i < numCircles; i++) {
    let pos = smallCirclePositions[i];
    let d = dist(mouseX, mouseY, pos.x, pos.y);
    if (d < smallCircleSize / 2) {
      draggedCircle = i;
      break;
    }
  }
}

function mouseDragged() {
  if (draggedCircle !== null) {
    let pos = smallCirclePositions[draggedCircle];
    pos.x = mouseX;
    pos.y = mouseY;
  }
}

function mouseReleased() {
  if (draggedCircle !== null) {
    let pos = smallCirclePositions[draggedCircle];
    let d = dist(width / 2, height / 2, pos.x, pos.y);
    if (d < bigCircleSize / 2) {
      bigCircleSize += 1;
      bigCircleColor[0] = lerp(bigCircleColor[0], smallCircleColor[0], 0.1);
      bigCircleColor[1] = lerp(bigCircleColor[1], smallCircleColor[1], 0.1);
      bigCircleColor[2] = lerp(bigCircleColor[2], smallCircleColor[2], 0.1);

      smallCirclePositions.splice(draggedCircle, 1);
      numCircles--;
    }
    draggedCircle = null;
  }
}