let slider;
 
function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, 255, 100);
  slider.position(width/2, height/2);
  slider.style('width', '80px');
}

function draw() {
  let val = slider.value();
  background(val);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
