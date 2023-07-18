let x1, y1, x2, y2, x3, y3;
let triangleSize = 0.2; // Größe des Dreiecks in Prozent der Fenstergröße
let draggedCorner = -1; // Index der letzten verschobenen Ecke

function setup() {
  createCanvas(windowWidth, windowHeight);
  x1 = windowWidth * (0.5 - triangleSize / 2);
  y1 = windowHeight * 0.4;
  x2 = windowWidth * (0.5 + triangleSize / 2);
  y2 = windowHeight * 0.4;
  x3 = windowWidth * 0.5;
  y3 = windowHeight * 0.6;
}

function draw() {
  background(220);

  // Zeichne das Dreieck
  triangle(x1, y1, x2, y2, x3, y3);
  distan();
}
 function distan(){
  // Überprüfe, ob die Maus über einer Ecke ist und zeichne einen Kreis, um dies anzuzeigen
  if (dist(mouseX, mouseY, x1, y1) < 10) {
    fill(255);
    ellipse(x1, y1, 20);
    document.body.style.cursor="all-scroll";
  }
    if (dist(mouseX, mouseY, x1, y1) > 10) {

      document.body.style.cursor="context-menu";
  }
  if (dist(mouseX, mouseY, x2, y2) < 10) {
    fill(255);
    ellipse(x2, y2, 20);
    document.body.style.cursor="all-scroll";
  }
  if (dist(mouseX, mouseY, x3, y3) < 10) {
    fill(255);
    ellipse(x3, y3, 20);
    document.body.style.cursor="all-scroll";
  }
}

function mousePressed() {
  // Wenn die Maus über einer Ecke ist, speichere den Index der Ecke
  if (dist(mouseX, mouseY, x1, y1) < 10) {
    draggedCorner = 1;
    document.body.style.cursor="all-scroll";
  }
  if (dist(mouseX, mouseY, x2, y2) < 10) {
    draggedCorner = 2;
  }
  if (dist(mouseX, mouseY, x3, y3) < 10) {
    draggedCorner = 3;
  }
}

function mouseDragged() {
  // Wenn die Maus über einer Ecke ist oder eine Ecke bereits verschoben wurde, ziehe die Ecke entsprechend der Mausbewegung
  if (draggedCorner == 1 ) {
    x1 = constrain(mouseX, 0, width);
    y1 = constrain(mouseY, 0, height);
    document.body.style.cursor="all-scroll";
  }
  else if (draggedCorner == 2) {
    x2 = constrain(mouseX, 0, width);
    y2 = constrain(mouseY, 0, height);
  }
  else if (draggedCorner == 3) {
    x3 = constrain(mouseX, 0, width);
    y3 = constrain(mouseY, 0, height);
  }}
  
  function mouseReleased() {
  // Setze draggedCorner auf -1, um sicherzustellen, dass die Ecke freigegeben wird
  draggedCorner = -1;
  document.body.style.cursor="conext-menu";
  }
  
  function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // Passe die Positionen der Ecken an die neue Fenstergröße an
  x1 = windowWidth * (0.5 - triangleSize / 2);
  y1 = windowHeight * 0.4;
  x2 = windowWidth * (0.5 + triangleSize / 2);
  y2 = windowHeight * 0.4;
  x3 = windowWidth * 0.5;
  y3 = windowHeight * 0.6;
  }
 