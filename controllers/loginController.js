const path = require('path');
const fs = require('fs')

const usersPath = path.join(__dirname, '..', 'modal', 'users.json')

const checkUser = (body) => {

    return new Promise((resolve, reject)=>{

        const { email, passWord } = body
        
        fs.readFile(usersPath, (err, data)=>{
            if(err){
                reject(err)
            }else{
                const foundUser = JSON.parse(data).users.find(item => item.email === email); 
                //tried to console.log(users) or (item), app crashed

                if(!foundUser){
                    reject(new Error('No matching email'))
                }else{
                    if(foundUser.passWord !==passWord){
                        reject(new Error('Password is wrong'))
                    }else{
                        resolve('User is logged in!')
                    }
                }
            }
        })
    })
}

module.exports = {
    checkUser
}
