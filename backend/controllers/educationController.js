const Education = require('../models/Education');
const User = require('../models/User');

// Create a new education entry
exports.createEducation = async (req, res) => {
  try {
    const { user_uuid } = req.body;
    const user = await User.findOne({ user_uuid });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const newEducation = new Education(req.body);
    await newEducation.save();
    res.status(201).json(newEducation);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get all education for a username
exports.getAllEducationByUsername = async (req, res) => {
  try {
    const { username } = req.params;
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    const educationEntries = await Education.find({
      user_uuid: user.user_uuid
    });
    if (educationEntries.length === 0) {
      return res
        .status(404)
        .json({ message: 'No education entries found for this user' });
    }
    res.json(educationEntries);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
