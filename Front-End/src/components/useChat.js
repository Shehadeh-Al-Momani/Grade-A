import { useState, useEffect } from 'react';
import axios from "axios";
import io from 'socket.io-client';
let socket;

const useChat = (otherUser, cuurentUser) => {
  const [messages, setMessages] = useState([]); // Sent and received messages
  const [oneMessage, setMessage] = useState([]);

  useEffect(() => {
    socket = io(`http://localhost:5000/`, { query: { otherUser, cuurentUser } }); // Creates a WebSocket connection
    axios.get(`http://localhost:5000/${cuurentUser}/${otherUser}`).then((res) => { setMessages(res.data); });
    // socket.emit('newMessage', { name, room });

    // Listens for incoming messages
    socket.on('newMessage', (message) => {
      const incomingMessage = { ...message, sender: (message.senderId === socket.id) ? 1 : 0 };
      setMessage(incomingMessage);

      axios.post('http://localhost:5000/messeges', incomingMessage) 
      .then((res) => {
          messages.push(incomingMessage)
          setMessages(messages);
        })
        .catch((err) => { console.log('ERR: ', err) })
    });

    return () => { socket.disconnect() }; // Destroys the socket reference when the connection is closed
  }, [oneMessage])


  // Sends a message to the server that forwards it to all users in the same room
  const sendMessage = (messageBody, id) => {
    socket.emit('newMessage', {
      message: messageBody,
      senderId: socket.id,
      insID: otherUser,
      stuID: cuurentUser,
      sender_id: id
    });
  };

  return { messages, sendMessage };
};

export default useChat;
