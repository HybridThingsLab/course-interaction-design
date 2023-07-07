let squares = [];
let beatInterval;
let score = 0;
let squareSize;
let squareSpacing;
let middleLineX;
let gameStarted = false;
let gameEnded = false;
let gameStartTime;
let showScoreScreen = false;

function setup() {
  createCanvas(windowWidth, windowHeight); //für responsive
  
  squareSize = windowHeight * 0.05;
  squareSpacing = squareSize * 2;

  middleLineX = width / 2;

  // wann fliegen die Vierecke rein in welchem Rythmus
  beatInterval = setInterval(addSquare, 1000); //Jede Sekunde n neues Viereck
}

function draw() {
  background(220);

  if (!gameStarted) {
    showStartScreen();
  } else if (!gameEnded) {
    // Mittellinie malen
    stroke(0);
    line(middleLineX, 0, middleLineX, height); //gleich responisve

    // Aktualisieren und zeichnen von Vierecke
    for (let i = squares.length - 1; i >= 0; i--) {
      squares[i].update();
      squares[i].display();

      // Überprüfe, ob das Viereck den Bildschirmrand erreicht hat
      if (squares[i].reachedEdge()) {
        squares.splice(i, 1); // Entferne das Viereck dann 
      }
    }

    // Aktueller Punktestand
    fill(0);
    textSize(windowWidth * 0.03);
    textAlign(LEFT, BOTTOM);
    text("Score: " + score, windowWidth * 0.02, windowHeight - windowWidth * 0.02); //sofort responsive machen und nicht erst danach!! danach funktioniert wieder nämlich nix lol

    // Überprüfe, ob das Spielende erreicht wurde (30 Sekunden)
    if (millis() - gameStartTime >= 30000) {
      gameEnded = true;
      showScoreScreen = true;
    }
  } else if (showScoreScreen) {
    showEndScreen();
  }
}

function addSquare() {
  if (squares.length < 2) {
    const yPos = random([0, height - squareSize]); // Zufällige Position (oben oder unten)
    squares.push(new Square(yPos));
  }
}

function keyPressed() {
  if (!gameStarted) {
    if (key === " ") {
      gameStarted = true;
      gameStartTime = millis();
    }
  } else if (!gameEnded) {
    // Überprüfe, ob die Leertaste gedrückt wurde
    if (key === " ") {
      // Überprüfe, ob der Spieler ein Viereck berührt hat
      for (let i = squares.length - 1; i >= 0; i--) {
        if (squares[i].reachedMiddleLine()) {
          squares[i].pressed = true;
          score += 1; // Erhöhe den Punktestand
        }
      }
    }
  }
}

function showStartScreen() { //der Anfangsscreen, die Spielanleitung
    background(0);
  fill(255);
  textSize(windowWidth * 0.08);
  textAlign(CENTER, CENTER);
  textSize(windowWidth*0.006)
  textSize(windowWidth * 0.019);
  text("Du hast 30 Sekunden Zeit, um so viele Vierecke zu fangen wie nur möglich. Drücke Leertaste um zu starten.", width / 2, height / 2 + windowHeight * 0.2);}

function showEndScreen() { //Endscreen, Scoreboard
  background(0);
  fill(255);
  textSize(windowWidth * 0.08);
  textAlign(CENTER, CENTER);
  text("Game Over\nScore: " + score, width / 2, height / 2);
  textSize(windowWidth * 0.04);
  text("Lade die Seite neu, um erneut zu spielen", width / 2, height / 2 + windowHeight * 0.2);
}

class Square {
  constructor() {
    this.x = 0;
    this.y = random(height - squareSize); // Zufällige y-Position
    this.side = squareSize;
    this.pressed = false;
    this.speed = random(5, 10); // Zufällige Geschwindigkeit des Vierecks
  }

  update() {
    // Bewege das Viereck von links nach rechts
    this.x += this.speed;
  }

  display() {
    // Zeichne das Viereck
    stroke(0);
    if (this.pressed) {
      fill(0, 255, 0); // Grün, wenn richtig
    } else {
      fill(255); // Weiß, wenn nix
    }
    rect(this.x, this.y, this.side, this.side);
  }

  reachedEdge() {
    // Überprüfe, ob das Viereck den rechten Bildschirmrand erreicht hat
    return this.x > width;
  }

  reachedMiddleLine() {
    // Überprüfe, ob das Viereck die Mittellinie erreicht hat
    return (
      this.x + this.side >= middleLineX &&
      this.x <= middleLineX &&
      !this.pressed
    );
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  middleLineX = width / 2;
  squareSize = windowHeight * 0.05;
  squareSpacing = squareSize * 2;
  textSize(windowWidth * 0.04); // Passe die Textgröße an
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  middleLineX = width / 2;
}
//ich weine..
