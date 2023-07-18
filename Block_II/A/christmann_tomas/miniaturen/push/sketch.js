// https://p5js.org/examples/input-clock.html

let farbe=0;
let r=1;
let startMaus;
let hintergrund=255;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}


function draw() {
  cursor(ARROW);
  fill(farbe);
  background(hintergrund);
  r++;
  circle(window.innerWidth/2,window.innerHeight/2,r);
  if(r>window.innerHeight*1.2 && r>window.innerWidth*1.2){
    if(farbe==0){
      farbe=255;
      hintergrund=0;
    } else {
      farbe=0;
      hintergrund=255;
    }
    r=1;
  }
  if(mouseIsPressed){
    cursor('n-resize');
  }
  if (mouseIsPressed && r>0 && startMaus-mouseY>0) {
    r=r-0.01*(startMaus-mouseY);
  }
}

function mousePressed(){
  startMaus=mouseY;
}

function windowResized(){
  resizeCanvas(window.innerWidth, window.innerHeight);
}