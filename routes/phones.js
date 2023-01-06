const express = require('express')
const router = express.Router()
let {phones} = require('../data')

const productsModel = require('../models/products.model')
// router.get('/',(req,res)=>{
//     let list = phones.map((mobile)=>{return {id:mobile.id,name:mobile.name,price:mobile.price,url:mobile.url}})
//     res.status(200).json({success:true,data:list})
// })

router.get('/:id',(req,res)=>{
    let i = Number(req.params.id)
    productsModel.findOne({id:i},function(err,productResponse){
        if(err){
            res.status(500).json({success:false,message:'Unable to Find products'})
        }
        else{
             res.status(200).json({success:true,data:productResponse})
        }
    })
    
})
router.get('/',(req,res)=>{
    productsModel.find(function(err,productListResponse){
        if(err){
            res.status(500).json({success:false,message:'Unable to Find products'})
        }
        else{
            let list = productListResponse.map((mobile)=>{return {id:mobile.id,name:mobile.name,price:mobile.price,url:mobile.url,quantity:1}})
            res.status(200).json({success:true,data:list})
        }
    })
})
// router.post('/',(req,res)=>{
//     let product = new productsModel({
//         "name": "Pixel 7a",  "price": "500",  "description": "Slim and sleek",  "url": "https://m.media-amazon.com/images/I/61ePWSuIfwL._AC_UY218_.jpg",  "id": 3,  "img": "https://m.media-amazon.com/images/I/61ePWSuIfwL._AC_SX466_.jpg",  "cartimg": "https://i.imgur.com/QRwjbm5.jpg"
//     })
//     console.log('here')
//     product.save(function(err,product){
//         if(err)
//         {
//             console.log(err)
//             res.status(500).json({success:false})
//         }
//         else{
//        res.status(200).json({success:true,msg:"created"})
//         }
//     })
// })

module.exports=router;