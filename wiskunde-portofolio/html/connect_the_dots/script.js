const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth - 4;
canvas.height = window.innerHeight - 4;

const points = [];


function createDots() {
    for(let i = 0; i < 8; i++) {
        const a = new Point(Math.floor(rndNmb(canvas.width)), Math.floor(rndNmb(canvas.height)), 5, "transparent");
        a.draw(context);
        points.push(a);
    }

    drawLine();
}

function drawLine() {
    context.beginPath();
    context.fillStyle = "black";
    context.moveTo(points[0].x, points[0].y);
    for(let i = 0; i < points.length; i++) {
        console.log("" + points[i].x + ", " + points[i].y)
        context.lineTo(points[i].x, points[i].y);
    }
    context.closePath();
    context.stroke();
}

createDots();

function rndNmb(max) {
    return Math.random() * max;
}