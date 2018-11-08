const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth - 4;
canvas.height = window.innerHeight - 4;

let a = new Point(750, 700, 20, "red");
let b = new Point(1150, 700, 20, "blue");
let c = new Point(950, 400, 20, "orange");

let f = new LinearFunction(0, 0);
let h = new LinearFunction(0, 0);
let i = new LinearFunction(0, 0);

a.drag();
b.drag();
c.drag();

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    f.letTwoPointsDefineLine(a, b);
    h.letTwoPointsDefineLine(b, c);
    i.letTwoPointsDefineLine(c, a);

    f.draw(context);
    h.draw(context);
    i.draw(context);

    a.draw(context);
    b.draw(context);
    c.draw(context);

    requestAnimationFrame(update);
}

update();
