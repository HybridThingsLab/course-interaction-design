let circles = [];
let x = 0;
let y = 0;
let angle = 0;

function setup() {
  createCanvas(800, 800);
  colorMode(HSB, 360, 100, 100);
  background(0);
  setInterval(createCircle, 1000);
  setInterval(randomizeCircleSize, 2000);
}

function draw() {
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    circle.move();
    circle.checkEdges();
    fill(circle.color, 100, 100);
    
    // Hier fügen wir die Wellenbewegung hinzu
    let wave = sin(angle + circle.waveOffset) * circle.waveAmplitude;
    ellipse(circle.x + wave, circle.y, circle.radius * 2);
    
    fill(0);
    ellipse(circle.x + wave, circle.y, circle.radius / 2);
  }
  removeExpiredCircles();
  if (second() === 0 && minute() - x >= 1) {
    circles = [];
    x = minute();
    y = second();
  }
  // Hier erhöhen wir den Winkel für die nächste Iteration
  angle += 0.05;
}

function Circle() {
  this.x = random(width);
  this.y = random(height);
  this.radius = random(5, 20);
  this.color = random(0, 360);
  this.xspeed = random(-5, 5);
  this.yspeed = random(-5, 5);
  
  // Hier definieren wir die Parameter für die Wellenbewegung
  this.waveAmplitude = random(5, 20);
  this.waveOffset = random(0, TWO_PI);

  this.move = function() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  };

  this.checkEdges = function() {
    if (this.x - this.radius < 0 || this.x + this.radius > width) {
      this.xspeed = -this.xspeed;
    }
    if (this.y - this.radius < 0 || this.y + this.radius > height) {
      this.yspeed = -this.yspeed;
    }
  };

  this.isExpired = function() {
    let elapsedSeconds = (minute() - x) * 60 + (second() - y);
    return elapsedSeconds > 60;
  };
}

function createCircle() {
  if (circles.length < 60) {
    circles.push(new Circle());
  }
}

function removeExpiredCircles() {
  for (let i = circles.length - 1; i >= 0; i--) {
    if (circles[i].isExpired()) {
      circles.splice(i, 1);
    }
  }
}

function updateCircleSize(circle) {
  circle.radius += random(-5, 5);
}

function randomizeCircleSize() {
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    updateCircleSize(circle);
  }
}