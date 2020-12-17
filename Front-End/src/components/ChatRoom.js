import React, { useState, useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from "axios";
import './ChatRoom.css';
import useChat from './useChat';

const ChatRoom = ({ match: { params: { otherUser, cuurentUser } } }) => {
  const { messages, sendMessage } = useChat(otherUser, cuurentUser);
  const [newMessage, setNewMessage] = useState('');
  const [allMsg, setAllMsg] = useState([]);
  useEffect(() => { getAllMsg() }, [cuurentUser]);

  const getAllMsg = () => {
    axios.get(`http://localhost:5000/${cuurentUser}/${otherUser}`)
      .then((res) => {
        setAllMsg(res.data);
      })
      .catch((err) => {
        console.log('ERR: ', err);
      })
  };

  return (
    <div className='chat-room-container'>
      <h1 className='room-name'>Room: {otherUser}</h1>
      <div className='messages-container'>
        <ol className='messages-list'>
          {messages.map((e, i) => (
            <li key={i} className={`message-item ${(e.sender === 1) ? 'senderMsg' : 'receivedMsg'}`}>{e.message} </li>
          ))}
        </ol>
      </div>
      <div className='input-send'>
        <input
          value={newMessage}
          onChange={(e) => { setNewMessage(e.target.value) }}
          placeholder='Write message...'
          className='new-message-input-field'
        />
        <button onClick={(e) => { sendMessage(newMessage, cuurentUser); setNewMessage('') }} className='send-message-button'> Send</button>
      </div>
    </div>
  );
};
//ContextProvider
export default ChatRoom;

