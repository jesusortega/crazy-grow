$(document).ready(function(){
	
	Registro = Backbone.View.extend({
		template: _.template($('#registro').html()),
		initialize: function(){
			this.render();
			console.log('View Registro iniciada');
		},

		render: function(nombreEvento)
		{
			$(this.el).append(this.template());
			return this;
		},
	})

	var registro = new Registro({el:$('#contenido')});

	//Events
	_.extend(registro, Backbone.Events);

	registro.on('submitRegistro', function(){
		var nick = $('#nickRegistro').val();
		var email = $('#emailRegistro').val();
		var pass = $('#passRegistro').val();

		usuario.nuevoUsuario(nick, email, pass);
	})

	$('#submitRegistro').click(function(){
		registro.trigger('submitRegistro');
	});

});
