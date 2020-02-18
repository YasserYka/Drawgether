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
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws InterruptedException, IOException {
        broadcast(new TextMessage(message.getPayload()));
    }

    @Override
    public void afterConnectionEstablished(WebSocketSession session){clients.put(session.getId(), session);}

    public void broadcast(TextMessage message){
        for(WebSocketSession client : clients.values())
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