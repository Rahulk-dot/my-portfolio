const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
  schoolName: {
    type: String,
    required: true,
  },
  degree:{
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate:{
    type: Date,
  },
  schoolPlace:{
    type: String,
  },
  description:{
    type: String,
  },
  user:{
    type: String,
  },
});

module.exports = mongoose.model('Education', EducationSchema);