

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(0.05 * width);
  textAlign(CENTER, CORNER);
  rectMode(CENTER);
  x = width/2;
  y = height/1.5;
  b = 723;
  h = 48;

  bh = 95;
  hh = 290;
  easing = 0.1;

  counter = 0;
  ziel = height*0.2;
}

function draw() {
  background(255);
  line(0, ziel, width, ziel);
  fill(0);
  text(counter, width/2, 250, width/4, width/4);

  fill(150);
  rect(x, y, b, h, 50);
  fill(20);
  rect(x+b/3, y, bh, hh, 20);
  rect(x-b/3, y, bh, hh, 20);
  target = height/1.5 - y;

  if(mouseX > x-b/2 && mouseX < x+b/2 && mouseY > y-h/2+-10 && mouseY < y+h/2+10 && mouseIsPressed){
    cursor("row-resize");
    if(mouseY < height/1.5){
      y = mouseY;
    }

    if(mouseY <= ziel){
      counter++;
      y += target * easing;
    }
    
  }
  else{
    cursor("default");
    if(y < height/1.5){
      y += target * easing;
    }
    
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  fill(150);
  rect(x, y, b, h, 50);
  fill(20);
  rect(x+b/3, y, bh, hh, 20);
  rect(x-b/3, y, bh, hh, 20);
}