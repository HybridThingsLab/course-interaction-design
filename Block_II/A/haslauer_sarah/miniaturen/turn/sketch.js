let angle = 0;
let bgColor = 255;
let isDragging = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(bgColor);
  
  push();
  translate(width / 2, height / 2);
  rotate(angle);
  fill(255 - bgColor);
  ellipse(0, 0, 100);
  stroke(255);
  line(0, 0, 50, 0);
  pop();
  
  if (abs(bgColor - 255) < 5) {
    bgColor = 255;
  } else if (abs(bgColor - 0) < 5) {
    bgColor = 0;
  }
}

function mousePressed() {
  let d = dist(mouseX, mouseY, width / 2, height / 2);
  if (d < 50) {
    isDragging = true;
  }
}

function mouseReleased() {
  isDragging = false;
}

function mouseDragged() {
  if (isDragging) {
    let dx = mouseX - width / 2;
    let dy = mouseY - height / 2;
    let newAngle = atan2(dy, dx);
    
    if (newAngle < 0) {
      newAngle += TWO_PI;
    }
    
    let angleDiff = newAngle - angle;
    if (abs(angleDiff) > PI) {
      if (angleDiff > 0) {
        angleDiff -= TWO_PI;
      } else {
        angleDiff += TWO_PI;
      }
    }
    
    angle += angleDiff * 0.1;
    
    bgColor = map(angle, 0, TWO_PI, 0, 255);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

