function preload(){
}

let savedTime;
let totalTime = 1000;
countZeit = 0;
let punkte = [];
// Anzahl der Linien die erscheinen sollen
const num = 10000;
var r = 0;
var g = 0;
var b = 0;
let clicked = false;
const wertNoise = 0.01;


function setup () {
  canvas = createCanvas(800, 800).parent('canvas');
  savedTime = millis();
  // punkte für die linien erscheinen lassen
  for(let i = 0; i < num ; i++){
    // linien erscheinen random innerhalb des Canvas
    punkte.push(createVector(random(width), random(height)));
  }
  // Farbe und Dicke von den Linien
  stroke(125,125,125);
  strokeWeight(random(5));
}

function draw(){
  let passedTime = millis() - savedTime;

  background(0,0,0,20);
  // Punkte erscheinen lassen
  
    for (let i = 0; i < num; i ++){
      let linie = punkte [i];
      point(linie.x, linie.y);
      // Punkte bewegen lassen
      let bewegung = noise(linie.x * wertNoise, linie.y * wertNoise);
      // TAU = 2* PI -> brauche ich damit es sich in Wellen bewegt
      let winkel = TAU * bewegung;
      // x wert ist cos von dem Winkel
      linie.x += cos(winkel); 
      linie.y += sin(winkel);

      let richtung = countZeit % 3; 
      if (richtung == 0) { 
        linie.x += cos(winkel);
      } else if (richtung == 2) { 
        linie.x -= cos(winkel);
      } else { 
        linie.y += sin(winkel);
      }

      // hier wird die unten stehende Funktion aufgerufen, damit die Linien auf dem Bildschirm bleiben
      if (!onScreen(linie)){
        linie.x = random(width);
        linie.y = random(height);
      }
    }
  if (passedTime > totalTime){
    countZeit = countZeit +1;
    savedTime = millis();
  }


fill(0);
rect(0,750,800,50);
// Schrift Neutral 0-10 sek
if((countZeit > 0)&&(countZeit < 10)){
  textAlign(CENTER);
  fill(r,g,b);
  textSize(30);
  text("NEUTRAL",400,780);
}

// Schrift Negativ 10-15 sek
if((countZeit > 10)&&(countZeit < 15)){
  textAlign(CENTER);
  fill(r,g,b);
  textSize(30);
  text("NEGATIV",400,780);
}

// Schrift Neutral 15-27 sek
if((countZeit > 15)&&(countZeit < 27)){
  textAlign(CENTER);
  fill(r,g,b);
  textSize(30);
  text("NEUTRAL",400,780);
}

// Schrift Negativ 27-32 sek
if((countZeit > 27)&&(countZeit < 32)){
  textAlign(CENTER);
  fill(r,g,b);
  textSize(30);
  text("NEGATIV",400,780);
}
// Schrift Neutral 32-45 sek
if((countZeit > 32)&&(countZeit < 45)){
  textAlign(CENTER);
  fill(r,g,b);
  textSize(30);
  text("NEUTRAL",400,780);
}
// Schrift Negativ 45-50 sek
if((countZeit > 45)&&(countZeit < 50)){
  textAlign(CENTER);
  fill(r,g,b);
  textSize(30);
  text("NEGATIV",400,780);
}
// Schrift Neutral 50-60 sek
if((countZeit > 50)&&(countZeit < 60)){
  textAlign(CENTER);
  fill(r,g,b);
  textSize(30);
  text("NEUTRAL",400,780);
}

if(clicked){
  textAlign(CENTER);
  fill(r,g,b);
  fill(0);
  rect(0,750,800,50);
  fill(r,g,b);
  textSize(30);
  text("POSITIV",400,780);
}

// erster neutraler Block 1-5 sek er
if((countZeit>0) && (countZeit < 5) && (clicked)){
  r = 34;
  g = 139;
  b = 34; 
  stroke(r,g,b);
} else { if ((countZeit>0) && (countZeit < 5)){
  r = 245;
  g = 245;
  b = 245;
  stroke(r,g,b);
  strokeWeight(3);

}
}
// zweiter neutral 5-10 sek er
if((countZeit>5) && (countZeit < 10) && (clicked)){
    r = 154;
    g = 205;
    b = 50;
  stroke(r,g,b);
} else { if ((countZeit>5) && (countZeit < 10)){
  r = 255;
  g = 231;
  b = 186;
  stroke(r,g,b);
  strokeWeight(3);

}
}
// negativ 5 sek 10-15 sek er
if((countZeit>10) && (countZeit < 15) && (clicked)){
  r = 0;
  g = 153;
  b = 0; 
  stroke(r,g,b);
} else { if ((countZeit>10) && (countZeit < 15)){
  r = 205;
  g = 38;
  b = 38;
  stroke(r,g,b);
  strokeWeight(2);

}
}
// neutral 15-21 er
if((countZeit>15) && (countZeit < 21) && (clicked)){
  r = 51;
  g = 153;
  b = 0; 
  stroke(r,g,b);
} else { if ((countZeit>15) && (countZeit < 21)){
  r = 240;
  g = 255;
  b = 240;
  stroke(r,g,b);
  strokeWeight(3);

}
}
// neutral 21-27 er
if((countZeit>21) && (countZeit < 27) && (clicked)){
  r = 204;
  g = 255;
  b = 0; 
  stroke(r,g,b);
} else { if ((countZeit>21) && (countZeit < 27)){
  r = 255;
  g = 222;
  b = 173;
  stroke(r,g,b);
  strokeWeight(3);

}
}
// negativ 27-32 er
if((countZeit>27) && (countZeit < 32) && (clicked)){
  r = 60;
  g = 165;
  b = 88; 
  stroke(r,g,b);
} else { if ((countZeit>27) && (countZeit < 32)){
  r = 255;
  g = 99;
  b = 71;
  stroke(r,g,b);
  strokeWeight(2);

}
}
// neutral 32-40 er
if((countZeit>32) && (countZeit < 40) && (clicked)){
  r = 0;
  g = 187;
  b = 45; 
  stroke(r,g,b);
} else { if ((countZeit>32) && (countZeit < 40)){
  r = 255;
  g = 255;
  b = 255;
  stroke(r,g,b);
  strokeWeight(2);

}
}
// neutral 40-45 er
if((countZeit>40) && (countZeit < 45) && (clicked)){
  r = 0;
  g = 187;
  b = 45; 
  stroke(r,g,b);
} else { if ((countZeit>40) && (countZeit < 45)){
  r = 255;
  g = 231;
  b = 186;
  stroke(r,g,b);
  strokeWeight(3);

}
}

// negativ 45-50 er
if((countZeit>45) && (countZeit < 50) && (clicked)){
  r = 0;
  g = 234;
  b = 56; 
  stroke(r,g,b);
} else { if ((countZeit>45) && (countZeit < 50)){
  r = 255;
  g = 0;
  b = 0;
  stroke(r,g,b);
  strokeWeight(2);

}
}

// neutral 50-55 er
if((countZeit>50) && (countZeit < 55) && (clicked)){
  r = 37;
  g = 80;
  b = 46; 
  stroke(r,g,b);
} else { if ((countZeit> 50) && (countZeit < 55)){
  r = 255;
  g = 228;
  b = 196; 
  stroke(r,g,b);
  strokeWeight(3);

}
// neutral 55-60 er
}
if((countZeit> 55) && (countZeit < 60) && (clicked)){
  r = 0;
  g = 128;
  b = 0; 
  stroke(r,g,b);
} else { if ((countZeit> 55) && (countZeit < 60)){
  r = 205;
  g = 197;
  b = 191;
  stroke(r,g,b);
  strokeWeight(3);

}
}

  if (countZeit > 60) {
    background(0);
    countZeit = 0;
    noiseSeed(millis());
    stroke(125,125,125);
    strokeWeight(5);

  }
}


function mouseReleased(){
  noiseSeed(millis());
  strokeWeight(random(0.5,1.5));
  textAlign(CENTER);
  fill(r,g,b);
  textSize(30);
  text("POSITIV",400,780);
  clicked = !clicked;
}
  if(countZeit > 60){
    countZeit = 0;
  }


function onScreen(vektor){
// checken, ob die x und y Werte noch auf dem Bildschirm sind
  return vektor.x >= 0 && vektor.x <= (width) &&  vektor.y >= 0 && vektor.y <= (height);


}