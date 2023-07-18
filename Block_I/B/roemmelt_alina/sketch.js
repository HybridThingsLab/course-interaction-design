let sunRadius = 50;
let mercuryOrbitRadius = 58*1.3;
let mercuryRadius = 10;
let venusOrbitRadius = 108*1.3;
let venusRadius = 20;
let earthOrbitRadius = 150*1.3;
let earthRadius = 25;
let marsOrbitRadius = 228*1.3;
let marsRadius = 15;
let angle = 0;
let angleIncrement = 0.01;
let days = 0;
let mercuryCount = 0;
let venusCount = 0;
let earthCount = 0;
let marsCount = 0;

let years = 0;

let strokeM = 1;
let strokeV = 1;
let strokeE = 1;
let strokeMa = 1;



function setup() {
  createCanvas(800, 800);
  textSize(25);
  background(0);
  textAlign(CENTER);
  rectMode(CENTER);
}

function draw() {
  
  background(0);
  drawSun();
  drawMercury();
  drawVenus();
  drawEarth();
  drawMars();
  angle += angleIncrement;
  fill(0);
  rect(width/2,750,500,50),
  fill(255);
  text("Years: "+years+"     "+"Days: "+int(days),width/2,750);
  days+=0.9;  
  mercuryCount += 0.9;
  venusCount += 0.9;
  earthCount += 0.9;
  marsCount += 0.9;
  if(mercuryCount > 88){
    mercuryCount = 0;
  }
  if(venusCount > 225){
    venusCount = 0;
  }
  if(earthCount > 365){
    earthCount = 0;
  }
  if(marsCount > 687){
    marsCount = 0;
  }
  if(days > 365){
    days = 0;
    years+=1;
  }

  if(years > 6){
    background(0);
    years = 0;
    days = 0;
  }

  if(earthCount > 340){
   strokeE++;
   if(strokeE > 5){
    strokeE--;
   }

  }
  else{
    strokeE = 1;
  }


  if(marsCount > 660){
    strokeMa++;
    if(strokeMa > 5){
     strokeMa--;
    }
 
   }
   else{
     strokeMa = 1;
   }

   if(mercuryCount > 60){
    strokeM++;
    if(strokeM > 5){
     strokeM--;
    }
 
   }
   else{
     strokeM = 1;
   }

   if(venusCount > 200){
    strokeV++;
    if(strokeV > 5){
     strokeV--;
    }
 
   }
   else{
     strokeV = 1;
   }

  
}


function drawSun() {
  fill(255, 255, 0);
  noStroke();
  ellipse(width/2, height/2, sunRadius*2, sunRadius*2);
}

function drawMercury() {
  push();
  translate(width/2, height/2);
  rotate(angle*3.2);
  strokeWeight(strokeM),
  stroke(200);
  noFill();
  ellipse(0, 0, mercuryOrbitRadius*2, mercuryOrbitRadius*2);
  let mercuryX = mercuryOrbitRadius * cos(angle*3.2);
  let mercuryY = mercuryOrbitRadius * sin(angle*3.2);
  let mercuryX2 = mercuryOrbitRadius * cos((angle-1)*3.2);
  let mercuryY2 = mercuryOrbitRadius * sin((angle-1)*3.2);
  fill(200);
  
  noStroke();
  //ellipse(mercuryX, mercuryY, mercuryRadius*2, mercuryRadius*2);

  
  pop();
}
s
function drawVenus() {
  push();
  translate(width/2, height/2);
  rotate(angle*1.2);
  stroke(255, 100, 100);
  noFill();
  strokeWeight(strokeV);
  ellipse(0, 0, venusOrbitRadius*2, venusOrbitRadius*2);
  let venusX = venusOrbitRadius * cos(angle*1.2);
  let venusY = venusOrbitRadius * sin(angle*1.2);
  fill(255, 100, 100);
  noStroke();
 // ellipse(venusX, venusY, venusRadius*2, venusRadius*2);
  pop();
}

function drawEarth() {
  push();
  translate(width/2, height/2);
  rotate(angle*0.75);
  stroke(100, 100, 255);
  noFill();
  strokeWeight(strokeE);
  ellipse(0, 0, earthOrbitRadius*2, earthOrbitRadius*2);
  let earthX = earthOrbitRadius * cos(angle*0.75);
  let earthY = earthOrbitRadius * sin(angle*0.75);
  fill(100, 100, 255);
  noStroke();
  //ellipse(earthX, earthY, earthRadius*2, earthRadius*2);
  pop();
}

function drawMars() {
  push();
  translate(width/2, height/2);
  rotate(angle*0.45);
  stroke(255, 100, 255);
  noFill();
  strokeWeight(strokeMa);
  ellipse(0, 0, marsOrbitRadius*2, marsOrbitRadius*2);
  let marsX = marsOrbitRadius * cos(angle*0.45);
  let marsY = marsOrbitRadius * sin(angle*0.45);
  fill(255, 100, 255);
  noStroke();
  //ellipse(marsX, marsY, marsRadius*2, marsRadius*2);
  pop();
}
