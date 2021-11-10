const db = require('../database/models') 
const controller = {
  
    index: function(req, res) {
      db.Posteo.findAll()
      .then(data=>{
        //res.render('index', { title: 'Express', posts: data}); 
        res.send(data)
      })
    }, 

    result: function (req, res){
      res.render ('resultadoBusqueda', { title: 'Express', posts: posts.list });
    }
    
};

module.exports = controller;