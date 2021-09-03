var express = require('express');
var router = express.Router();
router.get('/detail', function(req, res) {
    res.render('detallePost');
  });
router.get('/add', function(req, res) {
    res.render('agregarPost');
  });

module.exports = router