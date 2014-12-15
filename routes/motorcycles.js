var express = require('express');
var router = express.Router();

var motorcycle_route = require('../controllers/motorcycle');

/* GET users listing. */
/*
router.get('/', function(req, res) {
  res.send('respond with a resource');
});
*/

exports.index = function(res, req) {
	res.send("Funciona en la ruta! Motos");
};

router.get('/', motorcycle_route.index);


router.post('/:id', motorcycle_route.borrar);


module.exports = router;
