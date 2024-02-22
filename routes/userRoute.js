const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

//desc route to list all users
router.get('/', userController.listUsers);

//desc route to create a new user
router.post('/', userController.createUser);

//desc route to update a user
router.put('/:id', userController.updateUser);

//desc route to delete a user
router.delete('/:id', userController.deleteUser);


module.exports = router;
