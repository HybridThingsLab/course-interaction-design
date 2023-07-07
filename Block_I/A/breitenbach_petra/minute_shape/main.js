let x1;
let x2;
let x3;
let x4;
let x5;
let x6;
let mouth, mund;
let speed;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    x1 = -(height /10) / 2;
    x2 = ((width/11) * 11) + (height/10)/2;
    x3 = -(height /10) / 2;
    x4 = ((width/11) * 11) + (height/10)/2;
    x5 = -(height /10) / 2;
    x6 = ((width/11) * 11) + (height/10)/2;
    mouth = true;
    mund = true;
    speed = ((width + (height/10)) / 10)/60;
}

function draw() {
    background(0);

    //Punkte
    //fill(255);
    noStroke;
    for(let z = width / 11; z < width; z += width / 11) {
        for(let s = height / 7; s < height; s += height / 7) {
            fill(255);
            ellipse(z, s, 10);
        }
    }

    //Punkte verschwinden
    fill(0);
    //Erste Zeile
    rectMode(CORNER);
    rect(-(height / 10) / 2, (height / 7) - 5,x1, 10);
    //zweite Zeile
    rectMode(CORNERS);
    rect(x2, ((height/7) * 2) - 5, width, ((height/7) *2) +5);
    //dritte Zeile
    rectMode(CORNER);
    rect(-(height / 10) / 2, ((height / 7) * 3) -5, x3, 10);
    //vierte Zeile
    rectMode(CORNERS);
    rect(x4, ((height / 7) * 4) - 5, width, ((height / 7) * 4) + 5);
    //Fünfte Zeile
    rectMode(CORNER);
    rect(-(height / 10) / 2, ((height / 7) * 5) - 5, x5, 10);
    //sechste Zeile
    rectMode(CORNERS);
    rect(x6, ((height / 7) * 6) - 5, width, ((height / 7) * 6) +5);

    //PacMan links

    if(mouth) {
        //voller Kreis
        fill(255, 255, 0);
        //Erste Zeile
        arc(x1, height/7, height/10, height/10, radians(10), radians(350));
        //Dritte Zeile
        arc(x3, (height/7) * 3, height/10, height/10, radians(10), radians(350));
        //Fünfte Zeile
        arc(x5, (height/7) * 5, height / 10, height/10, radians(10), radians(350));
    } else if (!mouth) {
        //offener Kreis
        fill(255, 255, 0);
        //Erste Zeile
        arc(x1, height/7, height/10, height/10, radians(45), radians(315));
        //Dritte Zeile
        arc(x3, (height/7) * 3, height/10, height/10, radians(45), radians(315));
        //Fünfte Zeile
        arc(x5, (height/7) * 5, height/10, height/10, radians(45), radians(315));
    }
    //PacMan links
    if(mund){
        //Zweite Zeile
        arc(x2, (height/7) * 2, height / 10, height / 10, radians(190), radians(170));
        //Vierte Zeile
        arc(x4, (height/7) * 4, height / 10, height / 10, radians(190), radians(170));
        //Sechste Zeile
        arc(x6, (height/7) * 6, height / 10, height / 10, radians(190), radians(170));
    }else if(!mund) {
        //Zweite Zeile
        arc(x2, (height/7) * 2, height / 10, height / 10, radians(225), radians(135));
        //Vierte Zeile
        arc(x4, (height/7) * 4, height / 10, height / 10, radians(225), radians(135));
        //Sechste Zeile
        arc(x6, (height/7) * 6, height / 10, height / 10, radians(225), radians(135));

    }

    
    //Mund Animation
    if(frameCount % 25 == 0) {
        mouth = !mouth; 
        mund = !mund;
    }

    //Bewegung
    //Erste Zeile
    x1 += speed;
    //Zweite Zeile
    if(x1 > (width + (height/10) / 2)) {
        x2 -= speed;
    }
    //Dritte Zeile
    if(x2 < (0 - (height/10) / 2)) {
        x3 += speed;
    }
    //Vierte Zeile
    if(x3 > (width + (height/10) / 2)) {
        x4 -= speed;
    }
    //Fünfte Zeile
    if(x4 < (0 - (height/10) / 2)) {
        x5 += speed;
    }
    //Sechste Zeile
    if(x5 > (width + (height/10) / 2)) {
        x6 -= speed;
    }

    //Zurücksetzen nach 1 Minute
    if(frameCount % 3600 == 0) {
        x1 = -(height /10) / 2;
        x2 = ((width/11) * 11) + (height/10)/2;
        x3 = -(height /10) / 2;
        x4 = ((width/11) * 11) + (height/10)/2;
        x5 = -(height /10) / 2;
        x6 = ((width/11) * 11) + (height/10)/2;
    }

    
    //Rand rechts links unten
    fill(0);
    rectMode(CORNER);
    rect(0, 0, 10, height);
    rect(width - 10, 0, 10, height);
    rect(0, height - 10, width, 10);

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
