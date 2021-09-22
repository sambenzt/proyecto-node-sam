const posts = require (`../data/data`)
const controller = {
  miPerfil:  function(req, res) {
      for (let i = 0; i < posts.list.length; i++) {
        const element = posts.list[i];
        if (element.brandUser.id == req.params.id) {
          res.render('miPerfil', {post:element});
        }
      }
    
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