
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
require('dotenv').config();
const uri = process.env.MONGODB_URI;

// Establish the database connection using Mongoose
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Connection to MongoDB failed:', err);
  });

// Export the Mongoose instance or the connection for reuse in other modules
module.exports = mongoose;
