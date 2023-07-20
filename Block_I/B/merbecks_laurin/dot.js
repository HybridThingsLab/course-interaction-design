class Dot {
    constructor(lightningChance, size) {
        this.xPos = 0;
        this.yPos = 0;
        this.scale = 1;
        this.color = random(0.25, 0.5);
        this.dotColor = random(220, 320);
        this.xSpeed = 0;
        this.ySpeed = random(-0.5, -1);
        this.live = true;
        this.hitGround = random(0, 1);
        this.life = 0;
        this.hitGroundChance = 1-lightningChance;
        this.size = size;
    }

    show() {
        if(this.life == 0) {
            this.life = this.hitGround*(this.size);
        }
        if(this.live) {
            if(this.hitGround >= this.hitGroundChance) {
                strokeWeight(this.scale*2);
                stroke(this.dotColor, 100, 100, 0.2);
                point(this.xPos, this.yPos);
                stroke(0, 0, 100, 0.25);
            } else {
                stroke(0, 0, 100, this.color);
            }
            strokeWeight(this.scale);
            point(this.xPos, this.yPos);
        }
    }

    move() {
        this.xSpeed = random(-1, 1);
        this.xPos = this.xPos+this.xSpeed;
        this.yPos = this.yPos+this.ySpeed;
        if(this.live) {
            if(this.yPos < -this.size || this.yPos > this.size) {
                this.live = false;
            }
        }
        if(this.yPos < -this.life) {
            this.live = false;
        }
    }
}