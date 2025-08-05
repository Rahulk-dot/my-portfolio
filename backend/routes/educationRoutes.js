const express = require('express');
const router = express.Router();
const educationController = require('../controllers/educationController');

// Create a new education entry
router.post('/', educationController.createEducation);

// Get all education for a username
router.get('/all/:username', educationController.getAllEducationByUsername);

module.exports = router;
