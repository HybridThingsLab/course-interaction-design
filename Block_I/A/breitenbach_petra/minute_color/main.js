let hintergrund, kreisFarbe, speed, speedHintergrund, seconds, milliseconds, millisecondsPerSecond;
var start = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    colorMode(RGB);
    hintergrund = 255;
    kreisFarbe = 0;
    speed = ((255 / 60) / 60);
    angleMode(DEGREES);

    noiseDetail(2, 1);
}

function draw() {
    background(hintergrund);

    milliseconds = int(millis() % 60000);
    seconds = int(milliseconds / 1000) % 60000;
    millisecondsPerSecond = milliseconds % 1000;

    noStroke();

    kreisFarbe += speed;

    if(kreisFarbe > 255 || kreisFarbe < 0) {
        speed = -speed;
    } 

    hintergrund -= speed;

    translate(width / 2, height / 2);

    var space = 1;

    for (var i = 0; i < 360; i += space) {

        var xoff = map(cos(i), -1, 1, 0, 3);
        var yoff = map(sin(i), -1, 1, 0, 3);

        var n = noise(xoff + start, yoff + start);

        var h = map(n, 0, 1, -150, 150);

        rotate(space);

        fill(kreisFarbe);
        
        rect(height * 0.25, 0, h, 1);
    }

    start += 0.01;
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
