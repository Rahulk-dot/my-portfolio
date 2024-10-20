const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  gitHub:{
    type: String,
  },
  siteLink:{
    type: String,
  },
  user:{
    type: String,
  },
  document: {
    type: Number,
  },
});

module.exports = mongoose.model('Project', ProjectSchema);
