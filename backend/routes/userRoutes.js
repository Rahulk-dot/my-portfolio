const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Create a user
router.post('/', userController.createUser);

// Get all user
router.get('/all', userController.getAllUser);

// Get user by ID
router.get('/:id', userController.getUserById);

// Get user by username
router.get('/name/:username', userController.getUserByUsername);

// Update user by username
router.put('/update/:username', userController.updateUserByUsername);

module.exports = router;
