package canvas.websocket.share.component;

import java.io.IOException;

import org.json.JSONObject;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

@Component
public class socketHandler extends TextWebSocketHandler{

    @Override
    public void handleTextMessage(WebSocketSession session, TextMessage message) throws InterruptedException, IOException {
        JSONObject json = new JSONObject(message.getPayload());
        session.sendMessage(new TextMessage("Message");
    }
}