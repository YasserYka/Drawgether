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
    console.log(event);
    context.beginPath();
    context.moveTo(lastX, lastY);

    [lastX, lastY]  = [event.offsetX, event.offsetY];

    context.lineTo(lastX, lastY);
    context.stroke();
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => {
    isDrawing = true;

    [lastX, lastY]  = [event.offsetX, event.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
