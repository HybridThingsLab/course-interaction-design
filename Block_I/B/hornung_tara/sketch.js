x = 0;

function setup() {
  createCanvas(800, 800);
  background(220);

  img = loadImage('Arm-PNG-Pic.png');
}

function draw() {
  background(200);

  imageMode(CORNER);
  translate(400,400);
  rotate(x);
  image(img, 0, 0, 550, 550);

  fill(0);
  noStroke();
  textAlign(CENTER);
  textSize(15);
  text(second(),0,0);

  x += 0.01;
}
