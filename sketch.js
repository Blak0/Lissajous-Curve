var row_circles = [];
var col_circles = [];
var drawn_points = [];

var angleRaise;
var executionTime;

function setup() {
    angleRaise = parseFloat(prompt('Raise in angle increment speed:'), 10);
    executionTime = parseFloat(prompt('How long should i draw? (seconds)'), 10) * 1000 + millis(); //millis for user input time

    createCanvas(1850, 1000);
    angleMode(DEGREES);
    var rows = 8;
    var cols = 4;

    x = 300;
    y = 100;
    r = 100;
    angleIncrement = angleRaise;

    for (var i = 0; i < rows; i++) {
        let new_circle = new Circle(x, y, r, angleIncrement, 'v');
        row_circles.push(new_circle);
        x += 200;
        angleIncrement += angleRaise;
    }

    x = 100;
    y = 300;
    r = 100;
    angleIncrement = angleRaise;

    for (var i = 0; i < cols; i++) {
        let new_circle = new Circle(x, y, r, angleIncrement, 'h');
        col_circles.push(new_circle);
        y += 200;
        angleIncrement += angleRaise;
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
    }

    if (executionTime < millis()) {
        noLoop();
    }
}