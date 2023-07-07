// globals
let customFont;
let seconds, milliseconds, millisecondsPerSecond, milliseconds2;
let w = 800;
let h = 800;

// preload
function preload() {
  // load data here
  customFont = loadFont('data/IBM_Plex_Mono/IBMPlexMono-Regular.ttf');
}

// setup
function setup() {

  // init canvas
  canvas = createCanvas(w, h).parent('canvas');

  // init custom fonts
  textFont(customFont);

}

// draw
function draw() {

  // background
  background(0);

  // get seconds and milliseconds
  milliseconds = int(millis() % 10000);
  milliseconds2 = int (millis() % 60000);
  seconds = int(milliseconds / 1000) % 60000;
  tenseconds = int(milliseconds2 / 10000) % 60000;
  millisecondsPerSecond = milliseconds % 1000;
  millisecondsPerTen = milliseconds2 % 10000;

  // seconds as two digits and milliseconds as three digitis if used for typo
  let seconds_one_digit = String(seconds).padStart(1, "0");
  let tenseconds_one_digit = String(tenseconds).padStart(1, "0");
  // let milliseconds_three_digits = String(millisecondsPerSecond).padStart(3, "0");

  // show seconds and milliseconds
  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  for(let i = 0; i < millisecondsPerTen; i++){
      textSize(i/100);
  }
  text(tenseconds_one_digit, width / 2, 2*height / 5);
  for(let i = 0; i < millisecondsPerSecond; i++){
    textSize(i/10);
  }
  text(seconds_one_digit, width / 2, 3*height / 5);
}

windowResized = function() {
  resizeCanvas(w,h);
}