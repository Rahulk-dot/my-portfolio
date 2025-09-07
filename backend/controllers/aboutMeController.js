const AboutMe = require('../models/AboutMe');
const User = require('../models/User'); // don’t forget this import

// Create or update AboutMe
exports.createOrUpdateAboutMe = async (req, res, next) => {
  try {
    const { user_uuid, description, images } = req.body;

    let aboutMe = await AboutMe.findOne({ user_uuid });
    if (aboutMe) {
      // Update
      aboutMe.description = description;
      aboutMe.images = images || aboutMe.images;
      await aboutMe.save();
      return res.json(aboutMe);
    } else {
      // Create new
      aboutMe = new AboutMe({
        user_uuid,
        description,
        images
      });
      await aboutMe.save();
      return res.status(201).json(aboutMe);
    }
  } catch (error) {
    next(error);
  }
};

// Get AboutMe by Username
exports.getAboutMeByUsername = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const item = await AboutMe.findOne({ user_uuid: user.user_uuid });
    res.json(item);
  } catch (error) {
    next(error);
  }
};
