let angle = 0;
let secondsElapsed = 0;
const duration = 60; // in Sekunden
let angle1 = -90;
let angle2 = -90;
let angle3 = -90;
let angle4 = -90;
let angle5 = -90;
let prevSecond = 0;

function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
  stroke(0); 
  strokeWeight(4); 
  noFill();
}

function draw() {
  background(220);
  let secondsElapsed = millis() / 1000; // Zeit in Sekunden
  // Außenkreis
  angle = map(secondsElapsed - duration, 0, duration, 360, 0); 
  noFill();
  arc(width / 2, height / 2, 530, 530, -90 + angle, -90);
  
  //1 Kreis
  stroke(0);
  strokeWeight(4);
  fill(0);
  // Position des rotierenden Kreises berechnen
  let angle1X = width / 2 + 200 * cos(angle1); 
  let angle1Y = height / 2 + 200 * sin(angle1);
  ellipse(angle1X, angle1Y, 30); 
  
  let angle2X = width / 2 + 200 * cos(angle2); 
  let angle2Y = height / 2 + 200 * sin(angle2);
  ellipse(angle2X, angle2Y, 25); 
  
  let angle3X = width / 2 + 200 * cos(angle3); 
  let angle3Y = height / 2 + 200 * sin(angle3);
  ellipse(angle3X, angle3Y, 20); 
  
  let angle4X = width / 2 + 200 * cos(angle4);
  let angle4Y = height / 2 + 200 * sin(angle4);
  ellipse(angle4X, angle4Y, 20); 
  
  let angle5X = width / 2 + 200 * cos(angle5); 
  let angle5Y = height / 2 + 200 * sin(angle5);
  ellipse(angle5X, angle5Y, 20); 
  
  
  angle1 += 360 / 60; 
  angle2 += 360 / 65; 
  angle3 += 360 / 70;
  angle4 += 360 / 75;
  angle5 += 360 / 80;
  
  if (second() != prevSecond) {
    angle1 = -120;
    angle2 = -120;
    angle3 = -120;
    angle4 = -120;
    angle5 = -120;
    prevSecond = second();
  }
}