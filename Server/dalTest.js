var Post = require('./Models/Post');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

/* Add a post
var post = new Post({postedBy: 'Matt', url: 'www.foo.com'});
post.save(function (err, out) {
	console.log();
});
*/

Post.find({}, function (err, docs) {
	console.log(docs);
	mongoose.disconnect();
});

