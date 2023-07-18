let lineX, lineY, lineWidth, lineHeight;
let circleX, circleY, circleR;
let speed;
let showText = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  strokeWeight(10);
  
  // initialize line position
  lineY = 0;
  lineHeight = height;
  lineWidth = 10;
  lineX = width / 6 - lineWidth / 2;
  
  // initialize circle position
  circleR = 20;
  circleX = width / 5;
  circleY = height / 2;
  
  // set initial speed to zero
  speed = 0;
}

function draw() {
  background(0);
  
  // check if left mouse button is pressed
  if (mouseIsPressed && mouseButton == LEFT) {
    lineX = mouseX - lineWidth / 2;
  }
  
  // set the cursor to a closed hand when the left mouse button is pressed
  if (mouseIsPressed && mouseButton == LEFT) {
    cursor('grabbing');
  } else {
    // set the cursor to a hand symbol when it hovers over the line
    if (mouseX > lineX && mouseX < lineX + lineWidth) {
      cursor('grab');
    } else {
      cursor(ARROW);
    }
  }
  
  // draw the line
  stroke(255);
  line(lineX, lineY, lineX, lineY + lineHeight);
  
  // check if line is touching circle
  if (lineX >= circleX - circleR && lineX <= circleX + circleR) {
    speed = 4;
  } else {
    speed = 0;
  }
  
  // move circle if line is touching it
  circleX += speed;
  
  // draw the circle
  noStroke();
  fill(255);
  ellipse(circleX, circleY, circleR * 2);
  
  // reset position of circle and line
  if (circleX >= width * 5 / 6) {
    circleX = width / 5;
  }
  
}

function mousePressed() {
  if (mouseButton == LEFT) {
    showText = false;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
