var sizeW = 0;
var sizeO = 3;
var sizeB = 5;
var a = 0.1;
var helligkeit = 0;

function setup() {
  createCanvas(800, 800);
  angleMode(DEGREES)
  rectMode(CENTER);
  colorMode(HSB);
  
}

function draw() {
  background(40,10,95);
 
  translate(width/2, width/2);
  rotate(a);
  
  
  //weißer Kreis
  
  stroke(19,60, helligkeit + 40);
  strokeWeight(3);
  noFill();

  
  beginShape();
  for (var i = 0; i < 359; i++) {
    var r1Min = map(sin(frameCount) * sizeW, -1, 1, 50, 100);
    var r1Max = map(sin(frameCount * 5), -1, 1, 100, 0);

    var r2Min = map(sin(frameCount / 2), -1, 1, 100, 50);
    var r2Max = map(sin(frameCount), -1, 1, 0, 100);

    var r1 = map(sin(i * 10), -1, 1, r1Min, r1Max);
    var r2 = map(sin(i * 6 + 90), -1, 1, r2Min, r2Max);
    var r = r1 + r2;
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape(CLOSE);
  
  //oragener Kreis

  stroke(19,90, helligkeit + 30);
  strokeWeight(6);

  beginShape();
  for (var i = 0; i < 359; i++) {
    var r3Min = map(sin(frameCount) * sizeO, -1, 1, 50, 100);
    var r3Max = map(sin(frameCount * 2), -1, 1, 100, 0);

    var r4Min = map(sin(frameCount / 2), -1, 1, 100, 50);
    var r4Max = map(sin(frameCount * 2), -1, 1, 0, 100);

    var r3 = map(sin(i * 5), -1, 1, r3Min, r3Max);
    var r4 = map(sin(i * 6 + 90), -1, 1, r4Min, r4Max);
    var r = r3 + r4;
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape(CLOSE);
  
  //blauer Kreis

  stroke(19,90,helligkeit + 0);
  strokeWeight(8);

  beginShape();
  for (var i = 0; i < 359; i++) {
    var r5Min = map(sin(frameCount) * sizeB, -1, 1, 50, 100);
    var r5Max = map(sin(frameCount * 5), -1, 1, 100, 0);

    var r6Min = map(sin(frameCount / 2), -1, 1, 100, 50);
    var r6Max = map(sin(frameCount), -1, 1, 0, 100);

    var r5 = map(sin(i * 3), -1, 1, r5Min, r5Max);
    var r6 = map(sin(i * 6 + 90), -1, 1, r6Min, r6Max);
    var r = r5 + r6;
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape(CLOSE);
  if(frameCount%60 == 0) {
    helligkeit += 2;
    a += 2;
  }
  
  if(frameCount%3600 == 0) {
    sizeW += 5;
    sizeO += 10;
    sizeB += 15;
    
    helligkeit = 0;
  }
 

}
