let capture;
let capturewidth = 640;    
let captureheight = 480;
let pointcol = 'black';

var customFont;

let emotions = ["neutral","happy", "sad", "angry","fearful","surprised"];

let faceapi;
let detections = [];

let backgroundcol;
let fadeStartTime;

//neutral
let angleneutral = 0;
let amplitudeneutral = 20;
let yOffsetneutral;
let periodneutral = 300;
let transparenzneutr = 0;

//happy
let theta = 0.0;
let yvalues;
let transparenzsin = 0;

//sad
let drops = [];
let transparenztraurig = 0;

//angry
let xoff = 0;
let yoff = 0;
let transparenzanger = 0;

 //fear
let transparenzfear = 0;

//surprised
let time = 0;
let transparenzsurpr= 0;

var neutralWert;
var happyWert;
var sadWert;
var angryWert;
var fearfulWert;
var surprisedWert;

function preload(){
  customFont = loadFont('myFont.ttf');
}

function setup() {
  createCanvas(capturewidth*1.5, captureheight*1.5);
  
  backgroundcol = color(255);
  fadeStartTime = 4000;
  yOffsetneutral = height/2;
  
  capture = createCapture(VIDEO);
  capture.position(0,0);
  
  capture.hide();
  
  const faceOptions = {withLandmarks: true, withExpressions: true, withDescriptors: false};
  
  faceapi = ml5.faceApi(capture, faceOptions, faceReady);
  
  yvalues = new Array(floor((width + 16) / 16));
  
  for (let i = 0; i < 100; i++) {
    drops.push(new Drop());
  }
  
  }

function faceReady(){
  faceapi.detect(gotFaces);
}

function gotFaces(error, result){
  if (error){
    console.log(error);
    return
  }
    detections = result;
    faceapi.detect(gotFaces);
   // console.log(detections);
}
  

