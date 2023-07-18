let pointsPath = []
let pointsDir = []
let pointsNorm = []
let pointsFootprint = []
let pointCol = []
let allDots = []
let pathDir = []

let borderCrit
let borderCare = 200
let rotationAngle = .5

let human
let human2
let cat
let cat2
let frog
let frog2
let deer
let deer2
let humanIcon
let catIcon
let deerIcon
let frogIcon

let lebewesen = []
let icons = []

let backgroundCols = []
let pathSpeed = [40, 30, 70, 30]
let SpeedSelector = 0
let lebewesenSelector = 0
let pathSelector = 1
let littleIconSize = 60

// path parameters 
let randomVal
let pathRadius = 300
let offsetNoiseStrength = 350
let offsetNoiseXScale = 5
let pathFussAbstand = [5,4,3]
let pathFussAbstand2 = [50, 30, 50, 60]



// Loading Images
function preload(){
  human = loadImage('fußabdruck.png')
  human2 = loadImage('fußabdruck2.png')
  cat = loadImage('katzenpfote.png')
  cat2 = loadImage('katzenpfote2.png')
  frog = loadImage('frogfootprint.png')
  frog2 = loadImage('frogfootprint2.png')
  deer = loadImage('deerfootprint.png')
  deer2 = loadImage('deerfootprint2.png')
  frogIcon = loadImage('frogIcon.png')
  deerIcon = loadImage('deerIcon.png')
  catIcon = loadImage('catIcon.png')
  humanIcon = loadImage('humanIcon.png')
  littleFrogIcon = loadImage('frogIcon.png')
  littleDeerIcon = loadImage('deerIcon.png')
  littleCatIcon = loadImage('catIcon.png')
  littleHumanIcon = loadImage('humanIcon.png')
}





function setup() {
  canvas = createCanvas(1080, 1080).parent('canvas');
  noiseDetail(10,.1)
  imageMode(CENTER)
  
// image size 
  human.width = 30
  human.height = 100
  human2.width = 30
  human2.height = 100
  cat.width = 30
  cat.height = 30
  cat2.width = 30
  cat2.height = 30
  frog.width = 30
  frog.height = 30
  frog2.width = 30
  frog2.height = 30
  deer.width = 40
  deer.height = 40
  deer2.width = 40
  deer2.height = 40
  littleFrogIcon.width = littleIconSize
  littleFrogIcon.height = littleIconSize
  littleDeerIcon.width = littleIconSize
  littleDeerIcon.height = littleIconSize
  littleCatIcon.width = littleIconSize
  littleCatIcon.height = littleIconSize
  littleHumanIcon.width = littleIconSize
  littleHumanIcon.height = littleIconSize
  lebewesen = [human,human2,cat,cat2,frog,frog2,deer,deer2]
  icons = [humanIcon,catIcon,frogIcon,deerIcon]
  randomVal = random(0, 20000)

  backgroundCols[0] = createVector(133, 133, 163)
  backgroundCols[1] = createVector(120, 120, 120)
  backgroundCols[2] = createVector(143, 191, 146)
  backgroundCols[3] = createVector(181, 160, 138)
  

 
  
  for (let i = 0; i < 500; i++) { 
    pointsDir[i] = createVector()
    pointsNorm[i] = createVector()
    pointsFootprint[i] = createVector()
  }
  pathBerechnung()
}





function draw() {
  background(backgroundCols[lebewesenSelector].x, backgroundCols[lebewesenSelector].y, backgroundCols[lebewesenSelector].z);



push()
if(pathSelector == 0){
  translate(width/2,height/2-10)
}
  scale(.95)
  
  for (let i = 0; i < int(frameCount/pathSpeed[lebewesenSelector]); i++) {

    pointCol[i] = 200-(int(frameCount/pathSpeed[lebewesenSelector])-i)*20

// Farbabstufungen
    if(pointCol[i]>50){
      background(backgroundCols[lebewesenSelector].x, backgroundCols[lebewesenSelector].y, backgroundCols[lebewesenSelector].z, pointCol[i]/2)
    }
    
    allDots[i].col = pointCol[i]  

// push/pop für rotate
    push()
    allDots[i].realizeI()
    pop()
  }

  //Icons
  // image(icons[lebewesenSelector],0,0)
  pop()
  if(mouseX > width/2 - 2 * littleIconSize && mouseX < width/2 + 2 * littleIconSize && mouseY > height - littleIconSize){
    cursor(HAND);
   }else{
    cursor(ARROW)
   }
  image(littleHumanIcon,width/2-littleIconSize*1.5, height - littleIconSize/2)
  image(littleCatIcon,width/2-littleIconSize*.5, height - littleIconSize/2)
  image(littleFrogIcon,width/2+littleIconSize*.5, height - littleIconSize/2)
  image(littleDeerIcon,width/2+littleIconSize*1.5, height - littleIconSize/2)

  if (frameCount>=3599){
    reset()
  }
}




