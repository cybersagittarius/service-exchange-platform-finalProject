const userModel = require('../../models/userModel')
const crypto = require('crypto');
const customError = require('../../config/customError');
//const sendEmail = require('./nodeMail');
const sendEmail = require('../utilities/sendGrid');

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
                    const token = crypto.randomBytes(10).toString('hex');

                    //call send mail controller here
                    sendEmail(token).then(response => {
                        user.update({
                            pwResetToken: token,
                            //this is equivalent to an hour
                            pwResetExpires: Date.now() + 3600000,
                        })
                        resolve({message:"everything is fine", status:200}) 
                    }).catch(err=>{
                        reject(err)
                    })                   
                }                  
            }) 
        })
    }

    // const sendPwResetEmail = (token) =>{              

    //         const transporter = nodemailer.createTransport({
    //                 service: 'gmail',
    //                 auth: {
    //                     user: `${process.env.EMAIL_ADDRESS}`,
    //                     pass: `${process.env.EMAIL_PASSWORD}`,
    //                 },
    //             });

    //         const mailOptions = {
    //             from: 'poohbear@gmail.com', 
    //             to: `${user.email}`, 
    //             subject: 'Link to Reset Password',
    //             text: 'fill out later'
    //             };
                        
    //             console.log('sending mail');

    //             transporter.sendMail(mailOptions, (err, res)=>{
    //                 if(err){
    //                     console.log('there was an error: ', err);
    //                     } else {
    //                     console.log('here is the res: ', res);
    //                     resolve(res.status(200).json('recovery email sent')); 
    //                     }
    //                 })           
    //             }                

        
module.exports = {
    checkEmail   
}
                



