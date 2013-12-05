'use strict';

var express = require('express'),
	path = require('path'),
	app = express(),
	http = require('http'),
	server = http.createServer(app),
	io = require('socket.io').listen(server),
	mongoose = require('mongoose'),
	controller = require('./controller');

mongoose.connect('mongodb://localhost/test');

app.use(express.static(path.normalize(__dirname + '/../app')));

app.get('/', function(req, res){
	res.send('hello world');
});

//API
app.get('/api/Posts', controller.posts);

io.sockets.on('connection', function (socket) {
	socket.emit('broadcasting', {foo: 'baz'});
	console.log('connected socket');
});

server.listen(8080);
console.log('server listening on port 8080');