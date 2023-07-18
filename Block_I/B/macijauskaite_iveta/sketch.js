var speed1 = 1;
var speed2 = 3;
var speed3 = 6;
var speed4 = 0.7;
var diaA = 0;
var diaB = 0;
var diaC = 0;
var diaD = 0;
var growA = true;
var growB = true;
var growC = true;
var growD = true;

function preload() {
  oswald = loadFont("Oswald.ttf");
}

function setup() {
  createCanvas(1800, 800);
  textFont(oswald);
}

function draw() {
  noStroke();
  background(244, 235, 220);

  textSize(53);
  fill(165, 71, 63);
  text("Unser Leben hängt vom Luftstrom ab", 50, 85);

  textSize(26);
  fill(0);
  text(
    "Jedes einzelne Lebewesen auf diesem Planeten ist abhängig von der",
    50,
    150
  );
  text(
    "Umwelt. Wir existieren im ständigen Austausch mit der Natur. Diese uns",
    50,
    180
  );
  text(
    "oft unbewusste Wahrheit zeigt sich besonders bei der Luft, die wir täglich",
    50,
    210
  );
  text(
    "atmen. Denn egal, wie unterschiedlich wir als Spezies auch sein mögen,",
    50,
    240
  );
  text(
    "ohne diesen kontinuierlichen Austausch könnten wir nicht existieren.",
    50,
    270
  );
  text(
    "Obwohl wir alle dasselbe Grundbedürfnis teilen, unterscheiden wir uns",
    50,
    330
  );
  text(
    "doch in der Art und Weise, wie wir Sauerstoff aufnehmen. Wir haben",
    50,
    360
  );
  text(
    "dank der Evolution gelernt, effizient zu atmen, bedingt durch",
    50,
    390
  );
  text(
    "fundamentale Faktoren wie Größe, Art oder Alter. Denn die falsche",
    50,
    420
  );
  text(
    "Atmung könnte schnell zur überlebenswichtigen Herausforderung werden.",
    50,
    450
  );
  text(
    "Die Visualisierung ermöglicht es uns, die Vielfalt und Komplexität der",
    50,
    510
  );
  text(
    "Atmung in verschiedenen Organismen zu erkennen und zu verstehen.",
    50,
    540
  );
  text(
    "Sie verdeutlicht auch, wie diese Organismen auf ihre jeweilige Umwelt",
    50,
    570
  );
  text("und ihre individuellen Bedürfnisse angepasst sind, um die", 50, 600);
  text("lebensnotwendige Ressource Luft effektiv zu nutzen.", 50, 630);

  translate(width / 2, 0);

  textSize(18);
  fill(171, 80, 70);
  text("Erwachsener     12-18  Atemzüge / Min", 50, 730);
  fill(130, 159, 110);
  text("Baby                40-50  Atemzüge / Min", 50, 760);
  fill(194, 150, 50);
  text("Kolibri        250  Atemzüge / Min", 530, 730);
  fill(71, 104, 102);
  text("Elefant            6  Atemzüge / Min", 530, 760);

  fill(71, 104, 102);

  ellipse(400, 400, diaD, diaD);

  if (growD) {
    diaD += speed4;
    if (diaD >= 500) {
      growD = false;
    }
  } else {
    diaD -= speed4;
    if (diaD <= 250) {
      growD = true;
    }
  }

  fill(171, 80, 70);

  ellipse(400, 400, diaA, diaA);

  if (growA) {
    diaA += speed1;
    if (diaA >= 250) {
      growA = false;
    }
  } else {
    diaA -= speed1;
    if (diaA <= 150) {
      growA = true;
    }
  }

  //baby

  fill(130, 159, 110);

  ellipse(400, 400, diaB, diaB);

  if (growB) {
    diaB += speed2;
    if (diaB >= 150) {
      growB = false;
    }
  } else {
    diaB -= speed2;
    if (diaB <= 50) {
      growB = true;
    }
  }

  //Kolibri

  fill(194, 150, 50);

  ellipse(400, 400, diaC, diaC);

  if (growC) {
    diaC += speed3;
    if (diaC >= 45) {
      growC = false;
    }
  } else {
    diaC -= speed3;
    if (diaC <= 20) {
      growC = true;
    }
  }
}
