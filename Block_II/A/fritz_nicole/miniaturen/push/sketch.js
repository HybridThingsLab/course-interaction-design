let x;
let y;
let ballSize = 50;
let isGrabbed = false;
let xr; 
let yr; 
let r = 150;
let farbeball = 250;
let rf = 0;
let rg = 0;
let rb = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = windowWidth / 2;
  y = windowHeight * 0.6;
}

function draw() {
  background(180);
  fill(0);

  xr = windowWidth/2;
  yr = windowHeight*0.2;
  
  if (isGrabbed) {
    farbeball = 100;
    if (mouseY < y) {
      y = mouseY;  
    }
  }

  fill(rf, rg, rb);
  rectMode(CENTER);         
  rect(xr, yr, r, r);
  
  fill(farbeball);
  ellipse(x, y, ballSize, ballSize);

  if (mouseX >= x - ballSize && mouseX <= x + ballSize && mouseY >= y - ballSize && mouseY <= y + ballSize) { 
    fill(250, 0, 0);
    cursor('grab');
  } else {
    cursor('default');
  }

  if (x >= (xr-r/2) + ballSize/2  && x <= (xr+r/2) -ballSize/2 && y >= (yr-r/2) +ballSize/2 && y <= (yr+r/2) -ballSize+5) {
    x = windowWidth / 2;
    y = windowHeight * 0.6;
    isGrabbed = false;
    rf = random(0,250);
    rg = random(0,250);
    rb = random(0,250);
  }
}

function mousePressed() {
  if (mouseButton == LEFT && mouseX >= x - ballSize && mouseX <= x + ballSize && mouseY >= y - ballSize && mouseY <= y + ballSize) {
    isGrabbed = true;
}
}

function mouseReleased() {
  isGrabbed = false;
  farbeball = 250;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
