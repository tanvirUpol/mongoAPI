const {getDB} = require('../db');

async function getUsers(req, res) {
  const db = getDB();
  const users = await db.collection('users').find().toArray();
  res.json(users);
}

async function createUser(req, res) {
  const db = getDB();
  const newUser = req.body;
  const result = await db.collection('users').insertOne(newUser);
//   console.log(result);
  res.json(result); 
}

module.exports = {
  getUsers,
  createUser,
};
