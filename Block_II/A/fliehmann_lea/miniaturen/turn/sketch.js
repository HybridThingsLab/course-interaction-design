

function setup() {
  createCanvas(windowWidth, windowHeight);
  a = 0;
}

function draw() {
  background(255);

  translate(width / 2, height / 2);
  stroke(0);
  fill(255);
  ellipse(0, 0, width/4, width/4);
  

  let distance = dist(width / 2, height / 2, mouseX, mouseY);
  let x = (mouseX - width / 2) * width/6 /distance;
  let y = (mouseY - height / 2) * width/6 / distance;

  fill(0);
  arc(0, 0, width/4, width/4, radians(0), radians(a));
  fill(255);
  ellipse(0, 0, width/8, width/8);

  strokeWeight(4);
  line(0, 0, x, y);

}

function mouseDragged(){
  a++;
}