const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth - 4;
canvas.height = window.innerHeight - 4;
let balls = [];
let colors = [
    "blue",
    "red",
    "yellow"
];

let margin = 20;

for(let i = 0; i < 3; i++) {
    let temp = {};
    temp.pos = new Vector2d(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));
    temp.vel = new Vector2d(Math.floor(Math.random() * 10) - 5, 0);
    temp.acc = new Vector2d(0, Math.random() * 2);
    temp.ball = new Point(0, 0, 20, colors[i]);
    balls.push(temp);
}

function update(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    context.beginPath();
    context.lineWidth = "1";
    context.moveTo(balls[0].pos.dx, balls[0].pos.dy);
    context.lineTo(balls[1].pos.dx, balls[1].pos.dy);
    context.lineTo(balls[2].pos.dx, balls[2].pos.dy);
    context.closePath();
    context.stroke();
    context.fillStyle = "rgba(100, 20, 100, 0.3)";
    context.fill();

    for(let i = 0; i < balls.length; i++) {

        balls[i].ball.position = balls[i].pos;
        balls[i].vel.add(balls[i].acc);
        balls[i].pos.add(balls[i].vel);
        balls[i].ball.draw(context);

        if(balls[i].pos.dx < 0) {
            balls[i].vel.dx = -balls[i].vel.dx;
        }

        if(balls[i].pos.dx > canvas.width) {
            balls[i].vel.dx = -balls[i].vel.dx;
        }

        if(balls[i].pos.dy < balls[i].ball.r){
            balls[i].vel.dy = -balls[i].vel.dy;
            balls[i].pos.dy = balls[i].ball.r;
        }

        if(balls[i].pos.dy> canvas.height) {
            balls[i].vel.dy = -balls[i].vel.dy;
            balls[i].pos.dy=  canvas.height -balls[i].ball.r;
        }
    }

    drawText(getDistance(balls[0], balls[1]), margin);
    drawText(getDistance(balls[0], balls[2]), margin+20);
    drawText(getDistance(balls[1], balls[0]), margin+40);
    drawText(getDistance(balls[1], balls[2]), margin+60);
    drawText(getDistance(balls[2], balls[0]), margin+80);
    drawText(getDistance(balls[2], balls[1]), margin+100);

    requestAnimationFrame(update);
}

function getDistance(a, b) {
    let xa = Math.pow((a.pos.dx - b.pos.dx), 2);
    let ya = Math.pow((a.pos.dy - b.pos.dy), 2);
    let c = Math.sqrt((xa + ya));
    return [Math.floor(c), a.ball.color, b.ball.color];
}

function drawText(a, m) {
    context.fillStyle = "black";
    context.font = "bold 16px Arial";
    context.fillText(a[0] + " pixels - From: '" + a[1] + "' to: '" + a[2] + "'", 10, m);
}

update();
