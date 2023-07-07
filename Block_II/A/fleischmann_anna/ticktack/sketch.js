let circles = [];
var w;
var h;
var rx;
var ry;
var rw;
var rh;
var z;
var reihe;
var kreis;
var balken;
var ende;
var start;
var zahl;
var score;
var r1;
var r2;
var r3;
var r4;
var r5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  w=windowWidth;
  h=windowHeight;
  reihe=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

  rx=w/4;
  ry=h/4;

  for(let i = 0; i < 25; i++) {
    circles[i] = new Circle(rx, ry, w/2/5-5, h/2/5-5);
    rx=rx+w/2/5;
    if(rx>=w/4*3){
      rx=w/4;
      ry=ry+h/2/5;
    }
  }

  for(let i = 0; i < circles.length; i++) {
    circles[i].zeige();
  }

  r1=int(random(0,5));
  r2=int(random(5,10));
  r3=int(random(10,15));
  r4=int(random(15,20));
  r5=int(random(20,25));

  circles[r1].kreistrue();
  circles[r2].kreistrue();
  circles[r3].kreistrue();
  circles[r4].kreistrue();
  circles[r5].kreistrue();

  balken=w/2+5;

  ende=false;
  start=false;

  zahl=0;
  score=0;
}

function draw() {
  w=windowWidth;
  h=windowHeight;
  createCanvas(w,h);
  background(150);
  noStroke();
  fill(255);
  rect(w/4-5,h/4-5,w/2+5,h/2+5);
  fill(200);
  rect(w/4-5,h/5,balken,w/30);
  textAlign(CENTER);
  textSize(w/20);
  fill(0);
  text("Decke die Kreise auf.",w/2,h/6);
  

  for(let i = 0; i < circles.length; i++) {
    circles[i].displayKreise();
  }
 
  if(start==true){
    balken=balken-w/500;

    for(let i = 0; i < circles.length; i++) {
      //circles[i].move();
      circles[i].display();
    }
  }
  
  if(balken<0){
    balken=0;
    ende=true;
  }
  if(balken>w/2+5){
    balken=w/2+5;
  }

  zahl=zahl+1;
  if(zahl>250){
    start=true;
  }

  if(ende==true){
    if(score==5){
      background(150);
      fill(0);
      textAlign(CENTER);
      textSize(w/15);
      text("Du hast gewonnen!",w/2,h/2);
    }
    else{
      background(150);
      fill(0);
      textAlign(CENTER);
      textSize(w/15);
      text("Versuchs noch mal.",w/2,h/2);
    }
    textSize(w/25);
    text("Lade die Seite neu, um es noch mal zu versuchen",w/2,h/4*3);
  }
}

function mousePressed(){
  for(let i=0;i<circles.length;i++){
    circles[i].clicked();
  }
}



class Circle {
  constructor(x, y, xSpeed, ySpeed) {
    this.x = x;
    this.y = y;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    z=false;
    kreis=false;
  }

  move() {
    this.x += this.xSpeed;
    if (this.x < 0 || this.x > width) {
      this.xSpeed *= -1;
    }

    this.y += this.ySpeed;
    if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;
    }
  }

  display() {
   

    if(this.z==true){
    fill(0);
    rect(this.x, this.y, this.xSpeed,this.ySpeed);
    }
  }

  displayKreise(){
    if(this.kreis==true){
      fill(0);
      ellipse(this.x+w/20,this.y+h/20,w/30,h/30);
    }
  }

  zeige(){
    this.z=true;
  }
  clicked(){
    if(dist(mouseX, mouseY,this.x+w/20,this.y+h/20)<h/20){
      this.z=false;
      if(this.kreis==true){
        balken=balken+w/10;
        score=score+1;
      }
      else {
        balken=balken-w/10;
      }
      
    }
  }
  kreistrue(){
    this.kreis=true;
  }
}