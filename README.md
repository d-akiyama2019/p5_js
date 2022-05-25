# p5_js

- 木と家と車を描こう
    - index.html
    ```html
    <html>

    <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.0/p5.js"></script>
        <script src="sketch.js"></script>
    </head>

    <body>
    </body>

    </html>
    ```

    - sketch.js
    ```js
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
        )
        rect(
            200, 200,
            200, 100
        )
        // 木
        rect(
            500, 100,
            100, 150
        )
        rect(
            525, 250,
            50, 50
        )
        // クルマ
        rect(
            25, 150,
            150, 100
        )
        ellipse(50,250,30)
        ellipse(150,250,30)
    }
    ```
