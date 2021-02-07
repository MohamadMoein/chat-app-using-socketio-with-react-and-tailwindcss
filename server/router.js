const express = require('express');
const router = express.Router();
const { getUsers } = require('./users.js');

// router.get('/', (req, res) => {
//   res.send('The server is up and running');
// });

router.get('/api/rooms', (req, res) => {
  const users = getUsers();
  const rooms = new Map();
  users.map((user) => rooms.set(user.room, (rooms.has(user.room)? rooms.get(user.room) + 1: 1)));
  res.json([...rooms]);
});

router.get('/api/users', (req, res) => {
  const users = getUsers();
  res.json(users);
});

module.exports = router;