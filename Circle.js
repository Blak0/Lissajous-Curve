class Circle {
    constructor(x, y, d, angle) {
        this.pos = createVector(x, y);
        this.r = d;
        this.angle = angle;
    }

    show() {
        noFill();
        stroke(255);
        ellipse(this.pos.x, this.pos.y, this.r);
    }
}
