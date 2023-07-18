var sharkX = 0;
var sharkSize = 225;
var sharkLeft = sharkX - sharkSize / 2;
var sharkRight = sharkX + sharkSize / 2;

let maxSizeTimer = 0;
const maxSizeDuration = 2;
let video;
let predictions = [];
var screen = -1;
var y = -20;
var x = 200;
var speed = 2;
var score = 0;
var fish;
var shark;
var sea;
var jaws;
var lastMessageTime;
var messageDuration = 5;
var messageIndex = 0;

let faceImg;

let state = "start"; 

let noseX = 0;
let sharkY = 0;
let customFont;


function preload() {
  soundFormats("mp3", "ogg");
  fish = loadImage("fish.png");
  shark = loadImage("shark.png");
  sea = loadImage("sea.png");
  jaws = loadSound("jaws.mp3");
  chomp = loadSound("chomp.wav");
  sea_bw = loadImage("sea_bw.png");
  faceImg = loadImage('face.png');
  customFont = loadFont("wasser.ttf");


}

let instructionsVisible = false;

function setup() {
  const canvas = createCanvas(800, 800);
  canvas.style("display", "block");
  loadingScreen();
  jaws.play();
  noCursor();
  video = createCapture(VIDEO);
  const facemesh = ml5.facemesh(video, modelReady);
  facemesh.on("predict", gotResults);
  video.hide();
  colorMode(HSB);
  noStroke();

  window.addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
      if (screen == -1) {
        screen = 0;
      } else if (screen == 0) {
        screen = 1;
        jaws.loop();
        jaws.play();
      } else if (screen == 2) {
        screen = 0;
      }
    }
  });
}

function modelReady() {
  console.log("model ready");
}

function gotResults(results) {
  predictions = results;
}

function draw() {
  if (state === "start") {
    if (screen == -1) {
      // Loading screen
      loadingScreen();
    } else if (screen == 0) {
      startScreen();
    } else if (screen == 1) {
      gameOn();
    } else if (screen == 2) {
      endScreen();
    }
  } else if (state === "instruction") {
    drawInstructionScreen();
  }

  drawKeypoints();
}

function drawKeypoints() {
  for (let i = 0; i < predictions.length; i += 1) {
    const keypoints = predictions[i].scaledMesh;
    if (keypoints.length > 0) {
      noseX = keypoints[4][0];
    }
  }
}

let textSizeMin = 50;
let textSizeMax = 55;
let textSizeRange = textSizeMax - textSizeMin;
let textPulseSpeed = 0.05;
let textPulseOffset = 0;
let startTextSizeMin = 20;
let startTextSizeMax = 12.5;
let startTextSizeRange = startTextSizeMax - startTextSizeMin;

let loaderDiv;
const loadingDuration = 4;
let loadingStartTime;

function loadingScreen() {
  if (!loadingStartTime) {
    loadingStartTime = millis();
  }

  const elapsedTime = (millis() - loadingStartTime) / 1000;

  if (elapsedTime >= loadingDuration) {
    loadingStartTime = 0;
    screen = 0;
    loaderDiv.hide();
  }

  background(255);

  if (!loaderDiv) {
    loaderDiv = createDiv();
    loaderDiv.html(`
      <!DOCTYPE html>
      <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
      .loader {
        border: 16px solid #f3f3f3;
        border-radius: 50%;
        border-top: 16px solid #000000;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      </style>
      </head>
      <body>
      
      <div class="loader"></div>
      
      
      </body>
      </html>
    `);
    loaderDiv.position(0, 0);
    loaderDiv.style("width", "100%");
    loaderDiv.style("height", "100%");
    loaderDiv.style("display", "flex");
    loaderDiv.style("align-items", "center");
    loaderDiv.style("justify-content", "center");
  }
}

