
var ctx;


var s = () => {
    const canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let steps;
    let x1 = parseFloat(document.getElementById("x1").value);
    let x2 = parseFloat(document.getElementById("x2").value); 
    let y1 = parseFloat(document.getElementById("y1").value);
    let y2 = parseFloat(document.getElementById("y2").value);
    let dx = x2 - x1;
    let dy = y2 - y1;
    let absdx = Math.abs(dx);
    let absdy = Math.abs(dy);

    (absdx > absdy) ? steps=absdx : steps=absdy;
    
    let xInc = dx /steps;
    let yInc = dy /steps;
    let x = x1; let y = y1;
    for (i=1; i<=steps; i++){
        putPixel(x, y);
            x = x + xInc;
            y = y + yInc;
    }

}


function putPixel(x, y){
    console.log("11111")
    ctx.fillStyle = 'black';
    ctx.fillRect(x, y,1,1);    
}

