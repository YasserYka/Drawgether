const socket = new WebSocket("ws://localhost:8080");

socket.onopen = event => {
    console.log(event);
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

socket.send("Test are you there?");