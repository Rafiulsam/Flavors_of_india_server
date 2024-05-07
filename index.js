const express = require('express')

const app = express()
const port = 5000

const chefs = require('./data/chefs.json')

app.get('/',(req, res)=>{
    res.send('server is running')
})

app.get('/chefs', (req, res)=>{
    res.send(chefs)
})

app.listen(port, ()=>{
    console.log('flavors of india server is running at port', port)
})