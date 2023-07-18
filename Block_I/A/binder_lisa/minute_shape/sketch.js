let maxSize, minSize, currentSize, currentColor;
let numSquares, squaresLeft;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  frameRate(1);
  
  maxSize = width * 0.9;
  minSize = width * 0.1;
  currentSize = maxSize;
  currentColor = 255;
  
  numSquares = 0;
  squaresLeft = 30;
}

function draw() {
  if (squaresLeft > 0) {
    // Draw a square
    fill(currentColor);
    rectMode(CENTER);
    rect(width/2, height/2, currentSize, currentSize);
    
    // Update variables for next square
    if (currentColor === 255) {
      currentColor = 0;
    } else {
      currentColor = 255;
    }
    
    currentSize = currentSize - (maxSize - minSize) / 29; // 29 instead of 30 to avoid rounding errors
    squaresLeft--;
    numSquares++;
  } else if (numSquares < 60) {
    // Draw a square with alternating color
    if (currentColor === 255) {
      currentColor = 0;
    } else {
      currentColor = 255;
    }
    
    fill(currentColor);
    rectMode(CENTER);
    rect(width/2, height/2, currentSize, currentSize);
    
    // Update variables for next square
    currentSize = currentSize + (maxSize - minSize) / 29; // 29 instead of 30 to avoid rounding errors
    numSquares++;
  } else {
    // Restart the program
    numSquares = 0;
    squaresLeft = 30;
    currentSize = maxSize;
    currentColor = 255;
    background(0);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
