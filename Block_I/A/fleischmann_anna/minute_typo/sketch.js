let Zahlen = [];
let z=1;
let ak;
let nx;
let ny;
let nb;
let nh;
let zz=0;
let zähler=0;
let time;
let w=0;
let x=5;
let y=8;
let wz=0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(1);

  nb = width/10;
  nh = height/6;
  nx = 5;
  ny = 8;

  textSize(20);
  textAlign(LEFT,TOP);

  for(let i=0;i<=59;i++){
    Zahlen[i]=z;
    z=z+1;
  } 




 
}

function draw() {

  fill(0);
  
 
  for(let j=0;j<=60;j++){

    text(Zahlen[j],nx,ny);

    nx=nx+nb;

    if(nx+20>=width){
    nx=5;
    ny=ny+nh;
    }

  }
  if(nx+20>=width || ny>=height){
    nx=5;
    ny=8;
  }


 
  fill(255);

  for(let j=0;j<=wz;j++){


    text(Zahlen[j],x,y);

    x=x+nb;

    if(x+20>=width){
    x=5;
    y=y+nh;
    }
  }
  x=5;
  y=8;
  wz=wz+1;

  if(wz>=60){
    wz=0;
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}