// https://p5js.org/examples/input-clock.html

let w = 1400;
let h = w/2.22;
let seconds, milliseconds;
let customFont;

function preload(){
  customFont = loadFont('square.ttf');
}

function setup() {
  createCanvas(w, h);
  textAlign(CENTER, CENTER);
  textFont(customFont);
}

function draw() {

  milliseconds = int(millis() % 60000);
  seconds = int(milliseconds / 1000);

  let size=map(milliseconds, 0, 60000, 1, h+h/4.5);
  //seconds = milliseconds / 1000;
  background(0);
  fill(255);
  textSize(size);
  text(seconds,w/2,h/2.15);
}

function windowResized() {
  if(windowHeight>=windowWidth/2.22){
    w=windowWidth;
    h=w/2.22;
  }else{
    h=windowHeight;
    w=h*2.22;
  }
  resizeCanvas(w, h);
}
