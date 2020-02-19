package canvas.websocket.share.component;

import java.io.IOException;
import java.util.HashMap;

import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

@Component
public class webSocketHandler extends TextWebSocketHandler{

    private HashMap<String, WebSocketSession> clients = new HashMap<String, WebSocketSession>();

    @Override
    public void handleTextMessage(WebSocketSession client, TextMessage message) throws InterruptedException, IOException {
        broadcast(client, message);
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession client){clients.put(client.getId(), client);}

    public void broadcast(WebSocketSession sender, TextMessage message){
        for(WebSocketSession client : clients.values())
            if(!sender.getId().equals(client.getId()))
                send(client, message);
    }

    public void send(WebSocketSession client, TextMessage message){
        try{client.sendMessage(message);}catch(IOException error){}
    }

    @Override
    public void afterConnectionClosed(WebSocketSession client, CloseStatus status){
        clients.remove(client.getId());
    }
}