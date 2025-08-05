const Project = require('../models/Project');
const User = require('../models/User');

// Create a new project
exports.createProject = async (req, res) => {
  try {
    const newItem = new Project(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    const items = await Project.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get all projects by user UUID
exports.getProjectsByUserUuid = async (req, res) => {
  try {
    const items = await Project.find(
      { user_uuid: req.params.user_uuid },
      'project_uuid icon site_link' // Only select these fields
    );

    if (items.length === 0) {
      return res.status(404).json({
        message: 'No projects found for this user'
      });
    }

    res.json(items);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get project by UUID
exports.getProjectByUuid = async (req, res) => {
  try {
    const item = await Project.findOne({
      project_uuid: req.params.project_uuid
    });

    if (!item) {
      return res.status(404).json({
        message: 'Project not found'
      });
    }

    res.json(item);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get all projects by username
exports.getProjectsByUsername = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });

    if (!user) {
      return res.status(404).json({
        message: 'User not found'
      });
    }

    const items = await Project.find(
      { user_uuid: user.user_uuid },
      'project_uuid icon site_link name' // Only select these fields
    );

    if (items.length === 0) {
      return res.status(404).json({
        message: 'No projects found for this user'
      });
    }

    res.json(items);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
