let cnv;
let switchX;
let switchY;
let switchSize = 150;
let isOn = false;
let hover = false;
let plus = 10;
let ySpeed = 20;

function setup() {
  cnv = createCanvas(800, 800);
  switchX = width/2;
  switchY = height/2;
  cnv.mouseMoved(changeSize);
}

function draw() {
  
  changeSize();
  
  if (isOn) {
    background(30, 50, 100);
    
    // Bewegender Hintergrund
    for(let i=0; i<10; i++){
      fill(255, 255, 255, i*25);
      rect(width/2, height/2, width-i*50, height-i*50);
    }

    if (switchY > 325) {
    switchY = switchY - ySpeed;
    }

    // Leuchtender Kreis
    fill(255, 220, 0, 200);
    noStroke();
    circle(switchX, switchY, 200);
    noFill();
  } else {
    
    if (switchY < 475) {
      switchY = switchY + ySpeed;
    }
    background(80);
  }
  
  noStroke();
  
  // Gerahmter Schalter
  strokeWeight(4);
  stroke(100, 100, 100, 100);
  fill(50, 50, 50);
  rect(width/2, height/2, 300, 150, 20);
  
    if(hover){
      // Schatten hinzufügen
      noStroke();
      fill(0, 0, 0, 100);
      rect(switchX+plus, switchY+plus, switchSize, switchSize, 90);
    }
  

  
  // Schalter zeichnen
  fill(isOn ? 220 : 150);
  noStroke();
  rectMode(CENTER);
  rect(switchX, switchY, switchSize, switchSize, 90);
}

function mouseClicked() {
  if (
    mouseX >= switchX - switchSize / 2 &&
    mouseX <= switchX + switchSize / 2 &&
    mouseY >= switchY - switchSize / 2 &&
    mouseY <= switchY + switchSize / 2
  ) {
    isOn = !isOn;
    ySpeed = 20;
  }
}

function changeSize() {
  if (
    mouseX >= switchX - switchSize / 2 &&
    mouseX <= switchX + switchSize / 2 &&
    mouseY >= switchY - switchSize / 2 &&
    mouseY <= switchY + switchSize / 2
  ) {
  // Schatten hinzufügen
  hover= true;
  } else{
    hover=false;
  }
  
}
