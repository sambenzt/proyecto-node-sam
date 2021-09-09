const controller = {
posts: function(req, res) {
    res.render('detallePost');
  },
  agregarPost: function(req, res) {
    res.render('agregarPost');
  }
}




module.exports = controller