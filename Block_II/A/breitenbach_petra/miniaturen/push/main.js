var w, h;
let rx, ry, rw, rh;
let r;
let cx, cy;
let farbe;
let dark;
let backgroundColor, fingerColor, strokeColor;

function setup() {
    //Canvas Einstellungen
    w = windowWidth;
    h = windowHeight;
    canvas = createCanvas(w, h);
    rx = width - 255;
    ry = (height / 2) - 140;
    rw = 150;
    rh = 280;
    r = 60;
    farbe = 255;

    dark = false;

    noCursor();
}

function draw() {

    if(dark) {
        backgroundColor = 0;
        fingerColor = 0;
        strokeColor = 150;
    }
    if(!dark) {
        backgroundColor = 255;
        fingerColor = 255;
        strokeColor = 0;
    }

    background(backgroundColor);

    let leftWall = 0;
    let rightWall = width - 280;

    cx = constrain(mouseX, leftWall, rightWall);
    cy = height / 2;

    //Button
    fill(255, 0, 0);
    noStroke();
    rectMode(CORNER);
    rect(rx, ry, rw, rh);

    push();
    translate(cx, cy);


    rectMode(CORNERS);

    //Finger von links
    fill(fingerColor);
    stroke(strokeColor);
    strokeWeight(3);
    rect((0 - mouseX) -100, -80, 90, 80, 0, 80, 80, 0);

    rectMode(CENTER);

    //Fingernagel von links
    fill(fingerColor);
    rect(0, 0, r * 2, 100, 10, 50, 50, 10);

    //Finger Falten
    line(-350, -50, -350, 50);
    line(-380, -50, -380, 50);

    line(-800, -50, -800, 50);
    line(-830, -50, -830, 50);

    line(-1250, -50, -1250, 50);
    line(-1270, -50, -1270, 50);
    pop();


    rectMode(CORNER);
    fill(0);
    stroke(strokeColor);
    strokeWeight(3);
    beginShape();
    vertex(width - 100, 0);
    vertex(width - 100, (height / 2) - 175);
    vertex(width - 150, (height / 2) - 175);
    vertex(width - 150, (height / 2) + 175);
    vertex(width - 100, (height / 2) + 175);
    vertex(width - 100, height);
    vertex(width + 10, height);
    vertex(width + 10, 0);
    endShape();

    if (mouseX > (width - 346)) {
        //farbe = 150;
        rx = mouseX + 90;

        if(mouseX >= (width - 280)) {
            rx = width - 190;
            dark = true;
        } else {
            dark = false;
        }

    } else {
        //farbe = 255;
        rx = width - 255;
    }
    

}

function windowResized() {

    w = windowWidth;
    h = windowHeight;
    resizeCanvas(w, h);
    rx = width - 255;
    ry = (height / 2) - 140;
    rw = 150;
    rh = 280;
    dark = false;
}
