let sentence = "CLOCKWORKS";
let sentence2 = "seconds";
let sentence3 = "t";
let sentence4 = "i";
let sentence5 = "c";
let sentence6 = "k";
let sentenceArray = [];
let sentenceArray2 = [];
let sentenceArray3 = [];
let sentenceArray4 = [];
let sentenceArray5 = [];
let sentenceArray6 = [];
let r = 100;
let theta = 0;
var offset = 0;
var strum = 1;
var angle = 0;

function setup() {
  createCanvas(800, 800);
  textAlign(CENTER);
  textSize(25);
  
  sentenceArray = sentence.split("");
  sentenceArray2 = sentence2.split("");
  sentenceArray3 = sentence3.split("");
  sentenceArray4 = sentence4.split("");
  sentenceArray5 = sentence5.split("");
  sentenceArray6 = sentence6.split("");
}

function draw() {
  background(39, 225, 193);
  
  noStroke();
  beginShape();
  vertex(0, height);
  for(var x2 = 0; x2 < width; x2++){
    var angle = offset + x2 * 0.01;
    var y2 = map(sin(angle), -strum, strum, 150, 250);
    vertex(x2, y2+150);
    vertex(x2, y2+200);
    
  
    for(let i = 0; i < sentenceArray3.length; i++){
      fill(39, 225, 193);
      text(sentenceArray3[i],x2 * 5, y2+450);
      text(sentenceArray4[i],x2 * 7, y2+500);
      text(sentenceArray5[i],x2 * 10, y2+520);
      text(sentenceArray6[i],x2 * 8, y2+550);
    }
  }

  fill(47, 15, 93);
    vertex(width, height);
    endShape();
    offset += hour()/200;
  
  for(x2 = 0; x2 < width; x2++){
    var angle = offset + x2 * 0.01;
    var y2 = map(sin(angle), -strum, strum, 150, 250);
    
    for(let i = 0; i < sentenceArray3.length; i++){
      fill(39, 225, 193);
      text(sentenceArray3[i],x2 * 6, y2+450+second());
      fill(14, 162, 147);
      text(sentenceArray4[i],x2 * 7, y2+500-second());
      fill(39, 225, 193);
      text(sentenceArray5[i],x2 * 10, y2+540);
      fill(14, 162, 147);
      text(sentenceArray6[i],x2 * 8, y2+550 + second()*2);
    }
  }
  
  translate(width / 2, height / 2);
  let x = r * cos(theta);
  let y = r * sin(theta);
  
  fill(245, 243, 193);
  textStyle(BOLD);
  
  for (let i = 0; i < sentenceArray.length; i++) {
    rotate(QUARTER_PI / 1.25);
    text(sentenceArray[i], x+second()*2, y+second()*2);
  }
  

  for (let i = 0; i < sentenceArray2.length; i++) {
    rotate(second()*10 );
    text(sentenceArray2[i], x+minute()*2, minute()*2); 
  }
}
	

