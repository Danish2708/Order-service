var express = require('express')
var router = express.Router();
var orderController = require("../controllers/orderController")

router.post('/createOrder', orderController.createOrder);

router.post('/cancelOrder', orderController.cancelOrder);

router.post('/checkOrderStatus', orderController.checkOrderStatus);


module.exports.router = router