require('dotenv').config(); // Load environment variables
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // Remove the following two options as they are no longer supported
  // useCreateIndex: true,
  // useFindAndModify: false,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB database');
});
