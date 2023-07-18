let griff = 70;
let img;
let distance ;
let x ;
let y ;

function setup() {
  createCanvas(windowWidth, windowHeight);
  img = loadImage('image/fishing-rod.png');
 distance =dist(width/2 - width/9.75, height/2 + height/11.4, 1000, 600);
 x =(1000 - (width/2 - width/9.75)) * griff / distance;
 y =(600 - (height/2 + height/11.4)) * griff / distance;

}

function draw() {
  background(255);

  translate(windowWidth/2,windowHeight/2);
  
 push()
 translate(-width/9.75,height/11.4)

 if(mouseIsPressed){
  distance = dist(width/2 - width/9.75, height/2 + height/11.4, mouseX, mouseY);
  x = (mouseX - (width/2 - width/9.75)) * griff / distance;
  y = (mouseY - (height/2 + height/11.4)) * griff / distance;
 }


  strokeWeight(10);
  line(0,0, x, y);

pop()

rotate(PI/6);
imageMode(CENTER);
image(img,0,0, windowWidth/3,windowWidth/3,);

}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}