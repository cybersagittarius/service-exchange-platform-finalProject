const userModel = require('../models/userModel')
const crypto = require('crypto');
const customError = require('../config/customError');
const nodemailer = require('nodemailer');
// const path = require('path')
// const fs = require('fs')

// const usersPath = path.join(__dirname, '..', 'model', 'users.json')

const checkEmail = (body)=>{

    return new Promise((resolve, reject)=>{

        const { email } = body;

        userModel.findOne({email: email}).exec((err, user)=>{
            if(err){
                reject(err)
            }else if(!user){
                reject(new Error('No matching error!'))
                }else{
                    const token = crpto.randomBytes(20).toString('hex');
                    user.update({
                        pwResetToken: token,
                        pwResetExpires: Date.now() + 3600000,
                    });

                    const transporter = nomailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: `${process.env.EMAIL_ADDRESS}`,
                            pass: `${process.env.EMAIL_PASSWORD}`,
                        },
                    });
                    resolve('Please check your email for a password recovery link.')
                }
            }
        )}
    )
}

module.exports = {
    checkEmail    
}
