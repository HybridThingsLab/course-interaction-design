let faceapi;
let detections = [];
let video;
let canvas;
let counter = 0;
let pointsp1 = 60;
let pointsp2 = 60;
let bildCounter = 1;
let picker = 0;
let variante = 0;

function preload() {
  bild1 = loadImage("bild1.png");
  bild2 = loadImage("bild2.png");
  bild3 = loadImage("bild3.png");
  bild4 = loadImage("bild4.png");
  bild5 = loadImage("bild5.png");
  bild6 = loadImage("bild6.png");
  bild7 = loadImage("bild7.png");
  bild8 = loadImage("bild8.png");
}

function setup() {
  canvas = createCanvas(800, 600);
  canvas.id("canvas");

  video = createCapture(VIDEO);// Create the video
  video.id("video");
  video.size(0, 0);

  const faceOptions = {
    withLandmarks: true,
    withDescriptors: true,
    minConfidence: 0.5
  };

  //Initialize the model
  faceapi = ml5.faceApi(video, faceOptions, faceReady);
}

function faceReady() {
  faceapi.detect(gotFaces);// Start detecting faces
  draw();
}

function draw() {
  if (counter <= 100) {
    if (frameCount % 20 == 0) {
      bildCounter += 2;
    }
    if (bildCounter == 1) {
      image(bild1, 0, 0, 800, 600);
    }
    if (bildCounter == 2) {
      image(bild2, 0, 0, 800, 600);
    }
    if (bildCounter == 3) {
      image(bild3, 0, 0, 800, 600);
    }
    if (bildCounter == 4) {
      image(bild4, 0, 0, 800, 600);
    }
    if (bildCounter == 5) {
      image(bild5, 0, 0, 800, 600);
    }
    if (bildCounter == 6) {
      image(bild6, 0, 0, 800, 600);
    }
    if (bildCounter == 7) {
      image(bild7, 0, 0, 800, 600);
    }
    if (bildCounter == 8) {
      image(bild8, 0, 0, 800, 600);
    }
    if (bildCounter > 8) {
      bildCounter = 1;
    }
    textAlign(CENTER);
    textSize(80);
    fill(255);
    text("HeadShot", width / 2, 120);

    //Kreise links
    fill(255, 0, 0);
    ellipse(150, 90, 30);
    fill(0, 255, 0);
    ellipse(150, 140, 30);
    fill(0, 0, 255);
    ellipse(150, 190, 30);
    fill(255, 255, 0);
    ellipse(150, 240, 30);
    fill(255, 0, 0);
    ellipse(150, 290, 30);
    fill(0, 255, 0);
    ellipse(150, 340, 30);
    fill(0, 0, 255);
    ellipse(150, 390, 30);
    fill(255, 255, 0);
    ellipse(150, 440, 30);
    fill(255, 0, 0);
    ellipse(150, 490, 30);
    fill(0, 255, 0);
    ellipse(150, 540, 30);

    //Kreise rechts
    fill(0, 255, 0);
    ellipse(650, 90, 30);
    fill(0, 0, 255);
    ellipse(650, 140, 30);
    fill(255, 255, 0);
    ellipse(650, 190, 30);
    fill(255, 0, 0);
    ellipse(650, 240, 30);
    fill(0, 255, 0);
    ellipse(650, 290, 30);
    fill(0, 0, 255);
    ellipse(650, 340, 30);
    fill(255, 255, 0);
    ellipse(650, 390, 30);
    fill(255, 0, 0);
    ellipse(650, 440, 30);
    fill(255, 255, 0);
    ellipse(650, 490, 30);
    fill(255, 0, 0);
    ellipse(650, 540, 30);

    //Kreise unten
    fill(255, 255, 0);
    ellipse(600, 540, 30);
    fill(255, 0, 0);
    ellipse(550, 540, 30);
    fill(0, 255, 0);
    ellipse(500, 540, 30);
    fill(0, 0, 255);
    ellipse(450, 540, 30);
    fill(255, 255, 0);
    ellipse(400, 540, 30);
    fill(255, 0, 0);
    ellipse(350, 540, 30);
    fill(0, 255, 0);
    ellipse(300, 540, 30);
    fill(0, 0, 255);
    ellipse(250, 540, 30);
    fill(255, 255, 0);
    ellipse(200, 540, 30);

    rectMode(CENTER);
    stroke(255);
    strokeWeight(3);

    noFill();
    rect(width / 2 - 12, height / 2 + 195, 200, 30, 5);
    fill(255);
    rect(width / 2 - 12, height / 2 + 195, counter * 2, 30, 5);
    counter++;

    fill(0);
    stroke(255);
    strokeWeight(2);
    textAlign(CENTER);
    textSize(20);
    text("Loading...", width / 2, height / 2 + 201);
  } else if (detections.length >= 0) {
    clear();

    fill(255);
    rect(width / 2, height / 2, 800, 600);
    fill(0);
    rect(width / 2, height / 2, width, height - height / 4);

    drawLandmarks(detections);

    stroke(255);
    strokeWeight(5);
    line(width / 2, height / 4 - 40, width / 2, height - height / 4 + 40);

    noStroke();

    fill(255, 0, 0);
    rectMode(CENTER);
    rect(200, 380, 90, 70, 20);
    rect(610, 220, 90, 70, 20);

    fill(0, 255, 0);
    rectMode(CENTER);
    rect(200, 220, 90, 70, 20);
    rect(width - width / 3, 300, 70, 90, 20);

    fill(0, 0, 255);
    rectMode(CENTER);
    rect(120, 300, 70, 90, 20);
    rect(690, 300, 70, 90, 20);

    fill(255, 255, 0);
    rectMode(CENTER);
    rect(2 * width / 6 + 15, 300, 70, 90, 20);
    rect(610, 380, 90, 70, 20);

    fill(0);
    textAlign(LEFT);
    text("Your Score: " + pointsp1, 10, 30);
    text("You are the Player sitting right.", 10, 50);
    textAlign(RIGHT);
    text("Your Score: " + pointsp2, 790, 30);
    text("You are the Player sitting left.", 790, 50);

    for (f = 0; f < detections.length; f++) {
      let nose = detections[f].parts.nose;
      let noseTop = nose[2];
      noStroke();

      if (variante == 0) {
        picker = 1;
      }
      if (variante == 1) {
        picker = 2;
      }
      if (variante == 2) {
        picker = 3;
      }
      if (variante == 3) {
        picker = 0;
      }
      
      if (picker == 0) {
        fill(255, 0, 0);
        ellipse(noseTop.x, noseTop.y, 20, 20);
      } else if (picker == 1) {
        fill(0, 255, 0);
        ellipse(noseTop.x, noseTop.y, 20, 20);
      } else if (picker == 2) {
        fill(0, 0, 255);
        ellipse(noseTop.x, noseTop.y, 20, 20);
      } else if (picker == 3) {
        fill(255, 255, 0);
        ellipse(noseTop.x, noseTop.y, 20, 20);
      }

      //linker Spieler
      if (noseTop.x + 10 <= width / 2) {
        //links
        if (noseTop.x + 10 <= 155 && noseTop.x + 10 >= 85 && noseTop.y + 10 <= 345 && noseTop.y + 10 >= 255 && picker == 2) {
          //Sekunden vom Gegenspieler
          pointsp1 += 5 / 10;
          pointsp2 -= 5 / 10;
          //wähler auf neues ereignis
          variante = 0;
        }
        //rechts
        if (noseTop.x + 10 <= 2 * width / 6 + 50 && noseTop.x + 10 >= 2 * width / 6 - 20 && noseTop.y + 10 <= 345 && noseTop.y + 10 >= 255 && picker == 3) {
          //Sekunden vom Gegenspieler
          pointsp1 += 5 / 10;
          pointsp2 -= 5 / 10;
          //wähler auf neues ereignis
          variante = 1;
        }
        //oben
        if (noseTop.x + 10 <= 245 && noseTop.x + 10 >= 165 && noseTop.y + 10 <= 255 && noseTop.y + 10 >= 185 && picker == 1) {
          //Sekunden vom Gegenspieler
          pointsp1 += 5 / 10;
          pointsp2 -= 5 / 10;
          //wähler auf neues ereignis
          variante = 3;
        }
        //unten
        if (noseTop.x + 10 <= 245 && noseTop.x + 10 >= 155 && noseTop.y + 10 <= 415 && noseTop.y + 10 >= 345 && picker == 0) {
          //Sekunden vom Gegenspieler
          pointsp1 += 5 / 10;
          pointsp2 -= 5 / 10;
          //wähler auf neues ereignis
          variante = 2;
        }
      }

      //rechter Spieler
      if (noseTop.x + 10 >= width / 2) {
        //links
        if (noseTop.x + 10 <= width - width / 3 + 35 && noseTop.x + 10 >= width - width / 3 - 35 && noseTop.y + 10 <= 345 && noseTop.y + 10 >= 255 && picker == 1) {
          //Sekunden vom Gegenspieler
          pointsp1 -= 5 / 10;
          pointsp2 += 5 / 10;
          //wähler auf neues ereignis
          variante = 3;
        }
        //rechts
        if (noseTop.x + 10 <= 727 && noseTop.x + 10 >= 655 && noseTop.y + 10 <= 345 && noseTop.y >= 255 && picker == 2) {
          //Sekunden vom Gegenspieler
          pointsp1 -= 5 / 10;
          pointsp2 += 5 / 10;
          //wähler auf neues ereignis
          variante = 0;
        }
        //oben
        if (noseTop.x + 10 <= 655 && noseTop.x + 10 >= 565 && noseTop.y + 10 <= 255 && noseTop.y + 10 >= 185 && picker == 0) {
          //Sekunden vom Gegenspieler
          pointsp1 -= 5 / 10;
          pointsp2 += 5 / 10;
          //wähler auf neues ereignis
          variante = 2;
        }
        //unten
        if (noseTop.x + 10 <= 655 && noseTop.x + 10 >= 565 && noseTop.y + 10 <= 415 && noseTop.y + 10 >= 345 && picker == 3) {
          //Sekunden vom Gegenspieler
          pointsp1 -= 5 / 10;
          pointsp2 += 5 / 10;
          //wähler auf neues ereignis
          variante = 1;
        }
      }
    }
    if (pointsp1 <= 0) {
      background(0);
      fill(255, 0, 0);
      textAlign(CENTER);
      textSize(50);
      text("GAME OVER", width / 2, height / 2);
      textSize(20);
      text("Player Left lost!", width / 2, height / 2 + 35);
      textSize(12);
      text("Press 'command + r' or 'strg + r' to restart", width / 2, height / 2 + 70);
    }
    if (pointsp2 <= 0) {
      background(0);
      fill(255, 0, 0);
      textAlign(CENTER);
      textSize(50);
      text("GAME OVER", width / 2, height / 2);
      textSize(20);
      text("Player Right lost!", width / 2, height / 2 + 35);
      textSize(12);
      text("Press 'command + r' or 'strg + r' to restart", width / 2, height / 2 + 70);
    }
  }
} 

function drawLandmarks(detections) {
  if (detections.length > 0 && detections.length <= 2) {//If at least 1 face is detected
    for (f = 0; f < detections.length; f++) {
      let points = detections[f].landmarks.positions;
      for (let i = 0; i < points.length; i++) {
        stroke(44, 169, 225);
        strokeWeight(3);
        point(points[i]._x, points[i]._y);
      }
    }
  }
}

// Got faces
function gotFaces(error, result) {
  if (error) {
    console.log(error);
    return;
  }

  detections = result;　//Now all the data in this detections
  // console.log(detections);

  clear();//Draw transparent background
  drawLandmarks(detections);//// Draw all the face points

  faceapi.detect(gotFaces);// Call the function again at here
  draw();
}