const path = require('path');
const fs = require('fs')

const usersPath = path.join(__dirname, '..', 'modal', 'users.json')

const checkEmail = (body)=>{

    return new Promise((resolve, reject)=>{

        const { email } = body

        fs.readFile(usersPath, (err, data)=>{
            if(err){
                reject(err)
            }else{
                const foundEmail = JSON.parse(data).users.find(item=>{item.email === email});

                if(!foundEmail){
                    reject(new Error('No matching email found'))
                }else{
                    resolve('Please check your email for a password recovery link.')
                }
            }
        })
    })
}

module.exports = {
    checkEmail    
}
