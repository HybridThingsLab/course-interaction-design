// globals
let customFont;
let seconds, milliseconds, millisecondsPerSecond;

// preload
function preload() {
  // load data here
  customFont = loadFont('data/IBM_Plex_Mono/IBMPlexMono-Regular.ttf');
}

// setup
function setup() {

  // init canvas
  canvas = createCanvas(800, 800).parent('canvas');

  // init custom fonts
  textFont(customFont);

}

// draw
function draw() {

  // background
  background(0);

  // show seconds and milliseconds
  noStroke();
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(48);
  text("Hello", width / 2, height / 2);

}