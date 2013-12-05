var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
	postedBy: 'string',
	url: 'string'
});

module.exports = mongoose.model('Post', postSchema);