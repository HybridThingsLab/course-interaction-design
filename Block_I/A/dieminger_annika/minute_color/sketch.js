// globals
let customFont;
let x = 25;
let y = 25;
let w = 0;
let f = 200; 
let b = 100;
let graphics;
let z = 10/6;
let f2 = 100;


function preload() {

}

function setup() {

  graphics = createGraphics(displayWidth, displayHeight);
  canvas = createCanvas(displayWidth, displayHeight).parent('canvas');
  frameRate(50);
}

function draw() {

  background(b);
  //colorMode(HSB, [360], [100], [100], [1]);
  
  graphics.noStroke();
  graphics.rectMode(CENTER);
  graphics.fill(f);
  graphics.rect(x, y, 50, 50);
  
  scale(windowHeight/1000);
  translate(displayWidth/4, displayHeight/4)
  
  w = w+1;

  if (w%50==0){
    x = x + 100;
    //w = 0;
    b = b + z;
  }

  if(x > 1000){
    y = y + 100;
    x = 25;
  }
 
  if(w == 3000){
    w = 0;
    x = 25;
    y = 25;
    f = f-f2;  
    f2 = -f2;
    z = -z;
  }

  image(graphics,0,0);

}