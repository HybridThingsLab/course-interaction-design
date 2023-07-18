
function preload() {

  
}

//E-Books
let savedTime;
let totalTime = 60000/720;
let countEllipse = 0;
let savedTime2;
let totalTime2 = 60000/60;
let countRect = 0;
//Belletristik
let savedTime3;
let totalTime3 = 60000/224;
let countRect2 = 0;
//Kinder- und Jugenbücher
let savedTime4;
let totalTime4 = 60000/132;
let countRect3 = 0;
//Reise
let savedTime5;
let totalTime5 = 60000/29;
let countRect4 = 0;
//Naturwissenschaften, Medizin, Informatik, Technik
let savedTime6;
let totalTime6 = 60000/25;
let countRect5 = 0;
//Sozialwissenschaften, Recht, Wirtschaft
let savedTime7;
let totalTime7 = 60000/18;
let countRect6 = 0;
//Ratgeber
let savedTime8;
let totalTime8 = 60000/102;
let countRect7 = 0;
//Geisteswissenschaften, Kunst, Musik
let savedTime9;
let totalTime9 = 60000/33;
let countRect8 = 0;
//Schule & Lernen
let savedTime10;
let totalTime10 = 60000/76;
let countRect9 = 0;
//Sachbuch
let savedTime11;
let totalTime11 = 60000/81;
let countRect10 = 0;



function setup() {

  createCanvas(800,800);
  background(133,133,133);
  savedTime = millis();
  savedTime2 = millis();
  savedTime3 = millis();
  savedTime4 = millis();
  savedTime5 = millis();
  savedTime6 = millis();
  savedTime7 = millis();
  savedTime8 = millis();
  savedTime9 = millis();
  savedTime10 = millis();
  savedTime11 = millis();
}


