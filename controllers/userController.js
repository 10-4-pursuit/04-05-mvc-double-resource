const {
  findAll,
  findById,
  add,
  updateById,
  deleteById,
} = require("../data/users");
const { users } = require("../data/users");

// function to see all the user items
const listUsers = (req, res) => {
  res.send(findAll());
};

//function to find user by id
const showUser = (req, res) => {
  const { id } = req.params;
  console.log(id);

  const foundUser = users.findById(id);
  res.json(foundUser);
};

//function to validate a new to do item
function validateUser(req, res, next) {
  const { name } = req.body;

  //validate input
  if (!name) {
    return res.status(400).json({ message: "Missing required field: name" });
  }
  next();
}

//function to create a new to do item
function createUser(req, res) {
  const { name, email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Missing required field: email" });
  }

  const freshUser = add(name, email);

  res.status(201).send(freshUser);
}

function updateUser(req, res) {
  const { id } = req.params;
  const updatedInfo = updateById(id, req.body);

  res.status(200).send(updatedInfo);
}

function deleteUser(req, res) {
  const { id } = req.params;
  const deletedInfo = deleteById(id);

  res.status(200).send({ message: "User successfully deleted" });
}

module.exports = {
  listUsers,
  showUser,
  validateUser,
  createUser,
  updateUser,
  deleteUser,
};
