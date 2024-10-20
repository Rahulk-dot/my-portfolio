const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// Create a project
router.post('/', projectController.createProject);

// Get all project
router.get('/all', projectController.getAllProjects);

module.exports = router;