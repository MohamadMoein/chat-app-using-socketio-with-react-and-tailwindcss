import React from 'react';

const InfoBar = ({room}) => {
  return (
    <div className="h-12 bg-blue-600 text-white px-2 grid grid-cols-3 gap-2 items-center">
      <div>
        <h3 data-before-content="" className="chat-room-title">{room}</h3>
      </div>
      <div className="col-start-3 col-span-4 justify-self-end px-3">
        <a className="close-btn" href="/" />
      </div>
    </div>
  );
}

export default InfoBar;