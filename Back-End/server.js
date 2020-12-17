const express = require("express");
require("dotenv").config();
const cors = require("cors");
const http = require('http');
const app = express();
const socketio = require('socket.io');
const server = http.createServer(app);
// We adde cors.origin because cors work with express not socket.io so to solve this proplem we write this commmand
const io = socketio(server, {
  cors: {
    origin: '*',
  }
});

const mainRouter = require("./routes/main-route");
const registerRouter = require('./routes/registration.route')
const db = require("./db");

app.use(cors());
app.use(express.json());
app.use(mainRouter);
app.use(registerRouter);

app.post('/messeges', (req, res) => {
  const { stuID, insID, message, sender } = req.body;
  const query = 'INSERT INTO messeges (stuID, insID, message, sender) VALUES (?,?,?,?)';
  const data = [stuID, insID, message, sender];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
})

app.get('/:stuID/:insID', (req, res) => {
  const query = 'SELECT * FROM messeges WHERE stuID=? AND insID=?';
  const data = [req.params.stuID, req.params.insID];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
})

io.on("connection", (socket) => {
  const { otherUser, cuurentUser } = socket.handshake.query;
  // Join a conversation 
  socket.join(otherUser);
  // Listen for new messages from client
  socket.on('newMessage', (messageData) => {
    io.in(otherUser).emit('newMessage', messageData);
  });
  // Leave the room if the user closes the socket
  socket.on("disconnect", () => {
    socket.leave(otherUser);
  });
});

const PORT = 5000 || process.env.PORT;

server.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
