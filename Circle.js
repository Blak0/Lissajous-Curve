class Circle {
    constructor(x, y, d, step_angle, line_dir) {
        this.pos = createVector(x, y);
        this.dotPos = createVector(0, 0);
        this.r = d / 2;
        this.angle = 0;
        this.angle_incr = step_angle;
        if (line_dir != 'v' && line_dir != 'h') {
            throw new Error('line_dir must be "v" or "h" for vertical or horizontal line following the dot');
        } else {
            this.line_dir = line_dir;
        }

    }

    rotate() {
        this.angle += this.angle_incr;
        this.dotPos.x = this.r * cos(this.angle) + this.pos.x;
        this.dotPos.y = this.r * sin(this.angle) + this.pos.y;
    }

    show() {
        //circle
        noFill();
        stroke(255, 255 * 0.7);
        strokeWeight(2);
        ellipse(this.pos.x, this.pos.y, 2 * this.r);

        //dot
        fill(255);
        noStroke();
        ellipse(this.dotPos.x, this.dotPos.y, 10);

        //lines
        stroke(255, 255 * 0.5);
        strokeWeight(0.3);
        if (this.line_dir == 'v') {
            line(this.dotPos.x, 0, this.dotPos.x, height);
        } else if (this.line_dir == 'h') {
            line(0, this.dotPos.y, width, this.dotPos.y);
        }

    }
}
