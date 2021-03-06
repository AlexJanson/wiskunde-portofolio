const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth - 4;
canvas.height = window.innerHeight - 4;

let a = new Point(750, 700, 20, "red");
let b = new Point(1150, 700, 20, "blue");
let c = new Point(950, 400, 20, "orange");

let d = new Point(0, 0, 15, "green");
let e = new Point(0, 0, 15, "yellow");
let g = new Point(0, 0, 15, "pink");

let f = new LinearFunction(0, 0);
let h = new LinearFunction(0, 0);
let i = new LinearFunction(0, 0);

let l = new LinearFunction(0, 0);
let m = new LinearFunction(0, 0);
let k = new LinearFunction(0, 0);

let s = new Point(0, 0, 10, "white");

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

    d.x = a.x + ((b.x - a.x) / 2);
    d.y = a.y + ((b.y - a.y) / 2);

    e.x = b.x + ((c.x - b.x) / 2);
    e.y = b.y + ((c.y - b.y) / 2);

    g.x = c.x + ((a.x - c.x) / 2);
    g.y = c.y + ((a.y - c.y) / 2);

    l.letTwoPointsDefineLine(a, e);
    m.letTwoPointsDefineLine(b, g);
    k.letTwoPointsDefineLine(c, d);

    s.x = l.intersection(m).x;
    s.y = l.intersection(m).y;

    l.draw(context);
    m.draw(context);
    k.draw(context);

    a.draw(context);
    b.draw(context);
    c.draw(context);
    d.draw(context);
    e.draw(context);
    g.draw(context);
    
    s.draw(context);

    a.print(context, "A");
    b.print(context, "B");
    c.print(context, "C");
    d.print(context, "d");
    e.print(context, "e");
    g.print(context, "g");
    s.print(context, "S");

    requestAnimationFrame(update);
}

update();
