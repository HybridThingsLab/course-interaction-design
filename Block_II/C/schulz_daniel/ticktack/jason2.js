let video;
let poseNet;
let wristX = 0;
let wristY = 0;
let drumSound;
let snareSound;
let moonImage;
let galaxyImage;
let shipImage;
let planet1Image;
let interval;
let counter = 0;
let intensity = 0;
let countdownValue1 = 5;
let countdownValue2 = 15;
let countdownInterval1;
let countdownInterval2;
let showSecondCountdown = false;
let highScore= 0;


function preload() {
  moonImage = loadImage('Images/moon.png');
  planet1Image = loadImage('Images/planet1.png');
  moonbgImage = loadImage('Images/moonbg.png');
  planet1bgImage = loadImage('Images/planet1bg.png');
  shipImage = loadImage('Images/ship.png');
  galaxyImage = loadImage('Images/galaxy.jpg');
  drumSound = loadSound('Soundeffekte/drum.mp3');
  snareSound = loadSound('Soundeffekte/snare.mp3');
  
}

function setup() {
  createCanvas(1080, 720);
  video = createCapture(VIDEO);
  video.size(width, height);
  //video.hide();
  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotPoses);
  countdown(1, countdownValue1); 
}

let drumPlayed = false;
let snarePlayed = false;

function gotPoses(poses) {
  if (poses.length > 0) {
    let rX = poses[0].pose.keypoints[10].position.x;
    let rY = poses[0].pose.keypoints[10].position.y;
    wristX = lerp(wristX, rX, 0.5);
    wristY = lerp(wristY, rY, 0.5);

    let ellipseX = 200;
    let ellipseY = 200;
    let ellipseW = 400;
    let ellipseH = 400;

    // Überprüfen, ob das Handgelenk innerhalb der Ellipse liegt
    let d = dist(wristX, wristY, ellipseX, ellipseY);
    if (d < ellipseW / 2 && d < ellipseH / 2 && !drumPlayed) {
      drumSound.play();
      drumPlayed = true;
    } else if (d > ellipseW / 2 || d > ellipseH / 2) {
      drumPlayed = false; // Flag zurücksetzen
    }
  } else {
    drumPlayed = false; // Flag zurücksetzen
  }

  if (poses.length > 0) {
    let rX = poses[0].pose.keypoints[10].position.x;
    let rY = poses[0].pose.keypoints[10].position.y;
    wristX = lerp(wristX, rX, 0.5);
    wristY = lerp(wristY, rY, 0.5);

    let ellipse2X = 700;
    let ellipse2Y = 250;
    let ellipse2W = 250;
    let ellipse2H = 300;

    // Überprüfen, ob das Handgelenk innerhalb der Ellipse liegt
    let d = dist(wristX, wristY, ellipse2X, ellipse2Y);
    if (d < ellipse2W / 2 && d < ellipse2H / 2 && !snarePlayed) {
      snareSound.play();
      snarePlayed = true;
    } else if (d > ellipse2W / 2 || d > ellipse2H / 2) {
      snarePlayed = false; // Flag zurücksetzen
    }
  } else {
    snarePlayed = false; // Flag zurücksetzen
  }
}


function modelReady() {
  console.log('Modell bereit');
}

function draw() {
  background(0);

  push();
  image(video, 0, 0, 1080, 720);
  pop();
 
  image(galaxyImage, 0, 0, 1080, 720);
  image(moonbgImage, 0, 0, 400, 400);
  image(planet1bgImage, 450, -10, 620, 600);

  fill(255);
  textSize(20);
  textAlign(RIGHT, TOP);
  text("High Score: " + highScore, width - 20, 20);

  
  if (counter < 2) {
    push();
    blendMode(ADD);
    tint(255, intensity);
    image(moonImage, 0, 0, 400, 400);
    pop();
  } else {
    push();
    blendMode(ADD);
    tint(255, intensity);
    image(planet1Image, 450, -10, 620, 600);
  
    pop();
  }

  image(shipImage, wristX, wristY, 100, 100);
  
  if (countdownValue1 > 0) {
    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);
    text(countdownValue1, width / 2, height / 2);
  }
 
  if (showSecondCountdown && countdownValue2 > 0) {
    fill(255);
    textSize(50);
    textAlign(CENTER, CENTER);
    text(countdownValue2, width / 2, height / 2 + 50);
  }

   if(countdownInterval2 >=0){
    window.location.href="/index3.html";
  }
  

}


function lightUpImages() {
  // Die Intensität auf das Maximum erhöhen
  intensity = 50;

  // Nach 500 Millisekunden den Canvas neu zeichnen, um die Intensität zurückzusetzen
  setTimeout(resetIntensity, 500);

  if (wristX > 0 && wristX < 400 && wristY > 0 && wristY < 400 && counter === 0 ) {
    highScore++; // Increment the high score
  }
  if(wristX>450 && wristX<-10 && wristY>620 && wristY<600 && counter ===0){
    highScore++;
  }
}

function resetIntensity() {
  // Die Intensität auf das Minimum zurücksetzen
  intensity = 0;
  // Den Zähler erhöhen
  counter++;
  // Den Zähler nach 3 Durchläufen zurücksetzen
  if (counter === 3) {
    counter = 0;
  }
}

function countdown(id, seconds) {
  if (id === 1) {
    countdownValue1 = seconds;
    countdownInterval1 = setInterval(() => {
      countdownValue1--;

      if (countdownValue1 === 0) {
        clearInterval(countdownInterval1);
        showSecondCountdown = true; // Show 2
        countdown(2, countdownValue2); // start 2 countdown
        interval = setInterval(lightUpImages, 1000);
      }
    }, 1000);
  } else if (id === 2) {
    countdownValue2 = seconds;
    countdownInterval2 = setInterval(() => {
      countdownValue2--;

      if (countdownValue2 === 0) {
        clearInterval(countdownInterval2);
        // Handle countdown 2 finished
      }
    }, 1000);
  }

}