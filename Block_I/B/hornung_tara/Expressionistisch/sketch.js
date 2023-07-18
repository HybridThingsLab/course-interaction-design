x = 0;
y = 0;
function setup() {
  createCanvas(800, 800);
  background(220);
  
  img1 = loadImage('Tapete.png');
  img = loadImage('Arm-PNG-Pic.png');
  img2 = loadImage('Bilderrahmen.png');
}

function draw() {
  image(img1, 350, 350, 800, 800);
  
  stroke(250,150,0);
  strokeWeight(8);
  textAlign(CENTER);
  fill(100,200,200);
  textSize(80);
  text(second(),400,400);

  imageMode(CORNER);
  translate(400,380);
  rotate(x);
  image(img, 0, 0, 400, 400);

  rotate(y);
  translate(0,0);
  imageMode(CENTER);
  image(img2, 0,0,910,910);

  x += 0.01;
  y -= 0.01;

}
