

class Block {
    constructor(op){
        this.x = op.x;
        this.dx = 5;
        this.y = 5;
        this.dy = 4;
        this.text = op.text;
        this.location = op.location;
        this.width = op.width;
    };
    drawBlock(c,max){
        c.fillRect(this.x, this.y, this.width, 100);
    };

    checkText(op) {
        let dx = this.dx;
        let dy = this.dy;
        if (op.my + 10 > this.y && op.my - 90 < this.y && op.mx + 10 > this.x && op.mx - 90 < this.x) {
            // console.log(`${this.text} woooooooooooooooooooooooooooooooooo`);
            console.log(this.location)
            this.dx = -dx;
            this.dy = -dy;
        }
    };
    moveBlock(op) {
        let dx = this.dx;
        let dy = this.dy;
        if (this.x + 100 >= op.innerWidth || 0 > this.x  ) {
            this.dx = -dx;
        };
        if (this.y >= op.innerHeight || 0 > this.y ) {
            this.dy = -dy;
        };
        this.checkText({my: op.my, mx: op.mx})
        this.y += this.dy;
        // not needid for the game but make a cool screen saver
        // this.x += this.dx;
    };

    checkRemove(){
        if (this.location === 0)return true
    }

}




export default Block