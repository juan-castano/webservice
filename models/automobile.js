var Schema = require('mongoose').Schema;

/* 
var AutomobileModel = { total: Number, 
						disponibles: Number, 
						ocupados: Number, 
						fecha: String, 
						pico_placa: [

							{ 
								dia: String, 
								numero: String
							}
							
						]
					};
*/

var AutomobileModel = { total: Number, 
						disponibles: Number, 
						ocupados: Number, 
						fecha: String, 
						pico_placa: String
					};

var AutomobileSchema = Schema(AutomobileModel);

var Automobile = module.exports = AutomobileSchema;