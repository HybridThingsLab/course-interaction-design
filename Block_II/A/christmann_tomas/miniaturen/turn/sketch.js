// https://p5js.org/examples/input-clock.html

let angle = 0; // Angle of the spinner.
let previousAngle = 0; // Angle of the spinner in the previous frame.
let angularVelocity = 0; // Angular velocity of the spinner.
let x=window.innerWidth/2;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  // The spinner will have no stroke and filled pink.
  noStroke();
  fill(255);
  rectMode(CENTER); // When drawing rectangle, coordinates specify shape's centre.
  angleMode(RADIANS); // Not actually required, since RADIANS is default.
}

// The mouse's heading when centered mid-canvas.
// Returns an angle in radians between -PI and PI.
function mouseHeading() {
 let v = createVector(mouseX - width / 2, mouseY - height / 2);
 return v.heading();

  // Using trigonometry with arc tangent of rise over run.
  //return atan((mouseY - height / 2) / (mouseX - width / 2));
}

function draw() {
  cursor('grab');
  if(angularVelocity<=0.005 && angularVelocity>=-0.005){
    x=x;
  } else {
    x=x + angularVelocity*20;
  }
  if(windowWidth>windowHeight){
    w=window.innerHeight*0.5;
  }else{
    w=window.innerWidth*0.5;
  }
  h=w*0.05;
  // Clear the canvas purple.
  background(0);

  if(x>=window.innerWidth+w/2){
    x=-w/2;
  } else if (x<=-w/2){
    x=windowWidth+w/2;
  }

  // Draw spinner rotated by current angle around canvas centre.
  
  translate(width/2, height / 2);
  rotate(angle);
  rect(0, 0, w, h);
  rect(0, 0, h, w);

  // Save the angle from the previous frame.
  previousAngle = angle;

  if (mouseIsPressed) {
    cursor('grabbing')
    // Have spinner rotate using the mouse's heading.
    angle = mouseHeading();
    // Base spinner velocity on distance rotated since previous frame.
    // Bug here if angle crosses -PI and PI, where delta becomes a sum.
    angularVelocity = angle - previousAngle;
  } else {
    // Apply the current velocity to the angle.
    angle += angularVelocity;
    // Simple linear friction.
    angularVelocity *= 0.98;
  }
}

function windowResized(){
  resizeCanvas(window.innerWidth, window.innerHeight);
}