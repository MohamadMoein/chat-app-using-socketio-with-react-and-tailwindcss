import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <div className="flex justify-center text-center h-screen items-center bg-gray-800">
      <div className="p-4 w-96">
        <h1 className="text-white pb-2 border-b-2 border-white border-solid my-2 font-bold text-4xl">Join</h1>
        <div><input placeholder="Name" className="" type="text" onChange={(e) => setName(e.target.value)} /></div>
        <div><input placeholder="Room" className="" type="text" onChange={(e) => setRoom(e.target.value)} /></div>
        <Link onClick={(e) => (!name || !room)? e.preventDefault(): null} to={`/chat?name=${name}&room=${room}`}>
          <button className="bg-blue-600 w-full text-white my-2 p-2.5 rounded-md font-medium" type="submit">Enter</button>
        </Link>
      </div>
    </div>
  );
};

export default Join;