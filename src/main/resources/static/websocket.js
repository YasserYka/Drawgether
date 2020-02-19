const socket = new WebSocket("ws://localhost:8080/registry");

socket.onopen = event => {
    console.log("Connetion Opened!");
}

socket.onclose = () => {
    console.log("Connection Closed!");
};
socket.onerror = (error) => {
    console.log(error);
};

socket.onmessage = message => {
    let array = message.data.split(",");
    if(array.length == 4)
        _draw(array[0], array[1], array[2], array[3]);
    else
        _changeColor(array[0]);
}

function brodcastCoordinate(lastX, lastY, offsetX, offsetY){socket.send([lastX, lastY, offsetX, offsetY]);}

function brodcastColor(value){socket.send(value);}