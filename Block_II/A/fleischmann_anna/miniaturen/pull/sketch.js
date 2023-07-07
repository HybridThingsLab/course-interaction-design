var w;
var h;

var lx;
var ly;
var ei=0;

var kreis;



function setup() {
   createCanvas(windowWidth, windowHeight);

  
}
 

function draw() {
  
  w = windowWidth;
  h = windowHeight;

  lx=w/4;
  ly=h/4+ei;
 
  createCanvas(w, h);
  background(240);
  noStroke();
  fill(0);
  rectMode(CENTER);
  rect(width/2,height/2,width/2,height/2);

  zeichne();

  if(mouseIsPressed==true && dist(mouseX,mouseY,lx*2,ly+20+ly/2)<=30 && pmouseX >= mouseX){
   bewege();
   //zeichne();
  }
  
  //zeichne();
  
  fill(240);
  rect(0,0,width,height/4);
  rect(0,height/4*3,width,height/4);

 /* if(mouseReleased==true){
   ei=-ei;
  }
  if(ly>=h/4){
   ei=0;
  }
  */

}

function zeichne(){
  

   rectMode(CORNER);
    fill(100);
    rect(lx+20,0,lx*2-40,ly+10);
    fill(150);
    rect(lx+10,ly+10,lx*2-20,10);
    rect(lx*2-2,ly+20,4,ly/2);
    ellipseMode(CENTER);
    ellipse(lx*2,ly+20+ly/2,14,14);
    noFill();
    kreis=ellipse(lx*2,ly+20+ly/2,8,8);

    fill(200);
    ellipse(lx*2,ly/1.5,lx/2,lx/2.5);
    ellipse(lx*2-lx/10,ly/1.5-35,lx/4,lx/4.5);
    ellipse(lx*2+lx/10,ly/1.5-35,lx/4,lx/4.5);
    fill(0);
    ellipse(lx*2-lx/10,ly/1.5-35,lx/6,lx/6.5);
    ellipse(lx*2+lx/10,ly/1.5-35,lx/6,lx/6.5);
    fill(255);
    ellipse(lx*2-lx/9,ly/1.5-40,lx/15,lx/15);
    ellipse(lx*2+lx/11,ly/1.5-40,lx/15,lx/15);
    stroke(1);
    noFill();
    arc(lx*2,ly/1.5,lx/6,lx/6,0,PI);
    noStroke();

    
}

function bewege(){
   ly=ly+ei;
   ei=ei+4;

   if(ei>400-30){
    ei=0;
    ly=h/4;
   }
}

/*function mouseDragged(){
  bewege();
}*/