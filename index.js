const express = require('express')
const toDocontroller = require('./controllers/todoController')
const toDoroutes = require('./routes/todoRoutes')
const app = express()

app.use(express.json())
app.use("/todos", toDoroutes);

app.get('/', (req, res) => {
    res.send("save the world!")
})

module.exports = app