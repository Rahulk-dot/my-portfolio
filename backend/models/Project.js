const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const InfoBlockSchema = new mongoose.Schema(
  {
    image: {
      type: String, // S3 or CDN URL
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
  { _id: false }
); // Prevents subdocument _id creation

const ProjectSchema = new mongoose.Schema(
  {
    project_uuid: {
      type: String,
      default: uuidv4,
      unique: true
    },
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String, // URL to icon (S3 etc.)
      required: true
    },
    description: {
      type: String,
      required: true
    },
    user_uuid: {
      type: String,
      required: true
    },
    site_link: {
      type: String,
      required: true
    },
    information: {
      type: [InfoBlockSchema], // Array of objects
      required: true
    }
  },
  {
    timestamps: true
  }
);

// 🔒 Sanitize Output
ProjectSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret._id;
    delete ret.__v;
    return ret;
  }
});

module.exports = mongoose.model('Project', ProjectSchema);
