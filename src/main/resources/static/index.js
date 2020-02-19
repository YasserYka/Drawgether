const canvas = document.querySelector("#board");
const context = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.strokeStyle = '#FFFFF';
context.lineCap = 'round';
context.lineJoin = 'round';
context.lineWidth = 25;

let isDrawing = false;
let lastX = 0;
let lastY = 0;

function draw(event){
    if(!isDrawing)
        return;
    
    _draw(lastX, lastY, event.offsetX, event.offsetY);

    brodcast(constructMessage("coordinate", [lastX, lastY, event.offsetX, event.offsetY]));

    [lastX, lastY]  = [event.offsetX, event.offsetY];
}

function _draw(lastX, lastY, offsetX, offsetY){
    context.beginPath();
    context.moveTo(lastX, lastY);
    context.lineTo(offsetX, offsetY);
    context.stroke();
}

function changeColor(value){
    context.strokeStyle = value;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => {
    isDrawing = true;

    [lastX, lastY]  = [event.offsetX, event.offsetY];
});

canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

setInterval(clearCanvas, 30000);

function clearCanvas(){context.clearRect(0, 0, canvas.width, canvas.height);}