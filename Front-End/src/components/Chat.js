import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from "axios";
import jwt_decode from 'jwt-decode';
import './Chat.css';
import useChat from './useChat';
let token = localStorage.getItem('token');
const decoded = jwt_decode(token);
let cuurentUser = decoded.id;

const ChatRoom = (props) => {
  const { match: { params: { id } } } = props;
  let otherUser = id;
  const { messages, sendMessage } = useChat(otherUser, cuurentUser);
  const [newMessage, setNewMessage] = useState('');
  const [allMsg, setAllMsg] = useState([]);
  const [user, setUser] = useState('');

  useEffect(() => {
    getAllMsg()
    getUser()
  }, [otherUser]);

  const getAllMsg = () => {
    axios.get(`http://localhost:5000/${cuurentUser}/${otherUser}`)
      .then((res) => {
        setAllMsg(res.data);
      })
      .catch((err) => {
        console.log('ERR: ', err);
      })
  };

  const getUser = () => {
    if (decoded.role_id === 3) {
      axios.get(`http://localhost:5000/students/instructor_datails/${otherUser}`)
        .then((res) => {
          console.log('res.data :', res.data[0].name)
          setUser(res.data[0].name);
        })
        .catch((err) => {
          console.log('ERR: ', err);
        })
    }
    else if (decoded.role_id === 2) {
      axios.get(`http://localhost:5000/instructors/instructor_datails/${otherUser}`)
        .then((res) => {
          console.log('res.data :', res.data[0].name)
          setUser(res.data[0].name);
        })
        .catch((err) => {
          console.log('ERR: ', err);
        })
    }
  }

  return (
    <div className='chat-room-container'>
      <h1 className='room-name'> {user}</h1>
      <div className='messages-container'>
        <ol className='messages-list' >
          {messages.map((e, i) => (
            <li key={i} className={`message-item ${(e.sender === 1) ? 'senderMsg' : 'receivedMsg'}`}>{e.message} </li>
          ))}
        </ol>
      </div>
      <div className='input-send'>
        <input value={newMessage} placeholder='Write message...' className='new-message-input-field' onChange={(e) => { setNewMessage(e.target.value) }}
        />
        <button onClick={(e) => { sendMessage(newMessage, cuurentUser); setNewMessage('') }} className='send-message-button'> {'>'}</button>
      </div>
    </div>
  );
};

export default ChatRoom;

