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
app.use(express.compress());

app.use(express.static(path.normalize(__dirname + '/../app')));

//API
app.get('/api/Posts', controller.posts);

io.sockets.on('connection', function (socket) {
	socket.on('post', function (data) {
		controller.addPost(data, function () {
			io.sockets.emit('newPost', data);
		});
	});
});

server.listen(8080);
console.log('server listening on port 8080');