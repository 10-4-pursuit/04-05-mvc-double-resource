const express = require("express");
const app = express();
const usersData = require("../data/users");

//Middleware
app.use(express.json());

//desc Get all users
const listUsers = (req, res) => {
    const users = usersData.findAll();
    res.status(200).json(users);
};

// desc Create a new user
const createUser = async (req, res) => {
    const { name, email } = req.body;

    // Create a new user
    const newUser = usersData.add({
        name,
        email
    });

   
    res.status(201).json(newUser);
}

//desc Update a user
const updateUser = (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { name, email } = req.body; 

   
    const index = users.findIndex(user => user.id === id);
    if (index === -1) {
        
        return res.status(404).send({ message: 'User not found' });
    }

    users[index] = { ...users[index], name, email, id };


    res.status(200).json(users[index]);


}

//desc Delete a user

const deleteUser = async (req, res) => {
    const id = Number(req.params.id);
    usersData.deleteById(id);
    res.status(200).json({ message: 'User successfully deleted' });
}





module.exports = { listUsers, createUser, updateUser, deleteUser };