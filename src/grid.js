class Grid {
    constructor(op){
        this.height = op.height;
        this.width = op.width;
        this.blockLength = Math.floor(op.width / 10);
        this.blockHeight = this.blockLength;
        this.deadPoint = Math.floor(this.height / this.blockLength);
        this.yEnd = this.height - (this.deadPoint * this.blockLength);
        this.makeGrid = this.makeGrid.bind(this);
        this.grid = this.makeGrid();
        this.base = this.height - this.blockHeight;

    }
    makeGrid(){
        let grid = {};
        let allXPos = [];
        let allYPos = [];
        let x = 0;
        let y = 1;
        while (x < this.width) {
            allXPos.push(x)
            x += this.blockHeight
        } 
        while (y  <= this.deadPoint) {
            let yStep = this.height - (y * this.blockHeight)
            allYPos.push(yStep)
            y += 1;
        }
        for (let i = 0; i < allYPos.length; i++) {
            const eleY = allYPos[i];
            let row = {};
            for (let j = 0; j < allXPos.length; j++) {
                const eleX = allXPos[j];
                row[eleX] = eleY;
            }
            
            grid[eleY] = row;
        }
        return grid;
    };
};

export default Grid;

