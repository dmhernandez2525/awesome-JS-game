import Block from"./falling_block";
import Grid from"./grid";

let canvas = document.getElementById('canvas-area');
let height = window.innerHeight
let oneHight = height / 10 
// canvas.width = Math.floor(oneHight * 6)
canvas.width = Math.floor(window.innerWidth)
// canvas.height = Math.floor(oneHight * 6)

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
let dy = 4;
let y2 = 0;
let dy2 = 4;

let mx;
let my;
let allBlocks = []
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

 let checkCol = (aocks) => {
    let ab = aocks;
    let allBlockDis = {};
    let cols = [];
    let a = false;
    allBlocks.forEach(element => {
        let stringX = String(element.x)
        let stringY = String(element.y + element.height + element.x)
        let ay = element.y
        let ypos = op.height - (element.y + element.height) 
        if (MainGrid.grid[ypos] !== undefined) {
            // console.log(MainGrid.grid[ypos])
            // console.log(ypos)
            // console.log(MainGrid.base)
            if (MainGrid.grid[ypos][element.x] === ypos){
                if (MainGrid.grid[element.y][element.x] === "nope") {
                    console.log("hey")
                    debugger
                }
            };

        }
        if (MainGrid.base === element.y) {
            MainGrid.grid[element.y][element.x] = "nope"
        }
        if ((Object.keys(allBlockDis).includes(stringY))){
            if((allBlockDis[stringY].stringX === stringX) === false){
                let allGrid = [];
                for (let i = 0; i < 10; i++) {
                    let small = Math.floor(canvas.width / 10)
                    allGrid.push(small * i);
                }
            }
        }
        if (Object.keys(allBlockDis).includes(stringY) && allBlockDis[stringY].stringX === stringX) {
            cols.push(allBlockDis[stringY].location); //rfq old one 
            cols.push(element.location);
            a = true;
        }
        allBlockDis[element.y + element.x ] = {location:element.location, stringX}
    });
    if (a){
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
    requestAnimationFrame(gamePlay);
    c.clearRect(0, 0, innerWidth,innerHeight)
    if (x > y + spaceOfNewBLock) {
        y += spaceOfNewBLock

        if(allBlocks.length < 6){
            makeMore()
        }
    }
    let checked = checkCol(allBlocks);
    allBlocks.forEach(element => {
        let activeCol = false 
        if (checked.length && checked.includes(element.location)){
            activeCol = true;
        };
        element.moveBlock({mx,my,innerWidth:Math.floor(canvas.width),innerHeight:Math.floor(canvas.height)},activeCol)
        element.drawBlock(c, canvas.width)
    });
    x += 1;
} 

gamePlay()