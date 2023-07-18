function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(300, 300);
  rotate(-90); 
 
  let hr = hour();
  let mn = minute();
  let sc = second(); 
  
  strokeWeight(2);
  stroke(color(255, 255, 255));
  noFill();
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);
  
  //minute
  
  stroke(150);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);
  
  //hour
  
  stroke(100);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);
  
  

}