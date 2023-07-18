let ms = ["一","二","三","四","五","六","七","八","九",""];
let seconds, milliseconds, millisecondsPerSecond;

let w = 800;
let h = 800;
let centerx;
let centery;
let puffer = 70;

function setup() {
  createCanvas(w, h);
  textAlign(CENTER, CENTER);
  centerx = width/2;
  centery = height/2;
}

function draw() {

  milliseconds = int(millis() % 60000);
  seconds = int(milliseconds / 1000);

  background(255);
  fill(255, 0, 0);
  noStroke();
  circle(centerx, centery, 400);
  fill(255);
  textSize(60);
  if (seconds < 19) {
     text("", centerx - puffer, centery);
  } else if (seconds < 29) {
    text("二", centerx - puffer, centery);
  } else if (seconds < 39) {
    text("三", centerx - puffer, centery);
  } else if (seconds < 49) {
    text("四", centerx - puffer, centery);
  } else if (seconds < 59) {
    text("五", centerx - puffer, centery);
  } else if (seconds == 60) {
    text("", centerx - puffer, centery);
    milliseconds -=int(millis() % 60000);
  }
    
  if(seconds > 8 && seconds < 59) {
    text("十", centerx, centery);
  }
  text(ms[seconds%10], centerx + puffer, centery);
}