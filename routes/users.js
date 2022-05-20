var express = require('express');
var router = express.Router();

let favMovies = ['Rocky Balboa', 'Green Street Hooligans', 'Southpaw'];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {title: 'Users'});
});

router.get('/myname', function(req, res){
  res.send('Gonçalo Santos');
});

router.get('/myfavoritemovies', function(req,res){
  res.json(favMovies);
})

module.exports = router;