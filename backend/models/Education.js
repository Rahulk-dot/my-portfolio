const mongoose = require('mongoose');

const DegreeSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['School', 'Undergraduate', 'Postgraduate', 'Diploma', 'Other'],
      required: true
    },
    institution: {
      type: String,
      required: true
    },
    location: {
      type: String
    },
    board_or_university: {
      type: String
    },
    degree_or_class: {
      type: String,
      required: true
    },
    stream_or_major: {
      type: String
    },
    startYear: {
      type: Number,
      required: true
    },
    endYear: {
      type: Number
    },
    grade: {
      type: String
    },
    description: {
      type: String
    }
  },
  { _id: false }
); // prevent _id in inner array objects

const EducationSchema = new mongoose.Schema({
  user_uuid: {
    type: String,
    required: true,
    unique: true
  },
  degrees: {
    type: [DegreeSchema],
    default: []
  }
});

// Remove _id and __v from the parent schema
EducationSchema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret._id;
    delete ret.__v;
    return ret;
  }
});

module.exports = mongoose.model('Education', EducationSchema);
