let angle = 0;
let bpm = 0;
let bpmNegative = 0;
let blinkTakt = 100;
let lastBlinkTime = 0;
let blinkOn = false;

function setup() {
  textFont("Typewriter");
  createCanvas(800, 800);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  push();
  stroke(255);
  strokeWeight(10);
  noFill();
  translate(width / 2, height / 2);
  rotate(angle);
  circle(0, 0, width / 2);
  line(0, 0, 0, -200);
  
  // Calculate BPM based on angle
  bpm = round(map(angle, 0, TWO_PI, 1, 200));
  
  // Draw BPM text
  pop();
  textSize(48);
  fill(255);
  if(bpm < 0){
    bpmNegative = bpm * (-1);
    blinkTakt = 100 + (100-bpmNegative);
  }else{
    blinkTakt = bpm;
  }
  text(blinkTakt + " BPM", width/2, height/6);
  
  // Update angle
  if (mouseIsPressed && dist(mouseX, mouseY, width/2, height/2) < width/2) {
    let dx = mouseX - width/2;
    let dy = mouseY - height/2;
    angle = atan2(dy, dx);
    angle = round(angle / (PI/100)) * (PI/100);
  }
  
  // Blink circle
  if (millis() - lastBlinkTime >= 60000/blinkTakt/2) {
    blinkOn = !blinkOn;
    lastBlinkTime = millis();
  }
  fill(255, blinkOn ? 255 : 0);
  circle(width/2, height - 100, 20);
  
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight*0.8);
  }
}
