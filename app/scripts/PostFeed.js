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
		template: _.template($('#PostTemplate').html()),
		initialize: function () {
			this.collection.on('reset', this.render, this);
		},
		render: function () {
			this.$el.prepend(this.template({posts: this.collection.toJSON()}));
		}
	});

	return {
		Post: Post,
		Posts: Posts,
		PostFeed: PostFeed
	};
});