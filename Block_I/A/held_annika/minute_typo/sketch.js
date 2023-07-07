let seconds = 0;
let words = ["eins", "zwei", "drei", "vier", "fünf", "sechs", "sieben", "acht", "neun", "zehn", "elf", "zwölf", "dreizehn", "vierzehn", "fünfzehn", "sechzehn", "siebzehn", "achtzehn", "neunzehn", "zwanzig", "einundzwanzig", "zweiundzwanzig", "dreiundzwanzig", "vierundzwanzig", "fünfundzwanzig", "sechsundzwanzig", "siebenundzwanzig", "achtundzwanzig", "neunundzwanzig", "dreißig", "einunddreißig", "zweiunddreißig", "dreiunddreißig", "vierunddreißig", "fünfunddreißig", "sechsunddreißig", "siebenunddreißig", "achtunddreißig", "neununddreißig", "vierzig", "einundvierzig", "zweiundvierzig", "dreiundvierzig", "vierundvierzig", "fünfundvierzig", "sechsundvierzig", "siebenundvierzig", "achtundvierzig", "neunundvierzig", "fünfzig", "einundfünfzig", "zweiundfünfzig", "dreiundfünfzig", "vierundfünfzig", "fünfundfünfzig", "sechsundfünfzig", "siebenundfünfzig", "achtundfünfzig", "neunundfünfzig", "sechzig"];
let angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  textAlign(LEFT, CENTER);
  textSize(32);
}

function draw() {
  background(255);

  // Leinwand zentrieren
  translate(width/2, height/2);

  // Sekunden berechnen
  seconds = floor(millis() / 1000) % 60;


  let index = seconds % words.length;

  // Winkel berechnen
  angle = map(seconds, 0, 60, 0, 360);

  // Rotation und Text anzeigen
  push();
  rotate(angle);
  text(words[index], 0, 0);
  pop();
}
//für responsive
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