function startScreen() {
  imageMode(CORNER);
  jaws.pause();
  background(96, 157, 255);
  image(sea, 0, 0, 800, 800);
  fill(255);
  textAlign(CENTER);
  textStyle(BOLD);

  let textX = width / 2;
  let textY = height / 2 - 310; 

  let fishSize = 150;
  let fishX = width / 2;
  let fishY = height / 2 - 150;
  imageMode(CENTER);
  image(fish, fishX, fishY, fishSize, fishSize + 50);

  frameCount = 0; 

  let textSizeOffset = sin(frameCount / 10) * 2;
  textSize(textSizeMin + textSizeOffset);
  strokeWeight(20);
  textFont(customFont);

  textAlign(CENTER, TOP); 
  text("Fischin Impossible:", textX, textY-30);
  text("The Catching Challenge", textX, textY + 30);

  let startTextSize = startTextSizeMin;
  textSize(startTextSize);
  textStyle(BOLD);

  let buttonWidth = 165;
  let buttonHeight = 45;
  let buttonX = width / 2;
  let buttonY = height / 2;
  let ax = 35;

  if (
    mouseX >= buttonX - buttonWidth / 2 &&
    mouseX <= buttonX + buttonWidth / 2 &&
    mouseY >= buttonY - buttonHeight / 2 &&
    mouseY <= buttonY + buttonHeight / 2
  ) {
    cursor(HAND);
    if (mouseIsPressed) {
      screen = 1;
      jaws.loop();
      jaws.play();
    }
    buttonWidth += 5;
    buttonHeight += 5;
    ax += 2;
  } else {
    cursor(ARROW);
  }

  rectMode(CENTER);
  noFill();
  stroke(255);
  strokeWeight(2);
  rect(buttonX, buttonY, buttonWidth, buttonHeight, 5);

  noStroke();
  fill(255);
  textSize(ax);
  textStyle(BOLD);
  text("Start", buttonX, buttonY -15);

  let anleitungButtonWidth = 120;
  let anleitungButtonHeight = 40;
  let anleitungButtonX = width / 2;
  let anleitungButtonY = buttonY + 60;

  let anleitungTextSize = startTextSize;

  if (
    mouseX >= anleitungButtonX - anleitungButtonWidth / 2 &&
    mouseX <= anleitungButtonX + anleitungButtonWidth / 2 &&
    mouseY >= anleitungButtonY - anleitungButtonHeight / 2 &&
    mouseY <= anleitungButtonY + anleitungButtonHeight / 2
  ) {
    cursor(HAND);
    if (mouseIsPressed) {
      state = "instruction"; 
      console.log("click");
    }
    anleitungButtonWidth += 5;
    anleitungButtonHeight += 5;
    anleitungTextSize += 2;

    rectMode(CENTER);
    noFill();
    stroke(255);
    strokeWeight(2);
    rect(
      anleitungButtonX,
      anleitungButtonY,
      anleitungButtonWidth,
      anleitungButtonHeight,
      5
    );

    noStroke();
    fill(255);
    textSize(anleitungTextSize);
    textStyle(BOLD);
    text("Anleitung", anleitungButtonX, anleitungButtonY - 8);
  } else {
    rectMode(CENTER);
    noFill();
    stroke(255);
    strokeWeight(2);
    rect(
      anleitungButtonX,
      anleitungButtonY,
      anleitungButtonWidth,
      anleitungButtonHeight,
      5
    );

    noStroke();
    fill(255);
    textSize(anleitungTextSize);
    textStyle(BOLD);
    text("Anleitung", anleitungButtonX, anleitungButtonY -8);
  }

   imageMode(CENTER);
  let sharkX = width / 2;
  let sharkY = height - shark.height / 2 - 20;
  let sharkSize = 300;
  sharkX = width / 2;
  sharkY = height / 2 + 290;
  sharkSize = map(sharkSize, 300, 400, 225, 300);
  image(shark, sharkX, sharkY, sharkSize, (sharkSize * 175) / 175);
  drawKeypoints();

  reset();
}

function drawInstructionScreen() {
  background(255);
  fill(0);
  textAlign(CENTER, CENTER); 
  textStyle(BOLD);

  image(faceImg, width/ 2, height/ 2, 250,250);  

  textSize(15);
  text(
    "Please lean towards the screen so that your chin is just above the touchpad.",
    width / 2,
    100
  );
  text(
    "This position will give you the best experience.",
    width / 2,
    125
  );
  text(
    "Also, ensure there is only one person in front of the camera.",
    width / 2,
    180
  );
  text(
    "You will be guiding the shark using your nose. Simply move your head sideways,",
    width / 2,
    600
  );
  text(
    "either to the left or right,",
    width / 2,
    625
  );
  text(
    "while maintaining it in a forward-facing direction.",
    width / 2,
    650
  );

 
 let buttonWidth = 100;
  let buttonHeight = 50;
  let buttonX = width / 2 - buttonWidth / 2;
  let buttonY = height - buttonHeight - 10;

  let isHovering = mouseX >= buttonX && mouseX <= buttonX + buttonWidth && mouseY >= buttonY && mouseY <= buttonY + buttonHeight;

  
  noFill();
  stroke(0);
  if (isHovering) {
    buttonWidth += 5; 
    buttonHeight += 5;
  }
  rect(width / 2, height - 25, buttonWidth, 30, 5);

  // Draw the "Back" text
  noStroke();
  let buttonTextSize = 20;
  if (isHovering) {
    buttonTextSize += 2; 
  }
  textSize(buttonTextSize);
  fill(0);
  text("Back", width / 2, height - 25);

  if (
    mouseX >= buttonX &&
    mouseX <= buttonX + buttonWidth &&
    mouseY >= buttonY &&
    mouseY <= buttonY + buttonHeight
  ) 
   if (isHovering) {
    cursor(HAND);
    if (mouseIsPressed) {
      state = "start";
    }
  } else {
    cursor(ARROW);
  }
}

