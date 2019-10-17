let canvas = document.getElementById('canvas-area')
canvas.width = window.innerWidth
canvas.height = window.innerHeight
let c = canvas.getContext('2d');
let one; 
c.fillRect(200, 200, 00, 100)
c.fillRect(900, 900, 00, 100)
c.fillRect(500, 500, 00, 100)
console.log(canvas)
let x = 0;
let dx = 5; 
let y = 0;
let dy = 4;
let y2 = 0;
let dy2 = 4;

let sqr = (one,two) => {
    one = c.fillRect(one, two, 95, 100)
};

let mx;
let my;
window.onclick = (e ) => {
    mx = e.pageX;
    my = e.pageY;
} 

let sqlLine = () => {
    let allSq = [];
    for (let i = 0; i < 11; i++) {

        
    };
    return allSq;
};

let gamePlay = () => {
    requestAnimationFrame(gamePlay);
    c.clearRect(0, 0, innerWidth,innerHeight)
    sqr(x,y);
    sqr(x + 100 ,y);
    sqr(x + 200,y);
    sqr(x + 300 ,y);
    sqr(x + 400 ,y);
    sqr(x + 500 ,y);
    sqr(x + 600 ,y);
    sqr(x + 700 ,y);
    sqr(x + 800 ,y);
    sqr(x + 900 ,y);
    if (x + 1000 >= innerWidth || 0 > x || mx === x ) {
        dx = -dx
    }
    if (y >= innerHeight || 0 > y || my === y) {
        dy = -dy
    }

    if (y + 100  >= innerHeight) {
        sqr(x, y);
        sqr(x + 100, y2);
        sqr(x + 200, y2);
        sqr(x + 300, y2);
        sqr(x + 400, y2);
        sqr(x + 500, y2);
        sqr(x + 600, y2);
        sqr(x + 700, y2);
        sqr(x + 800, y2);
        sqr(x + 900, y2);
        if (y2 + 105 >= y){

        }else{
            y2 += dy2
        }
    }else{
        y += dy
    }
    // x += dx;
    // y += dy;

} 

gamePlay()