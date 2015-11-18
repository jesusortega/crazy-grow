var Cultivo = Backbone.Model.extend({

    id: -1,
    nombre: 'Cultivo de testeo',
    especie: 'Especie de testeo',
    fechaInicio: null,
    fechaFin: null,
    numPlantas: 99,
    imagenes: null,
    planCultivo: null,
    notas: null,

    initialize: function(){
    	console.log('Cultivo model iniciado: id = '+ this.id+', nombre = '+ this.nombre+', especie = '+ this.especie+', fechaInicio = '+ this.fechaInicio+', fechaFin = '+ this.fechaFin+', numPlantas = '+ this.numPlantas+', imagenes = '+ this.imagenes+', planCultivo = '+ this.planCultivo+', notas = '+ this.notas);
    }
});

var cultivo = new Cultivo();