const userModel = require('../../models/userModel')
const crypto = require('crypto');
const customError = require('../../config/customError');
//const sendEmail = require('./nodeMail');
const sendEmail = require('./sendGrid');

// const path = require('path')
// const fs = require('fs')

// const usersPath = path.join(__dirname, '..', 'model', 'users.json')

const resetEmail = async(req, res, next) => {    

        const email = req.body.email;

        userModel.findOne({email: email}).exec((err, user)=>{
            if(err){
                res.send(401).json({msg: "Error!"})
            }else if(!user){
                res.send(401).json({msg: "No email found!"})
                }else{
                    const token = crypto.randomBytes(10).toString('hex');

                    //call send mail controller here
                    sendEmail(token).then(response => {
                        user.update({
                            pwResetToken: token,
                            //this is equivalent to an hour
                            pwResetExpires: Date.now() + 3600000,
                        })
                        then(res.send(401).json({msg: "everything is fine", status:200})) 
                    .catch(err=>{
                        (err)
                    })                   
                }                  
            )}
        })
    }
    
module.exports = resetEmail