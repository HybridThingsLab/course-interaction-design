let prog = 0;
let nextButton;
let oldMouseX;
let oldMouseY;

//Pull Setup
let canvasSize = 800; //Size of Canvas
let circleRadius = 200; //Size of Circle
let circleSize = 20; //Size of little Circle
let circleX, circleY; //Little Circle Position
let backgroundColor; //Color
let saduration = 0;
let followMouse = false; //Drag Boolean
let up; //Up-facing Vector to calculate Color
let circleDir; //To little Circle facing Vector to calculate Color
let arcPos = 0; //Arc counter for arc animation
let arcGrow = true;

//Press Setup
let buttons = []; //Array for buttons
let gravity = true;
let explosion = false;
let collision = true;

//Turn Setup
let turns = []; //Array for turns
let balls = 0;
let speed = 0;
let time = 3;

//Pic Setup
let count = 0;
let backgroundReset = true;
let ballArr = [];

function setup() {
  nextButton = new Button("NEXT",canvasSize/2,(canvasSize/10)*9,100,50);
  buttons.push(new Button("GRAVITY",canvasSize/2,(canvasSize/10)*3,300,60));
  buttons.push(new Button("COLLISION",canvasSize/2,(canvasSize/10)*5,300,60));
  buttons.push(new Button("EXPLOSION",canvasSize/2,(canvasSize/10)*7,300,60));
  turns.push(new Turn("BALLS",(canvasSize/5)*1,(canvasSize/5)*2,150,5,10));
  turns.push(new Turn("SPEED",(canvasSize/5)*4,(canvasSize/5)*2,150,3,6));
  turns.push(new Turn("TIME",canvasSize/2,(canvasSize/5)*3,150,5,10));
  up = createVector(0,1);
  circleDir = createVector(0,1);
  createCanvas(canvasSize, canvasSize);
  circleX = canvasSize / 2;
  circleY = canvasSize / 2;
  backgroundColor = color(0);
}

function draw() {
  if (prog == 0) pullCode();
  if (prog == 1) pressCode();
  if (prog == 2) turnCode();
  if (prog == 3) picCode();
  nextButton.displayButton();
  title();
}

function mousePressed() { 
  if (mouseX > circleX - circleSize/2 && //Checks if little circle is klicked
    mouseX < circleX + circleSize/2 &&
    mouseY > circleY - circleSize/2 &&
    mouseY < circleY + circleSize/2 && prog == 0) {
      followMouse = true;
    }
  if (prog == 1) { 
    for (let i = 0; i<buttons.length; i++) {
      if (buttons[i].mouseOnButton()) {
        if (!buttons[i].on) buttons[i].on = true;
        else buttons[i].on = false;
      }
    }
  }
  if (prog == 2) {
    for (let i = 0; i<turns.length; i++) {
      if (turns[i].mouseOnTurn()) {
        oldMouseX = mouseX;
        oldMouseY = mouseY;
        console.log("oldMousePos overwrite");
        if (!turns[i].turned) {
          turns[i].oldVector.set(turns[i].vector);
          console.log("Turn "+i+" oldVector set vector");
        }
        turns[i].turned = true;
        console.log("Turn "+i+" clicked");
      }
    }
  }
  if (nextButton.mouseOnButton()) {
    prog++;
    if (prog > 3) prog = 0;
    console.log("next pressed now running Programm "+prog)
  }
}

function mouseReleased() { //Checks if mouse gets released to stop dragging
  if (followMouse) {
    followMouse = false;
    console.log("Angle of Circle: "+degrees(up.angleBetween(circleDir)));
    console.log("Circle distance from Center: "+circleDir.mag());
  }
  for (let i = 0; i<turns.length; i++) {
    turns[i].turned = false;
  }
  if (prog == 2) {
  balls =turns[0].value;
  speed =turns[1].value;
  time =turns[2].value;
  }
}

function title() {
  rectMode(CENTER);
  sadSetting();
  rect((canvasSize/20)*4,(canvasSize/20)*1.5,200,70,20);
  noStroke();
  textAlign(CENTER);
  textSize(30);
  fill(0); 
  if (prog == 0) text("Pull",(canvasSize/10)*2,(canvasSize/10)*0.9);
  if (prog == 1) text("Press",(canvasSize/10)*2,(canvasSize/10)*0.9);
  if (prog == 2) text("Turn",(canvasSize/10)*2,(canvasSize/10)*0.9);
  if (prog == 3) text("Pic",(canvasSize/10)*2,(canvasSize/10)*0.9);
}

