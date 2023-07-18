var w, h;
var canvas;
var ellipses = [];
let b = 25;
let z = 200 / 20;
let f2 = 200;
let f = 225;
let d = 0;
let minDistance;
let lastClickTime = 0;
let pulseSpeed = 3;
let cycle = 1; // Aktueller Zyklus
let lx = 0;
let ry = 0;

function setup() {
  w = windowWidth;
  h = windowHeight;
  canvas = createCanvas(w, h);
  noStroke();
  minDistance = w / 26;
}

function mouseClicked() {
  // Überprüfe den Mindestabstand zu vorhandenen Ellipsen
  let validPosition = true;
  for (let i = 0; i < ellipses.length; i++) {
    let otherEllipse = ellipses[i];
    let distance = dist(mouseX, mouseY, otherEllipse.x, otherEllipse.y);
    if (distance < w / 9) {
      validPosition = false;
      break;
    }
  }

  // Füge nur eine neue Ellipse hinzu, wenn die Position gültig ist
  if (validPosition) {
    let currentTime = millis();
    let timeDiff = currentTime - lastClickTime;
    ellipses.push({ x: mouseX, y: mouseY, size: 0, pulseInterval: timeDiff, lastPulseTime: currentTime });
    lastClickTime = currentTime;
    b = b + z;
    lx = lx + w/20;
  }

  if (ellipses.length == 20) {
    cycle++; // Zyklus erhöhen
    if (cycle > 2) {
      cycle = 1; // Zyklus von vorne beginnen
    }
    f = f - f2;
    f2 = -f2;
    z = -z;
    ellipses = [];
    lx = 0;
    rect(0,0,w,ry);
    ry++;
  }
}

function draw() {
  if (cycle === 1) {
    background(225); // Hintergrundfarbe für Zyklus 1
  } else {
    background(25); // Hintergrundfarbe für Zyklus 2
  }
  
  for (let i = 0; i < ellipses.length; i++) {
    let ellipseData = ellipses[i];
    let size = min(ellipseData.size, w / 10); // Größe begrenzen auf w/10
    let pulseInterval = ellipseData.pulseInterval;
    let pulseRadius = size + pulseSpeed * Math.sin((millis() - ellipseData.lastPulseTime) / pulseInterval * TWO_PI);
    
    if (cycle === 1) {
      fill(25); // Füllfarbe für Zyklus 1
      stroke(25);
    } else {
      fill(225); // Füllfarbe für Zyklus 2
      stroke(225)
    }
    
    strokeWeight(h/20);
    line(0,0,lx,0);
    noStroke();
    ellipse(ellipseData.x, ellipseData.y, pulseRadius, pulseRadius);
    

    ellipseData.size += 0.7; // Größe schrittweise erhöhen
  }
}

function windowResized() {
  w = windowWidth;
  h = windowHeight;
  resizeCanvas(w, h);
}
