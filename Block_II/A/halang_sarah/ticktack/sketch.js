var canvas;
let bullets = [];
let enemies = [];
let score = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  //make enemy
  for (let i = 0; i < 10; i++) {
    let enemy = {
      x: random(0, width),
      y: random(-800, 0),
    };
    enemies.push(enemy);
  }
}

function draw() {
  background(0);
  rectMode(CENTER);
  //draw Player
  circle(mouseX, height - 50, 40);

  //draw bullet und update
  for (let bullet of bullets) {
    bullet.y -= 20;
    circle(bullet.x, bullet.y, 10);
  }

  //draw enemy und update
  for (let enemy of enemies) {
    enemy.y += 3 / 2;
    rect(enemy.x, enemy.y, 20);
    if (enemy.y > height) {
      fill(255);
      textSize(40);
      textAlign(CENTER);
      text("YOU LOSE", width / 2, height / 2);
      noLoop();
    }
  }
  // deal with collision
  for (let enemy of enemies) {
    for (let bullet of bullets) {
      if (dist(enemy.x, enemy.y, bullet.x, bullet.y) < 10) {
        enemies.splice(enemies.indexOf(enemy), 1);
        bullets.splice(bullets.indexOf(bullet), 1);
        let newEnemy = {
          x: random(0, width),
          y: random(-800, 0),
        };
        enemies.push(newEnemy);
        score += 1;
      }
    }
  }
  fill(255);
  text(score, width - width / 2, height - height + 20);
}

function mousePressed() {
  // spawn bullet if click
  let bullet = {
    x: mouseX,
    y: height - 50,
  };
  bullets.push(bullet);
}

function windowResized() {
  resizeCanvas(width, height);
}
