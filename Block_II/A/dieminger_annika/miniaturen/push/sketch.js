// globals

var w, h;
var x, y;
var size;
var minWidth;
var f = 0;
var b = 255;

function setup() {
  w = windowWidth;
  h = windowHeight;
  createCanvas(w, h);
  
  size = Math.min(w / 5, (h / 4) * (5 / 4)); // Verhältnis 5 zu 4
  minWidth = size;
}

function draw() {
  background(b);

  x = w / 2;
  y = h / 2;
 
  if (mouseIsPressed && dist(x,y,mouseX,mouseY) <= size/2) {
    size += 0.9; // Größe erhöhen, wenn Maustaste gedrückt ist
    cursor()
  } else {
    size -= 0.5; // Größe verringern, wenn Maustaste losgelassen wird
    size = Math.max(size, minWidth); // Mindestbreite sicherstellen
  }
  
  

  fill(f);
  
  var width = size * (4 / 5); // Breite basierend auf Verhältnis 4 zu 5
  var height = size; // Höhe basierend auf Verhältnis 4 zu 5
  var triangleSize = 25; // Größe des Dreiecks
  
  // Dreieck
  var triangleX = x; // X-Position des Dreiecks
  var triangleY = y + height / 2 - triangleSize + 22; // Y-Position des Dreiecks
  triangle(triangleX - triangleSize / 2, triangleY + triangleSize, triangleX + triangleSize / 2, triangleY + triangleSize, triangleX, triangleY); // Zeichne Dreieck

  // Ball
  ellipse(x, y, width, height);
  
  if (mouseX > x - width / 2 && mouseX < x + width / 2 && mouseY > y - height / 2 && mouseY < y + height / 2) {
    cursor('grab');
  } else {
    cursor(ARROW);
  }

  if ((mouseX > x - width / 2 && mouseX < x + width / 2 && mouseY > y - height / 2 && mouseY < y + height / 2) && mouseIsPressed == true) {
    cursor('grabbing');
  }


  stroke(f);
  strokeWeight(3)
  line(x,triangleY,x, triangleY+150)

  if (size >= (w*1.5) && (b === 255)) {
    b = 0;
    f = 255;
    width = size * (4 / 5); // Breite basierend auf Verhältnis 4 zu 5
    height = size; // Höhe basierend auf Verhältnis 4 zu 5
    fill(f);
    ellipse(x, y, width, height);
    x = w / 2; // Neue Position des Balls
    y = h / 2; // Neue Position des Balls
    size = Math.min(w / 5, (h / 4) * (5 / 4)); // Neue Größe des Balls
  }

  if (size >= (w*1.5) && (b === 0)) {
    b = 255;
    f = 0;
    width = size * (4 / 5); // Breite basierend auf Verhältnis 4 zu 5
    height = size; // Höhe basierend auf Verhältnis 4 zu 5
    fill(f);
    ellipse(x, y, width, height);
    x = w / 2; // Neue Position des Balls
    y = h / 2; // Neue Position des Balls
    size = Math.min(w / 5, (h / 4) * (5 / 4)); // Neue Größe des Balls
  }

}

function windowResized() {
  w = windowWidth;
  h = windowHeight;
  resizeCanvas(w, h);
  size = Math.min(w / 5, (h / 4) * (5 / 4)); // Verhältnis 5 zu 4
  minWidth = size;
}
