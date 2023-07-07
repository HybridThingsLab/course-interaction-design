//let windowWidth = 600
//let windowHeight = 600;

let seconds, milliseconds;

function setup() {


  angleMode(DEGREES);



}

function draw() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  background(255);

  milliseconds = int(millis() % 60000);
  seconds = milliseconds / 1000;
  //seconds = int(milliseconds / 1000);


  
  translate(windowWidth / 2, windowHeight / 2);
  rotate(-90);
  fill(0);
  //fill(150);
  if(windowWidth<=windowHeight){
    arc(0, 0, windowWidth-windowWidth/3, windowWidth-windowWidth/3, 0, seconds * 6, PIE);
  }
  else{
    arc(0, 0, windowHeight-windowHeight/3, windowHeight-windowHeight/3, 0, seconds * 6, PIE);
  }

  //fill(map(int(seconds),0,60,0,255),map(int(seconds),0,60,255,0),0);
  //arc(0,0, windowWidth, windowWidth, int(seconds * 6) - int(seconds*6)%10, seconds*6, PIE);
  

  
  rotate(seconds*6);
  fill(140,140,140);
  //fill(150);
  if(windowWidth<=windowHeight){
    arc(0, 0, windowWidth/2-windowWidth/6, windowWidth/2-windowWidth/6, 0, -seconds*6*60, PIE);
  }
  else{
    arc(0, 0, windowHeight/2-windowHeight/6, windowHeight/2-windowHeight/6, 0, -seconds*6*60, PIE);
  }
  

}