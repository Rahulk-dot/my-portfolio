const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// Create or update contact
router.post('/', contactController.createOrUpdateContact);

// get by user name
router.get('/:username', contactController.getContactByUsername);

module.exports = router;
