let ballX;
let ballY;
let ballSize = 50;
let xSpeed = 40;
let video;
let poseNet;
let pose;
let startScreenVisible = true;
let obstacles = [];
let obstacleColors = ["blue", "yellow", "green", "red"];
let currentObstacleColor = 0;
let timeLastObstacle = 0;
let obstacleInterval = 1000;
setInterval(() => {
  obstacleInterval *= 0.95; 
}, 5000);
let obstacleSpacing = 0;
let startTime;
let elapsedTime = 0;
let backgroundHeight = 800;
let backgroundSpeed = 2; 
let backgroundPosition = 0; 
let loadingScreenVisible = true;
let loadingStartTime;
let restartButtonHovered = false;





function setup() {
  createCanvas(800, 800);
  background(0);
  ballX = width/2;
  ballY = height/5;
  textFont("Arial Black");

loadingStartTime = millis();


  // Erstellung des Kamerabildes
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();

  // Erstellung des PoseNet-Modells
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotPoses);
}

function draw() {
  background(0);

if (loadingScreenVisible) {
  // Zeige Ladebildschirm
  background(0);
  fill(255);
  textSize(64);
  textAlign(CENTER, CENTER);
  text("LOADING", width/2, height/2);
  textSize(32);
  

  let loadingTime = millis() - loadingStartTime;
  if (loadingTime >= 1000) {
    // Wechsel zum Startbildschirm
    loadingScreenVisible = false;
    startScreenVisible = true;
  }
}
  
if (!loadingScreenVisible) {

  if (startScreenVisible) {
    // Zeige Startbildschirm
    fill(255);
    textSize(64);
    textAlign(CENTER, CENTER);
    text("INTO THE DEEP", width/2, height/2 - 100);

    if (mouseX > width/2 - 50 && mouseX < width/2 + 50 && mouseY > height/2 + 50 && mouseY < height/2 + 100) {
      // Maus über Play-Knopf
      cursor(HAND);
      fill(0, 255, 0);
    } else {
      // Maus nicht über Play-Knopf
      cursor(ARROW);
      fill(0);
    }

    rect(width/2 - 50, height/2 + 50, 100, 50);
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("PLAY", width/2, height/2 + 75);
  } else {
    // Spiel läuft
    
     drawBackground();
    

    // Zeichne den Ball
    noStroke();
    fill(255);
    ellipse(ballX, ballY, ballSize, ballSize);

    // Zeichne Hindernisse
  for (let i = obstacles.length - 1; i >= 0; i--) {
    let obstacle = obstacles[i];
    fill(obstacle.color);
    for (let row = 0; row < obstacle.shape.length; row++) {
      for (let col = 0; col < obstacle.shape[row].length; col++) {
        if (obstacle.shape[row][col] === 1) {
          rect(obstacle.x + col * ballSize, obstacle.y + row * ballSize, ballSize, ballSize);
        }
      }
    }
    obstacle.y -= 5;  // move obstacle up
    if (obstacle.y + obstacle.shape.length * ballSize < 0) {
      obstacles.splice(i, 1);  // remove obstacle if it's off screen
    }
  }
    
     // Aktualisieren des Abstands zwischen Hindernissen
  obstacleSpacing += 5;
    
    // Erzeuge Hindernisse nacheinander
  if (obstacles.length === 0 || millis() - timeLastObstacle > obstacleInterval) {
    createObstacles(obstacleColors[currentObstacleColor]);
    currentObstacleColor = (currentObstacleColor + 1) % obstacleColors.length;
    timeLastObstacle = millis();
  }
    
    // Erzeuge Hindernisse, wenn kein Hindernis mehr vorhanden ist
    if (obstacles.length === 0) {
      for (let i = 0; i < 3; i++) {
        createObstacles();
      }
    }
    
    // Steuerung mit Kopfbewegungen
    if (pose) {
      let newX = ballX - map(pose.nose.x, 0, width, -xSpeed, xSpeed);
      if (newX > ballSize/2 && newX < width - ballSize/2) {
        ballX = newX;
      }
      
       fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    elapsedTime = millis() - startTime;
    text(`Time: ${Math.floor(elapsedTime / 1000)}.${Math.floor((elapsedTime % 1000) / 10)}`,       width/2, 50);
  
    
    }
  }
  if (ballX - ballSize/2 <= 0 || ballX + ballSize/2 >= width) {
  // linken oder rechten Rand berührt
  gameOver();
}
for (let i = 0; i < obstacles.length; i++) {
  let obstacle = obstacles[i];
  for (let row = 0; row < obstacle.shape.length; row++) {
    for (let col = 0; col < obstacle.shape[row].length; col++) {
      if (obstacle.shape[row][col] === 1) {
        let obstacleX = obstacle.x + col * ballSize;
        let obstacleY = obstacle.y + row * ballSize;
        if (ballX + ballSize/2 >= obstacleX && ballX - ballSize/2 <= obstacleX + ballSize && ballY + ballSize/2 >= obstacleY && ballY - ballSize/2 <= obstacleY + ballSize) {
          // Ball hat ein Hindernis berührt
          gameOver();
        }
      }
    }

  }

}
  
  
}
  
}

