const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth - 4;
canvas.height = window.innerHeight - 4;

let a = new Point(200, 200, 20, "yellow");
let b = new Point(1700, 800, 20, "yellow");
let c = new Point(200, 800, 20, "blue");

let l = new LinearFunction(0, 0);
let m = new LinearFunction(1, 1);

let s = new Point(0, 0, 10, "white");

a.drag();
b.drag();
c.drag();

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    l.letTwoPointsDefineLine(a, b);
    m.slope = (-1 / l.slope);
    m.intercept = c.y - m.slope * c.x;

    s.x = m.intersection(l).x;
    s.y = m.intersection(l).y;

    l.draw(context);
    m.draw(context);

    a.draw(context);
    b.draw(context);
    c.draw(context);
    
    s.draw(context);

    requestAnimationFrame(update);
}

update();
