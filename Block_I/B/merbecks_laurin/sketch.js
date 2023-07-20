let dots = [];
let seconds = 60;
let counter = 0;
let lightningCount = 50;
let lightningChance = 0.1;
let speed = 5;

function setup() {
  createCanvas(800, 800);
  background(0);
  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 1);
  for(let i = 0; i < seconds; i++) {
    dots[i] = [];
    for(let j = 0; j < lightningCount; j++) {
      dots[i] [j] = new Dot(lightningChance, height/2);
    }
  }
}

function draw() {
  /*
  if(frameCount == 180) {
    saveCanvas('blitzePulsieren1', 'jpg');
  }
  if(frameCount == 1350) {
    saveCanvas('blitzePulsieren2', 'jpg');
  }
  if(frameCount == 4000) {
    saveCanvas('blitzePulsieren3', 'jpg');
  }
  */
  translate(width/2, height/2);
  if(frameCount%seconds == 0) {
    if(counter < seconds) {
      counter++;
    }
  }
  for(let i = 0; i < counter; i++) {
    for(let j = 0; j < lightningCount; j++) {
      for(let k = 0; k < speed; k++) {
        dots[i] [j].show();
        dots[i] [j].move();
      }
      rotate(360/seconds);
    }
  }
  //background(0, 0, 0, 0.01);
}