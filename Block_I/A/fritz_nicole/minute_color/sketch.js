let scale;
let numRects = 60; 
let lastSecond = 0;
let uncoloredRects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  scale = width / numRects; // Größe der Rechtecke anpassen
  for (let i = 0; i < numRects; i++) {
    uncoloredRects.push(i);
  }
}

function draw() {
  if (second() != lastSecond) { 
    lastSecond = second();
    if (uncoloredRects.length > 0) { //ob noch nicht alle Rechtecke schwarz
      let randomIndex = int(random(uncoloredRects.length)); 
      let indexToColor = uncoloredRects[randomIndex]; 
      uncoloredRects.splice(randomIndex, 1); // Index entfernen
      fill(0, 0, random(255)); 
      rect(indexToColor * scale, 0, scale, height);
    } else {
      fill(255); 
      rect(0, 0, width, height); 
      
      uncoloredRects = [];
      for (let i = 0; i < numRects; i++) {
        uncoloredRects.push(i);
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  scale = width / numRects; 
}


