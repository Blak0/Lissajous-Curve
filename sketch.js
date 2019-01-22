var row_circles = [];
var col_circles = [];

function setup() {
    createCanvas(1850, 1000);
    angleMode(DEGREES);
    var rows = 8;
    var cols = 4;

    x = 300;
    y = 100;
    r = 100;
    angleIncrement = 1;

    for (var i = 0; i < rows; i++) {
        let new_circle = new Circle(x, y, r, angleIncrement, 'v');
        row_circles[i] = new_circle;;
        x += 200;
        angleIncrement += 0.2;
    }

    x = 100;
    y = 300;
    r = 100;
    angleIncrement = 1;

    for (var i = 0; i < cols; i++) {
        let new_circle = new Circle(x, y, r, angleIncrement, 'h');
        col_circles[i] = new_circle;;
        y += 200;
        angleIncrement += 0.2;
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
}