var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/profile', function(req, res) {
  res.render('miPerfil');
});
router.get('/register', function(req, res) {
  res.render('registracion');
});
router.get ('/login', function (req, res){
  res.render ('login');
}) 
router.get ('/edit', function (req, res){
  res.render ('editarPerfil');
}) 
module.exports = router;
