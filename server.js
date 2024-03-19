
const app = require('./index')
const port = process.env.PORT || 3012

app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})