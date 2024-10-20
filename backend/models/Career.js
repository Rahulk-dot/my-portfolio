const mongoose = require("mongoose");

const CareerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  companyPlace: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
  companyLink: {
    type: String,
  },
  user: {
    type: String,
  },
  document: {
    type: String,
  },
});

module.exports = mongoose.model("Career", CareerSchema);
