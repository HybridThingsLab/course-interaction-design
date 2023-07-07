let d = 50;
let prevAngle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200);
  noStroke();
  circle(width / 2, height / 2, d);
  stroke(1);
  strokeWeight(6);
  line(width / 2, height / 2, mouseX, mouseY);
  
  let angle = atan2((mouseY - height / 2) / height, (mouseX - width / 2) / width);
  
  if (angle > prevAngle) {
    d += 0.5;
  } else if (angle < prevAngle) {
    d -= 0.5;
    if (d <= 0) {
      d = 0;
    }
  }
  prevAngle = angle;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
