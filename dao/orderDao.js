const order = require("../models/order")
const mongoose = require('mongoose')

module.exports = {
    async createOrder(payload) {
        return await order.create(payload)
    },

    async cancelOrder(params) {
        return await order.findOneAndUpdate({
            _id: new mongoose.Types.ObjectId(params.orderId)
        }, {
            $set: {"status": "Cancelled"}
        })
    },

    async checkOrderStatus(params) {
        return await order.findOne({
            _id: new mongoose.Types.ObjectId(params.orderId)  
        }).select(' status ')
    },

    async updateOrder(params) {

        return await order.findOneAndUpdate({
            _id: new mongoose.Types.ObjectId(params.orderId)
        }, {
            $set: {"status": params.status}
        })  
    }

}