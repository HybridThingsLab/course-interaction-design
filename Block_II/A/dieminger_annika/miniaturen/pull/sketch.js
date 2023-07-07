var w,h;
var x;
var f = 255;
var b;
var h;

function preload() {
}

function setup() {

  w = windowWidth;
  h = windowHeight;
  canvas = createCanvas(w, h);
  x = w;

  background (0);
  fill(255);
  stroke(f);
  rect(x, 0, 2*w, 2*h);
  fill(f);
  rect(x-50, h/2-10, 10, 20);
  strokeWeight(3);
  line(x-45,h/2, x, h/2);

}

function draw() {

  if (dist(mouseX,mouseY,x-55,h/2)<= 30 || dist(mouseX,mouseY,x+45,h/2)<= 30){
    cursor('grab');
  }
  else{
    cursor(ARROW);
  }
  
  if ((dist(mouseX,mouseY,x-55,h/2)<= 30 || dist(mouseX,mouseY,x+45,h/2)<= 30) && mouseIsPressed == true){
    cursor('grabbing');
  }

  if (mouseIsPressed == true && mouseX<=x-50 && mouseY >= h/2-h/4 && mouseY <= h/2+h/4 && pmouseX >= mouseX){
    
    x = mouseX + 50;
    f = 255;

    background (0);
    fill(255);
    stroke(f);
    rect(x, 0, 2*w, 2*h);
    fill(f);
    rect(x-50, h/2-10, 10, 20);
    strokeWeight(3);
    line(x-45,h/2, x, h/2);

  }

  /*
  if (mouseIsPressed == true && dist(mouseX, h/2, rx-50, h/2) > 50 && pmouseX >= mouseX) {
    
    x = mouseX + 50;
    const rx = x;
    
    rect(rx, 0, 2*w, 2*h);
    rect(x-50, h/2-10, 10, 20);
    strokeWeight(2);
    stroke(f);
    line(x-45,h/2, w, h/2);
  }
 */

  if (mouseIsPressed == true && mouseX >= x+40 && mouseY >= h/2-h/4 && mouseY <= h/2+h/4 && pmouseX <= mouseX){
    
    x = mouseX - 40;
    f = 0;

    background (0);
    fill(255);
    rect(x, 0, 2*w, 2*h);
    stroke(f);
    fill(f);
    rect(x+40, h/2-10, 10, 20);
    strokeWeight(3);
    line(x+40,h/2, x, h/2);
  }

  /*
  if (mouseIsPressed == true && dist(mouseX, mouseY, x+40, h/2-10) > 40 && pmouseX <= mouseX){

    x = mouseX - 40;
    f = 0;

    background (0);
    fill(255);
    //rect(x, 0, 2*w, 2*h);
    stroke(f);
    fill(f);
    rect(x+40, h/2-10, 10, 20);
    strokeWeight(2);
    line(x+40,h/2, 0, h/2);
  }
*/

}

function windwoResize () {
  w = windowWidth;
  h = windowHeight;
  resizeCanvas(w,h);
}