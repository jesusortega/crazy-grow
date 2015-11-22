$(document).ready(function(){
	
	Login = Backbone.View.extend({
		template: _.template($('#login').html()),
		initialize: function(){
			this.render();
			console.log('View Login iniciada');
		},

		render: function(nombreEvento)
		{
			$(this.el).append(this.template(this.model.toJSON()));
			return this;
		},
	})

	var login = new Login({el:$('#contenido'), model:usuario});

	//Events
	_.extend(login, Backbone.Events);

	login.on('submitLogin', function(){
		alert('yeah');
	})

	$('#submitLogin').click(function(){
		login.trigger('submitLogin');
	});

});
