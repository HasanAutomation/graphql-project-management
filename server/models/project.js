const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectSchema = new Schema({
  name: String,
  description: String,
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'],
  },
  clientId: {
    type: Schema.Types.ObjectId,
    ref: 'Client',
  },
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;
