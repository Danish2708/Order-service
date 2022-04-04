var orderService = require("../services/orderService")

module.exports = {
     createOrder: async function(req, res) {
        try {
            await orderService.createOrder(req.body)
            res.status(200).send({ message: "Success" })
        } catch (error) {
            res.status(400).send({ error: true, message: error.message })
        }
    },

    cancelOrder: async function(req, res) {
        try {
            await orderService.cancelOrder(req.body)
            res.status(200).send({ message: "Successfully cancelled order" })
        } catch (error) {
            res.status(400).send({ error: true, message: error.message })
        }
    },

    checkOrderStatus: async function(req, res) {
        try {
            let status = await orderService.checkOrderStatus(req.body)
            res.status(200).send({ status })
        } catch (error) {
            res.status(400).send({ error: true, message: error.message })
        }
    },
}
