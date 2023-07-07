
let seconds, milliseconds;

function setup() {
}

function draw() {
  createCanvas(windowWidth, windowHeight); 
  //dunkelblau (rgb(16,18,77))
  //gelb  rgb(189, 160, 123)

  background(map(int(seconds),0,60,16,189), map(int(seconds),0,60,18,160),map(int(seconds),0,60,77,123));
  rectMode(CENTER);
  noStroke();
  if (seconds>0,seconds<15){
    fill(map(int(seconds),0,15,16,189), map(int(seconds),0,15,18,160),map(int(seconds),0,15,77,123) );
  }
  else if (seconds>15,seconds<30){
    fill(map(int(seconds),15,30,16,189), map(int(seconds),15,30,18,160),map(int(seconds),15,30,77,123) );
  }
  else if (seconds>30,seconds<45){
    fill(map(int(seconds),30,45,16,189), map(int(seconds),30,45,18,160),map(int(seconds),30,45,77,123) );
  }
  else if (seconds>45,seconds<60){
    fill(map(int(seconds),45,60,16,189), map(int(seconds),45,60,18,160),map(int(seconds),45,60,77,123) );
  }
  
  rect(windowWidth/2,windowHeight/2,windowWidth/3,windowHeight/3);
 
  milliseconds = int(millis() % 60000);
  seconds = milliseconds / 1000;
  
  //seconds = int(milliseconds / 1000);
  /*console.log("----------");
  console.log("seconds: "+int(seconds));

  console.log("R: "+map(int(seconds),0,60,0,255));
  console.log("G: "+map(int(seconds),0,60,255,0));
  console.log("B: "+0);*/
  
  


}