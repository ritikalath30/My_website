const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

let db;

async function connectToDB() {
  console.log('hi');
  const uri = process.env.MONGODB_URI;

  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  

  try {
    await client.connect();
    db = client.db();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}
module.exports={connectToDB,db}

// connectToDB();
