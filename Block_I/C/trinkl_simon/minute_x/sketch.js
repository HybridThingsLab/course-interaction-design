
let lineL = 4;

function setup() {
  frameRate(3);
  strokeWeight(2);
  createCanvas(800, 800);
  background('#F0B94B');
}

function draw() {
  
  let sec = second();
  lineL = map(sec, 0, 60, 4, 35);
  if (sec == 59) {
    background('#F0B94B');
  }

  noStroke();
  for (let i = 1; i < 19; i++) {
    fill(122, 173, 255, 4);
    let y = 40 + i * 40;
    drawLine(y);
  }
  if (sec > 20) {
    for (let i = 1; i < 19; i++) {
      fill(122, 173, 255, 4);
      let y = 50 + i * 40;
      drawLine(y);
    }
  }
  if (sec > 40) {
    for (let i = 1; i < 19; i++) {
      fill(122, 173, 255, 4);
      let y = 60 + i * 40;
      drawLine(y);
    }
  }
  if (sec > 50) {
    for (let i = 1; i < 19; i++) {
      fill(122, 173, 255, 4);
      let y = 30 + i * 40;
      drawLine(y);
    }
  }
  
}

function drawLine(y) {

  beginShape();
  for (let i = 0; i <= lineL; i++) {
    let yOffset = map(noise(i + y), 0, 1, -60, 0);

    vertex(50 + 20 * i, yOffset + y);
  }
  endShape();
}

