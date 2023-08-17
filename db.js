const { MongoClient } = require('mongodb');

const connectionString = process.env.MONG_URI
const client = new MongoClient(connectionString);

let db;

async function connect() {
  try {
    await client.connect();
    db = client.db('mydatabase'); // Replace 'mydatabase' with your desired database name
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

function getDB() {
  return db;
}

module.exports = {
    connect,
    getDB,
  };