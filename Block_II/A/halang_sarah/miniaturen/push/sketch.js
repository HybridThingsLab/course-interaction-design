let button;
var w = window.innerWidth;
var h = window.innerHeight; 

function setup(){
  canvas = createCanvas(w, h);

  background(0);
  button = createButton('click to change background');
  button.position(w/2, h/2);
  button.mousePressed(changeBG);
}

function changeBG() {
  let val = (random(255), random(255), random(255));
  background(val);
}
function windowResized() {
  w = windowWidth;
  h = windowHeight;
  resizeCanvas(w, h);
}
