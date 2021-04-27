const userModel = './models/userModel'

const customError = require('../config/customError');
const dotenv = require('dotenv');
const path = require('path')

dotenv.config({path: '../config/config.env'});

// const fs = require('fs')
// const usersPath = path.join(__dirname, '..', 'model', 'users.json')

const checkUser = (body) => {

    return new Promise((resolve, reject)=>{

        const { email, password } = body;
        // if (database.email === body.email)
        // user is only a placeholder for the name, I can call it kitten if I want
        userModel.findOne({email: email}).exec((err, user)=> {
        if(err){
            reject(err)
        }else if(!user){
                reject(new Error('No matching email in our db!'));
                //reject(customError('No matching email!'))
                //this is where we can use the customError function
            }else{
                user.comparePassword(password, (matchError, isMatch)=>{
                    if(matchError) {
                        reject(error)
                        }else if(!isMatch){
                        reject(new Error('No matching password with the email!'))
                            }else{                            
                                resolve(res.send({msg: "Welcome back!"}))
                            }
                        }                
                    )}            
                })
            })    
        }
    
    module.exports = { checkUser };  

                            // const accesstoken = createAccessToken(user._id);
                            // const refreshtoken = createRefreshToken(user._id);    
                            
                            // user.refreshtoken = refreshtoken;

                            // const saveDoc = db.collection.insertOne({refreshtoken: user.refreshtoken});
                            // if(err){
                            //     reject(err)
                            //     }else if(!saveDoc) {
                            //         reject(new Error('problem saving the data!'))
                            //     }else{
                            //         const sendRToken = sendRefreshToken(res, refreshtoken);
                            //         const sendAToken = sendAccessToken(res, req, accesstoken);
                            //             if(err){
                            //                 reject(err)
                            //             }else if(!sendRToken || !sendAToken){
                            //                 reject(new Error('either one of the token was not sent out'))
                            //             }else if(!sendRToken && !sendAToken) {
                            //                 reject(new Error('neither token was sent out'));
                            //             }else{
                            //                 resolve(res.send({
                            //                 success: true
                            //             })                                 
                            //         )}
                            //     }
    //                         }
    //                     }                
    //                 )}            
    //             })
    //         })    
    //     }
    
    // module.exports = { checkUser };                            

                            //This is not a good idea, still better to put token function in a separate file
                            //     const tokenAssign = () =>{
                            //     let token = jwt.sign({_id: _id}, process.env.JWT_SECRET)
                            //     res.cookies('token', token, { httpOnly: true})
                            //     res.json({
                            //         message: 'Login succeeded',
                            //         user: user,
                            //         token: 'Token generation succeeded'
                            //     })
                            // }
                            //     console.log('User logged in!');
                                //resolve('User logged in !!')                               
                        // }
                        // })
              

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
