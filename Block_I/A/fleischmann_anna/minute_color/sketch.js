let r=0;
let g=255;
let b=200;

let rb=206;
let gb=32;
let bb=78;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1);
}

function draw() {
  let a=color(rb,gb,bb);
  background(a);
  let c=color(r,g,b);
  fill(c);
  noStroke();
  ellipse(width/4,height/4,width/2,height/2);
  ellipse(width/4,height/4+height/2,width/2,height/2);
  ellipse(width/4+width/2,height/4,width/2,height/2);
  ellipse(width/4+width/2,height/4+height/2,width/2,height/2);


  r=r+4.25;
  b=b+2.58333333;

  rb=rb+0.81666667;
  gb=gb+3.71666667;
  bb=bb+2.95;

  if(gb>=255){
    r=0,
    g=255;
    b=200;
    rb=206;
    gb=32;
    bb=78;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
