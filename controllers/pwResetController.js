const express = require('express')
const auth = require('../middleware/auth')
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth')
require('dotenv').config();

const Essential = require('../models/essentialModel')

const resetPw = async(req, res, next)=>{
   const auth = auth();
   if(!auth) {
       res.redirect(301, '/')
   } else {

   const token = req.params.token;
   const pw = req.newpassword;
   try{       
      let findToken = await Essential.findOneAndUpdate({pwchangetoken: token}, {password: pw});
      if(!findToken) {
          res.redirect(401, '/')  
          res.status(401).json({msg: 'token is not valid'})
        }else {
          res.redirect(200, '/reset_password')
          res.status(401).json({msg: 'password updated successfully!'})
        }
      }
   catch(err){
           return next(err)
            }
      }
}

module.exports = resetPw

//1st create route for check the token

//2nd check the token from the req.body

//3rd verify teh token with jwt.verify 

//4tha you get the user and the id, and check in the colletion essential for the user OR
//4thb use findOneAndUpdate by searching with the token

//5th if you don't find the user then return status 400 saying wrong tokenb

//6th if you find the user then return with everything is fine


//extra thing I wrote for practice
// console.log(req.body)

// const token = req.body.token

// if(!token){
//     return res.status(401).json({msg: "no token"})
// }else{
//     const verified = await jwt.verify(token, process.env.JWT_SECRET)
//     req.user = verified.user

//     if(verified){
        
//         res.redirect('/reset_password')
//         }else{
//         res.status(401).json({msg: 'token is not valid!'})
//         return next(err); 
//     }