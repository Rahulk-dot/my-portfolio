const mongoose = require('mongoose');

const AboutMeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  introduction: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  document:{
    type: String,
  },
  user:{
    type: String,
    required:true,
  }
});

module.exports = mongoose.model('AboutMe', AboutMeSchema);