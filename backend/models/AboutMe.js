const mongoose = require('mongoose');

const AboutMeSchema = new mongoose.Schema({
  user_uuid: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  images: [
    {
      type: String, // store URLs or image paths
      default: []
    }
  ]
});

AboutMeSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.__v;
    return ret;
  }
});

module.exports = mongoose.model('AboutMe', AboutMeSchema);
