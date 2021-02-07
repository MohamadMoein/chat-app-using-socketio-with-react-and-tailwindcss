import React from 'react';
import ReactEmoji from 'react-emoji';

const Message = ({ message: { user, text }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  if (user === trimmedName) isSentByCurrentUser = true;
  
  const messageRowClasses = isSentByCurrentUser? 'flex flex-row-reverse text-sm': 'flex flex-row text-sm';
  const messageBoxClasses = isSentByCurrentUser
  ? 'shadow-sm flex-initial my-2 mr-3 py-3 px-4 bg-white rounded-tr-2xl rounded-tl-2xl rounded-bl-2xl bg-blue-500 text-white'
  : 'shadow-sm flex-initial my-2 ml-3 py-3 px-4 bg-white rounded-tr-2xl rounded-tl-2xl rounded-br-2xl';

  return (
    <div className={messageRowClasses}>
      <div className={messageBoxClasses}>{ReactEmoji.emojify(text)}</div>
      <div className="flex items-center m-2"><div className="text-gray-500 text-sm">{user}</div></div>
    </div>
  );
}

export default Message;