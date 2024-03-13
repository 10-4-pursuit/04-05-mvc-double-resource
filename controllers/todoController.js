const express = require("express");
const router = express.Router();
const todoController = express();
const { findAll, findById, add, updateById, deleteById} = require('../data/todos')
const todos = require('../data/todos')

console.log(todos.findById("347d150c-f170-4ba2-9fad-8eb80636890f"))


// function to see all the todo items
const listToDos = (req, res) => {
  res.send(findAll(todos));
};

//function to find a todo item by id

const showTodo = (req, res) => {
  const { id } = req.params
  console.log(id)

  const foundTodo = todos.findById(id)

    res.json(foundTodo)

}



//function to validate a new to do item
function validateToDo(req, res, next) {

  const { title } = req.body;

  //validate input
  if (!title) {
    return res.status(400).json({ message: "Missing required field: title" });
  }
  next();
}



//function to create a new to do item
function createToDo( req, res) {
   
  const { title } = req.body;

  const freshTodos = todos.add(title)

  res.status(200).json({message: 'new item added successfully', freshTodos }, );
}


function updateToDo(req, res) {
    const { id } = req.params.id;
    const { title } = req.body;
    const updateInfo = updateById( id, title)

    res.status(200).json({updateInfo});

    // if (!id) {
    //     return res.status(404).json({ message: 'Todo not found' });
    //   }
    
    // res.status(200).json({message: 'new item updated successfully'});


//   const found = todos.some((todo) => todo.id === parseInt(req.params.id)); //search for matching id



//   if (found) {
//     const updateInfo = req.body;
//     todos.forEach((todo) => {
//       if (todo.id === parseInt(req.params.id)) {
//         todo.title = updateInfo.title ? updateInfo.title : todo.title;

//         res.status(200).json({ msg: `To-Do item updated`, todo });
//       }
//     });
//   } else {
//     res
//       .status(400)
//       .json({ msg: `No To-Do item with the id of ${req.params.id}` });
//   }

}

function deleteToDo(req, res) {
  const found = todos.findIndex((todo) => todo.id === parseInt(req.params.id)); //search for matching id

  if (found) {
        res.status(200).json({ 
          msg: `To-Do item deleted`, 
          todo: todos.filter((todo) => todo.id === parseInt(req.params.id) 
         ) })   
  } else {
    res
      .status(400)
      .json({ msg: `No To-Do item with the id of ${req.params.id}` });
  }

}

module.exports = { createToDo, listToDos, validateToDo, updateToDo, deleteToDo, showTodo };
