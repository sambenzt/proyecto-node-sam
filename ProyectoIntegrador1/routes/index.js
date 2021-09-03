var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get ('/result', function (req, res){
  res.render ('resultadosBusqueda');
}) 


module.exports = router;
