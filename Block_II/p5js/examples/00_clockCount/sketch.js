let w = 800;let h = 800;

let clock; // Declare object

function setup() {
  createCanvas(w, h);
  angleMode(DEGREES);
  // Create object
  clock = new clockCount();
}

function draw() {
  
  clock.display(w/2,h/2);

}
// -------------------------------------------- //

function mouseClicked(event) {
  clock.tick();
}

// -------------------------------------------- //
// Clock class
class clockCount {
  constructor() {
    this.s = 0;
    this.diameter = w/2;
  }

  tick() { this.s += 1; }

  display(x,y) {

    if ( this.s == 60 ) {
         background(0,255,0);
    } else {
         background(255);
    }
    if ( this.s > 60 ) { this.s = 1; }
    
    let s = map(this.s, 0, 60, 0, 360);

    fill(0);
    noStroke();
    ellipse(x,y,this.diameter,this.diameter);

    // seconds
    push();
    translate(x,y);
    rotate(s);
    stroke(255, 0, 0);
    strokeWeight(10);
    line(0,0,0,this.diameter/-2+40);
    pop();

  }
}