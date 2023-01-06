const mongoose = require('mongoose')

const cartitemsschema = mongoose.Schema({
    id:Number,
    name:String,
    quantity:String,
    price:Number,
    isActive:Boolean
})

const cartItemsModel = mongoose.model('CartItems',cartitemsschema)  

module.exports = cartItemsModel