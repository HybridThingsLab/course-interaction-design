var w;
var h;
var x;
var y;
var r1re;
var g;
var zx;
var zy;
var mx;
var my;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x=windowWidth/2;
  y=windowHeight/2;
  g=0;

}

function draw() {
  w=windowWidth;
  h=windowHeight;
  zx=w/5*3;
  zy=h/5*3;
  mx=mouseX;
  my=mouseY;
  createCanvas(w,h);
  background(220);
  stroke(1);
  rectMode(CENTER);
  fill(255);
  rect(w/2,h/2,w/2,h/2); //canvas
  stroke(1);
  fill(150);
  rect(x,y,w/15,h/15); //schieb
  strokeWeight(2);
  stroke(0,g,0);
  noFill();
  rect(zx,zy,w/12,h/12); //ziel
  



 
  

  if(zx-w/120<x && x<zx+w/120 && zy-h/120<y && y<zy+h/120){
    g=255;
  }
  else{
    g=0;
  }

  if(x+w/30 >= mouseX-w/40 && x-w/30 <= mouseX+w/40 && y+h/30 >= mouseY-h/40 && y-h/30 <= mouseY+h/40){

    r1re = x+w/30;
    //nach links
    if(r1re >= mouseX-w/40 && mouseX>x+w/30){
      x=x-2;
      mx=x+w/30+w/40;
    } 
    // nach rechts
    if(x-w/30 <= mouseX+w/40 && mouseX<x-w/30){
      x=x+2;
      mx=x-w/30-w/40;
    }
    // nach oben
    if(y+h/30 >= mouseY-h/40 && mouseY>y+h/30){
      y=y-2;
      my=y+h/30+h/40;
    }
    //nach unten
    if(y-h/30 <= mouseY+h/40 && mouseY<y-h/30){
      y=y+2;
      my=y-h/30-h/40;
    }
  }

  noStroke();
  fill(200);
  rect(mx,my,w/20,h/20); //maus


  if(x-w/30<=w/4){
    x=w/4+w/30;
  }
  if(x+w/30>=w/4*3){
    x=w/4*3-w/30;
  }
  if(y+h/30>=h/4*3){
    y=h/4*3-h/30;
  }
  if(y-h/30<=h/4){
    y=h/4+h/30;
  }

}
