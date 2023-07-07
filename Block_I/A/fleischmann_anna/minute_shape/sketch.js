


let nx;
let ny;
let nb;
let nh;
let t;
let z;
let a;
let test=1;


function setup() {
  frameRate(1);
  z=0;
createCanvas(windowWidth, windowHeight);
  nb = width/10;
  nh = height/6;
  nx = 0;
  ny = 0;
}

function draw() {
  noStroke();
  if(test>0){
    fill(0);
  }
  else{
    fill(255);
  }
  //fill(0);
  rect(nx,ny,nb,nh);
  nx=nx+nb;
  if(nx>=width){
    nx=0;
    ny=ny+nh;
  }

  if(nx>=width||ny>=height){
    test = test *-1;
    nx=0;
    ny=0;
  }
 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

