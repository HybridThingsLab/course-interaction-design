let moveX = 100;
let moveY = 100;
let move = false;
let speedX = 0;
let speedY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  
  // Bewegung des großen Kreises
  if (mouseIsPressed && dist(mouseX, mouseY, moveX, moveY) < 50) {
    move = true;
  }
  if (mouseIsPressed && move) {
    moveX = mouseX;
    moveY = mouseY;
    speedX = mouseX - pmouseX;
    speedY = mouseY - pmouseY;
  } else {
    move = false;
  }
  
  // Bewegung des kleinen Kreises
  moveX += speedX;
  moveY += speedY;
  
  // Kollision mit dem Rand des Canvas
  if (moveX < 50 || moveX > width - 50) {
    speedX *= -1;
  }
  if (moveY < 50 || moveY > height - 50) {
    speedY *= -1;
  }
  
  // Kollision der Kreise
  let distance = dist(moveX, moveY, width/2, height/2);
  if (distance < 60) {
    let angle = atan2(moveY - height/2, moveX - width/2);
    moveX = width/2 + cos(angle) * 60;
    moveY = height/2 + sin(angle) * 60;
    speedX = cos(angle) * 5;
    speedY = sin(angle) * 5;
  }
  
  // Zeichnen der Kreise
  rectMode(CENTER);
  fill(255);
  ellipse(moveX, moveY, 100, 100);
  ellipse(width/2, height/2, 20, 20);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
