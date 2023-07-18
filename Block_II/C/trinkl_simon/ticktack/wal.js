class Wal {
    pos;    //current position
    f;  //Frequence animal is reacting to
    givenF; //Frequence class is given
    sp; //Moving speed
    callSp; //Speed animal runs back to farmer
    end;    //Endposition
    start;  //Startposition
    isRight = true; //Which side animal is placed 
    time;
    countdown;
    isMoving = false;
    img1;
    img2; 
    currentImg;
    isSwimmingAway = false;

    constructor(x, y, speed, frequ, isRight, img1, img2, imgSize) {
        this.isRight = isRight;
        this.pos = createVector();
        this.pos.x = x;
        this.pos.y = y;
        this.time = 180;

        this.givenF = frequ;
        this.f = this.givenF;
        this.countdown = this.time;
        this.start = this.pos.x;
        if (isRight) {
            this.callSp = -1.6;
            this.sp = speed;
            this.end = this.pos.x + 70;
        } else {
            this.callSp = 1.6;
            this.sp = -speed;
            this.end = this.pos.x - 70;
        }
        this.img1 = img1;
        this.img2 = img2;
        this.img1.resize(imgSize, 0);
        this.img2.resize(imgSize, 0);
    }

    reset() {
        this.pos.x = this.start;
        this.isMoving = false;
        this.countdown = this.time;
        if (isHigh) {
            this.f = this.givenF + highPitch;
        } else {
            this.f = this.givenF;
        }
    }

    update(currentF) {
        if (currentF <= this.f + 10 && currentF >= this.f - 10) {
            this.callBack();
            this.isSwimmingAway = false;
            this.countdown = this.time;
        } else {
            if (this.countdown > 0) {
                this.countdown--;
                this.isMoving = false;
            } else {
                this.pos.x += this.sp
                this.isMoving = true;
                this.isSwimmingAway = true;
            }
        }
    }

    display(currentF) {
        noStroke();
        

        // Display Animal
        if (this.isMoving) {
            if (frameCount % 30 == 0) {
                if (this.currentImg == this.img1) {
                    this.currentImg = this.img2;
                } else {
                    this.currentImg = this.img1;
                }
            }
        } else {
            this.currentImg = this.img2;
        }

        if (this.isSwimmingAway) {
            push();
            translate(this.pos.x, this.pos.y);
            scale(-1, 1);
            image(this.currentImg, 0 - 60, 0);
            pop();
        } else {
            image(this.currentImg, this.pos.x - 60, this.pos.y);
        }
        
        fill(0, 100, 1000);
        //circle(this.pos.x, this.pos.y, 5);

        //Heart
        let diff = Math.abs(currentF - this.f);
        if (diff < 20) {
            var alpha = map(diff, 0, 30, 300, 20);
            //text(alpha, this.pos.x - 10, this.pos.y + 35);
            image(heart, this.pos.x - 20, this.pos.y - 40);
            heart.loadPixels();
            let imgY;
            let imgX;
            for (imgY = 0; imgY < heart.height; imgY++) {
                for (imgX = 0; imgX < heart.width; imgX++) {
                    let index = (imgX + imgY * heart.width) * 4;
                    if (heart.pixels[index + 3] != 0) {
                        heart.pixels[index + 3] = alpha;
                    }
                }
            }
            heart.updatePixels();
        }
    }

    callBack() {
        if (this.pos.x > this.start && this.isRight || this.pos.x < this.start && !this.isRight) {
            this.pos.x += this.callSp;
            this.isMoving = true;
        } else {
            this.isMoving = false;
        }
    }
}
