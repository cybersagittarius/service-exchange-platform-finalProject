const User = require('../models/userModel')
const express = require('express')

const deleteUser = async(req, res, next)=>{ 
      console.log(req.user)
   try{
       const user = await User.findOneAndDelete({_id: req.user.id})
        res.json({msg: `The user ${req.user.name} has been deleted`})
    } catch(err){
    next(err.message)  
  }    
}


module.exports = deleteUser

