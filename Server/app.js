'use strict';

var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.normalize(__dirname + '/../app')));

app.get('/', function(req, res){
	res.send('hello world');
});

app.listen(8080);
console.log('server listening on port 8080');