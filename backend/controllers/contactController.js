const Contact = require('../models/Contact');
const User = require('../models/User');

// Create or update contact
exports.createOrUpdateContact = async (req, res) => {
  try {
    const {
      user_uuid,
      phoneNumber,
      email,
      linkedin,
      github,
      twitter,
      instagram,
      whatsapp,
      resume
    } = req.body;

    let contact = await Contact.findOne({ user_uuid });
    if (contact) {
      // Update existing contact
      contact.phoneNumber = phoneNumber;
      contact.email = email;
      contact.linkedin = linkedin;
      contact.github = github;
      contact.twitter = twitter;
      contact.instagram = instagram;
      contact.whatsapp = whatsapp;
      contact.resume = resume;
      await contact.save();
      return res.json(contact);
    } else {
      // Create new contact
      contact = new Contact({
        user_uuid,
        phoneNumber,
        email,
        linkedin,
        github,
        twitter,
        instagram,
        whatsapp,
        resume
      });
      await contact.save();
      return res.status(201).json(contact);
    }
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get by Username
exports.getContactByUsername = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }
    const item = await Contact.findOne({ user_uuid: user.user_uuid });
    res.json(item);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