function gameOn() {
  imageMode(CENTER);
  image(sea, width / 2, height / 2, 800, 800);
  textSize(25);
  textStyle(BOLD);

  text("Score: " + score, 60, 30);
  rectMode(CENTER);

  sharkX = map(noseX, 0, video.width, width, 0);

  let distanceFromCenter = abs(sharkX - width / 2);

  let sharkSpeed = map(distanceFromCenter, 0, width / 2, 1, 60);

  sharkX = sharkX + sharkSpeed;

  sharkX = constrain(sharkX, 0, width);
  sharkLeft = sharkX - sharkSize / 2;
  sharkRight = sharkX + sharkSize / 2;
  image(shark, sharkX, height - 110, sharkSize, (sharkSize * 175) / 175);
  drawKeypoints();

  push();
  translate(x, y);
  rotate(frameCount / 20.0);
  image(fish, 0, 0, 90, 130);
  pop();
  y += speed;
  if (y > height) {
    screen = 2;
    jaws.stop();
  }
  if (y > height - 115 && x > sharkLeft && x < sharkRight) {
    y = -20;
    speed += 0.5;
    score += 1;
    if (sharkSize < 300) {
      sharkSize += 5;
      sharkY -= 50;
    }
    chomp.play();
  }

  if (y == -20) {
    pickRandom();
  }
  if (score == 5) {
    textSize(40);
    fill(255);
    text("Well done!", width / 2, height / 2);
  }
  if (score == 10) {
    textSize(40);
    fill(255);
    text("Great job!", width / 2, height / 2);
  }

  if (sharkSize >= 300) {
    textSize(25);
    fill(255);
    textAlign(CENTER);
    text("MAX SIZE", width / 2, height / 2 + 150);

    if (maxSizeTimer === 0) {
      maxSizeTimer = millis();
    } else {
      const elapsedSeconds = (millis() - maxSizeTimer) / 1000;
      if (elapsedSeconds >= maxSizeDuration) {
        sharkSize = 300;
        maxSizeTimer = 0;
      }
    }
  }
}

function pickRandom() {
  x = random(20, width - 20);
}
function saveHighScore(newHighScore) {
  localStorage.setItem("highScore", newHighScore);
}
function loadHighScore() {
  textSize(30);
  let highScore = localStorage.getItem("highScore");
  return highScore === null ? 0 : parseInt(highScore);
}

function endScreen() {
  image(sea_bw, width / 2, height / 2, 800, 800);
  textAlign(CENTER);
  textSize(60);
  textStyle(BOLD);
  colorMode(HSB);
  fill(0, 100, 100);
    textFont(customFont);
  text("GAME OVER", width / 2, height / 2 - 100);
  fill(255);
  textSize(40);
  text("YOUR SCORE: " + score, width / 2, height / 2 - 20);
  fill(255);
  textSize(15);
  let pulsateSize = 15 + 5 * sin(frameCount / 10);
  text("ENTER TO PLAY AGAIN", width / 2, height / 2 + 95, null, pulsateSize);
  textSize(30);
  let highScore = loadHighScore();
  if (score > highScore) {
    saveHighScore(score);
    highScore = score;
  }

  fill(255);
  textSize(30);
  text("HIGHEST SCORE: " + highScore, width / 2, height / 2 + 35);
}

function reset() {
  score = 0;
  speed = 2;
  y = -20;
  sharkSize = 225;
  lastMessageTime = -messageDuration * 1000;
  messageIndex = 0;
}
