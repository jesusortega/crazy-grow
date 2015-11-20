Home = Backbone.View.extend({
	template: _.template($('#login').html()),
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

var home = new Home({el:$('home'), model:cultivos.at(0)});