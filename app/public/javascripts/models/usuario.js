var Usuario = Backbone.Model.extend({
	
	tableName: 'usuarios',

	initialize: function(){
		console.log('Usuario vacío model creado');
	},

	nuevoUsuario: function(nick, email, pass){
		//alert(nick+ ' - '+email+' - '+password);
		this.set({
			nick: nick,
			email: email,
			password: pass,
			fechaRegistro: 'fechaRegistro',
			cultivos: 0,
		});

		module.exports = this;

		console.log('Instanciado un nuevo usuario');
		return true;
	},

});

var usuario = new Usuario();