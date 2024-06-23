const router = require("express").Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  try {
    const newUser = await new User({
      username: req.body.username,
      password: req.body.password,
    });

    const user = await newUser.save();
    return res.status(200).json(user);
  } catch(err) {
    return res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({username: req.body.username});
    if(!user) return res.status(404).send('ユーザが見つかりません');

    // パスワードのハッシュ化などで堅牢性を上げたほうがよい（今後やるべき）
    const validPassword = req.body.password === user.password;

    if(!validPassword) return res.status(400).json('パスワードが違います');

    return res.status(200).json(user);
  } catch(err) {
    return res.status(500).json(err);
  }
});

module.exports = router;