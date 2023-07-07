let foo = true;
let myFont;

function preload () {
  myFont=loadFont('BlackOpsOne-Regular.ttf');
}

function setup () {
  createCanvas(windowWidth,windowHeight);
}

function draw () {
  background(255);
if (foo == true) {
fill (0);
stroke(0);
circle(windowWidth/2,windowHeight/2,windowWidth/2);
fill (255);
textAlign(CENTER);
textFont(myFont);
textSize((windowWidth/20 + windowHeight/20)/2);
text("BRAVO SIX",windowWidth/2, windowHeight/2-10);
text("GOING DARK",windowWidth/2, windowHeight/2+30);
} else {
 background (0); 
 noFill();
 stroke(57,255,20)
 circle(windowWidth/2,windowHeight/2,windowWidth/2);
}
if (mouseX > windowWidth/4 && mouseX < (windowWidth/4)*3 && mouseY > windowHeight/4 && mouseY < (windowHeight/4)*3) {
    cursor(HAND);
} else {
  cursor(ARROW);
}
}

function mousePressed () {
  if (mouseX > windowWidth/4 && mouseX < (windowWidth/4)*3 && mouseY > windowHeight/4 && mouseY < (windowHeight/4)*3) {
    foo = !foo;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}