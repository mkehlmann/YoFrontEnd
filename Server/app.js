var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('hello world');
});

app.listen(8080);
console.log('server listening in port 8080');