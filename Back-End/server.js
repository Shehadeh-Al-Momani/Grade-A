const express = require("express");
require("dotenv").config();
const mainRouter = require("./routes/main-route");
const registerRouter = require('./routes/registration.route')
const cors = require("cors");
const db = require("./db");

const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.use(cors());
app.use(express.json());
app.use(mainRouter);
app.use(registerRouter);

// const path = require("path");
// app.use(express.static(path.join(__dirname + "/public")));

// app.get("/test", (req, res) => {
//   res.status(200).send("Working");
// });


// io.on("connection", (socket) => {
//   socket.on("chat", (message) => {
//     console.log("From client: ", message);
//     io.emit("chat", message);
//   });
// });

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
  console.log(`Client ${socket.id} connected`);
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
