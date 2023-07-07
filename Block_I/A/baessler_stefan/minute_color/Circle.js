class Circle {
    constructor(x, y, targetSize, preTargetSize, easing, delay) {
      this.x = x;
      this.y = y;
      this.targetSize = targetSize;
      this.preTargetSize = preTargetSize;
      this.easing = easing;
      this.size = 0;
      this.merker = 0;
      this.startTime = millis() + delay;
      this.isBlack = false;
      this.r = random(255);
      this.g = random(255);
      this.b = random(255);
      this.targetSizeBlack = targetSize + 400;
    }
  
    display() {
      noStroke();
      if (this.isBlack) {
        fill(0);
      } else {
        fill(this.r, this.g, this.b);
      }
      ellipse(this.x, this.y, this.size, this.size);
    }
  
    update() {
      let elapsedTime = millis() - this.startTime;
      if (elapsedTime < 0) {
        return;
      }
  
      let normalizedTime = (elapsedTime - this.delay) / (this.duration - this.delay);
  
      if (this.size <= this.preTargetSize && this.merker == 0) {
        this.size = this.size + (this.preTargetSize - this.size) * this.easing;
      }
      if (this.size >= (this.preTargetSize - 10)) {
        this.size = this.size + (this.targetSize - this.size) * this.easing;
        this.merker = 1;
      }
    }
    
  }
  