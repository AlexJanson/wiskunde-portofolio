const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth - 5;
canvas.height = window.innerHeight - 5;

let balls = [];
let colors = [
    "blue",
    "red",
    "yellow",
    "orange",
    "purple",
    "pink",
    "transparent",
    "aliceblue",
    "darkgrey",
    "white"
];

for(let i = 0; i < 300; i++) {
    let temp = {};
    temp.pos = new Vector2d(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height));
    temp.vel = new Vector2d(Math.floor(Math.random() * 10) + 1, 0);
    temp.acc = new Vector2d(0, Math.random() * 3);
    temp.ball = new Point(0, 0, 20, colors[Math.floor(Math.random() * colors.length)]);
    balls.push(temp);
}

function update(){
    context.clearRect(0, 0, canvas.width, canvas.height);

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
            balls[i].vel.dy-=3;
        }

        if(balls[i].pos.dy> canvas.height) {
            balls[i].vel.dy = -balls[i].vel.dy;
            balls[i].pos.dy=  canvas.height -balls[i].ball.r;
            balls[i].vel.dy+=3;
        }
    }

    requestAnimationFrame(update);
}

update();
