var mongoose = require('mongoose'),
	url_db = 'mongodb://127.0.0.1/parkinguc_server',
	db = mongoose.createConnection(url_db);

var AutomobileSchema = require('../models/automobile');
	Automobile = db.model('Automobile', AutomobileSchema);


// GET: index
exports.index = function (req, res) {
	
	Automobile.find(getAutomobiles); 

	function getAutomobiles(err, automobiles) {
		if (err) {
			console.log("Error al cargar Parqueadero Carros");
			console.log(err);
		} else {
			return res.json(automobiles);
		}

	};

};


// POST: agregar
exports.agregar = function(req, res) {

	// res.json(req.body);

	// Formato Fecha
	// dd-mm-yyyy

	var diaUTC = new Date().getUTCDate();
	var mesUTC = new Date().getUTCMonth();
	var anioUTC = new Date().getUTCFullYear();
	var fechaUTC = diaUTC + "-" + mesUTC + "-" + anioUTC;
	
	var total = req.param('total');
	var disponibles = req.param('disponibles');
	var ocupados = req.param('ocupados');
	var pico_placa = req.param('pico_placa');

	new Automobile({

		'total': total,
		'disponibles': disponibles,
		'ocupados': ocupados,
		'fecha': fechaUTC,
		'pico_placa': pico_placa

	}).save(function (error, automobiles) {

		if (error) {
			res.json({error: "No se guardo"});
		} else {
			res.json(automobiles);
		}

	});

};

// PUT: actualizar
exports.actualizar = function(req, res) {

	var id_auto = req.param('identificador');
	var accion = req.param('accion');
	var total = req.param('total');
	var disponibles = req.param('disponibles');
	var ocupados = req.param('ocupados');


	switch(accion) {

		case 'entrar':
			Automobile.findById(id_auto, function (error, auto){

				if (total) {
					auto.total = total;
				}

				if (disponibles) {
					auto.disponibles = disponibles;
				}

				auto.ocupados += 1;

				auto.save(function(err, auto) {

					if (err) {
						return res.json({'error': "No se pudo actualizar"});
					} else {
						return res.json(auto);
					}

				});

			});
			break;
		
		case 'salir':
			Automobile.findById(id_auto, function (error, auto){

				if (total) {
					auto.total = total;
				}

				if (disponibles) {
					auto.disponibles = disponibles;
				}

				auto.ocupados -= 1;

				auto.save(function(err, auto) {

					if (err) {
						return res.json({'error': "No se pudo actualizar"});
					} else {
						return res.json(auto);
					}

				});

			});
			break;

	}
	


	/* function getEspecifico (error, auto) {

		if (error) {
			res.json({error: "NO se encuentra"});
		} else {
			res.json(auto);
		}
	} */


	/*

	var id = req.param('id'),
		total = req.param('total'),
		disponibles = req.param('disponibles'),
		// ocupados = getOcupados();
		// fecha = new Date();
		ocupados = Automobile.findById(id, function(err, auto){
			if (err) {
				return null;
			} else {
				return auto['disponibles'];
			}
		});



	Automobile.findById(id, function(error, automobiles) {

		if (total) {
			automobiles.total = total;
		}

		if (disponibles) {
			automobiles.disponibles = disponibles;
		}

		if (ocupados) {
			automobiles.ocupados = ocupados;	
		}

		

		automobiles.save(function(err, automobiles) {

			if(err) {
				res.json({error: "No se puede actualizar"});
			} else {
				res.json(automobiles);
			}

		});

	});

*/

};


