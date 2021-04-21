const userModel = require('../models/userModel')

const customError = require('../config/customError');
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
                    resolve('Please check your email for a password recovery link.')
                }
            }
        )}
    )
}

module.exports = {
    checkEmail    
}
