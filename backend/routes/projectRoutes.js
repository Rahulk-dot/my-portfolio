const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Create a project
router.post('/', projectController.createProject);

// Get all project
router.get('/all', projectController.getAllProjects);

// Get all projects by user UUID
router.get('/user/:user_uuid', projectController.getProjectsByUserUuid);

// Get project by UUID
router.get('/:project_uuid', projectController.getProjectByUuid);

// Get all projects by username
router.get('/all/:username', projectController.getProjectsByUsername);

module.exports = router;
