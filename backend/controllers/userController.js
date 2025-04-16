const User = require('../models/User');

exports.createUser = async (req, res) => {
    try {
      const newItem = new User(req.body);
      await newItem.save();
      res.status(201).json(newItem);
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  };
  
  // Get all projects
  exports.getAllUser = async (req, res) => {
    try {
      const items = await User.find();
      res.json(items);
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  };


  // Get user by ID
  exports.getUserById = async (req, res) => {
    try {
      const item = await User.findById(req.params.id);
      if (!item) {
        return res.status(404).json({
          message: 'User not found'
        });
      }
      res.json(item);
    } catch (error) {
      res.status(500).json({
        message: error.message
      });
    }
  }