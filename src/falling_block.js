

class Block {
    constructor(op){
        this.x = op.x;
        this.dx = 5;
        this.y = 5;
        this.dy = 1;
        this.text = op.text;
        this.location = op.location;
        this.width = op.width;
        this.height = op.width;
        this.distroyMe = false;
    };
    drawBlock(c,max){
        c.fillStyle = "white"
        c.fillRect(this.x, this.y, this.width, this.height);
        c.font = "20px Georgia";
        c.fillStyle = "red"
        debugger
        // c.fillText(this.text, (this.width / 2) , (this.height / 2 ));
        // c.fillText(this.text, this.c.width / 2  , this.c.height / 2);
        c.fillText(this.text, this.x - this.width, this.y +( this.height / 2 ));
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
    moveBlock(op, col) {
        let dx = this.dx;
        let dy = this.dy;
        if ( 0 > this.x || col  ) {
            this.dx = -dx;
        };
        if (this.x + this.width >= op.innerWidth  ) {
            this.dx = 0;
        };
        if ( 0 > this.y || col) {
            this.dy = -dy;
        };
        if (this.y + this.height >= op.innerHeight ) {
            this.dy = 0;
        };
        if(col){
            // debugger
             this.dy = 0;
            // this.distroyMe= true;
        };
        this.checkText({my: op.my, mx: op.mx})
        this.y += this.dy;
        // not needid for the game but make a cool screen saver
        // this.x += this.dx;
    };

    checkRemove(mx,my){
        debugger
        // if (this.location === 0 || deleteOne )return true
        return true
    }

}




export default Block