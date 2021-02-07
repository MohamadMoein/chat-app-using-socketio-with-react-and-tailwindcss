import React from 'react';

const InfoBar = ({room}) => {
  return (
    <div className="h-12 bg-blue-600 text-white px-2 grid grid-cols-6 gap-2 items-center">
      <div className="col-span-5">
        <h3 data-before-content="" className="chat-room-title">{room}</h3>
      </div>
      <div className="col-start-6 col-span-1 justify-self-end px-3">
        <a className="close-btn" href="/" />
      </div>
    </div>
  );
}

export default InfoBar;