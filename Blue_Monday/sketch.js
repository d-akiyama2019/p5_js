function lineArg(x, y, len, arg) {
    x1 = x + len;
    y1 = y;
    line(
        x, y,
        Math.cos(arg) * x1 -
        Math.sin(arg) * y1 +
        (x - x * Math.cos(arg) + y * Math.sin(arg)),
        Math.sin(arg) * x1 +
        Math.cos(arg) * y1 +
        (y - x * Math.sin(arg) - y * Math.cos(arg)),
    );
}

function setup() {
    width = 800;
    height = 600;
    radius = 50;
    angle = 0;
    angle_2 = 0;
    angle_3 = 0;
    count = -1;
    interval = 56;
    step = 0;
    bg_color_w = "#e4e2e0";
    bg_color_b = "#666666";
    bg_color = bg_color_w;
    createCanvas(width, height);
    background(bg_color);
}

function draw() {
    count++;
    if (
        (count >= interval / 4 * 0 && count < interval / 4 * 1) ||
        (count >= interval / 4 * 2 && count < interval / 4 * 3)
    )
        angle += 8 * PI / interval;
    if (
        (count >= interval / 8 * 1 && count < interval / 8 * 3) ||
        (count >= interval / 8 * 5 && count < interval / 8 * 7)
    )
        angle_2 += 8 * PI / interval;
    if (count >= 0 && count < interval / 2)
        angle_3 += 4 * PI / interval;
    if (count >= interval) {
        count = -1;
        step += 1;
    }

    if (step % 8 == 0) {
        bg_color = bg_color_w;
        step = 0
    }
    if ((step + 4) % 8 == 0) bg_color = bg_color_b;

    background(bg_color);
    strokeWeight(2);

    translate(width / 2, height / 2);
    rotate(angle_3 / 26);
    translate(-width / 2, -height / 2);
    stroke(bg_color);
    for (var i = 0; i < 26; i++) {
        switch (i) {
            case 0:
                fill("#ffffff");
                break;
            case 1:
                fill("#4eb690");
                break;
            case 2:
                fill("#feff00");
                break;
            case 3:
                fill("#816bb0");
                break;
            case 4:
                fill("#fc6602");
                break;
            case 5:
                fill("#9bd9e8");
                break;
            case 6:
                fill("#f89bcb");
                break;
            case 7:
                fill("#3e1486");
                break;
            case 8:
                fill("#c02a8f");
                break;
            case 9:
                fill("#54abed");
                break;
            case 10:
                fill("#ffffff");
                break;
            case 11:
                fill("#4eb691");
                break;
            case 12:
                fill("#feff00");
                break;
            case 13:
                fill("#816bb0");
                break;
            case 14:
                fill("#fe6600");
                break;
            case 15:
                fill("#9bd9e8");
                break;
            case 16:
                fill("#f89bcb");
                break;
            case 17:
                fill("#4eb691");
                break;
            case 18:
                fill("#feff00");
                break;
            case 19:
                fill("#816bb0");
                break;
            case 20:
                fill("#fe6600");
                break;
            case 21:
                fill("#9bd9e8");
                break;
            case 22:
                fill("#f89bcb");
                break;
            case 23:
                fill("#3e1488");
                break;
            case 24:
                fill("#c12a8f");
                break;
            case 25:
                fill("#54abed");
                break;
        }
        arc(
            width / 2, height / 2,
            radius * 5, radius * 5,
            i * PI / 13, (i + 1) * PI / 13
        );

        lineArg(
            width / 2, height / 2,
            radius / 2 * 5, i * PI / 13
        );
    }

    for (var i = 0; i < 26; i++) {
        switch (i) {
            case 0:
                fill("#4eb691");
                break;
            case 10:
                fill("#feff00");
                break;
            case 17:
                noFill();
                noStroke();
                break;
        }
        arc(
            width / 2, height / 2,
            radius * 4, radius * 4,
            i * PI / 13, (i + 1) * PI / 13
        );
        lineArg(
            width / 2, height / 2,
            radius / 2 * 5, i * PI / 13
        );
    }

    translate(width / 2, height / 2);
    rotate(-angle_3 / 26);
    rotate(angle_2 / 4);
    translate(-width / 2, -height / 2);
    stroke(bg_color);
    for (var i = 0; i < 4; i++) {
        switch (i) {
            case 0:
                fill("#1e2f3b");
                break;
            case 1:
                fill("#f89bcb");
                break;
            case 2:
                fill("#675867");
                break;
            case 3:
                fill("#30152b");
                break;
        }
        arc(
            width / 2, height / 2,
            radius * 3, radius * 3,
            (i + 1 / 2) * PI / 2, (i + 1 + 1 / 2) * PI / 2
        );
        lineArg(
            width / 2, height / 2,
            radius / 2 * 3, (i + 1 / 2) * PI / 2
        );
    }

    translate(width / 2, height / 2);
    rotate(-angle_2 / 4);
    rotate(angle / 6);
    translate(-width / 2, -height / 2);
    for (var i = 0; i < 6; i++) {
        switch (i) {
            case 0:
                fill("#45abed");
                break;
            case 1:
                fill("#feff00");
                break;
            case 2:
                fill("#000000");
                break;
            case 3:
                fill("#999999");
                break;
            case 4:
                fill("#ffffff");
                break;
            case 5:
                fill("#c12a8f");
                break;
        }
        arc(
            width / 2, height / 2,
            radius * 2, radius * 2,
            i * PI / 3, (i + 1) * PI / 3
        );
        lineArg(
            width / 2, height / 2,
            radius / 2 * 2, i * PI / 3
        );
    }
}
