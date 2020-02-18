const canvas = document.querySelector("#board");
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = '#FF0000';
context.lineCap = 'round';
context.lineJoin = 'round';
context.lineWidth = 50;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(event){
    if(!isDrawing)
        return;
    
    _draw(lastX, lastY, event.offsetX, event.offsetY);

    brodcast(lastX, lastY, event.offsetX, event.offsetY);

    [lastX, lastY]  = [event.offsetX, event.offsetY];
}

function _draw(lastX, lastY, offsetX, offsetY){
    console.log(lastX, lastY, offsetX, offsetY)
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(offsetX, offsetY);
    context.stroke();
}

function brodcast(lastX, lastY, offsetX, offsetY){socket.send([lastX, lastY, offsetX, offsetY]);}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => {
    isDrawing = true;

    [lastX, lastY]  = [event.offsetX, event.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

socket.onmessage = message => {
    let array = message.data.split(",");
    _draw(array[0], array[1], array[2], array[3]);
}