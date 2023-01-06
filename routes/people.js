const express = require('express');
const router = express.Router();

let {people} = require('../data')
router.get('/',(req,res)=>{
    res.status(200).json({success:true,data:people})
})
router.post('/',(req,res)=>{
    console.log(req.body)
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success:false,msg:'please provide name value'})
    }
    return res.status(201).json({success:true,person:name})
})
router.put('/:id',(req,res)=>{
    const {id} = req.params;
    const {name} = req.body;
    const person = people.find((person)=>person.id === Number(id))
    if(!person){
        return res.status(400).json({success:false,msg:'please provide valid id'})
    }
    person.name = name;
    res.status(200).json({people});
})
router.delete('/:id',(req,res)=>{
    const person = people.find((person)=>person.id === Number(req.params.id))
    if(!person){
        return res.status(400).json({success:false,msg:'please provide valid id'})
    }
    const newPeople = people.filter((person)=> person.id!==Number(req.params.id));
    return res.status(200).json({success:true,data:newPeople})
})

module.exports = router