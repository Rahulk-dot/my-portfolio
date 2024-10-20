const Project = require('../models/Project');

// Create a new project
exports.createProject = async (req, res) => {
  try {
    const newItem = new Project(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const items = await Project.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

