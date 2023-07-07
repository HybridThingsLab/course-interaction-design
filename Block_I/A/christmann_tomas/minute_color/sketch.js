// https://p5js.org/examples/input-clock.html

let w;
let seconds, milliseconds;

function setup() {
  /*if(windowHeight>=windowWidth){
    createCanvas(windowWidth, windowWidth);
    w=windowWidth;
  }
  else{
    createCanvas(windowHeight, windowHeight);
    w=windowHeight;
  }*/
  createCanvas(windowWidth, windowHeight);
  //colorMode(HSB, [360], [100], [100], [100]);
  strokeWeight(1);
  noStroke();
  rectMode(CENTER);
}

function draw() {

  milliseconds = int(millis() % 60000);
  seconds = int(milliseconds / 1000);

  let gradient = drawingContext.createLinearGradient(0, 0, width, height);
  if (milliseconds<=20000){
    r1 = map(milliseconds, 0, 20000, 255, 0);
    g1 = map(milliseconds, 0, 20000, 0, 255);
    b1 = 0;
  } else if (milliseconds<=40000){
    g1 = map(milliseconds, 20000, 40000, 255, 0);
    r1 = 0;
    b1 = map(milliseconds, 20000, 40000, 0, 255);
  } else if (milliseconds>40000){
    r1 = map(milliseconds, 40000, 60000, 0, 255);
    g1 = 0;
    b1 = map(milliseconds, 40000, 60000, 255, 0);
  }
  gradient.addColorStop(0, color(r1, g1, b1));
  gradient.addColorStop(0.5, color(b1, r1, g1));
  gradient.addColorStop(1, color(g1, b1, r1));
  drawingContext.fillStyle=gradient;

  rect(width/2,height/2,width,height);

}

function windowResized() {
  /*if(windowHeight>=windowWidth){
    createCanvas(windowWidth, windowWidth);
    w=windowWidth;
  }
  else{
    createCanvas(windowHeight, windowHeight);
    w=windowHeight;
  }*/
  resizeCanvas(windowWidth, windowHeight);
}