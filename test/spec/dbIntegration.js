/*global describe, it, before, after,console */
var Post = require('../../Server/Models/Post'),
	assert = require('assert'),
	mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

/* Create a foo post before running tests */
before(function () {
	var post = new Post({postedBy: 'TestUser', url: 'www.foo.com'});
	post.save(function () {});
});

/* Delete foo post after tests have run */
after(function() {
	Post.remove({ postedBy: 'TestUser' }, function(err) {
		if (err) console.log(err);
	});
});

describe('Mongoose Models', function() {
	describe('Test Model Defaults', function() {

		it('retrieves proper post', function(done) {
			Post.find({ postedBy: 'TestUser' }, function(err, doc) {
				assert.equal('www.foo.com', doc[0].url);
				done();
			});
		});
	});
});