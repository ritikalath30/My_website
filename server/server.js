// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3000; // Set your desired port number

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());



// // Connect to MongoDB (replace with your MongoDB connection string)
// mongoose.connect('mongodb+srv://lathritika2:3229Ritika@302001@cluster0.90javrm.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

// // Define a message schema and model (replace with your schema)
// const Message = mongoose.model('Message', {
//   name: String,
//   email: String,
//   subject: String,
//   message: String,
// });

// // Define a route to handle form submissions
// app.post('/submit', async (req, res) => {
//   try {
//     // Create a new message instance
//     const message = new Message({
//       name: req.body.name,
//       email: req.body.email,
//       subject: req.body.subject,
//       message: req.body.message,
//     });

//     // Save the message to the MongoDB database
//     await message.save();

//     res.status(200).json({ message: 'Message sent and stored successfully.' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while processing your request.' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const { connectToDB, db } = require('./db.js');

const path = require('path');
app.use(express.json());
app.use(express.static(path.join(__dirname,"..",'public')));

app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, '..','public', 'index.html');
  res.sendFile(indexPath);
});

app.post('/submit', async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    await db.collection('messages').insertOne({
      name,
      email,
      subject,
      message,
    });
    console.log('Message saved to MongoDB');
  } catch (error) {
    console.error('Error saving message:', error);
    res.status(500).send('Internal Server Error');
  }
});
app.listen(port, async () => {
  await connectToDB()
  console.log(`Server is running on port ${port}`);
});
