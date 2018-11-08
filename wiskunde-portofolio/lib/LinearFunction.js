class LinearFunction {
    constructor(slope, intercept) {
        this.slope = slope;
        this.intercept = intercept;
    }

    calcY(x) {
        return this.slope * x + this.intercept;
    }

    letTwoPointsDefineLine(a, b) {
        this.slope = (b.y - a.y) / (b.x - a.x);
        this.intercept = a.y - this.slope * a.x;
    }

    intersection(m) {
        let ans = {};
        ans.x = (this.intercept - m.intercept) / (m.slope - this.slope);
        ans.y = ans.x * this.slope + this.intercept;
        return ans;
    }

    draw(context) {
        context.beginPath();
        context.moveTo(0, this.calcY(0));
        context.lineTo(canvas.width, this.calcY(canvas.width));
        context.closePath();
        context.stroke();
    }
}