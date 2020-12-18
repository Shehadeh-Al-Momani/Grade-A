import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from "axios";
import jwt_decode from 'jwt-decode';
import './Chat.css';
import useChat from './useChat';
let token = localStorage.getItem('token');
const decoded = jwt_decode(token);
let cuurentUser = decoded.id;

const Chat = (props) => {
  const { match: { params: { id } } } = props;
  let otherUser = id, stuId, insID;

  if (decoded.role_id === 3) { stuId = cuurentUser; insID = id }
  if (decoded.role_id === 2) { stuId = id; insID = cuurentUser }
  const [newMessage, setNewMessage] = useState('');
  const { messages, sendMessage } = useChat(newMessage, stuId, insID, cuurentUser);

  const [allMsg, setAllMsg] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    getUser()
  }, [id]);

  console.log('id :', id)
  const getUser = () => {
    axios.get(`http://localhost:5000/users/${id}`)
      .then((res) => {
        console.log('res.data :', res.data)
        setUser(res.data);
      })
      .catch((err) => {
        console.log('ERR: ', err);
      })
  }

  return (
    <div className='chat-room-container'>
      <h1 className='room-name'> {user}</h1>
      <div className='messages-container'>
        <ol className='messages-list' >
          {messages.map((e, i) => (
            <div>
              <li key={i} className={`message-item ${(e.sender === 1) ? 'senderMsg' : 'receivedMsg'}`}>{e.message} </li>
            </div>
          ))}
        </ol>
      </div>
      <div className='input-send'>
        <input value={newMessage} placeholder='Write message...' className='new-message-input-field' onChange={(e) => { setNewMessage(e.target.value) }}
        />
        <button onClick={(e) => { sendMessage(newMessage, stuId, insID, cuurentUser); setNewMessage('') }} className='send-message-button'> {'>'}</button>
      </div>
    </div>
  );
};

export default Chat;

