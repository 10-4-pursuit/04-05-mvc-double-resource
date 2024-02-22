const express = require('express');
const todoController = require('../controllers/todoController');
const router = express.Router();

//desc route to list all todos
router.get('/', todoController.listTodos);

//desc route to create a new todo
router.post('/', todoController.createTodo);

//desc route to update a todo
router.put('/:id', todoController.updateTodo);

//desc route to delete a todo
router.delete('/:id', todoController.deleteTodo);

//



module.exports = router;