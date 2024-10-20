const mongoose = require('mongoose');

const CoCurricularSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  designation: {
    type: String,
    required: true,
  },
  user:{
    type: String,
  },
  document:{
    type: String,
  },
  email:{
    type: String,
  },
});

module.exports = mongoose.model('CoCurricular', CoCurricularSchema);