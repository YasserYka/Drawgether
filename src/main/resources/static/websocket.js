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
    let data = JSON.parse(message.data);
    let body = data.body;
    if(data.event == "coordinate")
        _draw(body[0], body[1], body[2], body[3]);
    else if(data.event == "color")
        changeColor(body);
}

function brodcast(message){socket.send(message);}

const constructMessage = (event, body) => (JSON.stringify({'event': event, 'body':body}));