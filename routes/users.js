var express = require('express');
var router = express.Router();

var user_route = require('../controllers/user');

/* GET users listing. */
/*
router.get('/', function(req, res) {
  res.send('respond with a resource');
});
*/

exports.index = function(res, req) {
	res.send("Funciona en la ruta!");
};

router.get('/', user_route.index);


router.post('/:id', user_route.borrar);


module.exports = router;
