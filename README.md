# p5_js

- https://d-akiyama2019.github.io/p5_js/
- 参考文献
    - https://github.com/processing/p5.js 
    - https://cdnjs.com/

- テンプレート
    - index.html
    ```html
    <html>

    <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.1/p5.min.js"></script>
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
        rect(200, 200, 400, 200);
    }
    ```
