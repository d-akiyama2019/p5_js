function setup() {
    a = 0;
    createCanvas(800, 600);
    background(192);
    frameRate(100);
}

function draw() {
    fill(255, 128, 128);
    rect(
        25 + a, 150,
        150, 100
    );
    fill(128);
    ellipse(50 + a, 250, 30);
    ellipse(150 + a, 250, 30);
    a = a + 10;
    if (a > 600) {
        a = 0;
        background(192);
    }
}