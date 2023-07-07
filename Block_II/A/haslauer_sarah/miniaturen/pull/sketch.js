let circleColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  redBucket = new Bucket(50, windowHeight/6, 50, color(255, 0, 0));
  greenBucket = new Bucket (50, (windowHeight/6)*2.5, 50, color(0,255,0));
  blueBucket = new Bucket (50, (windowHeight/6)*4, 50, color(0,0,255));
}

function draw() {
  background(0);
  strokeWeight(5);
  stroke(100);
  circleColor = color(255, 255, 255);
  fill(circleColor);
  circle (windowWidth/2, windowHeight/2, (windowHeight/2 + windowWidth/2)/2);
  textAlign(CENTER);
  textSize(25);
  text ("the empty buckets", windowWidth/2, windowHeight/9);
  fill(0);
  stroke(0);
  strokeWeight(1)
  text("COLOUR ME :(", windowWidth/2, windowHeight/2);
  strokeWeight(5);
  redBucket.isDragging();
  redBucket.display();
  greenBucket.isDragging();
  greenBucket.display();
  blueBucket.isDragging();
  blueBucket.display();
}

function mousePressed() {
  if (redBucket.isMouseOver()) {
    redBucket.startDragging();
    circleColor = color(255,0,0);
    redraw();
  }
  if (greenBucket.isMouseOver()) {
    greenBucket.startDragging();
  }
  if (blueBucket.isMouseOver()) {
    blueBucket.startDragging();
  }
}

function mouseReleased() {
  redBucket.stopDragging();
  greenBucket.stopDragging();
  blueBucket.stopDragging();
}

class Bucket {
  constructor(x, y, size, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.dragging = false;
    this.offsetX = 0;
    this.offsetY = 0;
  }
  
  display() {
    fill(120);
    rect(this.x, this.y+this.size/2, this.size, this.size);
    fill(this.color);
    ellipse(this.x + this.size/2, this.y + this.size/2, this.size, this.size/2);
    fill(120);
    ellipse((this.x + this.size/2), this.y + this.size*1.5, this.size, this.size/2);
  }
  
  isMouseOver() {
    return mouseX > this.x && mouseX < this.x + this.size &&
           mouseY > this.y && mouseY < this.y + this.size;
  }
  
  isDragging() {
    if (this.dragging) {
      this.x = mouseX + this.offsetX;
      this.y = mouseY + this.offsetY;
    }
  }
  
  startDragging() {
    if (this.isMouseOver()) {
      this.dragging = true;
      this.offsetX = this.x - mouseX;
      this.offsetY = this.y - mouseY;
    }
  }
  
  stopDragging() {
    this.dragging = false;
  }

  isMouseOverCircle() {
    const circleRadius = (windowHeight/2 + windowWidth/2)/2;
    const distanceToCircleCenter = dist(this.x + this.size/2, this.y + this.size/2, windowWidth/2, windowHeight/2);
    return distanceToCircleCenter < circleRadius - this.size/2;
  }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
