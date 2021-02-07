import React from 'react';

const Input = ({ message, setMessage, sendMessage }) => {
  return (
    <form className="h-12 grid grid-cols-6 absolute bottom-0 left-0 w-full">
      <input
        className="col-span-5 w-full my-0 border-0"
        placeholder="Type a message..."
        value={message} 
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter'? sendMessage(e): null}
      />
      <button className="bg-blue-500 text-white" onClick={sendMessage}>Send</button>
    </form>
  );
}

export default Input;