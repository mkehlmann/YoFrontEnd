define(['underscore', 'Backbone'], function (_, Backbone) {
	
	var Post = Backbone.Model.extend({
		url: 'api/Posts'
	});

	var Posts = Backbone.Collection.extend({
		url: 'api/Posts',
		model: Post
	});

	var PostFeed = Backbone.View.extend({
		el: '#PostFeed',
		template: _.template($('#FeedTemplate').html()),
		initialize: function () {
			this.collection.on('reset', this.renderFeed, this);
			this.collection.on('add', this.renderPost, this);
		},
		renderFeed: function () {
			this.$el.prepend(this.template({posts: this.collection.toJSON()}));
		},
		renderPost: function (model) {
			this.$el.prepend(_.template($('#PostTemplate').html(), model.toJSON()));
		}
	});

	return {
		Post: Post,
		Posts: Posts,
		PostFeed: PostFeed
	};
});