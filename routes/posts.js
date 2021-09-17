var express = require('express');
var router = express.Router();
const postsController = require('../controllers/postsController');
router.get('/detail/:id', postsController.posts);
router.get('/add', postsController.agregarPost );

module.exports = router