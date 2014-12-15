var mongoose = require('mongoose'),
	url_db = 'mongodb://127.0.0.1/parkinguc_server',
	db = mongoose.createConnection(url_db);

var UserSchema = require('../models/user');
	User = db.model('User', UserSchema);




// GET: index
exports.index = function (req, res) {
	// res.send("Funciona! GET");

	User.find(getProducts).count();

	function getProducts(err, users) {

		if (err) {
			console.log("Error al cargar los Usuarios");
			console.log(err);
		} else {
			// return res.send(users.count());
			return res.json({cantidad: typeof(users)});
		}

	};

};

// POST: borrar
exports.borrar = function(req, res) {
	// res.send("Funciona! POST");

	res.json([
		{ nombre: 'Juan'},
		{ email: 'prueba'}
	]);

};