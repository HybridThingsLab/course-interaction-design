var w;
var h;
var a;
var r=0;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  w=windowWidth;
  h=windowHeight;
  createCanvas(w,h);
  background(220);

  rectMode(CENTER);
 
  fill(0);

  if(w<800){
    a=0.8;
  }
  else{
    a=1;
  }

  


  if(keyIsPressed==true){
    if(keyCode==LEFT_ARROW){
      rect(w/2,h/2,100,100);
      r=r-1;
    }
    if(keyCode==RIGHT_ARROW){
      r=r+1;
    }

  }
  translate(w/2,h/2);
  rotate(radians(r));
  fill(255);
  rect(0,0,w/3,h/2,10);
  fill(0);
  textAlign(CENTER,CENTER);
  rectMode(CENTER);
  textSize(h/2.5*a);
  text('A',0,0);
}

