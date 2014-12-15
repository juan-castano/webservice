var mongoose = require('mongoose'),
	url_db = 'mongodb://127.0.0.1/parkinguc_server',
	db = mongoose.createConnection(url_db);

var MotorcycleSchema = require('../models/motorcycle');
	Motorcycle = db.model('Motorcycle', MotorcycleSchema);


// GET: index
exports.index = function (req, res) {
	// res.send("Funciona! GET");

	Motorcycle.find(getMotorcycles); //.count();

	function getMotorcycles(err, motorcycles) {

		if (err) {
			console.log("Error al cargar Parqueadero Motos");
			// console.log(err);
		} else {
			// return res.send(users.count());
			// return res.json({cantidad: typeof(motorcycles)});
			return res.json(motorcycles);
		}

	};

};


exports.guardar = function(req, res) {

	var total = req.param('total'),
		disponibles = req.param('disponibles'),
		ocupados = req.param('ocupados')
		fecha = new Date();

	new Automobile({
		total: total,
		disponibles: disponibles,
		ocupados: ocupados,
		fecha: fecha
	}).save(function (error, automobiles) {

		if (error) {
			res.json({error: "No se guardo"});
		} else {
			res.json(automobiles);
		}

	});

};

// POST: borrar
exports.borrar = function(req, res) {
	// res.send("Funciona! POST");

	res.json([
		{ nombre: 'Parqueadero'},
		{ email: 'Motos'}
	]);

};