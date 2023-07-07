let circles = [];
let move = [];
var rad;
var centx;
var centy;
var radius = 200;
var s = 60;
let count = 0;
let red = 'red';

let seconds, milliseconds;


function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
  
    
  
  centx = width/2;
  centy = height/2;
  
}

function draw() {
    background(255);
  milliseconds = int(millis() % 60000);
  seconds = int(milliseconds / 1000);
  noStroke();
  moving();
  count++;
  kreise()
  spawn();
  
}

function kreise() {
    for(let i = 0; i < circles.length; i++) {
        let c = circles[i];
        let m = move[i];
        fill('red');
        if (count == 3600) {
          circles = [];
          count = 0;
        }
        circle(c.x, c.y, 10);
        c.x =  c.x + 4*m.x;
        c.y =  c.y + 4*m.y;
        //console.log(int(c.x) + " " + int(centx + (radius * sin(m.z))) + " " + int(centy + (radius * cos(m.z))));
    
    
        if (int(c.x) >= int(centx + (radius * sin(m.z))) && (int(c.y) >=  int(centy + (radius * cos(m.z))))) {
            m.x = 0;
            m.y = 0;
      }
        if (int(c.x) >= int(centx + (radius * sin(m.z))) && (int(c.y) >=  int(centy + (radius * cos(m.z))))) {
            m.x = 0;
            m.y = 0;
      }
    }
}

function spawn() {
    if(frameCount % s == 0) {
  circles.push(new p5.Vector(centx, centy));
  //move.push(1);
    }
}


function moving() {
    for (let ang = 0; ang < 360; ang+=6) {
        rad = ang;
        dirx = sin(rad);
        diry = cos(rad);
        move.push(new p5.Vector(dirx, diry, rad));
  }
}

