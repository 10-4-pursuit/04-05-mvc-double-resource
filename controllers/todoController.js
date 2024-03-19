const {
  findAll,
  findById,
  add,
  updateById,
  deleteById,
} = require("../data/todos");
const { todos } = require("../data/todos");

// function to see all the todo items
const listToDos = (req, res) => {
  res.send(findAll(todos));
};

//function to find a todo item by id
const showTodo = (req, res) => {
  const { id } = req.params;
  console.log(id);

  const foundTodo = todos.findById(id);
  res.json(foundTodo);
};

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
function createToDo(req, res) {
  const { title, completed, userId } = req.body;

  const freshTodos = add(title, completed, userId);

  res.status(201).send(freshTodos);
}

function updateToDo(req, res) {
  const { id } = req.params;
  const updatedInfo = updateById(id, req.body);

  res.status(200).send(updatedInfo);
}

function deleteToDo(req, res) {
  const { id } = req.params;
  const deletedInfo = deleteById(id);

  res.status(200).send({ message: "Todo successfully deleted" });
}

module.exports = {
  createToDo,
  listToDos,
  validateToDo,
  updateToDo,
  deleteToDo,
  showTodo,
};
