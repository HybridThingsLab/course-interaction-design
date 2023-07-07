let count = 0;
let s;
let pos;
var orbitron;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(1);
}

function draw() {
  background(0);
  textAlign(CENTER);
  stroke(255);
  fill(255);
  count++;

  textFont(orbitron);
  
  s = random(20, 60);
  pos = { x: random((width - 100)), y: random((height - 100)) };
  textSize(s);

  let textToDisplay;
  if (random() < 0.3) {
    text(numberToWords(count), pos.x, pos.y);
  } else {
    text(count, pos.x, pos.y);
  }
  
  if (count > 60) {
    count = 0;
  }
  
}

function preload() {
  orbitron = loadFont('Orbitron-VariableFont_wght.ttf');
}

function numberToWords(num) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty'];
  if (num === 0) {
    return 'zero';
  } else if (num < 10) {
    return ones[num];
  } else if (num < 20) {
    return 'eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(' ')[num-11];
  } else if (num < 100) {
    const ten = Math.floor(num/10);
    const one = num % 10;
    return `${tens[ten]} ${ones[one]}`.trim();
  } else {
    return num.toString();
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  frameRate(1);
  count = 0;
}