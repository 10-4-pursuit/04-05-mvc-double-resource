let todos = [];

/**
 * Finds and returns all todo items.
 * @returns {Array} An array of all todo items.
 */
const findAll = () => {
  return todos;
};

/**
 * Finds a todo item by its ID.
 * @param {number|string} id The ID of the todo item to find.
 * @returns {Object|null} The found todo item or null if not found.
 */
const findById = (id) => {
  return todos.find((todo) => todo.id === id);
};

/**
 * Adds a new todo item.
 * @param {Object} todo The todo item to add. Must contain `title` and `completed` properties.
 * @returns {Object} The added todo item, including its generated ID.
 */
const add = (todo) => {
  const newTodo = { ...todo, id: Date.now() };
  todos.push(newTodo);
  return newTodo;
};

/**
 * Updates a todo item by its ID.
 * @param {number|string} id The ID of the todo item to update.
 * @param {Object} updateInfo An object containing the todo item properties to update.
 * @returns {Object|null} The updated todo item or null if not found.
 */
const updateById = (id, updateInfo) => {
    const numericId = Number(id);
    const index = todos.findIndex(todo => todo.id === numericId);
    if (index !== -1) {
        todos[index] = { ...todos[index], ...updateInfo };
        return todos[index];
    }
    return null;
};

/**
 * Deletes a todo item by its ID.
 * @param {number|string} id The ID of the todo item to delete.
 * @returns {Object|null} The deleted todo item or null if not found.
 */
const deleteById = (id) => {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) {
    return null;
  }
  const deletedTodo = todos.splice(index, 1)[0];
  return deletedTodo;
};

module.exports = { findAll, findById, add, updateById, deleteById };
