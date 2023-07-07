

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  b = width/8;
  x = width/4;
  y = height/4 * 0.75;
  yb = y*2;

  check = true;

  
  textSize(30);
  anweisung = "Grün";
  textAlign(CENTER);

  farbe = int(random(0,2));

  if(farbe == 0){
    grun = 255;
    rot = 0;
  }
  else{
    grun = 0;
    rot = 255;
  }

  counter = 0;
  timer = 5;

  farbekasten = 255;
  farbekastenrichtig = 255;
}

function draw() {
  background(255);

 fill(50);
  
  beginShape();
  vertex(-50, height);
  vertex(width/8, height/5*2.8);
  vertex(width - width/8, height/5*2.8);
  vertex(width+50, height);
  endShape(CLOSE);

  translate(width/2, height/2);
 

  milliseconds = int(millis() % 60000);
  seconds = int(milliseconds / 1000);

  

  noStroke();
  fill(0,255,0);
  rect(-x, y, b, b, 50, 0, 0, 50);

  fill(255,0,0);
  rect(x, y, b, b, 0, 50, 50, 0);

  fill(50);
  rect(x-10, y, b, b-20, 0, 40, 40, 0);
  rect(-x+10, y, b, b-20, 40, 0, 0, 40);


  fill(10);
  rect(-x, yb+10, b+10, b+10, 20);
  fill(0, 255, 0);
  rect(-x, yb, b, b, 20);

  fill(10);
  rect(x, yb+10, b+10, b+10, 20);
  fill(255, 0, 0);
  rect(x, yb, b, b, 20);
  




  fill(farbekastenrichtig,255, farbekastenrichtig);
  rect(0, -175, 250, 175, 25);

  fill(farbekasten);
  rect(0, -175, 200, 125, 25);

  textSize(75);
  fill(rot, grun, 0);
  text(anweisung, 10, -100, x+50, y+50);

  textSize(25);
  fill(0);
  text("Score: "+counter, -width/2 + 100, -height/2 + 250, x+50, y+50);
 
  fill(130, 130, 130);
  stroke(2)
  rect(0, y, width/2.5, b, 10);
  rect(0, y, width/2.5, b/3, 10);

  fill(100);
  rect(0, y, width/8, b+50, 10);
  fill(255);
  rect(0, y-30, width/9, b/2,10);

  if(seconds >= timer){
    background(0);
    textSize(100);
    text("GAME OVER", 0, height/4+height/8, width, height);
    textSize(75);
    text("Score: " + counter, 0, height/4*3 - height/8, width, height);
    noLoop();
  }

  

  textSize(30);
  fill(0);
  text(timer - seconds, 5, y, 100, 100);

  if(seconds == 59 && check){
    timer -= 60;
    check = false;
  }
  else if(seconds != 59){
    check = true;
  }
  
  farbekasten += 10;
  farbekastenrichtig += 10;

}

function keyPressed() {
  if(seconds <= timer){
    if (keyCode === LEFT_ARROW) {
    if(farbe == 0){
      background(255);
      counter++;
      timer++;
      farbekastenrichtig = 0;
    }
    else{
      timer -= 5;
      farbekasten = 0;
    }
    a = int(random(0,2));
    farbe = int(random(0,2));

    if(a == 0){
      anweisung = "Grün";
    }
    else{
      anweisung = "Rot";
    }

    if(farbe == 0){
      grun = 255;
      rot = 0;
    }
    else{
      grun = 0;
      rot = 255;
    }

  } else if (keyCode === RIGHT_ARROW) {
    if(farbe == 1){
      background(255);
      counter++;
      timer++;
      farbekastenrichtig = 0;
    }
    else{
      timer -= 5;
      farbekasten = 0;
    }

    a = int(random(0,2));
    farbe = int(random(0,2));

    if(a == 0){
      anweisung = "Grün";
    }
    else{
      anweisung = "Rot";
    }

    if(farbe == 0){
      grun = 255;
      rot = 0;
    }
    else{
      grun = 0;
      rot = 255;
    }
  }
  }
  
}

function mousePressed(){
  if(seconds <= timer){
    if(mouseX > width/4 - b/2 && mouseX < width/4+b/2 && mouseY > (height/4 * 0.75) * 2 + height/2 - b/2 && mouseY < (height/4 * 0.75) * 2 + height/2 + b/2){
    if(farbe == 0){
      background(255);
      counter++;
      timer++;
      farbekastenrichtig = 0;
    }
    else{
      timer -= 5;
      farbekasten = 0;
    }
    a = int(random(0,2));
    farbe = int(random(0,2));

    if(a == 0){
      anweisung = "Grün";
    }
    else{
      anweisung = "Rot";
    }

    if(farbe == 0){
      grun = 255;
      rot = 0;
    }
    else{
      grun = 0;
      rot = 255;
    }
  }
  else if(mouseX > width/4*3 - b/2 && mouseX < width/4*3 +b/2 && mouseY > (height/4 * 0.75)*2 + height/2 - b/2 && mouseY < (height/4 * 0.75)*2 + height/2 + b/2){
    if(farbe == 1){
      background(255);
      counter++;
      timer++;
      farbekastenrichtig = 0;
    }
    else{
      timer -= 5;
      farbekasten = 0;
    }

    a = int(random(0,2));
    farbe = int(random(0,2));

    if(a == 0){
      anweisung = "Grün";
    }
    else{
      anweisung = "Rot";
    }

    if(farbe == 0){
      grun = 255;
      rot = 0;
    }
    else{
      grun = 0;
      rot = 255;
    }
  }

  
  }
  
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}