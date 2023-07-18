let canvas;
let isCursorInside = false;
let isMousePressed = false;
let clickCount = 0;
let previousFillTest = 255; // Vorheriger Füllwert
let countdown = 10; // Startwert des Countdowns
let countdownInterval; // Intervall für den Countdown
let bpmTap = 0;
let bpmCircle = 0;
let isCircleVisible = false; // Variable zur Kontrolle der Sichtbarkeit des Kreises
let blinkInterval; // Intervall für das Blinken des Kreises
let isAccuracyVisible = false; // Variable zur Kontrolle der Sichtbarkeit der Genauigkeit

function setup() {
  const container = document.getElementById('canvas-container');
  const width = container.offsetWidth;
  const height = container.offsetHeight;
  canvas = createCanvas(width, height);
  canvas.parent('canvas-container');
  startCountdown();
  startBlinking();

  // Reset-Button hinzufügen
  const resetButton = createButton('Nochmal');
  resetButton.position(50, 50);
  resetButton.mousePressed(resetProgram);
  resetButton.style("font-family", "nitti-typewriter-open");
  resetButton.style("font-size", "24px");
  resetButton.style("cursor", "pointer");

  // Schriftart für den gesamten Text festlegen
  textFont("nitti-typewriter-cameo");
}

function draw() {
  let centerX = width / 2;
  let centerY = height / 2;
  let rectWidth = width / 4;
  let rectHeight = height / 4;
  let fillTest = (isCursorInside && isMousePressed) ? 150 : 255; // Graue Farbe, wenn der Cursor im Rechteck ist und Maustaste gedrückt wird
  let fillTakt = isCircleVisible ? 50 : 0; // Kontrolle der Füllfarbe des Kreises basierend auf der Sichtbarkeit

  if (fillTest === 150 && previousFillTest === 255) { // Zustandsänderung erkannt
    clickCount++;
  }

  previousFillTest = fillTest; // Aktuellen Füllwert speichern

  background(0);
  rectMode(CENTER);
  fill(fillTest);
  translate(centerX, centerY);
  push();
  rect(0, 0, rectWidth, rectHeight, 10, 10);
  //taktKreis
  fill(fillTakt);
  circle(0, -300, rectHeight/2);
  translate(0, 200);
    // Fortschrittsbalken zeichnen
    let progress = map(countdown, 10, 0, 0, rectWidth); // Berechnung des Fortschritts basierend auf dem Countdown-Wert
    fill(50); // Orange Farbe
    rect(-rectWidth/2 + progress/2, 0, progress, 20, 10, 10);

  pop();
  fill(0);
  fill(255);
  fill(0);
  text(countdown, centerX, centerY + 50);
  
  if (isAccuracyVisible) {
    // Genauigkeit anzeigen
    const accuracy = bpmTap/(bpmCircle/100);
    fill(255);
    text("Genauigkeit: " + Math.round(accuracy) + "%", 0, 300);
    fill(0);
  textAlign(CENTER, CENTER);
  textSize(width / 30);
  text("BPM: " + bpmCircle, 0, 0);
  }
}

function windowResized() {
  const container = document.getElementById('canvas-container');
  const width = container.offsetWidth;
  const height = container.offsetHeight;
  resizeCanvas(width, height);
}

function mouseMoved() {
  let centerX = width / 2;
  let centerY = height / 2;
  let rectWidth = width / 4;
  let rectHeight = height / 4;
  
  if (
    mouseX >= centerX - rectWidth / 2 &&
    mouseX <= centerX + rectWidth / 2 &&
    mouseY >= centerY - rectHeight / 2 &&
    mouseY <= centerY + rectHeight / 2
  ) {
    isCursorInside = true;
    document.getElementById('canvas-container').classList.add('cursor-pointer');
  } else {
    isCursorInside = false;
    document.getElementById('canvas-container').classList.remove('cursor-pointer');
  }
}

function mousePressed() {
  isMousePressed = true;
}

function mouseReleased() {
  isMousePressed = false;
}

function startCountdown() {
  countdownInterval = setInterval(updateCountdown, 1000); // Intervall von 1 Sekunde
}

function updateCountdown() {
  countdown--;
  if (countdown === 0) {
    clearInterval(countdownInterval); // Intervall stoppen, wenn Countdown abgelaufen ist
    calculateBPM();
    isAccuracyVisible = true; // Genauigkeitstext sichtbar machen
  }
}

function calculateBPM() {
  const intervalDuration = 10; // Dauer des Intervalls in Sekunden
  bpmTap = (clickCount / intervalDuration) * 60; // Anzahl der Klicks pro Sekunde in BPM umrechnen
}

function startBlinking() {
  const minBPM = 80;
  const maxBPM = 200;
  const randomBPM = getRandomBPM(minBPM, maxBPM); // Zufällige BPM-Zahl für den Kreis generieren
  bpmCircle = randomBPM; // BPM des Kreises in der Variable speichern

  const blinkDuration = 60000 / randomBPM / 2; // Dauer des Blinkens basierend auf der BPM-Zahl
  blinkInterval = setInterval(toggleCircleVisibility, blinkDuration);
}

function toggleCircleVisibility() {
  isCircleVisible = !isCircleVisible;
}

function getRandomBPM(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function resetProgram() {
  // Das gesamte Programm zurücksetzen
  clearInterval(countdownInterval);
  clearInterval(blinkInterval);
  clickCount = 0;
  countdown = 10;
  bpmTap = 0;
  bpmCircle;
  isCircleVisible = false;
  isCursorInside = false;
  isMousePressed = false;
  previousFillTest = 255;
  isAccuracyVisible = false;
  startCountdown();
  startBlinking();
}
