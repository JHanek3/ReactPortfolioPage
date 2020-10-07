import React, {useState} from "react"
import { useHistory } from "react-router-dom"
import "../../compCSS/ChatRoom.css"
import {Container, Row, Col} from "react-bootstrap"

const ChatHome = () => {
  const [roomName, setRoomName] = useState("")
  const history = useHistory()

  const handleRoomNameChange = (event) => {
    setRoomName(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let path = `/ChatApp/${roomName}`
    history.push(path)
  }

  return (
    <Container fluid>
      <Row>
        <Col>
          <h1 className="header">Jon's ChatRoom</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <form onSubmit={handleSubmit} className="homeForm">
            <p>Enter a room name, any will do just make sure your buddy enters the same room name :)</p>
            <label>
            <input 
              type="text"
              placeholder="Room Name" 
              value={roomName} 
              onChange={handleRoomNameChange}
              className="text-input-field" 
            />
            </label>
            <br/>
            <button
              type="submit"
              className="enter-room-button"
            >Join room</button>
          </form>
        </Col>
      </Row>
    </Container>
    
  )
}

export default ChatHome