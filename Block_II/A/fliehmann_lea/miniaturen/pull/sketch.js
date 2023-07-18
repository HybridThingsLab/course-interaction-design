

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();
  x = 0;
  b = width/20;
  h = height;

  easing = 0.05;
}

function draw() {
  background(255 / (b/2 * 0.009));
  rect(x, height/2, b, h);

  target = width/20 - b;

  if(mouseX > x && mouseX < x+b+10 && mouseIsPressed){
    fill(0.15* b/2);
    b = mouseX * 2;
    h = height - b /2;
    cursor("col-resize");
  }
  else{
    fill(0.15 * b/2);
    b += target * easing;
    h = height -b/2;
    cursor("default");
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}