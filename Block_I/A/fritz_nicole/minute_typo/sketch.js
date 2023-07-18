let rotiere1 = 0;
let rotiere2 = 0;
let counter1 = 1;
let counter2 = 1;
let lastSecond = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  
  // ob Sekunde sich geändert hat
  let currentSecond = second();
  if (currentSecond !== lastSecond) {
    lastSecond = currentSecond;
    if (rotiere1 > 4) {
      rotiere1 = 0;
      counter1++;
    if (rotiere2 > 3) {
      rotiere2 = 0;
      counter2++;
    }
    } 
  }

  if (counter1 < 60) {      
    rotiere1 += 0.08;        //speed 0.1?
  }
  if (counter2 < 60) {
   rotiere2+= 0.08;
  }
  
  
  fill(255);              //weißer bereich
  rect(0, 0, width, height/2);
                 
  fill(0);                //schwarzer bereich
  rect(0, height/2, width, height/2);
 
  push();
  translate(width/2, -10);        
  rotate(radians(-95));           
  
  if (!(counter1 % 2 == 0)) {
  rotate(rotiere1);
  textSize(100);
  fill(0);
  text(counter1, -30, height/2);   
  }
  
                
  pop();
  translate(width/2, height+10);
  
  if (counter2 % 2 == 0) {
  rotate(rotiere2);
  textSize(100);
  fill(255);
  text(counter2, -30, height/2);
  } 
  
  if (counter1 >= 60 || counter2 >= 60) {
    counter1 = 1;
    counter2 = 1;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

