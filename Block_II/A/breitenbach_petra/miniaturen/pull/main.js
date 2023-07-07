let yPos;
let yValue;

function setup() {
    createCanvas(windowWidth, windowHeight);
    yPos = 0;
    yValue = 0;
}

function draw() {
    background(255);
    rectMode(CENTER);

    if (mouseX < width && mouseX > 0 && mouseY < height && mouseY > 0) {
        cursor('ew-resize');
    }


    //Leiste
    //strokeWeight(2);
    stroke(0);
    fill(255);
    //rect(width / 2, height * 0.75, width - (width * 0.25), 15, 10);
    //line(width * 0.25, height * 0.75, width * 0.75, height * 0.75);

    //Regler
    //strokeWeight(3);
    //fill(255, 0, 0);
    //stroke(255, 0, 0);
    //ellipse(xPos, height * 0.75, 30);



    // "display"
    rectMode(CORNERS);
    fill(0);
    strokeWeight(2);
    stroke(0);
    //noStroke();
    rect(width * 0.25, height * 0.25, width * 0.75, height * 0.75);

    //Ausmalen
    let m = map(yValue, 0, width, height * 0.75, height * 0.25);
    fill(255);
    strokeWeight(3);
    stroke(255);
    //noStroke();
    rect(width * 0.25, m, width * 0.75, height * 0.75);
}

function mouseDragged() {
    //yPos = mouseX;
    yValue = mouseX;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    yPos = 0;
    yValue = 0;
}
