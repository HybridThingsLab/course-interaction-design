let circleColor;
let circleStrokeColor;
let backgroundColor;
let circleRadius;
let numClicks = 0;
let circleOpacity = 255;

function setup() {
  createCanvas(windowWidth, windowHeight);
  circleColor = color(255, 0, 0, circleOpacity);
  circleStrokeColor = color(255, circleOpacity);
  backgroundColor = color(255);
  circleRadius = min(width, height) * 0.5;
}

function draw() {
  background(backgroundColor);

  // Kreisfarbe und -umrissfarbe Ã¤ndern basierend auf der Anzahl der Klicks
  let grayValue = map(numClicks, 0, 10, 255, 0);
  circleOpacity = map(numClicks, 0, 10, 255, 0);
  circleColor = color(255, 0, 0, circleOpacity);
  circleStrokeColor = color(255, circleOpacity);

  stroke(circleStrokeColor);
  fill(circleColor);
  ellipse(width/2, height/2, circleRadius, circleRadius);

  // "click me" in der Mitte des Kreises platzieren
  textAlign(CENTER, CENTER);
  textSize(map(circleRadius, 0, min(windowWidth, windowHeight) * 0.5, 10, 30));
  fill(255 - grayValue);
  text(getMessage(numClicks), width/2, height/2);
  textFont('Georgia');

  // TschÃ¼ss-Text anzeigen, wenn der Kreis vollstÃ¤ndig ausgeblendet ist
  if (grayValue === 0) {
    textAlign(CENTER, CENTER);
    textSize(50);
    fill(0);
    text("Tschuesss", width/2, height/2);
  }
}

function mouseClicked() {
  // ist der Mauszeiger im Kreis
  let distance = dist(mouseX, mouseY, width/2, height/2);
  if (distance < circleRadius/2) {
    // wenn ja, dann Anzahl der Klicks erhÃ¶hen und Kreisfarbe Ã¤ndern
    numClicks++;
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  circleRadius = min(windowWidth, windowHeight) * 0.5;
}
function getMessage(clicks) {
  switch (clicks) {
    case 0:
      return "DON'T click me!!!";
    case 1:
      return "Was hab ich dir gesagt?";
    case 2:
      return "eyy!";
    case 3:
      return "Lass das!";
    case 4:
      return "Bitte hoer auf";
    case 5:
      return "Wie kannst du nur?";
    case 6:
      return "Du tust mir weh :(";
    case 7:
      return "Nichts besseres zu tun?";
    case 8:
      return "warum..?";
    case 9:
      return "Wenn du nicht aufhoerst...";
    case 10:
      return "Tschuesss";
    default:
      return "DON'T click me!!!";


  }
} 
//muss den text auch noch responsive zum kreis machen
function mouseMoved() { //für hand cursor
  let distance = dist(mouseX, mouseY, width/2, height/2);
  if (distance < circleRadius/2) {
    cursor(HAND); 
  } else {
    cursor(ARROW); 
  }
}

function mouseOut() {
  cursor(ARROW); // Standard-Cursor anzeigen, wenn der Mauszeiger den Canvas verlässt
}
