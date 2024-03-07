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
const add = (todos) => {
  const newId = faker.string.uuid();
  const newTitle = faker.lorem.words(3);
  const newUserId = faker.internet.email();

  const newTodo = {
    id: newId,
    title: newTitle,
    completed: false,
    userId: newUserId,
  };

  todos.push(newTodo);

  return newTodo;
};

const updateById = (id, updateInfo) => {};

const deleteById = (id) => {};

module.exports = { findAll, findById, add, updateById, deleteById };
