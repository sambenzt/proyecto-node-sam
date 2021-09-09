const controller = {
  miPerfil:  function(req, res) {
        res.render('miPerfil');
      },
      registracion: function(req, res) {
        res.render('registracion');
      },
      login: function (req, res){
        res.render ('login');
      },
      editarPerfil: function (req, res){
        res.render ('editarPerfil');
      }
}



module.exports = controller