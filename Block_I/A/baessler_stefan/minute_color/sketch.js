let circles = [];
let currentFrame = 0;
let blackCirclesOnly = false; // variable für den Kreiszustand

function preload() {
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight).parent('canvas');
  frameRate(60);
}

function draw() {
  background(0);
  if (currentFrame % 60 == 0 && currentFrame <= 3600) {
    let circle = new Circle(width / 2, height / 2, width - 50, 50, 0.05, random(255), random(255), random(255));
    circles.push(circle);
  }
  if (currentFrame % 60 == 0 && currentFrame >= 3600) {
    let circle = new Circle(width / 2, height / 2, width - 50, 50, 0.05, 0, 0, 0);
    circle.isBlack = true;
    circles.push(circle);
  }
  if(currentFrame >= 3660){
    currentFrame = 0;
  }
  currentFrame++;
  for (let circle of circles) {
    circle.update();
    circle.display();
  }
  //text(currentFrame, 50, 50);
  //text(blackCirclesOnly, 100, 100)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
