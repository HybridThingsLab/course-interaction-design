//Variablen Finder
let video;

let colorToMatch;

let tolerance = 3;

let ball
let ballSpeed

var spiel

//Variablenb3seite
var fill1;
var fill2;
var fill3;

var rgb1;
var rgb2;
var rgb3;


//Variablen Kreis
let handpose;
let predictions = [];
let index
let indexTip
var start = 0.1
var start1 = 0

//Variablen Hand
let hand
let handspeed=7
let handkreis =70
let handkreisSpeed=5
let handX
let handY


function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(width, height);
  //video.style('transform', 'scale(-1,1)');
  handpose = ml5.handpose(video, modelReady);
  
  handpose.on("predict", results => {
  predictions = results;
  });
  
  
  video.hide();
  ball = 45;
  ballSpeed = -1;
  colorToMatch = color(255,150,0);
  textFont('Agency FB')
  spiel = false;  
  
  fill1 = "#EEC2C1"
  fill2 = "#D2875A"
  fill3 = "#620300"

  rgb1 = "rgb(238,194,193)"
  rgb2 = "rgb(210,135,90)"
  rgb3 = "rgb(98,3,0)"
  
   handX=width/2
   handY=height/2+150

  
  angleMode(DEGREES)
  
  noiseDetail(2,0.75)
}

function modelReady() {
  console.log("Model ready!");
}


function draw() {
  //Startseite!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //scale(-1,1);
  if(!spiel) {
  background(238,226,207);
  rectMode(CENTER);
  noStroke();
  //Außen rechtecke
  fill(255)
  rect(126,240,170,240,5)
  rect(319,240,170,240,5)
  rect(512,240,170,240,5)
  //Innen recktecke
  fill(fill1)
  rect(126,205,150,150)
  fill(fill2)
  rect(319,205,150,150)
  fill(fill3)
  rect(512,205,150,150)
  
  //rect 1
  if(mouseX >= 51 && mouseX <= 201 && mouseY >= 130 && mouseY <= 280){
    fill1 = "#620300"
    rgb1 = "rgb(98,3,0)"
  } else {
    fill1 = "#EEC2C1"
    rgb1 = "rgb(238,194,193)"
  }
  
    //rect 2
  if(mouseX >= 244 && mouseX <= 394 && mouseY >= 130 && mouseY <= 280){
    fill2 = "#000C37"
    rgb2 = "rgb(0,12,55)"
  } else {
    fill2 = "#D2875A"
    rgb2 = "rgb(210,135,90)"
  }
  
  if(mouseX >= 437 && mouseX <= 587 && mouseY >= 130 && mouseY <= 280){
    fill3 = "#EEE2CF"
    rgb3 = "rgb(238,226,207)"
  } else {
    fill3 = "#620300"
    rgb3 = "rgb(98,3,0)"
  }
  fill("#292630")
  textSize(30);
  text("Color",51,310);
  text("Your",244,310);
  text("Motion",437,310);
  
  textSize(15);
  text(rgb1,51,327);
  text(rgb2,244,327);
  text(rgb3,437,327);
  
  textSize(21);
  fill(41,38,48)
  text("press space",280,440)
   
  if(keyCode == 32)  {
     spiel = true;
     }
    //Programm!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  } else if (spiel) {
 
  image(video, 0,0,width, height);
    
  //HAND ICON
    fill(255,255,255,95)
    circle(320,handY,handkreis,handkreis,80)
    handkreis+=handkreisSpeed
    if(handkreis>=80||handkreis<=40){
      handkreisSpeed=-handkreisSpeed
    }

    
  image(hand,handX-(30),handY-(35),50,70)
  
    handY-=handspeed
    print(handY)
    if(handY<=-50){
      handspeed=0
    }

  
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!RGB Picker
  rectMode(CORNER);
  noFill()
  stroke(120)
  strokeWeight(3)
  circle(mouseX,mouseY,ball)
  ball = ball + ballSpeed;
  
  if(ball >= 45 || ball <= 20) {
    ballSpeed = -ballSpeed;
  }
  
  let firstPx = findColor(video, colorToMatch, tolerance);
  fill(colorToMatch);
  
  mousePressed();
   
 //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Kreis
  if(predictions.length>0) {
  let hand=predictions[0];
  index = hand.annotations.indexFinger;
    
  indexTip=index[3];
  }
  //Kreis
  noStroke();
  translate(width/2,height/2);
  
  var space = 0.15;
  
  for(var i = 0; i < 360; i+=space) {
  var xoff= map(cos(i),-1,1,0,3);
  var yoff =map(sin(i),-1,1,0,3);
    
  var n = noise(xoff+start, yoff+start);
    
  var h = map(n,0,1,-150,150);
  rotate(space);
  fill(255,30)
  rect(200,0,h,1);
  }
    
  if(predictions.length>0) {
  let hand=predictions[0];
  index = hand.annotations.indexFinger;
    
  indexTip=index[3];
  start+=map(indexTip[1],480,0,0,1.5*(1/30))
  }
  //start+=1/30
  
  var space1 = 0.2;
  if(predictions.length>0) {
    let hand=predictions[0];
   index = hand.annotations.indexFinger;
    
  indexTip=index[3];
  start1+=map(indexTip[1],480,0,0,1/30)
  }
  for(var u = 0; u < 360; u+=space1) {
    var xoff1= map(cos(u),-1,1,0,3);
    var yoff1 =map(sin(u),-1,1,0,3);
    
    var n1 = noise(xoff1+start1, yoff1+start1);
    
    var h1 = map(n1,0,1,-150,150);
    rotate(space1); 
  
    
    fill(colorToMatch,0)
    rect(200,0,h1,1);
    
  }
}
}

function mousePressed() {
  loadPixels();
  colorToMatch = get(mouseX, mouseY);
}

function preload() {
  hand=loadImage('hand.png')
}


function findColor(input, c, tolerance) {
  
  let matchR = c[0];
  let matchG = c[1];
  let matchB = c[2];
  
  input.loadPixels();
  
  for(let y = 0; y <input.height; y++) {
    for(let x = 0; x < input.width; x++) {
      
      let index = (y * input.width + x) * 4;
      let r = input.pixels[index];
      let g = input.pixels[index + 1];
      let b = input.pixels[index + 2];
      
      if(r >= matchR - tolerance && r <= matchR + tolerance &&
         g >= matchG - tolerance && g <= matchG + tolerance &&
         b >= matchB - tolerance && b <= matchB + tolerance ) {
        
        return createVector(x,y);
        
      }
    }
  }
}
