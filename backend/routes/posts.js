const router = require("express").Router();
const Post = require('../models/Post');

router.post('/', async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    return res.status(200).json(savedPost);
  } catch(err) {
    return res.status(500).json(err);
  }
});

router.get('/',async (req, res) => {
  try {
    const posts = await Post.find();
    return res.status(200).json(posts);
  } catch(err) {
    return res.status(403).json(err);
  }
});

module.exports = router;