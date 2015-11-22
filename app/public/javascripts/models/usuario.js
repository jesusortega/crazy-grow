var Usuario = Backbone.Model.extend({
	idAttribute: -1,
	nick: 'Nickname de testeo',
	email: 'raul.duque.montanez@gmail.com',
	password: 'RdM04848',
	fechaRegistro: null,
	cultivos: -1,

	initialize: function(){
		console.log('Usuario model creado')
	}
});

var usuario = new Usuario();