const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth - 4;
canvas.height = window.innerHeight - 4;


function update() {
    const a = new Point(Math.floor(Math.random() * canvas.width), Math.floor(Math.random() * canvas.height), 1, "orange").draw(context);
    requestAnimationFrame(update);
}

update();