// Mouse Pressed
function mousePressed(){
if(mouseX < width/2 - 1*littleIconSize && mouseX >  width/2 - 2*littleIconSize && mouseY > height-littleIconSize){
  lebewesenSelector = 0
  reset()
}
if(mouseX < width/2 - 0*littleIconSize && mouseX >  width/2 - 1*littleIconSize && mouseY >height-littleIconSize){
  lebewesenSelector = 1
  reset()
}
if(mouseX < width/2 + 1*littleIconSize && mouseX >  width/2 + 0*littleIconSize && mouseY >height-littleIconSize){
  lebewesenSelector = 2
  reset()
}
if(mouseX < width/2 + 2*littleIconSize && mouseX >  width/2 + 1*littleIconSize && mouseY >height-littleIconSize){
  lebewesenSelector = 3
  reset()
}

  
    // lebewesenSelector++
    // if(lebewesenSelector == 4){
    //   lebewesenSelector = 0
    // }
    // reset() 
    // pathBerechnung()

}




// Klasse dots 
class dots{
  constructor(x,y,col,angle,count){
  this.count = count
  this.angle = angle
  this.x = x
  this.y = y
  this.col = col
  }

  realizeI(){
    translate(this.x, this.y)
    rotate(this.angle+PI/2)
    imageMode(CENTER)
    fill(255,this.col)
    if (this.count%2==0){
      image(lebewesen[lebewesenSelector*2],0,0)
    }else{
      image(lebewesen[lebewesenSelector*2+1],0,0)
    }

  }

  realize(){
    noStroke()
    fill(255,this.col)
    ellipse(this.x,this.y,40,40)
  }
}




function reset(){
  frameCount = 0;
  randomVal = random(0, 20000)
  pathBerechnung()
}


function pathBerechnung(){

  if(pathSelector == 0){
  for (let i = 0; i < 500; i++) {
  pointsPath[i] = createVector(pathRadius*sin(i/pathFussAbstand[SpeedSelector]+randomVal) + offsetNoiseStrength*(noise(i/offsetNoiseXScale+randomVal)-.28),pathRadius*cos(i/pathFussAbstand[SpeedSelector]+randomVal) + offsetNoiseStrength*(noise(i/offsetNoiseXScale+randomVal)-.28))
  }

  }else{
    pathDir[0] = createVector(30,30)
    pathDir[0].normalize().setMag(pathFussAbstand2[lebewesenSelector]).rotate(random(0, Math.PI*2))
    pointsPath[0] = createVector(random(borderCare*1.2, width - borderCare*1.2),random(borderCare*1.2, height - borderCare*1.2))
    for (let i = 1; i < 300; i++) {
    pointsPath[i] = createVector(pointsPath[i-1].x + pathDir[i-1].x, pointsPath[i-1].y + pathDir[i-1].y)

      if(pointsPath[i].x < borderCare || pointsPath[i].x > width - borderCare || pointsPath[i].y < borderCare || pointsPath[i].y > height - borderCare - littleIconSize){
        pathDir[i] = pathDir[i-1]
        pathDir[i].rotate(rotationAngle)
        print("angle")
        
      // }else if((pointsPath[i].x < borderCare || pointsPath[i].x > width - borderCare) && (pathDir[i-1].heading() / TWO_PI * 8) % 2 < 1){
      //   pathDir[i] = pathDir[i-1]
      //   pathDir[i].rotate(rotationAngle)
      
      // }else if((pointsPath[i].y < borderCare || pointsPath[i].y > height - borderCare) && (pathDir[i-1].heading() / TWO_PI * 8) % 2 < 1){
      //   pathDir[i] = pathDir[i-1]
      //   pathDir[i].rotate(rotationAngle)
      
      // }else if((pointsPath[i].x < borderCare || pointsPath[i].x > width - borderCare) && (pathDir[i-1].heading() / TWO_PI * 8) % 2 >= 1){
      //   pathDir[i] = pathDir[i-1]
      //   pathDir[i].rotate(-rotationAngle)

      // }else if((pointsPath[i].y < borderCare || pointsPath[i].y > height - borderCare) && (pathDir[i-1].heading() / TWO_PI * 8) % 2 >= 1){
      //   pathDir[i] = pathDir[i-1]
      //   pathDir[i].rotate(-rotationAngle)
      
      }else{
        pathDir[i] = pathDir[i-1]
        pathDir[i].rotate(2*(noise(i/3 )-.28))
        print((pathDir[i-1].heading() / TWO_PI * 8) % 2)
      }

      if(pointsPath[i].x >= borderCare && pointsPath[i].x <= width - borderCare && pointsPath[i].y >= borderCare && pointsPath[i].y <= height - borderCare - littleIconSize){

        if(int(random(0,1))==0){
          rotationAngle = -rotationAngle
        }
      }
    }
  }

  for (let i = 0; i < pointsPath.length-1; i++) {
    // Direction Vector 
      pointsDir[i].set(pointsPath[i+1])
      pointsDir[i].sub(pointsPath[i])
    // Normal Vector 
      pointsNorm[i].x =  pointsDir[i].y
      pointsNorm[i].y = -pointsDir[i].x
  
    // New path for footprint offset with normalvector 
      pointsFootprint[i].set(pointsPath[i])
      if(i%2==0){
        pointsFootprint[i].add(pointsNorm[i].div(pointsNorm[i].div(5).mag))
      }else{
        pointsFootprint[i].sub(pointsNorm[i].div(pointsNorm[i].div(5).mag))
      }

    // Object creation from class for diffrent colors 
      allDots[i] = new dots(pointsFootprint[i].x,pointsFootprint[i].y,pointCol[i],pointsDir[i].heading(),i)
  }
}