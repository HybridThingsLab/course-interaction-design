let xoff = 0;
let yoff = 0;
let inc = 0.05;
let scl = 10;
let cols, rows;
let w = 800;
let h = 800;
let pastelColors = ['#E3F6DA', '#F5D5D3', '#DDCDF1', '#FDE3E8', '#E4F6EA', '#F4F4F4'];
let xOffset2 = 50; // Versatz für die zweite Ebene
let color1, color2; // Farben für die Wellen

function setup() {
  createCanvas(w, h);
  cols = w / scl;
  rows = h / scl;
  
  // Zufällige Farben für die Wellen auswählen
  color1 = color(random(255), random(255), random(255));
  color2 = color(random(255), random(255), random(255));
  
  // Timer einrichten, um die Farben jede Minute zufällig zu ändern
  setInterval(changeColors, 60000);
  
    // Hintergrundfarbe einmalig beim Setup festlegen
  backgroundColor = color(random(pastelColors));

  // Timer einrichten, um die Hintergrundfarbe alle 30 Sekunden zufällig zu ändern
  setInterval(changeBackground, 30000);
}

function changeColors() {
  color1 = color(random(255), random(255), random(255));
  color2 = color(random(255), random(255), random(255));
}

function changeBackground() {
  // Zufällige Pastellfarbe auswählen und als neue Hintergrundfarbe festlegen
  let index = floor(random(pastelColors.length));
  backgroundColor = color(pastelColors[index]);
}

function draw() {
  background(backgroundColor);
  
  // Erste Ebene von Wellen
  noFill();
  strokeWeight(2);
  stroke(color1);
  beginShape();
  let xoff1 = xoff;
  for (let x = 0; x <= cols; x++) {
    let yoff1 = yoff;
    for (let y = 0; y <= rows; y++) {
      let index = (x + y * cols) * 4;
      let angle = noise(xoff1, yoff1) * TWO_PI;
      let v = p5.Vector.fromAngle(angle);
      let vx = v.x * scl;
      let vy = v.y * scl;
      vertex(x * scl + vx, y * scl + vy);
      yoff1 += inc;
    }
    xoff1 += inc;
  }
  endShape();
  
  // Zweite Ebene von Wellen
  noFill();
  strokeWeight(2);
  stroke(color2);
  beginShape();
  let xoff2 = xoff + xOffset2; // Versatz für die zweite Ebene
  for (let x = 0; x <= cols; x++) {
    let yoff2 = yoff;
    for (let y = 0; y <= rows; y++) {
      let index = (x + y * cols) * 4;
      let angle = noise(xoff2, yoff2) * TWO_PI;
      let v = p5.Vector.fromAngle(angle);
      let vx = v.x * scl;
      let vy = v.y * scl;
      vertex(x * scl + vx, y * scl + vy);
      yoff2 += inc;
    }
    xoff2 += inc;
  }
  endShape();

  xoff += 0.01;
  yoff += 0.01;
}

