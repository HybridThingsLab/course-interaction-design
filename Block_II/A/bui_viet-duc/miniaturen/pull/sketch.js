let lampHeight;
let pullStrength;
let backgroundColor;
let trapezoidColor;

let stringX;
let stringY;

let lampTrapezoidHeight = 102; 

let initialBackgroundColor;
let initialTrapezoidColor;

function setup() {
  createCanvas(700, 700); 
  lampHeight = height / 2;
  pullStrength = 0;
  initialBackgroundColor = color(50); 
  initialTrapezoidColor = color(255); 

  backgroundColor = initialBackgroundColor;
  trapezoidColor = initialTrapezoidColor;

  stringX = width / 12 * 7; 
  stringY = lampHeight + lampTrapezoidHeight + 40; 
}

function draw() {
  background(backgroundColor);

 
  drawLamp();

  drawPullString();
}

function drawLamp() {
  let lampX = width / 2;
  let lampY = lampHeight;

  // Lampenschirm
  fill(trapezoidColor); 
  stroke(0);
  strokeWeight(4); 

  let topWidth = 160; 
  let bottomWidth = 360; 
  let lampHeightValue = 400; 

  beginShape();
  vertex(lampX - topWidth / 2, lampY - lampHeightValue / 2);
  vertex(lampX + topWidth / 2, lampY - lampHeightValue / 2);
  vertex(lampX + bottomWidth / 2, lampY + lampHeightValue / 2 - lampTrapezoidHeight);
  vertex(lampX - bottomWidth / 2, lampY + lampHeightValue / 2 - lampTrapezoidHeight);
  endShape(CLOSE);

  // Lampenfuß
  fill(200);
  rectMode(CENTER);
  rect(lampX, lampY + 300, 40, 400); 
}

function drawPullString() {
  // Hängeschnur
  stroke(0);
  strokeWeight(8); 
  line(stringX, lampHeight + lampTrapezoidHeight, stringX, stringY);
  ellipse(stringX, stringY, 20); 

  // Farbänderungen
  if (pullStrength > 0) {
    backgroundColor = color(90 + pullStrength, 90 + pullStrength / 2, 90 - pullStrength / 2); 
    trapezoidColor = color(255, 255, 255 - pullStrength * 2); 
  } else {
    backgroundColor = initialBackgroundColor; 
    trapezoidColor = initialTrapezoidColor; 
  }

    if (mouseX > stringX - 10 && mouseX < stringX + 10 && mouseY > stringY - 10 && mouseY < stringY + 10) {
    cursor(HAND); 
  } else {
    cursor(ARROW); 
  }

}

function mouseDragged() {
  if (mouseY > lampHeight + lampTrapezoidHeight && mouseY < lampHeight + 400) { 
    stringY = mouseY;
    pullStrength = mouseY - (lampHeight + lampTrapezoidHeight);
  }
}

function mouseReleased() {
  if (pullStrength > 0) {
    
    backgroundColor = initialBackgroundColor; 
    trapezoidColor = initialTrapezoidColor; 
  }
}