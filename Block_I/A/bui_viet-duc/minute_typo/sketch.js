let startAngle = -90;
let wordAngle = 0;

function setup() {
  createCanvas(700, 700); // Durchmesser auf 500px ändern
  angleMode(DEGREES);
  textSize(40);
  background(255); 
}

function draw() {
  background(0);
  translate(width/2, height/2);
  rotate(-90);

  // Sekundenzeiger
  let s = second();
  let sAngle = map(s, 0, 60, 0, 360);
  noFill();
  //stroke(255);
  strokeWeight(3);
  arc(0, 0, 530, 530, 0, sAngle);

  // Sekundenzeiger als Wort
  fill('white');
  noStroke();
  let word = getWordForSecond(s);
  rotate(wordAngle);
  text(word, 0, 0);
  rotate(-wordAngle);

  // Winkel für das nächste Wort berechnen
  let nextWordAngle = map(s + 1, 0, 60, 0, 360);
  wordAngle = lerp(startAngle, nextWordAngle, 0.1);

  // Winkel für den Sekundenzeiger aktualisieren
  startAngle = sAngle;
}

function getWordForSecond(s) {
  let words = ['Sechzig','Eins', 'Zwei', 'Drei', 'Vier', 'Fünf', 'Sechs', 'Sieben', 'Acht', 'Neun', 'Zehn', 'Elf', 'Zwölf', 'Dreizehn', 'Vierzehn', 'Fünfzehn', 'Sechzehn', 'Siebzehn', 'Achtzehn', 'Neunzehn', 'Zwanzig', 'Einundzwanzig', 'Zweiundzwanzig', 'Dreiundzwanzig', 'Vierundzwanzig', 'Fünfundzwanzig', 'Sechsundzwanzig', 'Siebenundzwanzig', 'Achtundzwanzig', 'Neunundzwanzig', 'Dreißig', 'Einunddreißig', 'Zweiunddreißig', 'Dreiunddreißig', 'Vierunddreißig', 'Fünfunddreißig', 'Sechsunddreißig', 'Siebenunddreißig', 'Achtunddreißig', 'Neununddreißig', 'Vierzig', 'Einundvierzig', 'Zweiundvierzig', 'Dreiundvierzig', 'Vierundvierzig', 'Fünfundvierzig', 'Sechsundvierzig', 'Siebenundvierzig', 'Achtundvierzig', 'Neunundvierzig', 'Fünfzig', 'Einundfünfzig', 'Zweiundfünfzig', 'Dreiundfünfzig', 'Vierundfünfzig', 'Fünfundfünfzig', 'Sechsundfünfzig', 'Siebenundfünfzig', 'Achtundfünfzig', 'Neunundfünfzig'];
  return words[s];
}