function setup() {
    createCanvas(800, 600);
    background(128);
}

function draw() {
    // 家
    triangle(
        300, 100,
        400, 200,
        200, 200
    );
    rect(
        200, 200,
        200, 100
    );
    // 木
    rect(
        500, 100,
        100, 150
    );
    rect(
        525, 250,
        50, 50
    );
    // クルマ
    rect(
        25, 150,
        150, 100
    );
    ellipse(50, 250, 30);
    ellipse(150, 250, 30);
}