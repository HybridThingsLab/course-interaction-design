// globals
let customFont;
let myRec = new p5.SpeechRec('en-US', parseResult);
myRec.continuous = true;
myRec.interimResults = true;

let x, y;
let dx, dy;

async function setup() {
  customFont = await loadFont('assets/Inter.ttf');

  createCanvas(600, 600);
  textFont(customFont);

  background(255);
  fill(0);
  x = width / 2;
  y = height / 2;
  dx = 0;
  dy = 0;

  textSize(20);
  textAlign(LEFT);
  text("draw: up, down, left, right, clear", 20, 20);

  myRec.start();
}

function draw() {
  ellipse(x, y, 5, 5);
  x += dx;
  y += dy;
  if (x < 0) x = width;
  if (y < 0) y = height;
  if (x > width) x = 0;
  if (y > height) y = 0;
}

function parseResult() {
  var mostrecentword = myRec.resultString.split(' ').pop();
  if (mostrecentword.indexOf("left") !== -1)       { dx = -1; dy = 0; }
  else if (mostrecentword.indexOf("right") !== -1) { dx = 1;  dy = 0; }
  else if (mostrecentword.indexOf("up") !== -1)    { dx = 0;  dy = -1; }
  else if (mostrecentword.indexOf("down") !== -1)  { dx = 0;  dy = 1; }
  else if (mostrecentword.indexOf("clear") !== -1) { background(255); }
  console.log(mostrecentword);
}
