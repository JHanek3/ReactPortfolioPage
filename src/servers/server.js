// const http = require('http')
// const express = require('express');
// const cors = require('cors')


// // const server = http.createServer(app)
// const PORT = 4000;
// // const PORT = "https://hanekreact.herokuapp.com/"

// //// const server = require("http").createServer();
// // const server = express()
//   //// .use((req, res) => res.sendFile(INDEX, {root: __dirname}))
//   //  .listen(PORT, (console.log(`Listening on ${PORT}`)))
// const app = express()

// const server = http.createServer(app)
// const io = require("socket.io")(server);

// app.use(cors())

// const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

// io.on("connection", (socket) => {
//   console.log(`Client ${socket.id} connected`);

//   // Join a conversation
//   const { roomId } = socket.handshake.query;
//   socket.join(roomId);

//   // Listen for new messages
//   socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
//     io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
//   });

//   // Leave the room if the user closes the socket
//   socket.on("disconnect", () => {
//     console.log(`Client ${socket.id} diconnected`);
//     socket.leave(roomId);
//   });
// });

// server.listen(PORT, () => {
//   console.log(`Listening on port ${PORT}`);
// });


const server = require("http").createServer();
const io = require("socket.io")(server);

const PORT = 4000;
const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

io.on("connection", (socket) => {
  console.log(`Client ${socket.id} connected`);

  // Join a conversation
  const { roomId } = socket.handshake.query;
  socket.join(roomId);

  // Listen for new messages
  socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
    io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
  });

  // Leave the room if the user closes the socket
  socket.on("disconnect", () => {
    console.log(`Client ${socket.id} diconnected`);
    socket.leave(roomId);
  });
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});