const bcrypt = require('bcrypt');
const posts = require (`../data/data`);
const db = require(`../database/models`);

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
      },

      autenticarUsuario: function(req, res){


        //validar los datos que no esten vacios

        let errors = {};

        if(!req.body.email || !req.body.password) {
          errors.message = 'Email y contraseña requerida';
          res.locals.errors = errors;
          return res.render('login');
        }

        
        db.Usuario
          .findOne({
              where: { email : req.body.email }
          })
          .then(function(usuario){

            //valido que exista el mail o que la contraseña sea valida
            if(usuario == null || !bcrypt.compareSync(req.body.password, usuario.contraseña)) {
              
              res.locals.errors = {message: 'Email o contraseña invalida'};
              
              return res.render('login');
            }
            else{
              //aqui el usuario es valido, se debe guardar en la session
              req.session.log = true;
              req.session.name = usuario.nombre;
              res.redirect('/users/home')

            }
          })

       
      }
}



module.exports = controller