import Block from"./falling_block";
let canvas = document.getElementById('canvas-area');
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let c = canvas.getContext('2d');
let x = 0;
let dx = 5; 
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
    allBlocks = allBlocks.filter((block, i) => {
        let count = 0; 
        // debugger

        if (block.checkRemove() ) {
            // debugger
        } else {
            // debugger
            block.location = i - count
            // debugger
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
        // debugger
        let stringY = String(element.y + Math.floor(canvas.width / 10))
        // debugger
        if (Object.keys(allBlockDis).includes(stringY)){
            debugger
            // let indexCol = Object.keys(allBlockDis).indexOf(allBlockDis[stringY]);
            cols.push(allBlockDis[stringY]);  
            cols.push(element.location);
            // debugger
            a = true;
        }
        allBlockDis[element.y] = element.location
    });
    if (a){
        // debugger
        return cols 
    }else{
        return [] 
    } 
    // let ab = aocks;
    // let allBlockDis = {};
    // let cols = [];
    // let a = false;
    // allBlocks.forEach(element => {
    //     // debugger
    //     let stringY = String(element.y)
    //     if (Object.keys(allBlockDis).includes(stringY)){
    //         debugger
    //         // let indexCol = Object.keys(allBlockDis).indexOf(allBlockDis[stringY]);
    //         cols.push(allBlockDis[stringY]);  
    //         cols.push(element.location);
    //         // debugger
    //         a = true;
    //     }
    //     allBlockDis[element.y] = element.location
    // });
    // if (a){
    //     // debugger
    //     return cols 
    // }else{
    //     return [] 
    // } 
 }

let gridAll = () => {
    let allGrid = [];
    for (let i = 0; i < 10; i++) {
        let small = Math.floor(canvas.width / 10)
        allGrid.push( small * i );
        
    }
    //  debugger
     return allGrid
};

let makeMore = () =>{
    let random = Math.random() * (+10 - +1) + +1;
    let text = `can u see me${random}` 
    let location = allBlocks.length 
    let width = Math.floor(canvas.width / 10)
    const block = new Block({
        x: Math.floor(canvas.width / random),
        text,
        location,
        width
    })
    // console.log(block.text)
    allBlocks.push(block)
}

let gamePlay = () => {
    gridAll();
    requestAnimationFrame(gamePlay);
    c.clearRect(0, 0, innerWidth,innerHeight)
    if (x > y + 150){
        y += 150
        makeMore()
    }
    let checked = checkCol(allBlocks);
    // debugger
       console.log("after")
       console.log(allBlocks)
    allBlocks.forEach(element => {
        // debugger
        let activeCol = false 
        if (checked.length && checked.includes(element.location)){
            activeCol = true;
            debugger
        };
        element.moveBlock({mx,my,innerWidth:Math.floor(canvas.width),innerHeight:Math.floor(canvas.height)},activeCol)
        // if (element.distroyMe) {
        //     allBlocks = allBlocks.filter((block, i) => {
        //     let count = 0;
        //     // debugger

        //     if (block.distroyMe) {
        //         // debugger
        //     } else {
        //         // debugger
        //         block.location = i - count
        //         // debugger
        //         return block
        //     }

        // })
        // }else{
            console.log(Math.floor(canvas.width / 10))
            element.drawBlock(c, canvas.width)
        // 
    });
    console.log("after")
    console.log(allBlocks)
    // check dis

    
    x += 1;

} 

gamePlay()