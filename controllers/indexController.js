const controller = {
    index: function(req, res, next) {
      res.render('index', { title: 'Express' });
    }, 
    result: function (req, res){
      res.render ('resultadoBusqueda');
    }
    
};

module.exports = controller;