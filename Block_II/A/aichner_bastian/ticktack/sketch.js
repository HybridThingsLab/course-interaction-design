let initialTime = 15;
let timeRemaining = initialTime;
let gameStatus = "start";
let targetNumber;
let keypadSize = 60; // Größe der einzelnen Tasten im Numpad
let keypadMargin = 20; // Abstand zwischen den Tasten im Numpad
let correctCount = 0; // Anzahl der richtig getippten Ziffern

function setup() {
  createCanvas(windowWidth, windowHeight);
  targetNumber = floor(random(10)); // Zufällige Zahl zwischen 0 und 9
}

function draw() {
  background(220);
  
  if (gameStatus === "start") {
    // Zeige den Startbildschirm an
    fill(0); // Schwarze Farbe für den Text
    textSize(32);
    textAlign(CENTER, CENTER);
    text("Type in as many digits as possible. Click to Start", width / 2, height / 2);
  } else if (gameStatus === "running") {
    // Zeichne den Fortschrittsbalken
    let progressBarWidth = map(timeRemaining, 0, initialTime, 0, width);
    fill(255, 0, 0); // Rote Farbe
    rect(0, 0, progressBarWidth, 20);
    
    // Zeichne das Numpad
    let startX = width / 2 - (1.5 * keypadSize + keypadMargin); // X-Startposition des Numpad
    let startY = height / 2 - (keypadSize + keypadMargin); // Y-Startposition des Numpad
    let rowCount = 4;
    let colCount = 3;
    for (let i = 1; i < 10; i++) {
      let row = floor((i - 1) / colCount);
      let col = (i - 1) % colCount;
      let xPos = startX + col * (keypadSize + keypadMargin);
      let yPos = startY + row * (keypadSize + keypadMargin);
      
      // Überprüfe, ob die aktuelle Zahl die Zielzahl ist
      if (i === targetNumber) {
        if (keyIsPressed && key === i.toString()) {
          // Richtige Zahl eingegeben
          targetNumber = floor(random(10)); // Neue Zufallszahl generieren
          fill(0, 255, 0); // Grüne Hintergrundfarbe für kurze Zeit
          correctCount++;
        } else {
          fill(255, 255, 0); // Gelbe Hintergrundfarbe für die Zielzahl
        }
      } else {
        fill(255); // Weiße Hintergrundfarbe für die anderen Zahlen
      }
      
      rect(xPos, yPos, keypadSize, keypadSize);
      
      // Zeichne die Zahlen
      fill(0); // Schwarze Farbe für die Zahlen
      textSize(24);
      textAlign(CENTER, CENTER);
      text(i, xPos + keypadSize / 2, yPos + keypadSize / 2);
    }
    
    // Zeichne die 0
    let zeroRow = floor(9 / colCount);
    let zeroCol = 1;
    let zeroXPos = startX + zeroCol * (keypadSize + keypadMargin);
    let zeroYPos = startY + zeroRow * (keypadSize + keypadMargin);

// Überprüfe, ob die 0 die Zielzahl ist
if (0 === targetNumber) {
  if (keyIsPressed && key === '0') {
    // Richtige Zahl eingegeben
    targetNumber = floor(random(10)); // Neue Zufallszahl generieren
    fill(0, 255, 0); // Grüne Hintergrundfarbe für kurze Zeit
    correctCount++;
  } else {
    fill(255, 255, 0); // Gelbe Hintergrundfarbe für die Zielzahl
  }
} else {
  fill(255); // Weiße Hintergrundfarbe für die anderen Zahlen
}

rect(zeroXPos, zeroYPos, keypadSize, keypadSize);

// Zeichne die 0
fill(0); // Schwarze Farbe für die Zahl
textSize(24);
textAlign(CENTER, CENTER);
text(0, zeroXPos + keypadSize / 2, zeroYPos + keypadSize / 2);
}

// Aktualisiere die verbleibende Zeit
if (gameStatus === "running" && timeRemaining > 0) {
  if (frameCount % 60 === 0) {
    timeRemaining--;
  }
} else if (gameStatus === "gameOver") {
  // Zeige Game Over Text und Ergebnis an
  fill(255, 0, 0); // Rote Farbe
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Game Over", width / 2, height / 2 - 50);
  textSize(24);
  text(`Congratulations! You managed to type ${correctCount} digits. You almost defused the bomb!`, width / 2, height / 2 + 50);
}
}

function mouseClicked() {
  if (gameStatus === "start") {
    gameStatus = "running";
  }
}

function keyPressed() {
  if (gameStatus === "running") {
    let enteredNumber = parseInt(key);
    if (!isNaN(enteredNumber)) {
      if (enteredNumber === targetNumber) {
        // Richtige Zahl eingegeben
        targetNumber = floor(random(10)); // Neue Zufallszahl generieren
        fill(0, 255, 0); // Grüne Hintergrundfarbe für kurze Zeit
        correctCount++;
        
        // Timer um 0,2 Sekunden erhöhen
        timeRemaining += 0.2;
        // Begrenze den Timer auf den ursprünglichen Wert
        timeRemaining = min(timeRemaining, initialTime);
      } else {
        // Falsche Zahl eingegeben, eine Sekunde abziehen
        if (timeRemaining > 0) {
          timeRemaining--;
          fill(255, 0, 0); // Rote Hintergrundfarbe für kurze Zeit
        }
      }
    }
  }

  // Zurücksetzen der Hintergrundfarbe nach kurzer Zeit
  setTimeout(() => {
    fill(255);
  }, 500); // 500 Millisekunden (0,5 Sekunden)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// Funktion, um das Spiel zurückzusetzen
function resetGame() {
timeRemaining = initialTime;
gameStatus = "start";
targetNumber = floor(random(10));
correctCount = 0;
}


function keyPressed() {
if (gameStatus === "running") {
let enteredNumber = parseInt(key);
if (!isNaN(enteredNumber)) {
if (enteredNumber === targetNumber) {
// Richtige Zahl eingegeben
targetNumber = floor(random(10)); // Neue Zufallszahl generieren
fill(0, 255, 0); // Grüne Hintergrundfarbe für kurze Zeit
correctCount++;
      // Timer um 0,2 Sekunden erhöhen
    timeRemaining += 0.2;
    // Begrenze den Timer auf den ursprünglichen Wert
    timeRemaining = min(timeRemaining, initialTime);
  } else {
    // Falsche Zahl eingegeben, eine Sekunde abziehen
    if (timeRemaining > 0) {
      timeRemaining--;
      fill(255, 0, 0); // Rote Hintergrundfarbe für kurze Zeit
    } else {
      // Zeit abgelaufen, Spiel zurücksetzen
      gameStatus = "gameOver";
    }
  }
}
}

// Zurücksetzen der Hintergrundfarbe nach kurzer Zeit
setTimeout(() => {
fill(255);
}, 500); // 500 Millisekunden (0,5 Sekunden)
}


// Leertaste zum zurücksetzen
function resetGame() {
  timeRemaining = initialTime;
  gameStatus = "start";
  targetNumber = floor(random(10));
  correctCount = 0;
}

// Reset Game
function keyTyped() {
  if (key === ' ') {
    resetGame();
  }
}


function windowResized() {
resizeCanvas(windowWidth, windowHeight);
}
