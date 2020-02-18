package canvas.websocket.share.configuration;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

import canvas.websocket.share.component.webSocketHandler;

@Configuration
@EnableWebSocket
public class socketConfiguration implements WebSocketConfigurer {

	@Override
	public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(new webSocketHandler(), "/registry");
	}
}