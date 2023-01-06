const express = require('express')
const app = express();
const people = require('./routes/people')
const phone = require('./routes/phones')
const cart = require('./routes/cart')
const auth = require('./routes/auth')
var db = require('./db')
const productsModel = require('./models/products.model')
app.use(express.static('./methods-public'))
app.get('/',(req,res)=>{
    //res.json(products);
})
//parse for data
app.use(express.urlencoded({extended:false}))
//parse json
app.use(express.json())
app.use('/api/people',people)
app.use('/api/phones',phone)
app.use('/api/cart',cart)
app.use('/api/login',auth)
app.listen(5002,()=>{
    console.log('server is listening on port 5000');
})
