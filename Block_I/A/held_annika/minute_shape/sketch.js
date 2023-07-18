let numCircles = 60; //Kreise
let circleSize;//Größe
let bgColor = 0;//schwarz background
let strokeColor = 255;//Weiße StrokeColor
let startTime = 0;//Timer
let loopCount = 0;//LoopCount für Farbwechsel am Ende

function setup() {
  createCanvas(windowWidth, windowHeight).position(0, 0).style('z-index', '-1');
  angleMode(DEGREES);
  noFill();
  stroke(strokeColor);
  strokeWeight(2);
  frameRate(60);
  circleSize = min(width, height) / 2;
  startTime = millis();
}

function draw() {
  if (millis() - startTime >= 60 * 1000) {
    loopCount++;
    if (loopCount % 1 == 0) {
      bgColor = 255 - bgColor;
      strokeColor = 255 - strokeColor;
    } else {
      bgColor = 0;
      strokeColor = 255;
    }
    startTime = millis();
  }

  background(bgColor);
  stroke(strokeColor);
  let elapsedSeconds = (millis() - startTime) / 1000;
  let numCirclesDrawn = floor((elapsedSeconds / 60) * numCircles);
  for (let i = 0; i < numCirclesDrawn; i++) {
    let radius = circleSize * (i + 1) / numCircles;
    ellipse(width / 2, height / 2, radius * 2, radius * 2);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight).position(0, 0);
  circleSize = min(width, height) / 2;
}
