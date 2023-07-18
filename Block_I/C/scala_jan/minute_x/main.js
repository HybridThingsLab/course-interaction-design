let boxes = [];
let ySpeed = 3;
let colorIntensifier = 0;
let startTime;

function setup() {
  createCanvas(800, 800, WEBGL);
  addBox();
  startTime = millis();
}

function draw() {
  rotateY(45);
  background(0);
  colorIntensifier += 0.1;

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].y -= ySpeed;

    if (boxes[i].y < -400 - boxes[i].boxHeight) {
      boxes[i].y = 400 + boxes[i].boxHeight;
      boxes[i].boxWidth = random(20, 80);
      boxes[i].boxHeight = random(20, 80);
      boxes[i].boxDepth = random(20, 80);
      boxes[i].color = color(random(colorIntensifier), random(colorIntensifier), random(colorIntensifier));
      addBox();
    }

    push();
    translate(boxes[i].x, boxes[i].y, boxes[i].z);
    fill(boxes[i].color);
    box(boxes[i].boxWidth, boxes[i].boxHeight, boxes[i].boxDepth);
    pop();
  }
  
  if (millis() - startTime > 1 * 60 * 1000) {
    restartSketch();
  }
}

function addBox() {
  let newBox = {
    x: random(-50, 50),
    z: random(0),
    y: (580),
    ySpeed: 3,
    boxWidth: random(20, 80),
    boxHeight: random(20, 80),
    boxDepth: random(20, 80),
    color: color(random(colorIntensifier), random(colorIntensifier), random(colorIntensifier))
  };
  boxes.push(newBox);
}

function restartSketch() {
  boxes = [];
  startTime = millis();
  addBox();
}