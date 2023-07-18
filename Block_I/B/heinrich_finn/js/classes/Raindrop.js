class Raindrop {
    constructor(x, y, size) {
        this.x_prev = x;
        this.y_prev = y;
        this.x = x;
        this.y = y;
        this.vel = 0;
        this.size = size;
    }

    update() {
        this.vel = min(this.vel + 1, 10);
        this.y_prev = this.y;
        this.y = ceil(this.y + this.vel);
        this.y = min(this.y, width - 135);
    }

    render() {
        strokeCap(SQUARE);
        strokeWeight(this.size);
        stroke(color('rgba(80, 80, 255, ' + (this.y - 135) / (width - 135*2) +')'));
        line(this.x_prev, this.y_prev, this.x, this.y);
    }

    get_y() {
        return this.y;
    }
}