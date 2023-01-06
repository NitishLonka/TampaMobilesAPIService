const mongoose = require('mongoose')
const usersSchema = mongoose.Schema({
    username:String,
    password:String,
    id: String, 
    firstname: String, 
    lastname: String, 
    address:String,
    address2:String,
    city:String,
    state:String,
    zip:String,
    cartitems:Array,
    orders:Array
}
)
const userModel = mongoose.model('users',usersSchema)  
module.exports = userModel