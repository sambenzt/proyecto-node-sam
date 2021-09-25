const posts = require (`../data/data`)

const controller = {
    index: function(req, res) {

      res.render('index', { title: 'Express', posts: posts.list });
    }, 
    result: function (req, res){
      res.render ('resultadoBusqueda', { title: 'Express', posts: posts.list });
    }
    
};

module.exports = controller;