let sliderX, sliderY, sliderWidth, sliderHeight, sliderValue, rectHeightcenterX, centerY, radius;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectHeight = height;
  
  // slider werte
  sliderWidth = width * 0.02;
  sliderHeight = height * 0.2;
  sliderX = 0;
  sliderY = height * 0.4;
  sliderValue = 0;
  
    centerX = width / 2;
  centerY = height / 2;
  radius = min(width, height) * 0.3;
}

function draw() {
  background(250);
  
    noFill();
  stroke(0);
  ellipse(centerX, centerY, radius * 2);
  
  // zeichne die strahlen
  const numStrahlen = 16;
  for (let i = 0; i < numStrahlen; i++) {
    const angle = TWO_PI / numStrahlen * i;
    const x1 = centerX + radius * cos(angle);
    const y1 = centerY + radius * sin(angle);
    const x2 = centerX + (radius + radius * 0.2) * cos(angle);
    const y2 = centerY + (radius + radius * 0.2) * sin(angle);
    line(x1, y1, x2, y2);
  }
  
  // zeichne rechteck
  fill(220);
  rect(0, 0, width, rectHeight);
  
  // zeichne slider
  if (mouseX > sliderX && mouseX < sliderX + sliderWidth && mouseY > sliderY && mouseY < sliderY + sliderHeight) {
    cursor(HAND);
  } else {
    cursor(ARROW);
  }
  fill(0);
  rect(sliderX, sliderY, sliderWidth, sliderHeight);
  
  // slider werte
  sliderValue = map(sliderY, 0, height - sliderHeight, 0, 1);
  
  // höhe rechteck
  rectHeight = height * (1 - sliderValue);
  
  // slider
  if (mouseIsPressed) {
    sliderY = constrain(mouseY - sliderHeight/2, 0, height - sliderHeight);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
    centerX = width / 2;
  centerY = height / 2;
  radius = min(width, height) * 0.3;
  
  sliderWidth = width * 0.02;
  sliderHeight = height * 0.2;
  sliderX = 0;
  sliderY = height * 0.4;
}
