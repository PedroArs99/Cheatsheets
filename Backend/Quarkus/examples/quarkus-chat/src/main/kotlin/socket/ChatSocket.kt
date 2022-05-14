package socket

import java.util.concurrent.ConcurrentHashMap
import java.util.function.Consumer
import javax.enterprise.context.ApplicationScoped
import javax.websocket.OnClose
import javax.websocket.OnError
import javax.websocket.OnMessage
import javax.websocket.OnOpen
import javax.websocket.SendHandler
import javax.websocket.Session
import javax.websocket.server.PathParam
import javax.websocket.server.ServerEndpoint


// Configures the web socket url
@ServerEndpoint("/chat/{username}")
@ApplicationScoped
internal class ChatSocket {


    // Store the currently opened sessions
    private val sessions = ConcurrentHashMap<String, Session>();

    @OnOpen
    fun onOpen(session: Session, @PathParam("username") username: String) {
        sessions[username] = session
        broadcast("$username joined the chat")
    }

    @OnClose
    fun onClose(session: Session, @PathParam("username") username: String) {
        sessions.remove(username)
        broadcast("$username has left the chat")
    }

    @OnError
    fun onError(session: Session, @PathParam("username") username: String, throwable: Throwable) {
        sessions.remove(username)
        broadcast("$username has left the chat on error: ${throwable.message}")
    }

    @OnMessage
    fun onMessage(@PathParam("username") username: String, message: String) {
        if(message.equals("_ready_", ignoreCase = true)) {
            broadcast("$username is ready")
        } else {
            broadcast(">> $username: $message")
        }
    }


    private fun broadcast(message: String) {
        sessions.values.forEach { session ->
            session.asyncRemote.sendText(message) { result ->
                if (result.exception != null) {
                    println("Error sending message: ${result.exception}")
                }
            }
        }
    }
}