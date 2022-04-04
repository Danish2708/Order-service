var express = require('express')
var router = express.Router();

router.use('/setel', require('./orderRoute').router);


module.exports.router = router;