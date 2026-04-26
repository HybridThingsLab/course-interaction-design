// Tone.js Player — loads and routes audio to the speakers
let player;
let started = false;
let barWidth = 32;
let db_full_volume = 0; // full volume in dB (decibel), needed to work with tone.js, which uses a logarithmic scale for volume control
let db_quiet = -40; // volume off in dB (decibel), needed to work with tone.js, which uses a logarithmic scale for volume control

function setup() {
  createCanvas(600, 600);

  // create a looping audio player
  player = new Tone.Player({
    url: 'assets/piano.mp3',
    loop: true,
  }).toDestination(); // connect to speakers
}

function draw() {
  background(0);

  // map mouseY to volume in dB
  let db = map(mouseY, 0, height, db_full_volume, db_quiet);
  db = constrain(db, db_quiet, db_full_volume); // just to be sure    

  if (started) {
    player.volume.value = db; // just if player has started, otherwise it will throw an error because the AudioContext is not running yet
  }
  
  // volume bar: height maps from 0 dB (full height) to -40 dB (zero height)
  let barHeight = map(db, db_quiet, db_full_volume, 0, height);
  fill(255);
  noStroke();
  rect(width / 2 - barWidth / 2, height - barHeight, barWidth, barHeight);

  // show hint until audio starts
  fill(255);
  noStroke();
  textSize(12);
  text('press to start audio', 32, 32);
}

function mousePressed() {
  // browsers require a user gesture before playing audio
  // Tone.start() resumes the AudioContext, then start the player
  Tone.start().then(() => {
    if (player.loaded) {
      if(!started){
        player.start(); // only start once
      }
      started = true;
    }
  });
}
