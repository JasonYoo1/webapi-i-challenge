// implement your API here
const express = require('express');

//use Hubs to get access from the DB
const Hubs = require ('./data/db.js');

const server = express();

server.use(express.json()); //this teaches express how to parse JSON

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

//creating hub
server.post('/hubs',(req, res) =>{
    const hubInformation = req.body;
    console.log('hub info from body', hubInformation)
    Hubs.insert(hubInformation)
    .then(hub =>{
        res.status(201).json(hub)
    })
    .catch(err =>{
        res.status(500).json({message: 'error in adding hub'})
    });
});

const port = process.env.PORT
server.listen(port, () => {
    console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
  });
