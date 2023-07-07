function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  fill(0);
  stroke(255);
  ellipse(width / 2, height / 2, (width/5)*3, (height/5)*3);
  fill(255);
  let x = 3*(frameCount % 60);
  arc(width / 2, height / 2, (width/5)*3, (height/5)*3, radians(-90), radians(-90 + 2*x));
  noFill();
  stroke(255,0,0);
  let y = (frameCount % 3600)/20;
  strokeWeight(10 + y);
  arc(width / 2, height / 2, (width/5)*3.5, (height/5)*3.5, radians(-90), radians(-90 - 2*y));
  }