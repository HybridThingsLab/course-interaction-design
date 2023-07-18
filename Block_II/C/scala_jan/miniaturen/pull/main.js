let lines = [];

function setup() {
  createCanvas(800, 800);
  background(255);
  
  for (let x = 0; x < width; x += 20) {
    for (let y = 0; y < height; y += 20) {
      lines.push(new Line(x, y));
    }
  }
}

function draw() {
  background(255);
  
  for (let line of lines) {
    line.update();
    line.draw();
  }
}

class Line {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.rot = 0;
    this.strokeWeight = 1;
  }
  
  update() {
    let distance = dist(mouseX, mouseY, this.pos.x, this.pos.y);
    this.strokeWeight = map(distance, 0, width, 1, 10);
    
    let dir = createVector(mouseX, mouseY).sub(this.pos);
    
    this.rot = dir.heading() + HALF_PI;
  }
  
  draw() {
    push();
    translate(this.pos.x, this.pos.y);
    rotate(this.rot);
    strokeWeight(this.strokeWeight);
    line(-10, 0, 10, 0);
    pop();
  }
}