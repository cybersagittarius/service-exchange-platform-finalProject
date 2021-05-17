const User = require('../models/userModel')
const Essential = require('../models/essentialModel')

const express = require('express')

const deleteUser = async(req, res, next) => { 
      console.log(req.headers)     

   try {
       const user = await User.findOneAndDelete({id: req.user._id})//important! id:_id
       const essential = await Essential.findOneAndDelete({id: req.user._id})

        res.json({msg: `The user ${ req.user.name } has been deleted`})
    } catch(err){
    next(err.message) 
    } 
  }
  
  module.exports = deleteUser

      // const [email] = req.body.emal
      // const user = email

      // let findUser = await User.findOne({email: user.email});
      
      // if(!findUser) {
      //   return res.status(400).json({error: [{msg: "no user found!"}] 
      //   })
      // }
      // if(findUser) {
      //   await user.findOneAndDelete({id: findUser._id})
      //   res.json({msg:`The user ${req.user.name} has been deleted!`})
      // } 
  //   }
  // catch (err) {
  //       return next(err.message)
  //     }
  // }  
      
    

