var express = require('express');
var router = express.Router();
var blogs = require("../public/sampleBlogs")
const blogPosts = blogs.blogPosts

/* GET blogs listing. */
router.get('/', function(req, res, next) {
  res.send('Blogs');
});

router.get('/all', function(req, res){
    res.json((blogPosts));
});

router.get('/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    //JSON: Javascript Object Notation
    res.json(findId(id));
  });

module.exports = router;

let findId = (id) => {
    for (let i = 0; i < blogPosts.length; i++){
        let blog = blogPosts[i];
        if (blog.id === id){
            return blog;
        }
    }
};
