import Block from"./falling_block";
import Grid from"./grid";
import { timingSafeEqual } from "crypto";

let gameOverDiv = document.getElementById('gameOver');
let canvas = document.getElementById('canvas-area');
let oldCh = document.getElementById('hedder-type').innerHTML
let typeType;
let typeSpeed = document.getElementById('speed-type').innerHTML;
let oldSpeed = document.getElementById('speed-type').innerHTML;
// canvas.width = Math.floor(window.innerWidth)

canvas.width = Math.round(window.innerWidth / 100) * 100;
canvas.height = Math.round(window.innerHeight / 100) * 100;
// canvas.height = Math.floor(window.innerHeight)

let op = {
    width: Math.round(window.innerWidth / 100) * 100,
    height: Math.round(window.innerHeight / 100) * 100,
    // width: Math.floor(window.innerWidth),
    // height: Math.floor(window.innerHeight),

};
let MainGrid;

let makeMainGrid = () => {
    op = {
        width: Math.round(window.innerWidth / 100) * 100,
        height:  Math.round(window.innerHeight / 100) * 100
    };
    MainGrid = new Grid(op);
}
makeMainGrid();
let c = canvas.getContext('2d');
let widthNew = Math.round(window.innerWidth / 100) * 100
let x = 0;
let spaceOfNewBLock = canvas.width / 10 * 1.2;
let y = 0;
let mx;
let my;
let allBlocks = [];
let gameOver = false;
let randomAns1 = Math.floor(Math.random() * (+5 - +0) + +1) - 1;
let randomAns2 = Math.floor(Math.random() * (+5 - +0) + +1) - 1;
let question = `${randomAns1 + randomAns2}`;
let last;
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

window.onclick = (e ) => {
    typeSpeed = document.getElementById('speed-type').innerHTML;
    typeType = document.getElementById('hedder-type').innerHTML
    if (oldCh !== typeType){
            oldCh = typeType
            let newFirst = Math.floor(Math.random() * (+5 - +0) + +1) - 1;
            let newSecond = Math.floor(Math.random() * (+5 - +0) + +1) - 1;
            randomAns1 = newSecond;
            randomAns2 = newFirst;
            if (typeType === "sub") {
                document.getElementById("hedder-qustion").innerHTML = `${randomAns1} - ${randomAns2}`;
                question = `${randomAns1 - randomAns2}`;
            } else if (typeType === "add") {
                document.getElementById("hedder-qustion").innerHTML = `${randomAns1} + ${randomAns2}`;
                question = `${randomAns1 + randomAns2}`;
            } else if (typeType === "mul") {
                document.getElementById("hedder-qustion").innerHTML = `${randomAns1} * ${randomAns2}`;
                question = `${randomAns1 * randomAns2}`;
            } else {
                // }else "div"{
                document.getElementById("hedder-qustion").innerHTML = `${randomAns1} / ${randomAns2}`;
                question = `${randomAns1 / randomAns2}`;
            }

    }
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
        debugger
        if (MainGrid.grid[MainGrid.yEnd][element.x] === "nope" && element.y  < MainGrid.yEnd) {
        // if (MainGrid.grid[MainGrid.yEnd + element.height][element.x] === "nope") {
            debugger
            // if (MainGrid.grid[element.y + element.height][element.x] === "nope" && MainGrid.yEnd === element.y ) {
            gameOver = true;
        }        

        if (MainGrid.grid[ay] !== undefined) {

            if (MainGrid.grid[element.y + element.height][element.x] === "nope" ){
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
    console.log(typeType)
    if(gameOver === false){
        requestAnimationFrame(gamePlay);
        let width = Math.floor(op.width / 10) / 2
        c.clearRect(0, 0, innerWidth,innerHeight )

        let speed;
        let spaceOfNewBLockNew;
        if (typeSpeed === "Medium") {
            speed = 5;
            spaceOfNewBLockNew = spaceOfNewBLock / 5
            if (oldSpeed !== typeSpeed){
                // allBlocks = []
                oldSpeed = typeSpeed
            }
        } else if (typeSpeed === "Hard") {
            speed = 10;
            spaceOfNewBLockNew = spaceOfNewBLock / 8
            if (oldSpeed !== typeSpeed) {
                // allBlocks = []
                oldSpeed = typeSpeed
            }
            
        } else {
            speed = 1;
            spaceOfNewBLockNew = spaceOfNewBLock / 1
        }

        if (x > y + spaceOfNewBLockNew) {
            y += spaceOfNewBLockNew;
            makeMore();
        };
        let checked = checkCol(allBlocks);
        allBlocks.forEach(element => {
            let activeCol = false;
            if (checked.length && checked.includes(element.location)){
                activeCol = true;
                
            };
            element.moveBlock({mx,my,innerWidth:Math.floor(canvas.width),innerHeight:Math.floor(canvas.height)},activeCol,speed);
            element.drawBlock(c, canvas.width);
        });
        x += 1;
    }else{
        canvas.classList.toggle("gameOver");
        gameOverDiv.classList.toggle("gameOver");
    }
} 

gamePlay()