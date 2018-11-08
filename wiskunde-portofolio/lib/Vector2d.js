class Vector2d {
    constructor(dx, dy) {
        this.dx = dx;
        this.dy = dy;
    }

    add(vector) {
        this.dx = this.dx + vector.dx;
        this.dy = this.dy + vector.dy;
    }

    sub(vector) {
        this.dx = this.dx - vector.dx;
        this.dy = this.dy - vector.dy;
    }
}
