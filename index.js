const express = require('express')
const toDoroutes = require('./routes/todoRoutes')
const userRoutes = require('./routes/userRoutes')
const app = express()

app.use(express.json())
app.use("/todos", toDoroutes);

app.use("/users", userRoutes);


app.get('/', (req, res) => {
    res.send("save the world!")
})

module.exports = app