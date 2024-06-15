const router = require("express").Router();

router.get('/', (req, res) => {
  res.send('upload router');
});

module.exports = router;