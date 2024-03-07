const express = require('express')
const app = require('./index')
const port = process.env.PORT || 3005

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})