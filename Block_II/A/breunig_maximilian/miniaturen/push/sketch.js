let light = true;



function setup () {
  createCanvas(windowWidth,windowHeight);
}

function draw () {
  background(255);
if (light == true) {
fill (0);
stroke(0);
rectMode(CENTER);
rect(windowWidth/2,windowHeight/2,windowWidth/3);
fill (255);
textAlign(CENTER);
textSize((windowWidth/20 + windowHeight/20)/2);
text("PUSH",windowWidth/2, windowHeight/2);

} else {
 background (0); 
 noFill();
 stroke(255)
 rectMode(CENTER);
 rect(windowWidth/2,windowHeight/2,windowWidth/3);
}
if(mouseX > windowWidth/3  && mouseX < (windowWidth/3)*2  && mouseY > windowHeight/2 - (windowWidth/6)  && mouseY < windowHeight/2 + (windowWidth/6) ) {
  cursor(HAND);
  
}else{
  cursor(ARROW);
}
}

function mousePressed () {
  if (mouseX > windowWidth/3  && mouseX < (windowWidth/3)*2  && mouseY > windowHeight/2 - (windowWidth/6)  && mouseY < windowHeight/2 + (windowWidth/6) ) {
    light = !light;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}