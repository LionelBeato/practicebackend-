// imports and declarations
// custom import for my database module
const db = require('./src/database')
const express = require('express')
const app = express()
const cors = require ('cors')
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
    res.send('this server works!')
})

app.get('/animals', (req, res) => {
    res.send(db.animals)
})

app.listen(port, () => console.log(`listening on port ${port}`))



console.log(db)