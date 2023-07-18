let secondsInMinute;
let currentSecond;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(1);
  
  secondsInMinute = 60;
  currentSecond = second();
}

function draw() {
  background(0);
  
  let w = width / 10;
  let h = height / 6;
  let fontSize = w / 2; // Set font size based on width
  
  textSize(fontSize);
  textAlign(CENTER, CENTER);
  textFont('Courier');
  
  for (let i = 1; i <= secondsInMinute; i++) {
    let x = ((i - 1) % 10) * w + w / 2;
    let y = floor((i - 1) / 10) * h + h / 2;
    
    if (i === currentSecond) {
      textSize(w); // Use larger font size for current second
    } else {
      textSize(fontSize); // Use smaller font size for other seconds
    }
    
    fill(255);
    text(nf(i, 2), x, y);
  }
  
  currentSecond++;
  if (currentSecond > secondsInMinute) {
    currentSecond = 1;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
