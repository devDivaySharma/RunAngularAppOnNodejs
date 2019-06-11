var express = require('express');
var port  = process.env.port || 3000;
var app = express();
var router = express.Router();
var http = require('http');
var path = require('path');


/**
 * hit the html page using this app for index folder
 */
app.get('/',(req,res) =>{
    res.sendFile(path.join(__dirname + '/public/App/dist/App/index.html'));
});

app.listen(port);