'use strict';

var express = require('express');
var path = require('path');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io').listen(server);

app.use(express.static(path.normalize(__dirname + '/../app')));

app.get('/', function(req, res){
	res.send('hello world');
});

io.sockets.on('connection', function (socket) {
	socket.emit('broadcasting', {foo: 'baz'});
	console.log('connected socket');
});

server.listen(8080);
console.log('server listening on port 8080');