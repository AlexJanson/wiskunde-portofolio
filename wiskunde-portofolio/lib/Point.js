class Point {
    constructor(x, y, r, color) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.color = color;
    }

    draw(context){
        context.beginPath();
        context.lineWidth = "4";
        context.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        context.fillStyle = this.color;
        context.stroke();
        context.fill();
        context.closePath();
    }

    print(context, text) {
      context.font = "16px Arial";
      context.fillText(text, this.x + this.r, this.y + this.r + 8);
    }

    position() {
        let ans = new Vector2d(this.x, this.y);
        return ans;
    }

    distanceToOtherPoint(P) {
        let dx = this.x - P.x;
        let dy = this.y - P.y;
        return Math.sqrt(dx*dx + dy*dy);
    }

    drag(){
        let mousePosition = {};
        let dragStatus = false;
       
        document.addEventListener('mousedown',(evt)=>{
          mousePosition.x = evt.clientX;
          mousePosition.y = evt.clientY;
    
          if(this.distanceToOtherPoint(mousePosition)<= this.r){
            dragStatus = true;
          } else {
            dragStatus = false;
          };
        })
    
        document.addEventListener('mousemove',(evt)=>{
          if(dragStatus == true){
            this.x = evt.clientX;
            this.y = evt.clientY;
          }
          if(this.distanceToOtherPoint(mousePosition)<= this.r){
            document.body.style.cursor = "pointer";
          } else {
            document.body.style.cursor = "default";
          }
        });
    
        document.addEventListener('mouseup',(evt)=>{
          dragStatus = false;
        })
      }
}