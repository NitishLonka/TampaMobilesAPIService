const mongoose = require('mongoose')

const ordersschema = mongoose.Schema({
    status:String,
    id:String,
    total:Number,
    date:Date
})

const orderModel = mongoose.model('Orders',ordersschema)  

module.exports = orderModel