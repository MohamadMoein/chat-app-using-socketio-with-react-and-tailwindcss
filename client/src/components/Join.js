import React, { useEffect, useState, createRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [rooms, setRooms] = useState([]);
  const roomRef = createRef();

  useEffect(() => {
    axios.get('/api/rooms').then(res => {
      setRooms(res.data);
    })
  }, [])

  return (
    <div className="flex justify-center text-center h-screen items-center bg-gray-800">
      <div className="p-4 w-96">
        <h1 className="text-white pb-2 border-b-2 border-white border-solid my-2 font-bold text-3xl">MyChat</h1>
        <div><input placeholder="Name" value={name} type="text" onChange={(e) => setName(e.target.value)} /></div>
        <div><input placeholder="Room" value={room} type="text" onChange={(e) => setRoom(e.target.value)} /></div>
        <Link onClick={(e) => (!name || !room)? e.preventDefault(): null} to={`/chat?name=${name}&room=${room}`}>
          <button className="bg-blue-600 w-full text-white my-2 p-2.5 rounded-md font-medium" type="submit">Enter</button>
        </Link>
        <div className="text-white my-2">
          <h5 className="py-1">Rooms <span className="text-green-300">(online)</span></h5>
          <hr className="w-3/6 mx-auto"></hr>
          <div className="pt-3 pb-2 flex justify-center gap-3">
          {rooms.map((room, index) => (
            <div key={index} className="cursor-pointer border-2 py-1 px-3 border-gray-700 rounded-md"
              onClick={(e) => setRoom(e.target.querySelector('span:first-child').innerText)}
            >
              <span className="pointer-events-none">{room[0]}</span>
              <span className="pointer-events-none">{` (${room[1]})`}</span>
            </div>
          ))}
          </div>
          {rooms.length >= 1? <p className="text-sm text-gray-500">Click to choose</p>: <p>No one is here!</p>}
        </div>
      </div>
    </div>
  );
};

export default Join;