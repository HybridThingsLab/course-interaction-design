let mouseInCircle = false;
let enableMovement = false;
let circleY = 650;
let target = 650;
let easing = 0.09;
function preload() {
  // Daten laden hier
  return;
}

function setup() {
  createCanvas(800, 800);
}

function draw() {
  let distance = dist(mouseX, mouseY, width/2, circleY);
  background(0);
  rectMode(CENTER);
  push();
  noFill();
  stroke(255);
  strokeWeight(2);
  rect(width/2, 500, 50, 300, 30);
  let distanceTarget = target - circleY;

  if(mouseIsPressed == true && distance <= 60){
    enableMovement = true;

  }
  else if(mouseIsPressed == false){
    enableMovement = false;
  }
 

  if(enableMovement == true){
    circleY = constrain(mouseY, 350, 650);
  }
  if(mouseIsPressed == false && circleY <  650){
  circleY += distanceTarget*easing;
  }

  pop();
  fill(255);
  noStroke();
  ellipse(width/2, circleY, 60, 60);
}
