const mongoose = require('mongoose');
const { Schema } = mongoose;

const clientSchema = new Schema({
  name: String,
  email: String,
  phone: String,
});

const Client = mongoose.model('Client', clientSchema);
module.exports = Client;
