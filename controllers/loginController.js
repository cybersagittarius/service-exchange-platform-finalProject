const userModel = './models/userModel'

const cookieParser = require('cookie-parser');
const customError = require('../config/customError');
const dotenv = require('dotenve');
const jwt = require('jsonwebtoken');
const path = require('path')

dotenv.config({path: '../config/config.env'});

// const fs = require('fs')
// const usersPath = path.join(__dirname, '..', 'model', 'users.json')

const checkLoginUser = (body) => {

    return new Promise((resolve, reject)=>{

        const { _id, email, password } = body;
        // if (database.email === body.email)
        // user is only a placeholder for the name, I can call it kitten if I want
        userModel.findOne({email: email}).exec((err, user)=> {
        if(err){
            reject(err)
        }else if(!user){
                reject(new Error('No matching email!'));
                //reject(customError('No matching email!'))
                //this is where we can use the customError function
            }else{
                user.comparePassword(password, (matchError, isMatch)=>{
                    if(matchError) {
                        reject(error)
                        }else if(!isMatch){
                        reject(new Error('No matching password!'))
                            }else{
                                const tokenAssign = (_id) =>{
                                let token = jwt.sign({_id: _id}, process.env.JWT_SECRET)
                                res.cookies('token', token, { httpOnly: true})
                                res.json({
                                    message: 'Login succeeded',
                                    user: user,
                                    token: true
                                })
                            }
                                console.log('User logged in!');
                                resolve(tokenAssign());
                            }
                        })
                    }
                })
            })             
        }

// const checkUser = (body) => {

//     return new Promise((resolve, reject)=>{

//         const { email, password } = body;
       
//         fs.readFile(usersPath, (err, data)=>{
//             if(err){
//                 reject(err)
//             }else{
//                 const foundUser = JSON.parse(data).users.find(item => item.email === email); 
//                 //tried to console.log(users) or (item), app crashed

//                 if(!foundUser){
//                     reject(new Error('No matching email'))
//                 }else{
//                     if(foundUser.password !==password){
//                         reject(new Error('Password is wrong'))
//                     }else{
//                         resolve('Hurray!! User is logged in!')
//                     }
//                 }
//             }
//         })
//     })
// }


module.exports = {
    checkLoginUser
}
