let ballons = [];
let myFrameRate = 60;
let frameCount = 0;
let ballonHeight = 75;
let tailHeight = 100;
let backgroundColors = [];
let ballonColors = [];
let offset = 0;

function setup() {
  createCanvas(800, 800);
  frameRate(myFrameRate);
  backgroundColors = [color(189, 224, 254), color(29, 53, 87), color(255, 190, 11)];
  ballonColors = [color(205, 180, 219), color(255, 200, 221), color(255, 175, 204)];
  offset = (height + ballonHeight + tailHeight) / (7 * myFrameRate);
  stroke(0,0,0);
  strokeWeight(2);
}

function draw() {
  background(backgroundColors[minute() % 3]);
  if (second() == 0)
  {
    ballons = [];
  }

  if (frameCount++ % myFrameRate == 0)
  {
    ballons.push({x: random(width), y: height + ballonHeight/2, c: ballonColors[int(random(3))]});
  }

  ballons.forEach(ballon => {
    fill(ballon.c);
    ellipse(ballon.x, ballon.y, 60, 75);
    line(ballon.x, ballon.y + ballonHeight/2, ballon.x, ballon.y + ballonHeight/2 + tailHeight);
    ballon.y -= offset;
  });
}