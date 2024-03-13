const { faker } = require("@faker-js/faker");

//faker.string.uuid()
//faker.internet.email()

let todos = [
  {
    id: "347d150c-f170-4ba2-9fad-8eb80636890f",
    title: "free hugs",
    completed: true,
    userId: "Irwin14@yahoo.com",
  },
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
const add = (title) => {
  const newId = faker.string.uuid();
  // const newTitle = faker.lorem.words(3);
  const newUserId = faker.internet.email();

  const newTodo = {
    id: newId,
    title,
    completed: false,
    userId: newUserId,
  };

  todos.push(newTodo);

  return newTodo;
};





const updateById = (id, updateInfo) => {
  const found = todos.findIndex((todo) => todo.id === id);
 
  if (found !== -1) {
    todos[found].title = updateInfo;
    console.log("item has been updated");
    return todos;
  } else {
    console.log("item not found");
    return todos;
  }
};





const deleteById = (id) => {
    const found = todos.some((todo) => todo.id === id);

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
