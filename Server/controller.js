var Post = require('./Models/Post');

exports.posts = function(req, res) {

	Post.find({}, function(err, docs) {
		res.json(docs);
	});
};