const express = require('express')
const router = express.Router();
let {cart} = require('../data')
router.get('/:userid',(req,res)=>{
  let list = cart.filter((item)=>item.isActive===true);
  res.status(200).json({success:true,quantity:3,items:cart});
})

module.exports=router