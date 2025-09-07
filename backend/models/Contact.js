const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema(
  {
    user_uuid: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    linkedin: {
      type: String
    },
    github: {
      type: String
    },
    twitter: {
      type: String
    },
    instagram: {
      type: String
    },
    whatsapp: {
      type: String
    },
    resume: {
      type: String // S3 URL
    }
  },
  {
    timestamps: true
  }
);

ContactSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.__v;
    return ret;
  }
});

module.exports = mongoose.model('Contact', ContactSchema);
