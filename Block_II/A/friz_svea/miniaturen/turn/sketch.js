let crankLength = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);


  // Zeichne die Kurbel
  translate(width / 2, height / 2);
  strokeWeight(10);
  stroke(0);
  fill(255);
  ellipse(0, 0, 100, 100);

  // Berechne die Position des Kurbelarms
  let distance = dist(width / 2, height / 2, mouseX, mouseY);
  let x = (mouseX - width / 2) * crankLength / distance;
  let y = (mouseY - height / 2) * crankLength / distance;


  // Zeichne den Kurbelarm
  strokeWeight(5);
  line(0, 0, x, y);

  // Zeichne den Kurbelgriff
  strokeWeight(1);
  fill(0);
  ellipse(x,y, 20, 20);
}
