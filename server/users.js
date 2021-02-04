const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(user => user.name === name && user.room === room);

  if (existingUser) {
    return { error: 'User already exists' };
  }

  const user = { id, name, room };

  users.push(user);

  return { user };
}

const removeUser = (id) => {
  const index = users.findIndex(user => user.id === id);
  
}

const getUser = () => {

}

const getUsersInRoom = () => {

}

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom
};