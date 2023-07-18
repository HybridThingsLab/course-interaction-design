var start = 0.2
var start1 = 0
var space1 = 5;
//Zeit: 5/60/60
var aender=0.0014
var zaehler=0
var fr=60

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES)
  frameRate(fr)
  noiseDetail(2,1)
}

function draw() {
  background(30);
  noStroke();
  
  translate(width/2,height/2);
  
  var space = 0.075;
  
  for(var i = 0; i < 360; i+=space) {
    var xoff= map(cos(i),-1,1,0,3);
    var yoff =map(sin(i),-1,1,0,3);
    
    var n = noise(xoff+start, yoff+start);
    
    var h = map(n,0,1,-150,150);
    rotate(space);
    fill(31,13,252)
    rect(200,0,h,1);
  }

  start+=1/60
  space1-=aender
  if(space1<=0.1){
    aender=0
    space1=0.1
}

  for(var u = 0; u < 360; u+=space1) {
    var xoff1= map(cos(u),-1,1,0,3);
    var yoff1 =map(sin(u),-1,1,0,3);
    
    var n1 = noise(xoff1+start1, yoff1+start1);
    
    var h1 = map(n1,0,1,-150,150);
    rotate(space1);
    //fill(84,152,245)
    fill(84,152,245)
    rect(200,0,h1,1);

  }
  if(frameCount%fr==0){
    zaehler++
  
  }

  start1=start/60
}