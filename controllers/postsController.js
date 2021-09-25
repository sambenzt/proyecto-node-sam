const posts = require(`../data/data`)
const controller = {
  post: function (req, res) {
    let postId = posts.find(req.params.id)
    res.render('detallePost', {
      postId: postId
    });
  },
  agregarPost: function (req, res) {
    res.render('agregarPost');
  }
}




module.exports = controller