function pullCode() {
  if (followMouse) { //Makes the little Cirlce follow the mouse when dragged
    circleX = mouseX;
    circleY = mouseY;
  }

  arcPos++; //Lets the arcs grow and shrink
  if (arcPos > 359 && arcGrow) {
    arcGrow = false;
    console.log("arcGrow now flase");
  }
  if (arcPos > 719 && !arcGrow) {
    arcGrow = true;
    arcPos = 0;
    console.log("arcGrow now true");
  }

  circleDir.set(circleX-canvasSize/2,circleY-canvasSize/2); //Vector from center in circle direction
  
  saduration = dist(canvasSize / 2, canvasSize / 2, circleX, circleY); //Setup for Color Variables
  var col = degrees(up.angleBetween(circleDir));

  colorMode(HSB); //Fills the Background Variable with the values from the current little circle Position
  if (circleX < canvasSize/2) {
    backgroundColor = color(col,saduration, 255);
    stroke(col,saduration,255);
  } else {
    backgroundColor = color(360+col, saduration, 255);
    stroke(backgroundColor);
  }

 background(backgroundColor); //sets Background color on current backgroundColor variable
 
 fill(255); //Draws the White Circle
  noStroke();
  circle(canvasSize / 2, canvasSize / 2, circleRadius * 2);

  strokeWeight(30); //Draws the moving Arcs
  noFill();
  if (arcGrow) {
    stroke(backgroundColor);
    arc(width/2,height/2,250,250,radians(arcPos),radians(arcPos+arcPos));
    stroke(255);
    arc(width/2,height/2,500,500,radians(2*arcPos+90),radians(3*arcPos+90));
  } else {
    stroke(backgroundColor);
    arc(width/2,height/2,250,250,radians(arcPos+arcPos),radians(arcPos));
    stroke(255);
    arc(width/2,height/2,500,500,radians(3*arcPos+90),radians(2*arcPos+90));
  }

  if (circleX < canvasSize/2+1 && circleX > canvasSize/2-1 && circleY < canvasSize/2+1 && circleY > canvasSize/2-1) { //Drag me Hover Symbol
    fill(50);
    noStroke();
    textSize(30);
    textAlign(CENTER);
    text("Drag me!",canvasSize/2,canvasSize/2-20-arcPos/5);
  }

  if (followMouse) { //Changes the apperiance of the circle based on if it is dragged or not
    fill(backgroundColor);
    stroke(0);
  } else if (saduration < 50) {
    fill(50);
    stroke(backgroundColor);
  } else {
    fill(255);
    stroke(backgroundColor);
  }

  if (circleDir.mag() > circleRadius) { //Keeps little circle within the white circle Limits
    let rectPos = createVector(mouseX-width/2,mouseY-height/2);
    rectPos.normalize();
    rectPos.mult(circleRadius);
    circleX = rectPos.x + width/2;
    circleY = rectPos.y + height/2;
  }
  strokeWeight(4); //Draws the little circle used to move and change color
  circle(circleX,circleY,circleSize);
  if (mouseX > circleX - circleSize/2 && //Checks if little circle is klicked
    mouseX < circleX + circleSize/2 &&
    mouseY > circleY - circleSize/2 &&
    mouseY < circleY + circleSize/2) {
    circle(circleX,circleY,circleSize+6);
  }
  noStroke();
}

function pressCode() {
  background(backgroundColor);
  for (let i = 0; i<3; i++) {
    buttons[i].displayButton();
  }
  fill(255);
}

function turnCode() {
  background(backgroundColor);
  for (let i = 0; i < turns.length; i++) {
    turns[i].turnRotate();
    turns[i].displayTurn();
    turns[i].value = turns[i].setValue();
  }
  backgroundReset = true;
}

function picCode() {
  if (backgroundReset) {
    for (let i = 0; i < balls; i++) {
      console.log("ball created");
      let x;
      let y;
      let color;
      if (random(-1,1)<0) { x = random(-speed-1,-speed+1) } else x = random(speed+1,speed-1);
      if (random(-1,1)<0) { y = random(-speed-1,-speed+1) } else y = random(speed+1,speed-1);
      color = backgroundColor;
      ballArr.push(new Ball(random(350,450),random(350,450),x,y,color));
    }
    background(255);
    backgroundReset = false;
  }
  noStroke();
  if (saduration<50) fill(50);
  else fill(backgroundColor);
  rectMode(CORNER);
  rect(0,0,200,800);
  rect(0,600,800,200);
  rect(0,0,800,200);
  rect(600,0,200,800);
  count++;
  if (count/60 < time) {
    for (let i = 0; i < balls; i++) {
      ballArr[i].runBall();
    }
  }
}

