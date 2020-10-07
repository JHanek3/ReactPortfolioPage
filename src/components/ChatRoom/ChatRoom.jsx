import React, {useState} from "react"
import {Container, Row, Col} from "react-bootstrap"
import "../../compCSS/ChatRoom.css"
import useChat from "../../useChat"

const ChatRoom = (props) => {
  const {roomId} = props.match.params //Gets roomid from the url
  const {messages, sendMessage} = useChat(roomId) // creates a websocket and manages messaging
  const [newMessage, setNewMessage] = useState("") //Message to be sent

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value)
  }
  const handleSendSubmit = (e) => {
    e.preventDefault()
    sendMessage(newMessage)
    setNewMessage("")
  }

  return (
    <Container fluid>
      <h1 className="room-name">Room: {roomId}</h1>
      <Row>
        <Col>
          <Container className="messages-container"fluid>
            <ol className="messages-list">
              {messages.map((message, i) => (
                <li
                  key={i}
                  className={`message-item ${
                    message.ownedByCurrentUser ? "my-message" : "received-message"
                  }`}
                >
                  {message.body}
                </li>
              ))}
          </ol>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col>
          <form onSubmit={handleSendSubmit} className="roomForm">
            <input
              type="text"
              placeholder="Write message..."
              value={newMessage}
              onChange={handleNewMessageChange}
              className="new-message-input-field"
            />
            <button 
              type="submit"
              className="send-message-button"
            >Send</button>
          </form>
        </Col>
      </Row>
    </Container>

  )
}
export default ChatRoom