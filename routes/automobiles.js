var express = require('express');
var router = express.Router();

var automobile_route = require('../controllers/automobile');

/* GET users listing. */
/*
router.get('/', function(req, res) {
  res.send('respond with a resource');
});
*/

exports.index = function(res, req) {
	res.send("Funciona en la ruta! Carros");
};

// GET: home
router.get('/', automobile_route.index);

// POST: agregar
router.post('/', automobile_route.agregar);

// PUT: actualizar
router.put('/', automobile_route.actualizar);


module.exports = router;
