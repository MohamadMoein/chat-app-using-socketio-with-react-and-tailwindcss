import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';

import Message from './Message';

const Messages = ({ messages, name }) => {
  return (
    <ScrollToBottom className="h-full pb-24 bg-gray-100 overflow-y-auto">
      {messages.map((message, index) => <div key={index}><Message message={message} name={name} /></div>)}
    </ScrollToBottom>
  );
}

export default Messages;