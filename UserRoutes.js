const express = require('express');
const router = express.Router();
const { getUsers, createUser, loginUser, updateUser, deleteUser } = require('../controllers/userController');

// Get all users
router.get('/', getUsers);

// Create a new user
router.post('/register', createUser);

// User login
router.post('/login', loginUser);

// Update user details
router.put('/:id', updateUser);

// Delete a user
router.delete('/:id', deleteUser);

module.exports = router;
