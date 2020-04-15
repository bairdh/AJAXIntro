
// [] requires
// [] globals
// [] uses
// [] spin up a server
// [] get route

// requires
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//globals
const PORT = 5000;

//uses
// for POSTing 
app.use(bodyParser.urlencoded({extended: true}));
// for GETing
app.use(express.static('server/public'));


//spin up a sever
app.listen(PORT, () => {
    console.log('APP IS WORKING ON:', PORT);
});

let animals = ['Lions', 'Tigers', 'Bears', 'Oh My!'];

// get route
app.get('/tester', (req, res) =>{
    console.log(`IN /tester GET`);
    
    res.send(animals);
})

// first you have to install body-parser
// post route
app.post('/tester', (req, res) =>{
    //rec.body -> came from data in AJAX
    console.log(`got to POST my tester`, req.body); 
    animals.push(req.body.animal);
    res.send(animals[3]);
})