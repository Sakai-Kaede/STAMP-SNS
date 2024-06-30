const router = require("express").Router();

router.post('/', async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    return res.status(200).json(savedPost);
  } catch(err) {
    return res.status(500).json(err);
  }
});

router.get('/:id',async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json(post);
  } catch(err) {
    return res.status(403).json(err);
  }
});

module.exports = router;