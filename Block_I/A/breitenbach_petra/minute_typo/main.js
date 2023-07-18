// globals
let secondsLeft = 0;
let secondsRight = 0;
let seconds_two_digits_left, seconds_two_digits_right;
let kreisRechts, kreisLinks, links;

// setup
function setup() {
  frameRate = 60;
  // init canvas
  createCanvas(windowWidth, windowHeight);
  kreisRechts = 0;
  kreisLinks = 0;
  links = true;
  textAlign(CENTER);
}

// draw
function draw() {

  // background
  background(255);

  // seconds as two digits and milliseconds as three digitis if used for typo
  let seconds_two_digits_right = String(secondsRight).padStart(2, "0");
  let seconds_two_digits_left = String(secondsLeft).padStart(2, "0");

  //Pendel
  if(links) {
    kreisLinks = 0;
    kreisRechts = 0;
  }

  if(!links) {
    kreisLinks = 255;
    kreisRechts = 255;
  }

  if(frameCount % 60 == 0) {
    links = !links;
  }

  noStroke();

  // rechte Hälfte Hintergrund
  fill(0);
  rectMode(CORNERS);
  rect(windowWidth/2, 0, windowWidth, windowHeight);

  // Kreis links
  fill(kreisLinks);
  ellipse(width * 0.25, height / 2, width * 0.35, width * 0.35);

  // sekunden links
  if(frameCount % 60 == 0) {
    secondsLeft++;
  }
  if(frameCount % 3600 == 0) {
    secondsLeft = 0;
  }

  fill(255);
  textAlign(CENTER, CENTER);
  textSize((height / 2) - height/6);
  textFont('Impact');
  //text(seconds_two_digits, (width / 2) / 2, (height / 2) + (height * 0.02));
  text(seconds_two_digits_left, (width / 2) / 2, (height / 2) + 10);

  // Kreis rechts
  fill(kreisRechts);
  ellipse(width * 0.75, height / 2, width * 0.35, width * 0.35);

  // sekunden rechts
  if(frameCount % 60 == 0) {
    secondsRight++;
  }
  if(frameCount % 3600 == 0) {
    secondsRight = 0;
  }

  fill(0);
  //text(seconds_two_digits, width * 0.75, (height / 2) + (height * 0.02));
  text(seconds_two_digits_right, width * 0.75, (height / 2) + 10);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}