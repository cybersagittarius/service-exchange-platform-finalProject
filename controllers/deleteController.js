const User = require('../models/userModel')
const express = require('express')

const deleteUser = async(req, res, next)=>{ 
      console.log(req.body)
   try{
       const user = await User.findOneAndDelete({id: req.user._id})//important! id:_id
        res.json({msg: `The user has been deleted`})
    } catch(err){
    next(err.message)  
  }    
}

module.exports = deleteUser

