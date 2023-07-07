let drones = [];
let crosshair;
let gameState = "start";
let counter = 15;
let prevMillis = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let size = 30;
    drones.push(new Drone(x, y, size));
  }
  crosshair = new Crosshair();
}

function draw() {
  textFont(blackOps);
  background(0);
  stroke(255);
  strokeWeight(1);
  if (gameState == "start") {
    textAlign(CENTER, CENTER);
    textSize(50);
    fill(255);
    text("Your objective is to defuse a bomb.", width/2, height/8);
    text("But watch out...", width/2, (height/7)*2 );
    text("you're about to be detected", width/2, (height/8)*3 );
    text("by the enemy!", width/2, (height/8.5)*4 );
    text("Quick, destroy the drones!", width/2,(height/6)*4);
    text("Press SPACE to start", width / 2, (height / 7) *6);
  } else if (gameState == "play") {
    strokeWeight(4);
    for (let i = 0; i < drones.length; i++) {
      drones[i].display();
      drones[i].isMoving();
    }
    crosshair.display();
    strokeWeight(2);
    text(`Time left: ${counter} s`, windowWidth/2, 50);
    let currentMillis = millis();
    if (currentMillis - prevMillis >= 1000) {
      counter--;
      prevMillis = currentMillis;
    }
    /*if (counter <= 0) {
      gameState = "lose";
    }*/
    if (drones[0].destroyed == true && drones[1].destroyed == true && drones[2].destroyed == true && drones[3].destroyed == true &&
      drones[4].destroyed == true && drones[5].destroyed == true && drones[6].destroyed == true && drones[7].destroyed == true &&
      drones[8].destroyed == true && drones[9].destroyed == true) {
        gameState ="win";
      }
      else if (counter <= 0) {
        gameState = "lose";
      }
  } else if (gameState == "win") {
    textAlign(CENTER, CENTER);
    textSize(40);
    fill(255);
    strokeWeight(1);
    text("Great!", width / 2, height / 4);
    text("You've destroyed the eyes", width / 2, height / 3);
    text("of the enemy :)", width / 2, (height / 5)*2);
    text("Now hurry to defuse the bomb!", width / 2, (height / 5)*4);
  } else if (gameState == "lose") {
    strokeWeight(1);
    textAlign(CENTER, CENTER);
    textSize(50);
    fill(255);
    text("Time's up!", windowWidth/2, windowHeight/4);
    text("Game over", width / 2, height / 3);
    text("You've been detected", width / 2, (height/3)*2);
    text("by the enemy :(", width / 2, (height/5)*4);
  }
  /*if (timer = 10 && ) {
      gameState = "win";
    }
  if (timer = 10 && ) {
    gameState = "lose";
  }*/
}



function keyPressed() {
  if (keyCode == 32 && gameState == "start") {
    gameState = "play";
  }
}

function mouseClicked() {
  if (gameState == "play") {
    for (let i = drones.length - 1; i >= 0; i--) {
      if (drones[i].hit(mouseX, mouseY)) {
        drones.splice(i, 1);
        break;
      }
    }
  }
}

function preload() {
  blackOps = loadFont('BlackOpsOne-Regular.ttf');
}

class Drone {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.destroyed = false;
    this.xSpeed = random(-3,3);
    this.ySpeed = random(-3,3);
  }

  display() {
    if (!this.destroyed) {
      fill(120);
      rectMode(CENTER);
      rect(this.x, this.y, this.size * 2, this.size);
      rect(this.x + this.size * 2, this.y, this.size, this.size * 2);
      rect(this.x - this.size * 2, this.y, this.size, this.size * 2);
    }
  }

  isMoving() {
      this.x = this.x + this.xSpeed;
      this.y = this.y + this.ySpeed;

      if (this.x >= windowWidth - this.size || this.x <= this.size) {
        this.xSpeed = -this.xSpeed;
      }
      if (this.y >= windowHeight - this.size || this.y <= this.size) {
        this.ySpeed = -this.ySpeed;
      }
  }

  hit(x, y) {
    if (
      x >= this.x - this.size * 2 &&
      x <= this.x + this.size * 2 &&
      y >= this.y - this.size &&
      y <= this.y + this.size
    ) {
      this.destroyed = true;
    }
  }
}

class Crosshair {
  constructor() {
    this.size = 30;
  }

  display() {
    noFill();
    circle(mouseX, mouseY, this.size * 2);
    circle(mouseX, mouseY, this.size * 4);
    line(mouseX - 2 * this.size, mouseY, mouseX + 2 * this.size, mouseY);
    line(mouseX, mouseY - 2 * this.size, mouseX, mouseY + 2 * this.size);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