function draw() {
  background(backgroundcol);
  textFont(customFont);
  textSize(50);
  textAlign(CENTER);
  fill(255);
  noStroke();
  text("digital",width/2,200);
  text("emotion",width/2,250);
  text("mirror",width/2,300);
  textSize(40);
  text("show happiness, sadness, anger, fear or surprise",width/2,600);
  
  let elapsedTime = (millis()-fadeStartTime)/1000;
  let lerpFactor=map(elapsedTime,0,8,0,1);
  lerpFactor = constrain(lerpFactor,0,1);
  backgroundcol = lerpColor(color(255), color(150),lerpFactor);
  
  let y = yOffsetneutral + amplitudeneutral * sin(angleneutral);
  stroke(255);
  strokeWeight(4);
  line(0, y, width, y);
  angleneutral += TWO_PI / periodneutral;
  
  if(millis() > 15000){
    
  if(happyWert > 0.5){
    backgroundcol = color(251,250,205);
    background(backgroundcol);
    calcWave();
    renderWave();
    transparenzsin += 10;
  } 
    
  if(sadWert > 0.5){
    backgroundcol = color(130, 148, 196);
    background(backgroundcol);
    for (let i = 40; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
    }
    transparenztraurig += 10
  }
  
  if(angryWert > 0.5){
    backgroundcol = color(246, 114, 128);
    background(backgroundcol);
    stroke(255);
    noFill();
    transparenzanger += 10;
    beginShape();
    strokeWeight(4);
    for (let x = 0; x < width; x += 10) {
      let y = map(noise(xoff, yoff), 0, 1, 0, height) / 2 + height/7 ;
      vertex(x,y);
      xoff += 0.5;
    }
    endShape();
  
    xoff = (frameCount * 0.5)/2;
    yoff = (frameCount * 0.5)/2;
  }
  
  if(fearfulWert > 0.5){
    backgroundcol = color(65, 68, 75);
    background(backgroundcol);
    strokeWeight(4);
    stroke(255);
    transparenzfear += 10;
    noFill();
    beginShape();
    curveVertex(width/7*4, 0);
      for (let i = 0; i < 50; i++) {
      curveVertex(
        width/7*4 + random(-20, 20),
        map(i, 0, 50, 0, height) + random(-10, 10)
      );
  }
  curveVertex(width/7*4, height);
  endShape();
  }
  
  if(surprisedWert > 0.5){
    backgroundcol = color(246, 174, 153);
    background(backgroundcol);
    stroke(255,transparenzsurpr);
    strokeWeight(4);
    noFill();
    let yOffset = height/10 + 10 * sin(time);
    beginShape();
    for (let x = 0; x <= width; x++) {
      // Calculate the y-coordinate of the current point on the curve
      let y = yOffset + height/10 + 25 * (1.5 - abs(cos((x/16) + time)));
      // Add a small variation to the height offset to make the wave move up and down
      y += 5 * cos((x/16) + time*1.5);
      // Add the current point to the shape
      vertex(x, y);
    }
    // End the shape
    endShape();

    // Increment the time variable to animate the curve
    time += 0.1;
    transparenzsurpr += 10;
  } 
  
  if(neutralWert > 0.5){
    
    backgroundcol  = color(150);
    transparenzsurpr = 0;
    transparenzsin = 0;
    if(millis() > 18000){
      background(backgroundcol);
      let y = yOffsetneutral + amplitudeneutral * sin(angleneutral);
      stroke(255);
      strokeWeight(4);
      line(0, y, width, y);
      angleneutral += TWO_PI / periodneutral;
    }
  }
  }
  
  capture.loadPixels();
  
  
  
  /*
  for (let y = 0; y < capture.height; y+=5){
    for (let x = 0; x < capture.width; x +=5){
      
      const pixelIndex = (x + y * capture.width) * 4
      const r = capture.pixels[pixelIndex + 0];
      const g = capture.pixels[pixelIndex + 1];
      const b = capture.pixels[pixelIndex + 2];
      const a = capture.pixels[pixelIndex + 3];
      
      const avg = (r + g + b) / 3;
      
      var diameter = map(avg, 0, 255, 1, 7);
      
      circle(x,y, diameter);
      
      
      
    }
  }
  
  */
  
  push();
  fill(pointcol);
      if(detections.length>0){
        for (i=0; i<detections.length; i ++){
          var points = detections[i].landmarks.positions;

          for (j=0; j<points.length; j ++){
           //circle( points[j]._x,points[j]._y, 5);
            }
          
          var neutralLevel = detections[i].expressions.neutral;
          var happyLevel = detections[i].expressions.happy;
          var sadLevel = detections[i].expressions.sad;
          var angryLevel = detections[i].expressions.angry;
          var fearfulLevel = detections[i].expressions.fearful;
          var surprisedLevel = detections[i].expressions.surprised;
          
          
          neutralWert = neutralLevel;
          happyWert = happyLevel;
          sadWert = sadLevel;
          angryWert = angryLevel;
          fearfulWert = fearfulLevel;
          surprisedWert = surprisedLevel; 
         
          push();
        
          
          
          for (k = 0; k<emotions.length; k++) {
            
            var thisemotion = emotions[k];
            
            var thisemotionlevel= detections[i].expressions[thisemotion];
            
          } 
            
          /*
          fill(220);
          circle(30,30,20 * neutralLevel);
          text("NEUTRAL VALUE: " + neutralLevel, 40,30);
          pop();
          */
          
          }    
    }
      pop();
}
  
function calcWave() {
  theta += 0.04;
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * 50.0;
    x += (TWO_PI / 500.0) * 16;
  }
}

function renderWave() {
  noStroke();
  fill(255,transparenzsin);
  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * 16, height / 7 * 5 + yvalues[x], 16, 16);
  }
}
  
class Drop {
  constructor() {
    this.x = random(width/7*2 -40,width/7*2 +40);
    this.y = random(-800, -50);
    this.speed = random(5, 8);
    this.length = random(10, 15);
  }

  fall() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = random(-200, -100);
      this.speed = random(5, 10);
    }
  }

  show() {
    stroke(255);
    strokeWeight(2);
    line(this.x, this.y, this.x, this.y + this.length);
  }
}
