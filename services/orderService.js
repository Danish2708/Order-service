var orderDao = require("../dao/orderDao")
const axios = require('axios')

module.exports = {
    async createOrder(payload) {
        let data = await orderDao.createOrder(payload)

        let url = `${process.env.PAYMENT_URL}/payment/processPayment`

        let test = {
            orderId: data._id
        }
        let paymentResponse = await axios.post(url, test, {})
 
        let updatedOrder = await orderDao.updateOrder({ orderId:data._id, status: 'Confirmed' })
        
        setTimeout(async function() { await orderDao.updateOrder({ orderId:data._id, status: 'Delivered' }) }, 20000);

        return data
    },

    async cancelOrder(params) {
        return await orderDao.cancelOrder(params)
    },

    async checkOrderStatus(params) {
        return await orderDao.checkOrderStatus(params)
    }
} 