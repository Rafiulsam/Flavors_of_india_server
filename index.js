const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

const chefs = require('./data/chefs.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('server is running')
})

app.get('/chefs', (req, res) => {
    res.send(chefs)
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const chef = chefs.find(c => c.id === id)
    res.send(chef)
})

app.listen(port, () => {
    console.log('flavors of india server is running at port', port)
})