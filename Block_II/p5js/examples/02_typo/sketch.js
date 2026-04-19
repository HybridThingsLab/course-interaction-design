// globals
let customFont;
let font_size = 100;
let degree;

// setup
async function setup() {

  // load data here
  customFont = await loadFont('assets/Inter-VariableFont_opsz,wght.ttf');

  // init canvas
  canvas = createCanvas(600, 600);

  // init custom fonts
  textFont(customFont);

}

// draw
function draw() {

  // background
  background(0);

  // re-calculate size of typo based mouse y-position
  font_size = map(mouseY, 0, height, 10, 300);

  // re-calculate rotation of typo based mouse position
  degree  = map(mouseX, 0, width, 0, 360);

  // show text
  noStroke();
  fill(255);

  push();
  translate(width / 2, height / 2);
  rotate(radians(degree));
  textAlign(CENTER, CENTER);
  textSize(font_size);
  text("hello", 0, 0);
  pop();

}