var express = require('express');
var router = express.Router();

router.get('/all', (req, res) => {
  res.send('Transactions page');
});

module.exports = router;