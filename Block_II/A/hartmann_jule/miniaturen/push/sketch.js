let bulb = false;
let light = 50;
let rlx; 
let rrx;
let rly; 
let rry; 
let icon;
let margin;
let w;
let h;
let sl;
let sr;
let sl1;
let sr1;
let sl2;
let sr2;
let sw;

function preload(){
    on =loadImage("img/on.png")
    off =loadImage("img/off.png")
    imgw = 300;
    imgh = 251;
  }

function setup() {
    w = windowWidth;
    h = windowHeight;
    createCanvas(w, h);
    icon = on;
    margin = w/90;
    rlx = w/2.5;
    rly = h/3;
    rrx = w-2* rlx;
    rry = h - 2*rly;
    sl = w/2.4;
    sr = w-sl;
    sl1 = sl + margin;
    sl2 = sl;
    sr1 = sr - margin;
    sr2 = sr;
    sw= w/500.0;
}

function draw() {
    background(light);
    stroke(0);
    strokeWeight(sw);
    noFill();
    rectMode(CORNER);
    rect(rlx, rly, rrx, rry, 5);

    stroke(0);
    beginShape();
        vertex(sl, h/2);
        vertex(sl1, h/2.9);
        vertex(sr1, h/2.9);
        vertex(sr, h/2);
        vertex(sr2, h-h/2.9);
        vertex(sl2, h-h/2.9);
    endShape(CLOSE);

    // rectMode(CENTER);
    // strokeWeight(sw/2);
    // rect(windowWidth/2,windowHeight/2, windowWidth/9.8, windowHeight/8.8, 5);
    imageMode(CENTER);
    image(icon,windowWidth/2,windowHeight/2, windowWidth/10, windowHeight/9, 0, 0, icon.width, icon.height);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    rlx = rlx / w*windowWidth;
    rly = rly/ h*windowHeight;
    rrx= rrx / w*windowWidth;
    rry= rry/h*windowHeight;
    sl=sl / w*windowWidth;
    sr= sr/ w*windowWidth;
    sl1= sl1/ w*windowWidth;
    sl2= sl2 / w*windowWidth;
    sr1= sr1/ w*windowWidth;
    sr2= sr2 / w*windowWidth;
    margin = margin / w* windowWidth;
    sw = sw / w * windowWidth;
    w = windowWidth;
    h = windowHeight;
}

function mouseClicked() {
    if (mouseX > windowWidth/3
        && mouseX < windowWidth - windowWidth/3
        && mouseY > windowHeight/3
        && mouseY < windowHeight - windowHeight/3
        ) {
        if (bulb) {
            light = 50;
            bulb = false;
            icon = on;
            sr2+=margin;
            sl2-=margin;
            sr1-=margin;
            sl1+=margin;

        } else if (!bulb) {
            light = 255;
            bulb = true;
            icon = off;
            sr2-=margin;
            sl2+=margin;
            sr1+=margin;
            sl1-=margin;
        }
    }
}