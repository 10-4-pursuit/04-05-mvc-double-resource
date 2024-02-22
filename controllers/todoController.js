const express = require("express");
const app = express();
const todosData = require("../data/todos");


//Middleware
app.use(express.json());


//desc Get all todos
const listTodos = (req, res) => {
    const todos = todosData.findAll();
    res.status(200).json(todos);
};




//desc Create a new todo
const createTodo = async (req, res) => {
    const { title, completed, userId } = req.body;

    // Create a new todo item
    const newTodo = todosData.add({
        title,
        completed,
        userId
    });


    res.status(201).json(newTodo);
};

//desc Update a todo
const updateTodo = (req, res) => {
    const id = parseInt(req.params.id, 10); 
    const { title, completed } = req.body; 

   
    const index = todos.findIndex(todo => todo.id === id);

  
    if (index === -1) {
        return res.status(404).send({ message: 'Todo not found' });
    }

    todos[index] = { ...todos[index], title, completed, id };

    
    res.status(200).json(todos[index]);
};


//desc Delete a todo
const deleteTodo = async (req, res) => {
    const id = Number(req.params.id);
    todosData.deleteById(id);
    res.status(200).json({ message: 'Todo successfully deleted' });
}

//


module.exports = { 
    createTodo, listTodos,
    updateTodo, deleteTodo};
