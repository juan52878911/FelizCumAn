const heart = [
    [0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0],
    [0, 1, 2, 2, 2, 2, 1, 0, 1, 2, 2, 2, 2, 1, 0],
    [1, 2, 2, 3, 3, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1],
    [0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0],
    [0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0],
    [0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
];

let time;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight, WEBGL);
    time = 0;
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    time = 0;
}

function draw() {
    background(0);
    orbitControl();

    ambientLight(100, 100, 100);
    directionalLight(10, 20, 20, 1, 0.5, -1);
    directionalLight(70, 70, 100, -0.5, 1, 0.5)

    // centramos el corazón
    translate(-heart[0].length * 25 / 2, -heart.length * 25 / 2);

    let scale = 25;
    noStroke();
    fill(255)

    for (let y = 0; y < heart.length; y++) {
        for (let x = 0; x < heart[0].length; x++) {
            translate(scale+(Math.sin(x)), 0);

            switch (heart[y][x]) {
                case 0:
                    continue;
                case 1:
                    specularMaterial(0)
                    break;
                case 2:
                    specularMaterial(255, 0, 0);
                    break;
                case 3:
                    specularMaterial(255);
                    break;
            }

            push();
            box(scale, scale, scale);
            pop();
        }
        translate(-heart[0].length * scale, scale+(2*Math.cos(time)));
    }

    time += 0.01;
}