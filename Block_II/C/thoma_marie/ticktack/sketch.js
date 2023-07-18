let video;  // Webcam-Eingang
let model;  // Gesichtslandmarken-Machine-Learning-Modell
let face;   // Erkanntes Gesicht
let score = 0;
let img; // Das PNG-Bild
let img2;
let img5;
let img6;
let img7;
let hearts = 3;
let objList = []; // Liste der fallenden Objekte

function preload() {
  img = loadImage('images/erdbeere.png');
  img2 = loadImage('images/erdbeerenkorb.png');
  img5 = loadImage('images/herz1.png');
  img6 = loadImage('images/herz2.png');
  img7 = loadImage('images/herz3.png');
  img4 = loadImage('images/herzleer.png');
}

async function setup() {
  await tf.ready();

  createCanvas(640, 480);
  
  video = createCapture(VIDEO);
  video.hide();

  loadFaceModel();
}

async function loadFaceModel() {
  model = await faceLandmarksDetection.load(
    faceLandmarksDetection.SupportedPackages.mediapipeFacemesh,
    { maxFaces: 1 }
  );
}

function draw() {
  
  if (video.loadedmetadata && model !== undefined) {
    getFace();
  }


  if (face !== undefined) {
    push();
    translate(width, 0);
    scale(-1, 1);
    image(video, 0, 0, width, height);
    pop();
    
    



    if (hearts >= 1) {
      image(img5, 120, 10, img.width / 13, img.height / 13);
    } else {
      image(img4, 120, 10, img.width / 13, img.height / 13);
    }
    if (hearts >= 2) {
      image(img6, 65, 10, img.width / 13, img.height / 13);
    } else {
      image(img4, 65, 10, img.width / 13, img.height / 13);
    }
    if (hearts >= 3) {
      
      image(img7, 10, 10, img.width / 13, img.height / 13);
    } else {
      image(img4, 10, 10, img.width / 13, img.height / 13);
    }
    
    
    
   if (hearts <= 0) {
    
    goToGameOver();
    return; // Beende die Funktion, um weiteres Zeichnen zu verhindern
  }

    image(img2, 480, 322, img.width / 3.2, img.height / 3.2);
    noStroke();
    fill(255);

    textFont('Georgia');
    textSize(23);
    text('Score', 535, 455);

    fill(255);
    noStroke();
    for (let pt of face.scaledMesh) {
      pt = scalePoint(pt);
      pt.x = width - pt.x;
      fill(255, 0);
      circle(pt.x, pt.y, 3);
    }

    let mouthPoints = [0, 267, 269, 270, 409, 291, 375, 321, 405, 314, 17, 84, 181, 91, 146, 61, 185, 40, 39, 37, 0];
    let mouth = [];
    for (let ptIndex of mouthPoints) {
      let pt = face.scaledMesh[ptIndex];
      pt = scalePoint(pt);
      pt.x = width - pt.x;
      mouth.push(pt);
    }

    fill(230, 57, 80, 100);
    noStroke();
    beginShape();
    for (let pt of mouth) {
      vertex(pt.x, pt.y);
    }
    endShape(CLOSE);

    if (frameCount % 60 == 0) {
      objList.push(new FallingObj(random(120, 520), 0));
    }

    for (let i = objList.length - 1; i >= 0; i--) {
      objList[i].update();
      objList[i].display();

      let collided = false;
      for (let pt of mouth) {
        let d = dist(pt.x, pt.y, objList[i].x, objList[i].y);
        if (d < objList[i].width / 2) {
          collided = true;
          break;
        }
      }

      if (collided) {
        objList.splice(i, 1);
        score++;
      } else if (objList[i].isOffScreen()) {
        objList.splice(i, 1);
        if (hearts > 0) {
          hearts--;
          if (hearts === 0) {
            img5 = img4;
          } else if (hearts === 1) {
            img6 = img4;
          } else if (hearts === 2) {
            img7 = img4;
          }
        }
      }
    }
  }

  fill(255);
  textSize(23);
  text(`${score}`, 552, 433);


}


function goToGameOver() {
   window.location.href = "index3.html";
}



function scalePoint(pt) {
  let x = map(pt[0], 0, video.width, 0, width);
  let y = map(pt[1], 0, video.height, 0, height);
  return createVector(x, y);
}

async function getFace() {
  const predictions = await model.estimateFaces({
    input: document.querySelector('video')
  });
  if (predictions.length === 2) {
    face = undefined;
  } else {
    face = predictions[0];
  }
}

class FallingObj {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 70;
    this.height = 70;
    this.speed = 10;
  }

  update() {
    this.y += this.speed;
  }

  isOffScreen() {
    return this.y - this.height / 2 > height;
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(frameCount * 0.05);
    imageMode(CENTER);
    image(img, 0, 0, this.width, this.height);
    pop();
  }
}


