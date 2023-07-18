let mic;
let vol = 0;
let f;  //Current Highes Frequence
let fft;
let audioRes = 2048; 
let date;
let isHigh = false;
let highPitch = 100;
 
let animals = []; 
let pics = []
let heart; 
let frog1;
let frog2;
let cat1;
let cat2;
let wal1;
let wal2;
let wal1S;
let wal2S; 
let duck1;
let duck2; 
let farmer;
let backg;
let isOver;

function preload() {
  heart = loadImage('./img/heart.png');
  frog1 = loadImage('./img/frog1.png');
  frog2 = loadImage('./img/frog2.png');
  cat1 = loadImage('./img/cat2.png');
  cat2 = loadImage('./img/cat1.png');
  wal1 = loadImage('./img/wal1.png'); 
  wal2 = loadImage('./img/wal2.png');
  wal1S = loadImage('./img/wal1Spiegel.png');
  wal2S = loadImage('./img/wal2Spiegel.png');
  duck1 = loadImage('./img/duck1.png');
  duck2 = loadImage('./img/duck2.png');
  backg = loadImage('./img/background.png');
  farmer = loadImage('./img/farmer.png');
}

function setup() {
  colorMode(HSB, 360, 100, 100)
  createCanvas(1080, 720);

  heart.resize(35, 0);
  backg.resize(1100, 0);
  farmer.resize(160, 0)

  date = Date.now();
  console.log(date);
  pixelDensity(1);
  fft = new p5.FFT(0.8, audioRes);
  mic = new p5.AudioIn();
  mic.start();
  fft.setInput(mic);
  //Animals
  animals.push(new Tier(width / 2 + 130, 220, 0.5, 176, true, frog1, frog2, 110));
  animals.push(new Wal(width / 2 + 60, 420, 0.3, 98, true, wal1, wal2, 190));
  animals.push(new Tier(width / 2 - 80, 100, 0.55, 137, false, cat1, cat2, 120));
  animals.push(new Tier(width / 2 - 120, 190, 0.4, 117, false, duck1, duck2, 120));

  gameOver();
}

function draw() {
  background(255);
  image(backg, 0, 0);

  image(farmer, 510, 135);
  noFill();
  stroke(0,100,100)
  // rect(0,0,width-2, height-2);
  let spectrum = fft.analyze();
  let freq = 0;
  let highestFrequ = 0;
  //console.log(spectrum);

  for (let i = 0; i < spectrum.length; i++) {
    let amp = spectrum[i];
    if (freq < amp) {
      freq = amp;
      highestFrequ = i;
    }
  }
  //Debug
  f = map(highestFrequ, 0, spectrum.length, 20, 20000);
  //console.log(f);
  //text(f, 200, 100);

  //Draw Animals 
  animals.forEach((a) => {
    if (!isOver) {
      a.update(f);
    }
    a.display(f);

    if (a.pos.x < 0 || a.pos.x > width) {
      gameOver();
    }
  })
}

function gameOver() {
  isOver = true;
  var modal = document.getElementById('modal-cover');
  modal.style.display = 'block';

  let hSButton = document.getElementById('hoheStimme');
  hSButton.addEventListener('click', () => {
    isOver = false;
    isHigh = true;
    modal.style.display = 'none';
    animals.forEach((a) => {
      a.reset();
    })
  });

  let tSButton = document.getElementById('tiefeStimme');
  tSButton.addEventListener('click', () => {
    isOver = false;
    isHigh = false;
    modal.style.display = 'none';
    animals.forEach((a) => {
      a.reset();
    })
  });
  
}