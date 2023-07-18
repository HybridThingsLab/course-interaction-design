let timer = 60;
let triangleHeight = 0;
let triangleTop = 0;
let upperHeight = 0;
let lowerHeight = 0;
let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  triangleHeight = height;
  triangleTop = (height - triangleHeight) / 2;
}

function draw() {
  background(220);

  //unteres Dreieck
  fill(255, 204, 0);
  lowerHeight = map(timer, 60, 0, 0, triangleHeight / 2);
  triangle(0, triangleTop + triangleHeight, width, triangleTop + triangleHeight, width/2, triangleTop + triangleHeight - lowerHeight);
  
  //oberes Dreieck
  fill(255, 204, 0);
  upperHeight = map(timer, 60, 0, 0, triangleHeight / 2);
  triangle(0,upperHeight,width/2,height/2, width ,upperHeight);
  


  // Erzeuge neue Kugel
   fill(255, 204, 0); 
   noStroke();
  if (frameCount % 60 === 0 && timer > 0) {
    let ball = {
      x: width / 2,
      y: height / 2,
      speed: 5,
      size: 15
    };
    balls.push(ball);
  }

  // Bewege und zeichne Bälle
  for (let i = balls.length - 1; i >= 0; i--) {
    let ball = balls[i];
    ball.y += ball.speed;
    ellipse(ball.x, ball.y, ball.size);
    if (ball.y > height) {
      balls.splice(i, 1);
    }
  }
  
    //schwarze Dreiecke
  fill(0);
  triangle(0, triangleTop, 0, triangleTop + triangleHeight, width / 2, height / 2);
  triangle(width, triangleTop, width, triangleTop + triangleHeight, width / 2, height / 2);

  // Verringere Timer
  if (frameCount % 60 === 0 && timer > 0) {
    timer--;
  }
}
