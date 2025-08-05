const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const UserSchema = new mongoose.Schema(
  {
    user_uuid: {
      type: String,
      default: uuidv4,
      unique: true
    },
    username: {
      type: String,
      required: true,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    designation: {
      type: String,
      required: true
    },
    profileImage: {
      type: String // Optional - S3 URL
    },
    about: {
      type: String // Optional - Bio or summary for landing page
    }
  },
  {
    timestamps: true
  }
);

UserSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.__v;
    return ret;
  }
});

module.exports = mongoose.model('User', UserSchema);
