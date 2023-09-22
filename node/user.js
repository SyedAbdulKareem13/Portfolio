// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
// });

// module.exports = mongoose.model('User', userSchema);


// mongodb.js

const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27018'; 
const dbName = 'myPureLocal'; // Replace with your database name

const client = new MongoClient(url);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    return client.db(dbName);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = connectToDatabase;
