// globals
let x;
let graphics;
let g = 5;
let gg = 0.8;
let a = 1;
let y;
let frameCounter = 0; // variable to keep track of frame count
let f = 255;

function preload() {

}

function setup() {
  x = displayWidth/11;
  y = displayHeight/10 + (displayHeight/10)/2;
  graphics = createGraphics(displayWidth, displayHeight);
  canvas = createCanvas(displayWidth, displayHeight).parent('canvas');
  frameRate(80);
  graphics.background(0); 
}

function draw() {
  
  graphics.noStroke();
  graphics.fill(f);
  graphics.ellipse(x, y, g, g);
  
  y = y + 2;
  g = g + gg;

  frameCounter = frameCounter + 2; // increment frame count

  // trigger change in size every 60 frames
  if (frameCounter % 60 == 0) {
    gg = -gg; // reverse size change
  }

  if (frameCounter % 720 == 0) {
    x = x + displayWidth/11;
    y = displayHeight/10 + (displayHeight/10)/2;
  }

  if (frameCounter >= 7200) { // changed condition to always be true after 7200 frames
    x = displayWidth/11;
    y = displayHeight/10 + (displayHeight/10)/2;
    graphics.background(0); // reset background
    frameCounter = 0; // reset frame counter
  }
  
  image(graphics, 0, 0);
}
