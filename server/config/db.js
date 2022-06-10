const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log('Mongo connected');
  } catch (err) {
    console.log('err', err.message);
    process.exit(1);
  }
};

module.exports = { connectDB };
