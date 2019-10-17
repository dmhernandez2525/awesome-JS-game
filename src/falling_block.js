

class Block {
    constructor(x){
        this.x = x;
        this.dx = 5;
        this.y = 5;
        this.dy = 4;
    };
    drawBlock(c,max){
        c.fillRect(this.x, this.y, 95, 100);
    };
    moveBlock(op) {
        let dx = this.dx;
        let dy = this.dy;
        if (this.x + 1000 >= op.innerWidth || 0 > this.x || op.mx === this.x ) {
            this.dx = -dx;
        };
        if (this.y >= op.innerHeight || 0 > this.y || op.my === this.y) {
            this.dy = -dy;
        };
        this.y += this.dy;
        this.x += this.dx;
    }
}




export default Block