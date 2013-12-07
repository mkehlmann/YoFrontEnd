var Post = require('./Models/Post');

exports.posts = function(req, res) {

	Post.find({}, function(err, docs) {
		res.json(docs);
	});
};

exports.addPost = function (data, cb) {
	Post.create({postedBy: data.postedBy, url: data.url}, function(err, doc) {
		/* TODO update this */
		if (err) {
			console.log(err);
		}
		if (cb) {
			cb();
		}
	});
};