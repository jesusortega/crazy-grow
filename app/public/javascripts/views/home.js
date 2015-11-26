Home = Backbone.View.extend({
	template: _.template($('#home').html()),
	initialize: function(){
		this.render();
		console.log('View Home iniciada');
	},

	render: function(nombreEvento)
	{
		$(this.el).append(this.template(this.model.toJSON()));
		return this;
	},
})

