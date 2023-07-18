let tor=0;
let griffY;


function setup () {
  createCanvas(windowWidth,windowHeight);
  griffY =height/2-height/20;
}


function draw () {
  background(255);
  rectMode(CENTER);
  strokeWeight(5);
  stroke(80);
  fill(160);
  rect(width/2,tor,width,height);
  fill(100);
  stroke(80);
  rect(width/2,griffY,width/20,height/20);
  if (mouseIsPressed == true){
    griffY=+ mouseY;
    tor=+mouseY-(height/2-height/20);
    
  }

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}