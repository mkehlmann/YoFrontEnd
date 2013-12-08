/* global define */
define(['Backbone'], function(Backbone) {
	var UserCount = Backbone.View.extend({
		el: '#connectedUsers',
		render: function (count) {
			this.$el.html(count);
		}
	});

	return {
		UserCount: UserCount
	};
});