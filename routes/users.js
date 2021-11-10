var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');
/* GET users listing. */
router.get('/profile/:id', usersController.miPerfil);
router.get('/register', usersController.registracion);
router.get ('/login', usersController.login) 
router.get ('/edit', usersController.editarPerfil);
router.post('/auth', usersController.autenticarUsuario);

router.get('/home', function(req, res) {
    res.send('Hola ' + req.session.name);
})

module.exports = router;
