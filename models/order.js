'use-strict'
var mongoose = require('mongoose')
var db = require("../db")


var OrderSchema = new mongoose.Schema({
    description: String,
    status: { type: String, default: 'Created'},
    created_at: { type: Date, default: Date.now },
    name: String
})

module.exports = db.model('Order', OrderSchema)