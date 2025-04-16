const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a user
router.post('/', userController.createUser);

// Get all user
router.get('/all', userController.getAllUser);

// Get user by ID
router.get('/:id', userController.getUserById);

module.exports = router;