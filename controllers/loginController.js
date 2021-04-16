const userModel = require('../models/userModel')
// const path = require('path');
// const fs = require('fs')

// const usersPath = path.join(__dirname, '..', 'model', 'users.json')

const checkUser = (body) => {

    return new Promise((resolve, reject)=>{

        const { email, password } = body;

        const user = userModel.find(item=> item.email === email);
        fs.readFile(usersPath, (err, data)=>{
        if(!user) 
            if(err){
                reject(err)
            }else{
                const foundUser = JSON.parse(data).users.find(item => item.email === email); 
                //tried to console.log(users) or (item), app crashed

                if(!foundUser){
                    reject(new Error('No matching email'))
                }else{
                    if(foundUser.password !==password){
                        reject(new Error('Password is wrong'))
                    }else{
                        resolve('Hurray!! User is logged in!')
                    }
                }
            }
        })
    })
}


module.exports = {
    checkUser
}
