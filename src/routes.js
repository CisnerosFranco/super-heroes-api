const express = require('express');
const app = express()
const fs = require('fs');



app.get('/', (req, res) => {
    res.setHeader('content-type', 'text/html');
    res.send('<h1>Well Come</h1>')
    
})

app.get('/get-team', (req, res) => {
    const team = req.query.team;
    res.status(200);
    res.set({
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        }})


    if(team === 'dc-team') {
        const file = fs.readFileSync('./public/dc-team.json', 'utf-8');
        res.send(file);
    }
    else if(team === 'marvel-team'){
        const file = fs.readFileSync('./public/marvel-team.json', 'utf-8');
        res.send(file);
    }
    else {
        res.status(404);
        res.setHeader('content-type', 'text/html');
        res.send('<h2>resources not found!</h2>')
    }
})

module.exports = app;





