let w;
let h;
let spinning;
let velocity = 10;

function setup() {
    w = windowWidth;
    h = windowHeight;
    spinning = w/400;
    velocity = mouseX;
    createCanvas(windowWidth/1.1, windowHeight/1.1, WEBGL);
    normalMaterial();
    describe(
      'Camera orbits around a box when mouse is hold-clicked & then moved.'
    );
}


function draw() {
    background(255);
    orbitControl(w/400, 0, 0);
    if (mouseIsPressed) {
        cursor('ew-resize');
    } else {
        cursor('col-resize');
    }
    strokeWeight(windowWidth/500);
    stroke(0);
    noFill();
    box(w/4, h/4, w/4, 1);
}

function windowResized() {
    resizeCanvas(windowWidth/1.1, windowHeight/1.1);
    w = windowWidth;
    h = windowHeight;
}




