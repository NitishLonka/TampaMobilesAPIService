const e = require('express');
const express = require('express')
const router = express.Router();
const dotenv = require('dotenv')
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const userModel = require('../models/users.model')
// router.get('/:userId',async(req,res)=>{
//     let userId = req.params.userId;
//     let user = await userModel.findById(userId)
//     console.log(req.body)
//     if(user){
//         return res.status(200).json({success:true,data:user})
//     }
//     return res.status(401).send('User not found')
// })
dotenv.config()
router.put('/',async(req,res)=>{
    console.log(req.body)
    let user= await userModel.findOne({username:req.body.username1,password:req.body.password1}).exec()
    let orderitems = [];
    for(let i=0;i<user.orders.length;i++)
    {
        console.log(user.orders);
        orderitems.push(user.orders[i]);
    }
    for(let i=0;i<req.body.orders.length;i++){
        orderitems.push(req.body.orders[i]);
    }
    user.set({orders:orderitems})
    await user.save()
    res.status(200).json({success:true})
})

router.get('/user',async (req,res)=>{
    console.log("here-",req)
    let user_name = req.query.username.toString();
    let password = req.query.password.toString();
    console.log(user_name,password)
    console.log(userModel)
   const user= await userModel.findOne({username:req.query.username,password:req.query.password}).exec()
   console.log(user)
   if(user){
   
   res.status(200).json({success:true ,data:user})
   }
   else{
   res.status(404).json({success:false,msg:"Username or password is incorrect"})
   }

})

router.post('/',async(req,res)=>{
    
    let user = req.body;
    console.log(user);
    user.password=bcrypt.hashSync(req.body.password,8)
    let user_ = new userModel(user);
    const _user = await userModel.findOne({username:user.username}).exec()
    console.log(_user);
    if(_user)
    {
        res.status(201).json({success:false,msg:"UserName already in use .Please use a different username"})
    }
    else{
    user_.save(function(err,user_){
                if(err)
                {
                    console.log(err)
                    res.status(500).json({success:false})
                }
                else{
                  const token_=generateAccesstoken(user.username)
                  res.status(200).json({success:true,msg:"User successfully created",data:user_,token:token_})
                }
            })
        }
    //res.send('POST Called')
})
function generateAccesstoken(username){
    return jwt.sign(username,process.env.TOKEN_SECRET,{expiresIn:'3000s'});
}
module.exports = router;