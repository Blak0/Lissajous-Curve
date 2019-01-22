var row_circles = [];
var col_circles = [];
var drawn_points = []

function setup() {
    createCanvas(1850, 1000);
    angleMode(DEGREES);
    var rows = 8;
    var cols = 4;

    x = 300;
    y = 100;
    r = 100;
    angleIncrement = 2;

    for (var i = 0; i < rows; i++) {
        let new_circle = new Circle(x, y, r, angleIncrement, 'v');
        row_circles.push(new_circle);
        x += 200;
        angleIncrement += 1;
    }

    x = 100;
    y = 300;
    r = 100;
    angleIncrement = 2;

    for (var i = 0; i < cols; i++) {
        let new_circle = new Circle(x, y, r, angleIncrement, 'h');
        col_circles.push(new_circle);
        y += 200;
        angleIncrement += 1;
    }

}

function draw() {
    background(30);

    for (var i = 0; i < row_circles.length; i++) {
        row_circles[i].rotate();
        row_circles[i].show();
    }

    for (var i = 0; i < col_circles.length; i++) {
        col_circles[i].rotate();
        col_circles[i].show();
    }

    for (var i = 0; i < row_circles.length; i++) {
        for (var j = 0; j < col_circles.length; j++) {
            let x = row_circles[i].dotPos.x;
            let y = col_circles[j].dotPos.y;
            let spot = createVector(x, y);
            drawn_points.push(spot);
        }
    }

    fill(255);
    noStroke();
    for (var i = 0; i < drawn_points.length; i++) {
        ellipse(drawn_points[i].x, drawn_points[i].y, 5);
        if (i > 6400 * 2) {
            noLoop();
        }
    }
}