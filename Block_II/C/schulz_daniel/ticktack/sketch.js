let startButton;
let instructionButton;
let backButton;
let instructionsVisible = false;
let acknowledgeVisible = false;
let pngImage;



function preload() {
  pngImage = loadImage("/bilder/logo.png");
}

function setup() {
  createCanvas(1080, 720);
  startButton = createButton('Start');
  startButton.position(width/2-30, height/2);
  startButton.mousePressed(startProgram);
  startButton.style('background-color', '#2c175c');
  startButton.style('color', 'white');
  startButton.style('border', 'none');
  startButton.style('font-size', '24px');
  
  
  instructionButton = createButton('Anleitung');
  instructionButton.position(width/2-50 , height/2 + 80);
  instructionButton.mousePressed(showInstructions);
  instructionButton.style('background-color', '#2c175c');
  instructionButton.style('color', 'white');
  instructionButton.style('border', 'none');
  instructionButton.style('font-size', '24px');
  
  
  backButton = createButton('Zurück');
  backButton.style('background-color', '#2c175c');
  backButton.style('color', 'white');
  backButton.style('border', 'none');
  backButton.style('font-size', '24px');
  backButton.position(width/2-40, height/2 + 160);
  backButton.hide();
  backButton.mousePressed(hideInstructions);

  video = createVideo('/video/bg.mp4');
  video.loop();
  video.hide();
  
}
  

let scaleFactor = 0.5;
let grow = true;


function draw() {
 
  background(0);  

  image(video, 0, 0, width, height);

  let pngWidth = pngImage.width * scaleFactor;
  let pngHeight = pngImage.height * scaleFactor;
  let pngX = (width - pngWidth) / 2;
  let pngY = (400 - pngHeight) / 2;

  if (!instructionsVisible) {
    image(pngImage, pngX, pngY, pngWidth, pngHeight);
  }

  // update scaleFactor for next frame
  if (grow) {
    scaleFactor += 0.0002;
    if (scaleFactor > 0.5) {
      grow = false;
    }
  } else {
    scaleFactor -= 0.02;
    if (scaleFactor < 0.5) {
      grow = true;
    }
  }


  if (instructionsVisible) {
    background(0);
    image(video, 0, 0, width, height);
    noStroke();
    fill(0,0,0,220);
    rect(250,270,600,200);
    textSize(25);
    fill(255);
    textAlign(CENTER);
    
    text("Anleitung:\n1. Beweg deine Hand in Richtung der Planeten.\n2. Treffe die aufleuchtenden Planeten. \n So bekommst du Punkte! \n3. Habe Spaß!", width/2, height/2-50);
    
    if (acknowledgeVisible) {
      backButton.hide();
      instructionButton.hide();
      
    } else {
      backButton.show();
      startButton.hide();
      instructionButton.hide();
    }
  } else {
    backButton.hide();
    instructionButton.show();
    startButton.show();
    
  }
}


function startProgram() {
  window.location.href="/index2.html";
}



function showInstructions() {
  instructionsVisible = true;
  acknowledgeVisible = false;
  
}

function hideInstructions() {
  instructionsVisible = false;
  acknowledgeVisible = true;
  understandButton.hide();
  
}

