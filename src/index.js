import Block from"./falling_block";
import Grid from"./grid";

let gameOverDiv = document.getElementById('gameOver');
let canvas = document.getElementById('canvas-area');
// canvas.width = Math.floor(window.innerWidth)
canvas.width = Math.round(window.innerWidth / 10) * 10;
canvas.height = Math.round(window.innerHeight / 10) * 10;
// canvas.height = Math.floor(window.innerHeight)

let op = {
    width: Math.round(window.innerWidth / 10) * 10,
    height: Math.round(window.innerHeight / 10) * 10,
    // width: Math.floor(window.innerWidth),
    // height: Math.floor(window.innerHeight),

};
let MainGrid;

let makeMainGrid = () => {
    op = {
        width: Math.round(window.innerWidth / 10) * 10,
        height:  Math.round(window.innerHeight / 10) * 10
    };
    MainGrid = new Grid(op);
}
makeMainGrid();
let c = canvas.getContext('2d');
let widthNew = Math.round(window.innerWidth / 10) * 10
let x = 0;
let spaceOfNewBLock = canvas.width / 10 * 1.2;
let y = 0;
let mx;
let my;
let allBlocks = [];
let gameOver = false;
let qustions = {0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9};
let randomAns1 = Math.floor(Math.random() * (+5 - +0) + +1) - 1;
let randomAns2 = Math.floor(Math.random() * (+5 - +0) + +1) - 1;
let question = `${randomAns1 + randomAns2}`;
let questionInt = randomAns1 + randomAns2;
let last;
let lastText = [];
document.getElementById("hedder-qustion").innerHTML = `${randomAns1} + ${randomAns2}`;

let score = 0;
document.getElementById("hedder-score").innerHTML = score ;

let pointsAdd = () =>{
    score += 1;
    document.getElementById("hedder-score").innerHTML = score;

    let newFirst = Math.floor(Math.random() * (+5 - +0) + +1) - 1;
    let newSecond = Math.floor(Math.random() * (+5 - +0) + +1) - 1;
    randomAns1 = newSecond;
    randomAns2 = newFirst;
    document.getElementById("hedder-qustion").innerHTML = `${randomAns1} + ${randomAns2}`;
    question = `${randomAns1 + randomAns2}`;

}

// window.onclick = (e ) => {
//     mx = e.pageX;
//     my = e.pageY;
//     allBlocks = allBlocks.filter((block, i) => {
//         let count = 0; 
//         if (block.checkRemove(mx,my,question) ) {
//             pointsAdd()
//             if (MainGrid.grid[block.y] !== undefined ){
//                 MainGrid.grid[block.y][block.x] = "yep"
//             }
//         } else {
//             block.location = i - count
//             return block
//         }
//     })
// };

window.onclick = (e ) => {
    mx = e.pageX;
    my = e.pageY;
    allBlocks = allBlocks.filter((block, i) => {
        let count = 0; 
        if (block.checkRemove(mx,my,question) ) {
            pointsAdd()
            if (MainGrid.grid[block.y] !== undefined ){
                let indexY = Object.keys(MainGrid.grid).indexOf(`${block.y}`);
                let MainAll = Object.keys(MainGrid.grid);
                for (let i = 0; i < indexY; i++) {
                    let allVal =Object.values(MainGrid.grid);
                    let row = allVal[i]
                    let first = MainAll[i]
                    let second = Object.keys(row)[block.x]
                    MainGrid.grid[first][block.x] = "yep"
                    
                }
                // Object.keys(MainGrid.grid[element.y]).indexOf(element.x.toString())
                MainGrid.grid[block.y][block.x] = "yep"
            }
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
                debugger
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
        let small = canvas.width / 10
        allGrid.push( small * i );
    }
     return allGrid
};

let upUp = (block) => {
    debugger
}
let flag = true
let makeMore = () =>{
    let grid = gridAll();
    let random = Math.floor(Math.random() * (+10 - +0) + +1) - 1 ;
    let randomText = Math.floor(Math.random() * (+10 - +0) + +1) - 1 ;
    if (grid[random] / widthNew === last) {

        if (grid[random] === 9) {
            random - 1;
        }else{
            random += 1;
        };
    }
    last = random;
    let text = randomText;
    let location = allBlocks.length 
    let width = Math.floor(op.width / 10)
    const block = new Block({
        x: grid[random],
        text,
        location,
        width
    })
    block.onmousedown = upUp
    allBlocks.push(block)
}

let gamePlay = () => {
    if(gameOver === false){
        requestAnimationFrame(gamePlay);
        let width = Math.floor(op.width / 10) / 2
        c.clearRect(0, 0, innerWidth,innerHeight )
        if (x > y + spaceOfNewBLock) {
            y += spaceOfNewBLock / 1;
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