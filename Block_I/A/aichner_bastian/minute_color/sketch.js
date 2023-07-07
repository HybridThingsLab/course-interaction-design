let cols = 8; 
let rows = 8; 
let tileSize; 
let timer = 0; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  tileSize = width / cols;
}

function draw() {
  background(220);

  // Schachbrett zeichnen
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let xPos = x * tileSize;
      let yPos = y * tileSize;
      let isWhite = (x + y) % 2 === 0; // üverprüfen ob das Feld schwarz                                             oder weiß ist

      // Farbe des Feldes basierend auf Timer
      let colorVal = map(timer, 0, 60*60, 255, 0); // 60 Sekunden Timer

      // Farbe des ändern
      if (isWhite) {
        fill(255, colorVal);
      } else {
        fill(0, colorVal);
      }

      // feld zeichnen
      rect(xPos, yPos, tileSize, tileSize);

      // striche zeichnen
      stroke(220);
      strokeWeight(2);
      line(xPos, yPos, xPos + tileSize, yPos);
      line(xPos + tileSize, yPos, xPos + tileSize, yPos + tileSize);
      line(xPos + tileSize, yPos + tileSize, xPos, yPos + tileSize);
      line(xPos, yPos + tileSize, xPos, yPos);
    }
  }

  timer++; // Timer erhöhen

  // Timer nicht zurücksetzen
  if (timer >= 60*60) {
    noLoop();
  }
}
