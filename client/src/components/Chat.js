import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import InfoBar from './InfoBar';
import Input from './Input';
import Messages from './Messages';

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const ENDPOINT = 'https://myplayground.ir';
  
  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit('join', { name, room }, (data) => {
      if(typeof data === 'string') {
        alert('Username is taken. Please choose another one');
        window.location = '/';
      }
    });

    return () => {
      socket.emit('disconnect');
      socket.disconnect();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages((prevMessages) => {
        return [...prevMessages, message];
      });
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  // console.log(message, messages);

  return (
    <div className="flex items-center justify-center bg-gray-700 h-screen">
      <div className="w-full h-full sm:w-8/12 md:w-7/12 lg:w-4/12 sm:h-5/6 bg-white sm:rounded-md overflow-hidden relative">
        <InfoBar room={room} />
        <Messages
          messages={messages}
          name={name}
        />
        <Input
          message={message}
          sendMessage={sendMessage}
          setMessage={setMessage}
        />
      </div>
    </div>
  );
};

export default Chat;