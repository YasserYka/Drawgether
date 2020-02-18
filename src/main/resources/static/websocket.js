const socket = new WebSocket("ws://localhost:8080/registry");

socket.onopen = event => {
    console.log(event);
}

socket.onclose = () => {
    console.log("Connection Closed!");
};
socket.onerror = (error) => {
    console.log(error);
};