class Block {
    constructor(op){
        this.x = op.x;
        this.dx = 5;
        this.y = 10;
        this.dy = 20;
        this.text = op.text;
        this.location = op.location;
        this.width = op.width;
        this.height = op.width;
        this.distroyMe = false;
    };
    drawBlock(c,max){
        let colors = {0:"orange",1:"blue",2:"red",3:"pink",4:"purple",5:"green",6:"yellow",7:"white",8:"gray",9: "brown"}
        c.fillStyle = colors[this.text]
        c.fillRect(this.x, this.y, this.width, this.height);
        c.strokeRect(this.x, this.y, this.width, this.height);
        c.font = "8vw Georgia";
        c.fillStyle = "black"
        c.fillText(this.text, this.x + (this.width / 3), this.y +( this.height /1.3 ));
        c.lineWidth = 5;
    };

    checkText(op) {
        let dx = this.dx;
        let dy = this.dy;
        // if (op.my + 10 > this.y && op.my - 90 < this.y && op.mx + 10 > this.x && op.mx - 90 < this.x) {
        //     this.dx = -dx;
        //     this.dy = -dy;
        // }
    };
    moveBlock(op, col,speed) {
        let dx = this.dx;
        let dy = this.dy;
        // if ( 0 > this.x || col  ) {
        //     this.dx = -dx;
        // };
        if (col) {
            this.dy = 0;
        } else {
            this.dy = 10 ;
            // this.dy = speed;
        };

        if (this.x + this.width >= op.innerWidth  ) {
            this.dx = 0;
        };
        // if ( 0 > this.y || col) {
        //     this.dy = -dy;
        // };
        if (this.y + this.height >= op.innerHeight ) {
            this.dy = 0;
        };

        this.checkText({my: op.my, mx: op.mx})
        this.y += this.dy;
    };

    checkRemove(mx,my,question,num){
        if (this.x + this.width > mx && this.x - this.width < mx && this.y + this.width + (this.width / 2) > my && my + this.width > (this.y + (this.width /2))) {
            if (this.text === parseInt(question)) {
                return true
            }
        }
        return false;
    }

}




export default Block