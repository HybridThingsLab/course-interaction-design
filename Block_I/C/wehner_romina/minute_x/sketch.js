let points;

let current;
let percent = 0.9;
let previous;

let s = second();

function setup() {
  createCanvas(800, 800);
  points = [];
  const n = 20;

  for (let i = 0; i < n; i++) {
    let angle = (i * TWO_PI) / n;
    let v = p5.Vector.fromAngle(angle);
    v.mult(width / 2);
    v.add(width / 2, height / 2);
    points.push(v);
  }

  reset();
}

function reset() {
  current = createVector(random(width), random(height));
  background(0);
  stroke(0);
  strokeWeight(8);
  for (let p of points) {
    point(p.x, p.y);
  }
  
  
}

function draw() {

  
  if (second() % 60 == 1) {
    reset();
  }

  for (let i = 0; i < 1000; i++) {
    strokeWeight(1);
    stroke(random(0, 255), random(0, 255), random(0, 255), 200);
    let next = random(points);
    if (next !== previous) {
    current.x = lerp(current.x, next.x, percent);
    current.y = lerp(current.y, next.y, percent);
    point(current.x, current.y);
    }
    
    previous = next;
    
    rotate(30);
    
  }
}
