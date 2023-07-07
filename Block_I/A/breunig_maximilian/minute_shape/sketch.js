// https://p5js.org/examples/input-clock.html

let w = 800
let h = 800;
let numPointsBig = 0;
let numPointsSmall = 0;
let sizeS = 150;
let sizeB = 300;
let seconds = 0;
function setup() {
  canvas = createCanvas(800, 800).parent('canvas');
  setInterval(() =>{
    seconds++;
    numPointsSmall++;
    if (seconds % 10 == 0) {
      numPointsBig++;
    }
  },1000);
  
}
function draw(){
  background(0);
  if (numPointsBig > 5) {
    numPointsBig =0;
    zeichnen(numPointsBig, sizeB, 0);
  } else {
    zeichnen(numPointsBig, sizeB, 0);
  }

  if (numPointsSmall > 9) {
    numPointsSmall = 0;
    zeichnen(numPointsSmall,sizeS, Math.PI/2);
  } else {
    zeichnen(numPointsSmall,sizeS, Math.PI/2);
  }
}

function zeichnen(n,size,winkel){
  strokeWeight(5);
  stroke(255);
  noFill();
  beginShape();
  for (let i = 0; i < n; i++) {
    const angle = 2 * Math.PI * i / n - winkel;
    const x = width/2 + size * Math.cos(angle);
    const y = height/2 + size * Math.sin(angle);
    vertex(x,y);
  }
  endShape(CLOSE);
}