function draw() {


  let passedTime = millis() - savedTime;
  let passedTime2 = millis() - savedTime2;
  let passedTime3 = millis() - savedTime3;
  let passedTime4 = millis() - savedTime4;
  let passedTime5 = millis() - savedTime5;
  let passedTime6 = millis() - savedTime6;
  let passedTime7 = millis() - savedTime7;
  let passedTime8 = millis() - savedTime8;
  let passedTime9 = millis() - savedTime9;
  let passedTime10 = millis() - savedTime10;
  let passedTime11 = millis() - savedTime11;

  //Bücher//

  /*
  if (passedTime > totalTime && countRect < 720) {
    let ra = random(10,50);
    let ra1 = random(10,50);
    noFill();
    strokeWeight(2);
    stroke(0);
    
    rectMode(CENTER);
    rect(random(ra+50,width-ra-50), random(ra1+50, height-ra1-50), ra, ra1);
    

    savedTime = millis();

    countRect++;
  }
  */
  

  //Bücher Belletristik

  if (passedTime3 > totalTime3 && countRect2 < 224) {
    let ra = random(10,40);
    let ra1 = random(10,40);
    noFill();
    strokeWeight(2);
    stroke(0);
    
    rectMode(CENTER);
    rect(random(ra+50,width-ra-50), random(ra1+50, height-ra1-50), ra, ra1);
    

    savedTime3 = millis();

    countRect2++;
  }

  //Bücher Kinder- und Jugendbücher

  if (passedTime4 > totalTime4 && countRect3 < 132) {
    let ra = random(10,40);
    let ra1 = random(10,40);
    noFill();
    strokeWeight(2);
    stroke(255,215,0);
    
    rectMode(CENTER);
    rect(random(ra+50,width-ra-50), random(ra1+50, height-ra1-50), ra, ra1);
    

    savedTime4 = millis();

    countRect3++;
  }

  //Bücher Reise
  if (passedTime5 > totalTime5 && countRect4 < 29) {
    let ra = random(10,40);
    let ra1 = random(10,40);
    noFill();
    strokeWeight(2);
    stroke(99,184,255);
    
    rectMode(CENTER);
    rect(random(ra+50,width-ra-50), random(ra1+50, height-ra1-50), ra, ra1);
    

    savedTime5 = millis();

    countRect4++;
  }

  //Bücher Naturwissenschaften, Medizin, Informatik, Technik
  if (passedTime6 > totalTime6 && countRect5 < 25) {
    let ra = random(10,40);
    let ra1 = random(10,40);
    noFill();
    strokeWeight(2);
    stroke(255,127,0);
    
    rectMode(CENTER);
    rect(random(ra+50,width-ra-50), random(ra1+50, height-ra1-50), ra, ra1);
    

    savedTime6 = millis();

    countRect5++;
  }

  //Bücher Sozialwissenschaften, Recht, Wirtschaft
  if (passedTime7 > totalTime7 && countRect6 < 18) {
    let ra = random(10,40);
    let ra1 = random(10,40);
    noFill();
    strokeWeight(2);
    stroke(255);
    
    rectMode(CENTER);
    rect(random(ra+50,width-ra-50), random(ra1+50, height-ra1-50), ra, ra1);
    

    savedTime7 = millis();

    countRect6++;
  }

  //Bücher Ratgeber
  if (passedTime8 > totalTime8 && countRect7 < 102) {
    let ra = random(10,40);
    let ra1 = random(10,40);
    noFill();
    strokeWeight(2);
    stroke(0,204,0);
    
    rectMode(CENTER);
    rect(random(ra+50,width-ra-50), random(ra1+50, height-ra1-50), ra, ra1);
    

    savedTime8 = millis();

    countRect7++;
  }

  //Bücher Geisteswissenschaften, Kunst, Musik
  if (passedTime9 > totalTime9 && countRect8 < 33) {
    let ra = random(10,40);
    let ra1 = random(10,40);
    noFill();
    strokeWeight(2);
    stroke(139,69,19);
    
    rectMode(CENTER);
    rect(random(ra+50,width-ra-50), random(ra1+50, height-ra1-50), ra, ra1);
    

    savedTime9 = millis();

    countRect8++;
  }

  //Bücher Schule und Lernen
  if (passedTime10 > totalTime10 && countRect9 < 76) {
    let ra = random(10,40);
    let ra1 = random(10,40);
    noFill();
    strokeWeight(2);
    stroke(255,51,51);
    
    rectMode(CENTER);
    rect(random(ra+50,width-ra-50), random(ra1+50, height-ra1-50), ra, ra1);
    

    savedTime10 = millis();

    countRect9++;
  }

  //Bücher Sachbuch
  if (passedTime11 > totalTime11 && countRect10 < 81) {
    let ra = random(10,40);
    let ra1 = random(10,40);
    noFill();
    strokeWeight(2);
    stroke(255,222,173);
    
    rectMode(CENTER);
    rect(random(ra+50,width-ra-50), random(ra1+50, height-ra1-50), ra, ra1);
    

    savedTime11 = millis();

    countRect10++;
  }
  
  
  //Ebooks//
  if (passedTime2 > totalTime2 && countEllipse < 68) {
    let ra2  = random(20, 50);
    let ra3  = random(20, 20);
    noStroke();
    fill(180,180,180,150);

    rectMode(CENTER);
    rect(random(ra2+100,width-ra2-100), random(ra3+100, height-ra3-100), ra2, ra3);

    savedTime2 = millis();

    countEllipse++;
  }
  


  
  noStroke();
  fill(133,133,133);
  rect(400,770,800,50);
  fill(0);
  textSize(20);
  text("E-Books: " + countEllipse, 290, 780);
  text("Bücher: " + (countRect2 + countRect3 + countRect4 + countRect5 + countRect6 + countRect7 + countRect8 + countRect9 + countRect10), 410,  780);

  console.log(totalTime);
  
}

function mousePressed() {
  background(133,133,133);
  countEllipse = 0;
  countRect = 0;
  countRect2 = 0;
  countRect3 = 0;
  countRect4 = 0;
  countRect5 = 0;
  countRect6 = 0;
  countRect7 = 0;
  countRect8 = 0;
  countRect9 = 0;
  countRect10 = 0;
}

/*
function drawrect(x,y) {
  colorMode(HSB);
  fill(200,200,200);
  rect(x,y,80,133);
}
*/