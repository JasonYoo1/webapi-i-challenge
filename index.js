// implement your API here
const express = require('express');

//use Hubs to get access from the DB
const Hubs = require ('./data/db.js');

const server = express();

server.get('/', (req, res)=>{
    res.send ('hello world')
})

server.get('/hubs', (req, res)=>{
    Hubs.find().then(hubs=>{
        res.status(200).json(hubs)
    }).catch(error =>{
        res.status(500).json({message: 'error '})
    })
})

const port = 8000;
server.listen(port, ()=> console.log('api running'));

