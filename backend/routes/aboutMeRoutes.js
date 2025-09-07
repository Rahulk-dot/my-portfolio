const express = require('express');
const router = express.Router();
const aboutMeController = require('../controllers/aboutMeController');

// Create or update contact
router.post('/', aboutMeController.createOrUpdateAboutMe);

// get by user name
router.get('/:username', aboutMeController.getAboutMeByUsername);

module.exports = router;
