let handpose;
let video;
let predictions = [];
let showStartScreen = true;

const Directions = {
	Top: 0,
	Bottom: 1,
	Left: 2,
	Right: 3
}
let currentdirection = Directions.Top;
let boxsize = 0;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);

  handpose = ml5.handpose(video, modelReady);

  handpose.on("predict", results => {
    predictions = results;
  });

  video.hide();
}

function modelReady() {
  console.log("Model ready!");
}

function startScreen() {
  background(255);
  
  textSize(32);
  noStroke();
  fill(0);
  textAlign(CENTER);
  text("Running Walls", width/2, height/2-150);
  textSize(20);
  text("Place your hand inside the square", width/2, height/2+80);
  
  noFill();
  stroke(0);
  strokeWeight(5);
  rectMode(CENTER);
  rect(width/2, height/2, 100, 100);
  
  if (predictions.length > 0) {
    let handBox = predictions[0].boundingBox; 
    if (handBox.topLeft[0] > width/2 - 50 && handBox.topLeft[1] > height/2 - 50 && handBox.bottomRight[0] < width/2 +50 && handBox.bottomRight[1] < height/2 + 50) {
      showStartScreen = false;
    }
  }
}

function drawBox() {
  fill(50);
  rectMode(CORNER);
  
  switch (currentdirection) {
    case Directions.Top:
      rect(0, 0, width, boxsize);
      break;
    case Directions.Bottom:
      rect(0, height - boxsize, width, boxsize);
      break;
    case Directions.Left:
      rect(0, 0, boxsize, height);
      break;
    case Directions.Right:
      rect(width - boxsize, 0, boxsize, height);
      break;
  }
}

function nextDirection() {
  switch (currentdirection) {
    case Directions.Top:
      if (boxsize < 0) {
        currentdirection = Directions.Bottom;
      }
      else if (boxsize > height) {
        currentdirection = Directions.Left;
      }
      break;
    case Directions.Bottom:
      if (boxsize < 0) {
        currentdirection = Directions.Top;
      }
      else if (boxsize > height) {
        currentdirection = Directions.Right;
      }
      break;
    case Directions.Left:
      if (boxsize < 0) {
        currentdirection = Directions.Right;
      } 
      else if (boxsize > width) {
        currentdirection = Directions.Bottom;
      }
      break;
    case Directions.Right:
      if (boxsize < 0) {
        currentdirection = Directions.Left;
      } 
      else if (boxsize > width) {
        currentdirection = Directions.Top;
      }
      break;
  }
}

function isHandInView() {
  let handIsInView = false;

  if (predictions.length > 0) {
    let hand = predictions[0].landmarks; 
    let x = hand[0][0]; 
    let y = hand[0][1]; 

    switch (currentdirection) {
      case Directions.Top:
        handIsInView = (y > boxsize);
        break;
      case Directions.Bottom:
        handIsInView = (y < height - boxsize);
        break;
      case Directions.Left:
        handIsInView = (x > boxsize);
        break;
      case Directions.Right:
        handIsInView = (x < width - boxsize);
        break;
    }
  }

  return handIsInView;
}

function resizeBox() {
  let max = height;
  switch (currentdirection) {
    case Directions.Left:
    case Directions.Right:
      max = width;
      break;
  }
  
  let handIsInView = isHandInView();
  if (handIsInView) {
    boxsize -= 2;
  }
  else {
    boxsize += 2;
  }
  
  if (boxsize < 0 || boxsize > max) {
    nextDirection();
    boxsize = 0;
  }
}

function draw() {
  if (showStartScreen) {
    startScreen();
  }
  else {
    image(video, 0, 0, width, height);

    drawBox();
    resizeBox();
  }
  
  drawKeypoints();
}

function drawKeypoints() {
  for (let i = 0; i < predictions.length; i += 1) {
    const prediction = predictions[i];
    for (let j = 0; j < prediction.landmarks.length; j += 1) {
      const keypoint = prediction.landmarks[j];
      fill(0, 0, 0);
      noStroke();
      ellipse(keypoint[0], keypoint[1], 10, 10);
    }
  }
}
