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
        debugger

        if (block.checkRemove()) {
            debugger
        } else {
            debugger
            block.location = i - count
            debugger
            return block
        }
        
    })
} 

let makeMore = () =>{
    let random = Math.random() * (+10 - +1) + +1;
    let text = `can u see me${random}` 
    let location = allBlocks.length 
    const block = new Block({
        x: (canvas.width / random),
        text,
        location
    })
    // console.log(block.text)
    allBlocks.push(block)
}

let gamePlay = () => {
    requestAnimationFrame(gamePlay);
    c.clearRect(0, 0, innerWidth,innerHeight)
    if (x > y + 150){
        y += 150
        makeMore()
    }
    allBlocks.forEach(element => {
        element.moveBlock({mx,my,innerWidth:canvas.width,innerHeight:canvas.height})
        element.drawBlock(c, canvas.width)
    });
    
    x += 1;

} 

gamePlay()