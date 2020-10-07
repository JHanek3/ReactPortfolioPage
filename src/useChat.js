import {useEffect, useRef, useState} from "react"
import socketIOClient from "socket.io-client"

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage" //name of the event
const SOCKET_SERVER_URL = "http://localhost:4000"
// const SOCKET_SERVER_URL =
//   "https://hanekreact.herokuapp.com/ChatApp";

const useChat = (roomId) => {
  const [messages, setMessages] = useState([])
  const socketRef = useRef()
  //useRef is used to keep any mutable value around, like instance fields in classes
  
  useEffect(() => {
    
    //Create the websocket connection
    socketRef.current = socketIOClient(SOCKET_SERVER_URL, {
      query: {roomId},
    })
    
    //Listen for incoming messages
    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      }
      setMessages((messages) => [...messages, incomingMessage])
    })

    //Destroy the socket reference when the connection is closed
    return () => {
      socketRef.current.disconnect()
    }
  }, [roomId])

  //Sends a message to the server that forwards it to all users in the same room
  const sendMessage = (messageBody) => {
    socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, {
      body: messageBody,
      senderId: socketRef.current.id,
    })
  }

  return { messages, sendMessage}
}

export default useChat