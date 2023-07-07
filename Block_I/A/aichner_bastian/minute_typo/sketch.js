let barPosition = 0;
let barWidth;
let currentRow = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(40);
  textAlign(CENTER, CENTER);
  noStroke();
  fill(0);
  barWidth = width / 10;
}

function draw() {
  background(0);
  let gridWidth = width / 10;
  let gridHeight = height / 6;
  let num = 1;
  
  // zeichne balken
  fill(255);
  rect(barPosition, currentRow * gridHeight, barWidth, gridHeight);
  // bewege balken
  barPosition += (gridWidth / 100)*1.8;
  if (barPosition > width) {
    barPosition = -barWidth;
    currentRow++;
    if (currentRow > 5) {
      currentRow = 0;
    }
  }
  
  // zeichne zahlen
  fill(0);
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 10; col++) {
      let x = col * gridWidth + gridWidth / 2;
      let y = row * gridHeight + gridHeight / 2;
      text(num, x, y);
      num++;
    }
  }
}