function sadSetting() {
  if (saduration < 50) {
    fill(50);
  } else {
    fill(255);
  }
}

class Button { //Button class to not repeat code
  constructor(n,x,y,w,h) {
    this.name = n;
    this.xPos = x;
    this.yPos = y;
    this.width = w;
    this.height = h;
    this.xMov = 0;
    this.yMov = 0;
    this.on = false;
  }

  mouseOnButton() { //True when Button is hovered on
    if (mouseX < this.xPos+this.width/2 && mouseX > this.xPos-this.width/2 &&
    mouseY < this.yPos+this.height/2 && mouseY > this.yPos-this.height/2) {
      return true;
    } else return false;
  }

  buttonOnDesign() { //Design for activated Button
    stroke(255);
    strokeWeight(4);
    fill(backgroundColor);
  }

  buttonHighlightDesign() { //Design for highlighted Button
    noStroke();
    fill(20);
    rect(this.xPos,this.yPos,this.width+10,this.height+10,25);
  }

  displayButton() { //Prints Button on Screen
    rectMode(CENTER);
    if (this.mouseOnButton()) {
      this.buttonHighlightDesign();
    }
    fill(255);
    if (this.on) {
      this.buttonOnDesign();
    }
    if (saduration<50) fill(50);
    rect(this.xPos,this.yPos,this.width,this.height,20);
    fill(0);
    noStroke();
    textSize(this.height-30);
    textAlign(CENTER);
    text(this.name,this.xPos,this.yPos+12);
  }
}

class Turn {
  constructor(n,x,y,r,v,vx) {
    this.name = n;
    this.xPos = x;
    this.yPos = y;
    this.radius = r;
    this.value = v;
    this.valueMax = vx;
    this.vector = createVector(0,-1);
    this.oldVector = createVector(0,-1);
    this.turned = false;
  }

  displayTurn() {
    this.hoverHighlightDesign();
    noStroke();
    sadSetting();
    ellipse(this.xPos,this.yPos,this.radius,this.radius);
    let a = createVector();
    a.set(this.vector.x*this.radius/2.7,this.vector.y*this.radius/2.7);
    a.add(this.xPos,this.yPos);
    fill(20);
    ellipse(a.x,a.y,this.radius/5,this.radius/5);
    noFill();
    stroke(backgroundColor);
    rect(this.xPos,this.yPos,this.radius/2,this.radius/4,20);
    noStroke();
    fill(0);
    textSize(this.radius/4-10);
    textAlign(CENTER);
    text(this.value,this.xPos,this.yPos+10);
    sadSetting();
    rect(this.xPos,this.yPos+this.radius/1.3,this.radius*1.2,this.radius/3,20);
    fill(0);
    text(this.name,this.xPos,this.yPos+this.radius/1.3+10);
  }

  mouseOnTurn() {
    let a = createVector(mouseX-this.xPos,mouseY-this.yPos);
    if (a.mag()<=this.radius/2) return true;
    else return false;
  }

  hoverHighlightDesign() {
    if (this.mouseOnTurn()) {
      noStroke();
      fill(20);
      ellipse(this.xPos,this.yPos,this.radius+10,this.radius+10);
    }
  }

  turnRotate() {
    if (this.turned) {
      let a = createVector(this.oldVector.x,this.oldVector.y);
      a.rotate(radians((mouseX-oldMouseX)/2));
      this.vector.set(a);
    } 
  }

  setValue() {
    let a = createVector(1,0);
    let intervall = 180/this.valueMax;
    let angleBe = degrees(a.angleBetween(this.vector));
    for (let i = 1; i < this.valueMax+1; i++) {
      if (angleBe*-1<intervall*i) {
        return i;
      }
    }
    return 1;
  }
}

class Ball {
  constructor(x,y,xD,yD,col) {
  this.xPos = x;
  this.yPos = y;
  this.xDir = xD;
  this.yDir = yD;
  this.color = col;
  }

  runBall() {
    if (collision) { this.collide(); }
    this.move();
    this.displayBall();
  }

  displayBall() {
    noStroke();
    fill(this.color);
    ellipse(this.xPos,this.yPos,5,5);
  }

  move() {
    this.xPos = this.xPos + this.xDir;
    this.yPos = this.yPos + this.yDir;
    if (gravity) this.yDir = this.yDir+0.5;
  }

  collide() {
    if (this.xPos > 600 || this.xPos < 200) this.xDir = this.xDir * -1;
    if (this.yPos > 600 || this.yPos < 200) {
      this.yDir = this.yDir * -1;
      console.log("ground collision");
    }
  }
}