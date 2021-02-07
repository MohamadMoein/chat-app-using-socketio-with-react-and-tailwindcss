const cors = require('cors');
const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const path = require('path');

const { addUser, removeUser, getUser, getUsers, removeUserInRoom, getUsersInRoom } = require('./users');

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server, {
  cors: {
    origin: '*',
  }
});

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(cors());
app.use(router);

io.on('connection', (socket) => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, name, room });
    
    if (error) return callback(error);

    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${room}` });
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });
 
    socket.join(room.trim().toLowerCase());

    io.to(user.room).emit('roomData', { room: user.room, users:getUsersInRoom(user.room) });

    callback(getUsers());
  });
  
  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });
    io.to(user.room).emit('roomData', { room: user.room, users:getUsersInRoom(user.room) });

    callback();
  });

  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', { user:'admin', text:`${user.name} has left` })
    }
  });
});

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));