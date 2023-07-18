let video;
let poseNet;
let nose;
let counter = 0;
let right = false;
let left = false;
let prevRight = false;
let prevLeft = false;
let audioPlayer;
let startTime;
let elapsedTime = 0;
let isPaused = false;
let pause;
let play;
let covers = [];
let bop;
let timer;
let timerStart;
let estimatedTime;
let sounds = [];
let curSound;
let reverse;
let isReverse;
let songswitch = false;
let easterEggBops = 100;
let hasEasterEgg = true;

function preload() {
  play = loadImage("play.png");
  pause = loadImage("pause.png");
  covers.push(loadImage("gluebicep.jpg"));
  covers.push(loadImage("move.jpg"));
  bop = loadImage("yep.png");
  
  sounds.push(loadSound(
    "BICEP_X_NELLY_FURTADO_-_GLUE_X_SAY_IT_RIGHT_(SWITCH_DISCO_EDIT).mp3"
  ));
  sounds.push(loadSound(
    "moveit.mp3"
  ));

  sounds.forEach(element => {
    element.setVolume(0.4);
  });

  curSound = 0;

  reverse = loadImage("reverse.png");
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  video.hide();
  let poseNet = ml5.poseNet(video, modelReady);
  poseNet.on("pose", gotPoses);

  sounds[curSound].play();
  startTime = millis();
  timerStart = millis();
}

function gotPoses(poses) {
  if (poses.length > 0) {
    let pose = poses[0].pose;
    nose = pose.keypoints[0].position;
  }
}

function modelReady() {
  console.log("model loaded");
}

function draw() {
  image(video, 0, 0, width, height);
  image(covers[curSound], width / 2 - 50, height - 130, 100, 100);
  if (nose) {
    counterThing();
  }
  makeUI();
  estimatedTime = millis() - timerStart;
  yepControl();
  // Calculate the elapsed time
  elapsedTime = millis() - startTime;
  songControl();
  showSongState();
  // console.log(sound.currentTime() + ' ' + sound.duration());
  soundBar();
  fill(0);
  if(right)
  triangle(width/2 + 10, height/2 + 50, width/2 + 10, height/2 + 70, width/2 + 25, height/2 + 60);
  else
  triangle(width/2 - 10, height/2 + 50, width/2 - 10, height/2 + 70, width/2 - 25, height/2 + 60);
  // console.log(sounds[0]);
  if (songswitch){
    if(!sounds[curSound].isPlaying() && !isPaused)
      sounds[curSound].play();
  }

  if (hasEasterEgg && counter > easterEggBops && !songswitch){
    songswitch = true;
    sounds[curSound].stop();
    curSound = 1;
  }
}

function counterThing() {
  // right
  if (nose.x > width / 2 && right === false && prevLeft === true) {
    counter++;
    right = true;
    left = false;
    startTime = millis();
  
  }
  // left
  if (nose.x < width / 2 && left === false && prevRight === true) {
    counter++;
    left = true;
    right = false;
    startTime = millis();
  }
  prevRight = nose.x < width / 2;
  prevLeft = nose.x > width / 2;
}

function yepControl() {
  if (estimatedTime / 1000 > 10) {
    bop.filter(OPAQUE);
    noFill();
    noStroke();
    rect(230, 10, 180, 105);
  } else {
    fill(255, 95);
    noStroke();
    rect(230, 10, 180, 105, 5);
    image(bop, 220, 7, 200, 135);
  }
}

function makeUI() {
  // blue line
  stroke(0, 200, 200, 75);
  strokeWeight(5);
  line(width / 2, 60, width / 2, (height / 3) * 2);
  // Rahmen für das Cover
  strokeWeight(4);
  stroke(0);
  noFill();
  rect(width / 2 - 50, height - 130, 100, 100, 5);
}

function songControl() {
  if (elapsedTime / 1000 >= 1.5 && elapsedTime / 1000 <= 3) {
    sounds[curSound].pause();
    isPaused = true;
  } else {
    if (elapsedTime / 1000 > 3.1) {
      sounds[curSound].rate(-1);
      isReverse = true;
    } else {
      sounds[curSound].rate(1);
      isReverse = false;
    }

    if (!sounds[curSound].isPlaying()) sounds[curSound].play();
    isPaused = false;
  }
}

function showSongState() {
  fill(255, 95);
  noStroke();
  if (isPaused) {
    ellipse(width / 2 + 105, height - 80, 48, 48);
    image(pause, width / 2 + 80, height - 105, 50, 50);
    noFill();
    stroke(0);
    ellipse(width / 2 + 105, height - 80, 48, 48);
  } else {
    if (!isReverse) {
      ellipse(width / 2 + 105, height - 80, 48, 48);
      image(play, width / 2 + 80, height - 105, 50, 50);
      noFill();
      stroke(0);
      ellipse(width / 2 + 105, height - 80, 48, 48);
    }
    else {
      ellipse(width / 2 - 105, height - 80, 48, 48);
      image(reverse, 190, height - 105, 50, 50);
      noFill();
      stroke(0);
      ellipse(width / 2 - 105, height - 80, 48, 48);
    }
  }
}

function soundBar() {
  noStroke();
  const max = width / 2;
  const progress = sounds[curSound].currentTime() / sounds[curSound].duration();
  fill(123);
  rect(width / 2 - max / 2, height - 20, max, 7, 5);
  fill(255);
  rect(width / 2 - max / 2, height - 20, max * progress, 7, 5);
}
