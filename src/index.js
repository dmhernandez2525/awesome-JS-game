import Block from"./falling_block";
import Grid from"./grid";

let gameOverDiv = document.getElementById('gameOver');
let canvas = document.getElementById('canvas-area');
canvas.width = Math.floor(window.innerWidth)
canvas.height = Math.floor(window.innerHeight)

let op = {
    width: canvas.width,
    height:canvas.height,

};
let MainGrid = new Grid(op);
let c = canvas.getContext('2d');
let x = 0;
let spaceOfNewBLock = canvas.width / 10 * 1.2;
let y = 0;
let mx;
let my;
let allBlocks = [];
let gameOver = false;

window.onclick = (e ) => {
    mx = e.pageX;
    my = e.pageY;
    let question = "can u see me3"
    allBlocks = allBlocks.filter((block, i) => {
        let count = 0; 
        if (block.checkRemove(mx,my,question) ) {
        } else {
            block.location = i - count
            return block
        }
    })
};

 let checkCol = () => {
    let cols = [];
    let flag = false;
    allBlocks.forEach(element => {
        let ay = element.y + element.height
        if (MainGrid.grid[ay] !== undefined) {
            if (MainGrid.grid[element.y + element.height][element.x] === "nope" ){
                if (MainGrid.grid[element.y + element.height][element.x] === "nope" && MainGrid.yEnd === element.y ) {
                    gameOver = true;
                }
                MainGrid.grid[element.y][element.x] = "nope"
                cols.push(element.location);
                flag = true;
            }
        }
        if (MainGrid.base === element.y) {
            MainGrid.grid[element.y][element.x] = "nope"
        }
    });
    if (flag){
        return cols 
    }else{
        return [] 
    } 
 }

let gridAll = () => {
    let allGrid = [];
    for (let i = 0; i < 10; i++) {
        let small = Math.floor(canvas.width / 10)
        allGrid.push( small * i );
    }
     return allGrid
};

let makeMore = () =>{
    let grid = gridAll();
    let random = Math.floor(Math.random() * (+10 - +0) + +1) - 1 ;
    let text = `can u see me${random}` 
    let location = allBlocks.length 
    let width = Math.floor(op.width / 10)
    const block = new Block({
        x: Math.floor(grid[random]),
        text,
        location,
        width
    })
    allBlocks.push(block)
}

let gamePlay = () => {
    if(gameOver === false){
        requestAnimationFrame(gamePlay);
        c.clearRect(0, 0, innerWidth,innerHeight)
        if (x > y + spaceOfNewBLock) {
            y += spaceOfNewBLock;
            makeMore();
        };

        let checked = checkCol(allBlocks);
        allBlocks.forEach(element => {
            let activeCol = false;
            if (checked.length && checked.includes(element.location)){
                activeCol = true;
            };
            element.moveBlock({mx,my,innerWidth:Math.floor(canvas.width),innerHeight:Math.floor(canvas.height)},activeCol);
            element.drawBlock(c, canvas.width);
        });
        x += 1;
    }else{
        canvas.classList.toggle("gameOver");
        gameOverDiv.classList.toggle("gameOver");
    }
} 

gamePlay()