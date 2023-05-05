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

let time; //time
let drawingContext;
let canvas_text;

let scale;

function windowResized() {
    resizeCanvas(windowWidth, windowHeight, WEBGL);
    time = 0;

    // Texto de feliz cumpleaños
    canvas_text = createGraphics(window.innerWidth, window.innerHeight);
    canvas_text.textFont('Source Code Pro');
    canvas_text.textAlign(CENTER);
    canvas_text.textSize(32);
    canvas_text.background(255, 0);
    canvas_text.fill(0);
    canvas_text.noStroke();
    canvas_text.text("Eres la mejor persona \nque alguna vez pude conocer", width * 0.5, 50);
    canvas_text.text("Expandamos nuestro pequeño infinito\nmas alla de la realidad ", width * 0.5, height-50);

    scale = (width<height ? width/20 : height/30);
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    drawingContext = canvas.getContext('webgl');
    time = 0;

    // Texto de feliz cumpleaños
    canvas_text = createGraphics(window.innerWidth, window.innerHeight);
    canvas_text.textFont('Source Code Pro');
    canvas_text.textAlign(CENTER);
    canvas_text.textSize(32);
    canvas_text.background(255, 0);
    canvas_text.fill(0);
    canvas_text.noStroke();
    canvas_text.text("Eres la mejor persona \nque alguna vez pude conocer", width * 0.5, 50);
    canvas_text.text("Expandamos nuestro pequeño infinito\nmas alla de la realidad ", width * 0.5, height-50);

    scale = (width<height ? width/20 : height/30);
}

function draw() {
    background(255, 0);
    orbitControl();

    translate(0,0,-200)
    texture(canvas_text);
    plane(window.innerWidth - 4, window.innerHeight - 4);

    translate(0,0,200)
    directionalLight(255, 255, 255, 1, 100, 100, -100)
    directionalLight(255, 255, 255, 1, -100, 100, 100)
    directionalLight(255, 255, 255, 1, 100, -100, 100)
    directionalLight(255, 255, 255, 1, 0, 0, -100)

    // centramos el corazón
    
    let gap = 0;
    noStroke();
    fill(255)
    
    rotateY(time * 0.9);
    translate(-heart[0].length * (scale / 2) + gap, -heart.length * (scale / 2));

    for (let y = 0; y < heart.length; y++) {
        for (let x = 0; x < heart[0].length; x++) {
            translate(scale, 0);

            switch (heart[y][x]) {
                case 0:
                    continue;
                case 1:
                    fill(0);
                    break;
                case 2:
                    fill(255, 0, 0);
                    break;
                case 3:
                    fill(255);
                    break;
            }

            push();
            box(scale, scale, scale);
            pop();
        }
        translate(-heart[0].length * scale, scale);
    }

    time += 0.01;
}
