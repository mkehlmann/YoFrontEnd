/*global describe, it, before, after, console */
var Post = require('../../Server/Models/Post'),
	assert = require('assert'),
	mongoose = require('mongoose'),
	controller = require('../../Server/controller');

mongoose.connect('mongodb://localhost/test');

/* Create a foo post before running tests */
before(function () {
	var post = new Post({postedBy: 'TestUser', url: 'www.foo.com'});
	post.save(function () {});
});

/* Delete foo post after tests have run */
after(function() {
	Post.remove({ postedBy: 'TestUser' }, function(err) {
		if (err) {
			console.log(err);
		}
	});

	Post.remove({ postedBy: 'InsertUser' }, function(err) {
		if (err) {
			console.log(err);
		}
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

		it('should insert a record', function (done) {
			var data = { postedBy: 'InsertUser', url: 'www.insert.com'};
			controller.addPost(data, function () {
				Post.find({ postedBy: 'InsertUser' }, function (err, doc) {
					assert.equal('www.insert.com', doc[0].url);
					done();
				});
			});
		});
	});
});