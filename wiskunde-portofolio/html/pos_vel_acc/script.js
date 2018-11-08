const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth - 4;
canvas.height = window.innerHeight - 4;

let object = {};

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    //draw here

    object.point.draw(context);
    object.pos.add(object.vel);
    object.point.pos = object.pos;

    requestAnimationFrame(update);
}

function createPoints() {
    object.point = new Point(0, 0, 3, "blue");
    object.pos = new Vector2d(100, 100);
    object.vel = new Vector2d(1, 2);
    object.acc = new Vector2d(0, 0);

    update();
}

function rndNmb(max) {
    return Math.random() * max;
}

createPoints();