const socket = new WebSocket("ws://localhost:8080/registry");

socket.onopen = event => {
    console.log(event);
    sendMessage("Test are you there?");
}

socket.onmessage = event => {
    console.log(event.data);
}

socket.onclose = () => {
    console.log("connection closed");
};
socket.onerror = (error) => {
    console.log(error);
};

function sendMessage(message){
    socket.send(JSON.stringify(message));
}