function modelReady() {
  console.log('Model ist bereit!');
}

function gotPoses(poses) {
  if (poses.length > 0) {
    pose = poses[0].pose;
  }
}

function mouseClicked() {
  if (startScreenVisible) {
    if (mouseX > width/2 - 100 && mouseX < width/2 + 100 && mouseY > height/2 + 50 && mouseY < height/2 + 100) {
      // RESTART-Knopf gedrückt
      startScreenVisible = false;
      startTime = millis();
      loop();
    }
  }
}



function createObstacles(color) {
  if (obstacles.length < 10) { // max 10 Hindernisse zulassen
    let newObstacle;
    let overlapping = true;
    while (overlapping) {
      newObstacle = generateObstacle(color);
      overlapping = false;
      for (let i = 0; i < obstacles.length; i++) {
        if (collides(obstacles[i], newObstacle)) {
          overlapping = true;
          break;
        }
      }
    }
    obstacles.push(newObstacle);
  }
}

function generateObstacle(color) {
  let shapes = [
    [[1, 1], [1, 1]],  // square
    [[1, 0], [1, 0], [1, 1]],  // L shape
    [[0, 1], [0, 1], [1, 1]],  // mirrored L shape
    [[1, 1, 0], [0, 1, 1]],  // Z shape
    [[0, 1, 1], [1, 1, 0]],  // mirrored Z shape
    [[1, 1, 1]]  // long block
  ];
  let shape = shapes[Math.floor(Math.random() * shapes.length)];
  let x = Math.floor(Math.random() * (width - shape[0].length * ballSize));
  let y = height + ballSize;
  return {shape, x, y, color};
}

function collides(obstacle1, obstacle2) {
  let left1 = obstacle1.x;
  let right1 = obstacle1.x + obstacle1.shape[0].length * ballSize;
  let top1 = obstacle1.y;
  let bottom1 = obstacle1.y + obstacle1.shape.length * ballSize;
  let left2 = obstacle2.x;
  let right2 = obstacle2.x + obstacle2.shape[0].length * ballSize;
  let top2 = obstacle2.y;
  let bottom2 = obstacle2.y + obstacle2.shape.length * ballSize;
  return !(left1 >= right2 || right1 <= left2 || top1 >= bottom2 || bottom1 <= top2);
}

function drawBackground() {
  let brickHeight = 40; // Höhe der Ziegelsteine
  let brickWidth = 40; // Breite der Ziegelsteine
  let gap = 10; // Abstand zwischen den Ziegelsteinen
  
  // Berechne die aktuelle Position des Hintergrunds
  backgroundPosition -= backgroundSpeed;
  if (backgroundPosition < -brickHeight - gap) {
    backgroundPosition = 0;
  }
  
  // Zeichne den Hintergrund
  for (let y = backgroundPosition; y < height; y += brickHeight + gap) {
    for (let x = 0; x < width; x += brickWidth + gap) {
      fill(20); // Helle graue Farbe für die Ziegelsteine
      rect(x, y, brickWidth, brickHeight);
    }
  }
}

function gameOver() {
  startScreenVisible = true;
  obstacles = [];
  obstacleInterval = 1000;
  obstacleSpacing = 0;
  elapsedTime = 0;
  noLoop();
  fill(255);
  textSize(64);
  textAlign(CENTER, CENTER);
  text("GAME OVER", width/2, height/2 - 100);
  textSize(32);
  rect(width/2 - 100, height/2 + 50, 200, 50);
  fill(0);
  textSize(24);
  textAlign(CENTER, CENTER);
  text("RESTART", width/2, height/2 + 75);
}