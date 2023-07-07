let w, h, rx, ry, rw, rh, minlength;
let easing = 0.01;

function setup() {
  w = windowWidth/1.1;
  h = windowHeight/1.1;
  createCanvas(w, h);
  rw = w/10;
  rh = h/20;
  rx = w / 2 - rw / 2;
  ry = 2;
}

function draw() {
  background(255);
  strokeWeight(windowWidth/500);
  rect(rx, ry, rw, rh);

  minlength = h/20 - rh;

  if (mouseX > rx && mouseX < rx + rw
    && mouseY <= h - h/20
    && mouseIsPressed){
    if(mouseY > rh) {
      rh = mouseY;
    }
    cursor("grabbing");
  } else {
    rh += minlength * easing;
    if (mouseX > rx && mouseX < rx + rw
      && mouseY < rh) {
        cursor("grab");
    } else {
      cursor("downarrow.png");
    }

  }
}

function windowResized() {
  resizeCanvas(windowWidth/1.1, windowHeight/1.1);
  w = windowWidth/1.1;
  h = windowHeight/1.1;
  rw = w/10;
  rh = h/20;
  rx = w / 2 - rw / 2;
  ry = 2;
}