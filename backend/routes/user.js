const router = require('express').Router();
const User = require('../models/User');

router.put('/:id', async(req, res) => {
  if(req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json('ユーザ情報が更新されました');
    } catch(err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json('自分のアカウントのみ情報を更新できます');
  }
});

router.delete('/:id', async(req, res) => {
  if(req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json('ユーザ情報が削除されました');
    } catch(err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json('自分のアカウントのみ情報を削除できます');
  }
});

router.get('/:id', async(req, res) => {
  try {
    const user = await User.findById(req.params.id);
    // 不必要な情報を取得しないようにする
    const {password, updatedAt, ...other} = user._doc;
    return res.status(200).json(other);
  } catch(err) {
    return res.status(500).json(err);
  }
});

module.exports = router;