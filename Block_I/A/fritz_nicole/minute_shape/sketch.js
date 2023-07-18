let balls = [];
let y, yr, d, h;
let yS;


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  y = height * 0.25;
  d = width * 0.17;
  yr = height; 
  h = height; // aktuelle höhe speichern
  yS = height * 0.3;
  dS = width * 0.17;
}

function draw() {
  background(0);
  
  //Großer Kreis
  fill(180, 0, 0);
  ellipse(width/2, y, d);     
  
  rect(0, yr, width, height-yr); 

  circle(width/2, yS, dS/7); // erster Tropfen der minute startet, soblad unten angekommen
  yS+= 10;
  dS-= 0.35;
  
  if (yS >= height) {
  //if (yr >= 0) {
    if (frameCount % 60 == 0) {
      d -= 2.5;             //width * 0.01;
      yr -= height / 60;
      if (yr >= y) {
      balls.push(new Ball(width/2, height * 0.3)); 
    } 

    if (yr <= 0) {
      yr = height; 
      d = width * 0.2;
      yS = height * 0.3;
      dS = width * 0.17;
    }
  }
}
  
  for (let i = 0; i < balls.length; i++) {
    balls[i].fall(); 
    balls[i].display(); 
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  y = height * 0.25;
  d = width * 0.17;
  this.radius = d/10;
  yr = yr/h * height; 
  h = height; 

}

class Ball {                  
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;       //4
    this.radius = d/7;
  }
  
  fall() {
    this.y += this.speed;
  }
  
  display() {
    ellipse(this.x, this.y, this.radius);
    this.radius -= 0.15;
  }
}