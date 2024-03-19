const { faker } = require("@faker-js/faker");

const todos = [
  {
    id: 1,
    title: "free hugs",
    completed: true,
    userId: 1,
  }
];


//finds all the items in the array
const findAll = (todos) => {
  return todos;
};

//find item by add
const findById = (id) => {
  return todos.find((todo) => todo.id === id);
};

//create a new item
const add = (title, completed, userId) => {
  const newId = todos.length + 1;
  // const newTitle = faker.lorem.words(3);
  const newUserId = Date.now();

  const newTodo = {
    id: newId,
    title,
    completed,
    userId
  };

  todos.push(newTodo);

  return newTodo;
};

const updateById = (id, updateInfo) => {
  const found = todos.findIndex((todo) => todo.id === parseInt(id));

  if (found !== -1) {
    todos[found].title = updateInfo.title;
    todos[found].completed = updateInfo.completed;
    todos[found].userId = updateInfo.userId;
    console.log("item has been updated");
    return todos[found];
  } else {
    console.log("item not found");
    return todos;
  }
};



const deleteById = (id) => {
    const found = todos.some((todo) => todo.id === parseInt(id));

    if (found) {
        todos.filter((todo) => todo.id === id)
        console.log("item has been deleted");
        return todos;
      } else {
        console.log("item not found. No action taken");
        return todos;
      }
    };




module.exports = { findAll, findById, add, updateById, deleteById, todos };
