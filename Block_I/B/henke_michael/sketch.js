let count = 0;
let timer = 0;
let textControll;
let colorAmazon = [];
let colorEbay = [];
let picAmazon;
let picEbay;
let picBack;
let clickAmazon = false;
let clickEbay = false;
let buttonBack = false;
let home = true;
let barWidth = 0;
let barHeight = 0;
let barMaxHeight = 0;
let currentColorAmazon;
let currentColorEbay;

function preload() {
  picAmazon = loadImage('Amazon Logo.png');
  picEbay = loadImage('Ebay Logo.jpg');
  picBack = loadImage('Back Button.png');
}

function setup() {
  createCanvas(800, 800);
  imageMode(CENTER);
  background(0);
}

function draw() {
  if (home == true) {
    start();
    setAmazon();
    setEbay();
  } else {
    layout();
    if (clickAmazon == true) {
      getAmazon();
    }
    if (clickEbay == true) {
      getEbay();
    }
  }
}

function setAmazon() {
  let orangeAmazon = color('#F28705');
  let blueAmazon = color('#253340');
  let whiteAmazon = color('#F2F2F2');
  colorAmazon[0] = orangeAmazon;
  colorAmazon[1] = whiteAmazon;
  colorAmazon[2] = blueAmazon
}

function getAmazon() {
  if (frameCount % 60 == 0 && timer < 60) {
    barMaxHeight = round(random(0, 277));
    count += barMaxHeight;
    timer++;
    barHeight = 0;
    barWidth = (timer - 2.45) * 12.25 + 50;

    // Farben für verschiedene Größen festlegen
    if (barMaxHeight < 100) {
      currentColorAmazon = colorAmazon[0];
    } else if (barMaxHeight >= 100 && barMaxHeight < 200) {
      currentColorAmazon = colorAmazon[1];
    } else if (barMaxHeight >= 200) {
      currentColorAmazon = colorAmazon[2];
    }
    console.log("Height: " + barMaxHeight + " & color: " + currentColorAmazon);
  }
  if (barHeight < barMaxHeight) {
    barHeight = map(frameCount % 60, 0, 60, 0, barMaxHeight * 2.5);
    fill(currentColorAmazon);
    stroke(0);
    rect(barWidth, height - barHeight - 50, 11, barHeight + 25);
  }
}



function setEbay() {
  let redEbay = color('#D93240');
  let blueEbay = color('#0476D9');
  let yellowEbay = color('#F29F05');
  let greenEbay = color('#9CBF1B');
  colorEbay[0] = redEbay;
  colorEbay[1] = blueEbay;
  colorEbay[2] = yellowEbay;
  colorEbay[3] = greenEbay;
}

function getEbay() {
  if (frameCount % 60 == 0 && timer < 60) {
    barMaxHeight = round(random(0, 104));
    count += barMaxHeight;
    timer++;
    barHeight = 0;
    barWidth = (timer - 2.45) * 12.25 + 50;
    if (barMaxHeight < 25) {
      currentColorEbay = colorEbay[0];
    } else if (barMaxHeight >= 25 && barMaxHeight < 50) {
      currentColorEbay = colorEbay[1];
    } else if (barMaxHeight >= 50 && barMaxHeight < 75) {
      currentColorEbay = colorEbay[2];
    } else if (barMaxHeight >= 75) {
      currentColorEbay = colorEbay[3];
    }
    console.log("Height: " + barMaxHeight + " & color: " + currentColorEbay);
  }
  if (barHeight < barMaxHeight) {
    barHeight = map(frameCount % 60, 0, 60, 0, barMaxHeight * 5);
    fill(currentColorEbay);
    stroke(0);
    rect(barWidth, height - barHeight - 50, 11, barHeight + 25);
  }
}

function layout() {
  if (timer == 0) {
    background(0);
    legende();
  }
  stroke(255);
  noFill();
  rect(25, 25, width - 50, height - 50);
  fill(255);
  if (timer >= 60) {
    noLoop();
    textSize(32);
    textAlign(CENTER);
    fill(255);
    textControll = true;
  }
  if (textControll == true) {
    text("Total Views: " + count, 600, 100);
    image(picBack, 90, 90, 50, 50);
  }
}

function start() {
  background(0);
  fill(255);
  image(picAmazon, width / 2, 215, 750, 750 * 0.5);
  image(picEbay, width / 2, 585, 750, 750 * 0.5);
}

function legende() {
  let x = width / 2 - 325;
  let y = 200;
  let spacing = 60;
  let boxSize = 50;
  let fontSize = 25;

  textSize(fontSize);
  noStroke();

  let colorArray, textArray;
  if (clickAmazon == true) {
    colorArray = colorAmazon;
    textArray = ["< 100", "100 - 199", "> 200"];
  } else if (clickEbay == true) {
    colorArray = colorEbay;
    textArray = ["< 25", "25 - 49", "50 - 74", "> 75"];
  }

  for (let i = 0; i < colorArray.length; i++) {
    fill(colorArray[i]);
    rect(x, y + spacing * i, boxSize, boxSize);
    fill(255);
    text(textArray[i], x + boxSize + spacing, y + spacing * i + boxSize / 2 + fontSize / 2);
  }
}

function mousePressed() {
  if (mouseX > 50 && mouseX < 750 && mouseY > 50 && mouseY < 400) {
    clickAmazon = true;
    home = false;
  }
  if (mouseX > 50 && mouseX < 750 && mouseY > 400 && mouseY < 750) {
    clickEbay = true;
    home = false;
  }
  if (mouseX > 50 && mouseX < 130 && mouseY > 50 && mouseY < 130) {
    buttonBack = true;
    clickAmazon = false;
    clickEbay = false;
    home = true;
    location.reload();
  }
}