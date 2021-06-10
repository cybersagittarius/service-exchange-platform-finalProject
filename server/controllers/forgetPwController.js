const express = require('express')
const jwt = require('jsonwebtoken')
//const sendEmail = require('./nodeMail');
require('dotenv').config();
const sendEmail = require('../utilities/sendGrid');

const Essential = require('../models/essentialModel')

const forgetPwEmail = async(req, res, next) => {    

    const user = req.body   
    console.log(user.email)    
      
        try{
            let findUser = await Essential.findOne({email: user.email})

                if(!findUser) {
                    //so far tht best res.json way to return error message and status                    
                    return res.json({msg: "no email found!", status: 400})
                }
                if(findUser) {
                const payload = { user: { id: findUser._id, email: findUser.email } };

                const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: '30m'});
                    //crypto.randomBytes(10).toString('hex');
                console.log('a token was created', token)                           

                //sendEmail has to be a promise by itself otherwise .then will not work
                
                sendEmail(token)
                .then(async(response) => {

                    findUser.pwchangetoken = token;
                    await findUser.save()    
                })
                .then(res.json({ msg: "everything is fine, an email was sent to you", status: 200 }))  
                .catch(err=>err.message)              
            } 
        }
        catch(err){
            return next(err.message)
        }
    }
    
module.exports = forgetPwEmail
        
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
    


