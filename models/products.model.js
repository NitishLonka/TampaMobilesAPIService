const mongoose = require('mongoose')
const productsschema = mongoose.Schema({
    name: String, 
    price: Number, 
    description: String,
    url:String, 
    id: Number, 
    img: String, 
    cartimg: String
})

const productsModel = mongoose.model('Products',productsschema)

module.exports = productsModel
