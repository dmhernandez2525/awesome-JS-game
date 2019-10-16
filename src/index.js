let canvas = document.getElementById('canvas-area')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let c = canvas.getContext('2d');
let one; 
c.fillRect(200, 200, 100, 100)
c.fillRect(900, 900, 100, 100)
c.fillRect(500, 500, 100, 100)
console.log(canvas)
let x = 0;
let dx = 5; 
let y = 0;
let dy = 5;
let sqr = (one,two) => {
    one = c.fillRect(one, two, 100, 100)
};

let mx;
let my;
window.onclick = (e ) => {
    mx = e.pageX;
    my = e.pageY;
} 

let gamePlay = () => {
    requestAnimationFrame(gamePlay);
    c.clearRect(0, 0, innerWidth,innerHeight)
    sqr(x,y)
    if (x + 100 >= innerWidth || 0 > x || mx === x ) {
        dx = -dx
    }
    if (y >= innerHeight || 0 > y || my === y) {
        dy = -dy
    }
    // console.log(mx)
    // console.log(x)

    if (y + 100  >= innerHeight) {
        console.log("winner")
    }else{
        console.log(y)
        console.log(11111111111111111)
        console.log(innerHeight)
        console.log(2222222222222222)
        y += dy
    }
    // y += dy;

} 

gamePlay()