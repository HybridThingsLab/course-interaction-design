let w, h, rx, ry, rw, rh, pulse, seconds, milliseconds, clickable, hx, hy, hs;
let timer = 5;
let count = 0;
var must = 0;
let easing = 0.01;
var lives = 5;
let myFont;

function preload() {
    myFont = loadFont('assets/DePixelHalbfett.otf');
}

function setup() {
    w = windowWidth/1.1;
    h = windowHeight/1.1;
    createCanvas(w, h);
    rw = w/5;
    rh = h/5;
    rx = w / 2;
    ry = h / 1.7;
    start = true;
    play = false;
    finish = false;

}

function draw() {
    background(255);
    textFont(myFont);

    milliseconds = int(millis() % 60000);
	seconds = milliseconds / 1000;

    if (frameCount < 300) {
        start = true;
        play = false;
        finish = false;
    } else {
        start = false;
        play = true;
        finish = false;
    }

    if (start) {
        textAlign(CENTER);
        textSize(w/40);
        text("Tick-Tack", width / 2, (height / 2) - 250);
        textSize(w/50);
        text("Time is running! Try to click the square once every second,", width / 2, (height / 2) - 150);
        text("keep the rythm and see how long you can last :)", width / 2, (height / 2) - 100);
        text("But be aware: If you don't click, you'll lose one of your precious lifes!", width / 2, (height / 2) - 50);
        text("The game will start in", width / 2, (height / 2) + 25);

        
        if (frameCount % 60 == 0) {
            timer--;
        }
        textAlign(RIGHT);
        text(timer + " seconds", width / 1.7, (height / 2) + 100);
    }


    if (play) {
        stroke(0);
        strokeWeight(windowWidth/500);
        rectMode(CENTER);
        if (milliseconds % 1000 > 700) {
            pulse = true;
        } else {
            pulse = false;
        }
        if (pulse) {
            fill(255, 0, 0)
            clickable = true;
        } else {
            fill(255, 255, 255);
            clickable = false;
        }
        rect(rx, ry, rw, rh);

        fill(255);
        textSize(w/50);

        // text("You have to click " + int(seconds), width / 2, (height / 2) - 150);
        textAlign(LEFT);
        text("Your lives: ", w/100, (height / 20));
        s = w/30;
        for (x = 0; x < lives; x++) {
            noStroke();
            fill(255, 0, 0);
            heart(s*x+5+s/2, h/20+s/2, s/2);
        }

        fill(255);
        stroke(0);
        textAlign(CENTER);
        text("Your score:", width / 2.2, (height / 3));

        textAlign(RIGHT);
        text(+ count, width / 1.6, (height / 3));
        // textAlign(RIGHT);
        // text( lives, width / 2, (height / 10));

        if(lives < 1) {
            finish = true;
            play = !play;
        }

        if(//frameCount > 300 && 
            frameCount % 60 == 0) {
            must++;
            if (must > count) {
                lives--;
                must = count;
            }
            console.log(milliseconds % 1000 == 700);
            if(count % 5 == 0) {
                lives++;
                must = count;
            }
        }
        
        
    }

    if(finish) {
        background(255);
        fill(255);
        textSize(w/40);
        textAlign(CENTER, CENTER);
        text("Your score is " + count, width / 2, height / 2.3);
        text("Wanna play again? :)", width / 2, height / 1.9);
        rectMode(CENTER);
        fill(200);
        rect(width/2, height/1.5, w/5, h/10);
        text("> Let's go!", width / 2, height / 1.5);
        if(mouseX > width/2 - w/5/2 && mouseX < width/2 + w/5/2
            && mouseY > height/1.5 - h/10/2 && mouseY < height/1.5 + h/10/2) {
                cursor('pointer');
                fill(255, 0, 0);
            } else {
                fill(255);
                cursor('default');
            }
    }

}

function mousePressed() {
    if (play) {
        if (mouseX > rx - rw && mouseX < rx + rw
            && mouseY > ry - rh && mouseY < ry + rh) {
            cursor("crosshair");
            if (milliseconds % 1000 > 700) {
                count++;
                clickable = !clickable;
            } else {
                lives--;
            }
        }
    }

    if(finish) {
        if(mouseX > width/2 - w/5/2 && mouseX < width/2 + w/5/2
            && mouseY > height/1.5 - h/10/2 && mouseY < height/1.5 + h/10/2) {
                    background(255);
                    finish = false;
                    start = false;
                    play= true;
                    location.reload(false);
            }
    }
}

function heart(hx, hy, hsize) {
    beginShape();
    vertex(hx, hy);
    bezierVertex(hx - hsize / 2, hy - hsize / 2, hx - hsize, hy + hsize / 3, hx, hy + hsize);
    bezierVertex(hx + hsize, hy + hsize / 3, hx + hsize / 2, hy - hsize / 2, hx, hy);
    endShape(CLOSE);
}


function windowResized() {
  resizeCanvas(windowWidth/1.1, windowHeight/1.1);
  w = windowWidth/1.1;
  h = windowHeight/1.1;
  rw = w/5;
  rh = h/5;
  rx = w / 2;
  ry = h / 1.7;
}
