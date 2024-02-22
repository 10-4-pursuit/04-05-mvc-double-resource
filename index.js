const express = require('express');
const todoRoutes = require('./routes/todosRoute');
const userRoutes = require('./routes/userRoute');

// create express app
const app = express();

// parse requests of content-type - application/json
app.use(express.json());

// routes
app.use('/todos', todoRoutes);
app.use('/users', userRoutes);

module.exports = app;