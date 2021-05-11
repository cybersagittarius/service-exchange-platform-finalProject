const express = require('express')
const crypto = require('crypto');
//const sendEmail = require('./nodeMail');
require('dotenv').config();
const sendEmail = require('../utilities/sendGrid');

const User = require('../models/userModel')

const resetEmail = async(req, res, next) => {    

    const user = req.body   
    console.log(user.email)    
      
        try{
            let findUser = await User.findOne({email: user.email})

                if(!findUser) {
                    //so far tht best res.json way to return error message and status 
                    return res.json({msg: "no email found!", status: 400})
                }
                if(findUser) {
                const token = crypto.randomBytes(10).toString('hex');
                console.log('a token was created', token)                           

                //sendEmail has to be a promise by itself otherwise .then will not work
                sendEmail(token)
                .then(response => {
                    user.update({
                        pwResetToken: token,
                        //this is equivalent to an hour
                        pwResetExpires: Date.now() + 3600000,
                    })
                })
                .then(res.json({ msg: "everything is fine, a token was created", status: 200 }))  
                .catch(err=>err.message)            
            
        } 
    }
        catch(err){
            return next(err.message)
        }
    }
        
            //call send mail controller here
            // sendEmail(token)
            // .then(res => {
            //     user.update({
            //         pwResetToken: token,
            //         //this is equivalent to an hour
            //         pwResetExpires: Date.now() + 3600000,
            //     })
            //     .then(res.send(401).json({ msg: "everything is fine", status: 200 }))
            //         .catch(err => {
            //             (err.message);
            //         });
           
            // }
         
    
    
module.exports = resetEmail

