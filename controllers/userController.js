const express = require("express");
const router = express.Router();
const userController = express();
const { findAll, findById, add, updateById, deleteById} = require('../data/users')
const { users } = require('../data/users')