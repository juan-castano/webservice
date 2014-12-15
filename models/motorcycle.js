var Schema = require('mongoose').Schema;

var MotorcycleModel = { total: Number, 
						disponibles: Number, 
						ocupados: Number, 
						fecha: Date, 
						pico_placa: [

							{ 
								dia: String, 
								numero: String
							}
							
						]
					};

var MotorcycleSchema = Schema(MotorcycleModel);

var Motorcycle = module.exports = MotorcycleSchema;