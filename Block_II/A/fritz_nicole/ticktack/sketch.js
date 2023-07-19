let rotiere1 = 0;
let counter1 = 0;
let numPoints = 20;
let points = [];
let balls = [];
let redballs = [];
let d = 20;
let erwischt = false;
let gamespeed = 60;
let i = 5;
let redspeed = 60;
let textr = 0;
let textg = 0;
let textb = 0;
let gameOver = false;
let gameStarted = false;
let startTime = 0;
let highScore;
let highScoreSet = false;
let roterwischt = false;
let easingFactor = 0.08;
let targetRotation = 6.28;
let rotieregruen = 0;
let myFont;
let rotateNum = false;

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < numPoints; i++) {
    let pointt = createVector(width / 2, height / 2);
    points.push(pointt);
  }
}

function draw() {
  textFont(myFont);

  if (!gameStarted) {
    noStroke();
    fill(0);
    background(250);
    textSize(40);
    textAlign(CENTER);
    //text("Start Game", width/2, height*0.25);
    textSize(20);
    text(
      "Catch the green balls til you reach 30 seconds",
      width / 2,
      height * 0.3
    );
    text("Each green ball is worth 1 second", width / 2, height * 0.35);
    text(
      "Watch out for the red balls, or you lose 2 seconds!",
      width / 2,
      height * 0.4
    );
    stroke(250, 0, 0);
    strokeWeight(5);
    textSize(30);
    text("Press     SPACE    to play", width / 2, height * 0.55);
    stroke(0);
    textSize(20);
  }

  if (gameStarted) {
    noStroke();

    if (rotateNum) {
      let rotationDiff = targetRotation - rotiere1;
      let easedRotationDiff = rotationDiff * easingFactor;
      rotiere1 += easedRotationDiff;
      if (rotationDiff <= 0.01) {
        rotateNum = false;
      }
    }
    if (counter1 <= -10) {
      counter1 = -10;
    }

    if (erwischt && roterwischt) {
      rotiere1 += 0.25;
    }

    if (counter1 >= 30) {
      gameOver = true;
      counter1 = 0;
      gamespeed = 60;
      redspeed = 90;
    }

    fill(0);
    rect(0, 0, width, height / 2); //WHITE

    fill(0);
    rect(0, height * 0.35, width, height); //BLACK

    points.shift();
    let pointt = createVector(mouseX, mouseY);
    points.push(pointt);

    stroke(255);
    strokeWeight(4);
    strokeJoin(ROUND);
    noFill();
    beginShape();
    for (let i = 0; i < points.length; i++) {
      let pt = points[i];
      curveVertex(pt.x, pt.y);
    }
    endShape();

    push();
    translate(width / 2, -10);
    rotate(radians(0));
    if (erwischt) {
      rotate(rotiere1);
    } else if (roterwischt) {
      rotate(-rotiere1);
    }

    textSize(100);
    fill(textr, textg, textb);
    text(counter1, -30, height * 0.2); //counter anzeige

    pop();

    if (frameCount % gamespeed == 0) {
      //GREEN BALLS
      balls.push(new Ball(random(0, width - 15), 0 + 15)); // height*0.35
    }

    if (frameCount % redspeed == 0) {
      //RED BALLS
      redballs.push(new RedBall(width - 15, random(15, height - 15)));
    }

    if (counter1 == i) {
      gamespeed -= 20;
      redspeed -= 20;
      i += 5;
    }
    if (gamespeed <= 20) {
      gamespeed = 20;
    }
    if (redspeed <= 20) {
      redspeed = 20;
    }

    //console.log(gamespeed + "        " + redspeed);

    for (let i = 0; i < balls.length; i++) {
      balls[i].fall();
      balls[i].display();
    }

    for (let i = 0; i < redballs.length; i++) {
      redballs[i].fallred();
      redballs[i].displayred();
    }
  }
  if (gameOver) {
    noStroke();
    fill(0);
    background(250);
    textSize(40);
    textAlign(CENTER);
    text("Game Over", width / 2, height * 0.25);
    textSize(30);
    //text("Highscores", width / 2, height * 0.35);
    textSize(20);

    if (!highScoreSet) {
      let timeTaken = (millis() - startTime) / 1000;
      highScoreSet = true;
     //if (timeTaken < highScore) { // ob Zeit aktuellen Highscore schlägt
      highScore = timeTaken;
    }
    text(
      "Your Score: " + highScore.toFixed(3) + " seconds",
      width / 2,
      height * 0.4
    );
    // }
    stroke(250, 0, 0);
    text("Press     SPACE    to play", width / 2, height * 0.6);
  }
}

function keyPressed() {
  if (gameOver && key == " ") {
    gameOver = false;
  }
  if (!gameStarted && key == " ") {
    gameStarted = true;
  }
}

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.radius = d;
  }

  fall() {
    this.y += this.speed;
  }

  display() {
    stroke(0, 250, 0);
    ellipse(this.x, this.y, this.radius);

    if (
      mouseX >= this.x - 15 &&
      mouseX <= this.x + 15 &&
      mouseY >= this.y - 15 &&
      mouseY <= this.y + 15
    ) {
      textr = 0;
      textg = 250;
      textb = 0;
      let index = balls.indexOf(this);
      balls.splice(index, 1);
      counter1++;
      rotiere1 = 0;
      erwischt = true;
      roterwischt = false;
      rotateNum = true;
    }
  }
}

class RedBall {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.radius = d + 5;
  }

  fallred() {
    this.x -= this.speed;
  }

  displayred() {
    stroke(250, 0, 0);
    ellipse(this.x, this.y, this.radius);

    if (
      mouseX >= this.x - 15 &&
      mouseX <= this.x + 15 &&
      mouseY >= this.y - 15 &&
      mouseY <= this.y + 15
    ) {
      textr = 250;
      textg = 0;
      textb = 0;
      counter1 -= 2;
      roterwischt = true;
      erwischt = false;
      rotateNum = true;
      rotiere1 = 0;
      let index = redballs.indexOf(this);
      redballs.splice(index, 1);
    }
  }
}

function preload() {
 myFont = loadFont('PressStart2P-Regular.ttf');
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
