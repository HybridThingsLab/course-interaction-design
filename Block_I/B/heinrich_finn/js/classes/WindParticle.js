class WindParticle {
    constructor() {
        this.pos = createVector(135,135);
        this.pos_prev = createVector(135,135);

        this.vel = createVector(0,0);
        this.vel_max = 10;

        this.tp = false; // detect if particle was ported in last update
        this.distance_travelled = 0;
        this.arrow_interval = 50;
    }

    update(acc) {
        this.vel = acc.copy();
        if (this.vel.mag() > this.vel_max) {
            this.vel.setMag(this.vel_max);
        }

        this.pos.add(this.vel);

        // port particle if out of frame
        if (this.pos.x > width - 135) this.pos.x -= width - 270;    this.vel.x = -this.vel.x; this.tp = true;
        if (this.pos.x < 135) this.pos.x += width - 270;        this.vel.x = -this.vel.x; this.tp = true;
        if (this.pos.y > height - 135) this.pos.y -= height - 270;  this.vel.y = -this.vel.y; this.tp = true;
        if (this.pos.y < 135) this.pos.y += height - 270;       this.vel.y = -this.vel.y; this.tp = true;

        this.distance_travelled += this.vel.mag();

        this.pos_prev = this.pos.copy();
    }

    render() {

        // Direction Arrow
        if (this.distance_travelled > this.arrow_interval) {
            this.distance_travelled = 0;

            let arrow_left = this.vel.copy().setMag(this.vel.mag() * 2).rotate(radians(145));
            let arrow_right = this.vel.copy().setMag(this.vel.mag() * 2).rotate(radians(-145));

            this.pos.add(this.vel.copy().div(2));

            stroke(color('rgba(255,255,255,' + this.vel.mag()/10 + ')'));
            strokeCap(SQUARE);
            strokeWeight(this.vel.mag()/2);
            noFill();
            beginShape();
            vertex(this.pos.x + arrow_left.x, this.pos.y + arrow_left.y);
            vertex(this.pos.x, this.pos.y);
            vertex(this.pos.x + arrow_right.x, this.pos.y + arrow_right.y);
            endShape();
        } else { // Circle
            fill(color('rgba(255,255,255,' + this.vel.mag()/10 + ')'));
            noStroke();
            circle(this.pos.x, this.pos.y, this.vel.mag());
        }
    }
}