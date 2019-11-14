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
        c.fillStyle = "purple"
        c.fillRect(this.x, this.y, this.width, this.height);
        c.strokeRect(this.x, this.y, this.width, this.height);
        c.font = "20px Georgia";
        c.fillStyle = "greenyellow"
        c.fillText(this.text, this.x + (this.width / 5 ), this.y +( this.height / 2 ));
        c.lineWidth = 10;
        // ctx.strokeRect(20, 20, 80, 100);
    };

    checkText(op) {
        let dx = this.dx;
        let dy = this.dy;
        if (op.my + 10 > this.y && op.my - 90 < this.y && op.mx + 10 > this.x && op.mx - 90 < this.x) {
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
             this.dy = 0;
        };
        this.checkText({my: op.my, mx: op.mx})
        this.y += this.dy;
    };

    checkRemove(mx,my,question){
        // debugger
        if (this.x + this.width > mx && this.x - this.width < mx && this.y + this.width + (this.width / 2) > my && my + this.width > (this.y + (this.width /2))) {
            debugger
            if (this.text === question){
                return true
            }
        }
        return false;
    }

}




export default Block