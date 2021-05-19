
const jwt = require('jsonwebtoken')
const customerError = require('../config/customError')
require('dotenv').config();

const Essential = require('../models/essentialModel')

const pwResetCheck = async(req, res, next) =>{
  console.log(req.body)
  
  const token = req.body.token
  //we do not need to use session here because we are using body.token
  // req.session.token = token
  
  if(!token){
      return res.status(401).json({msg: "no token"})
  }else{
      
      
      try{
        const verified = jwt.verify(token, process.env.JWT_SECRET)
      if(!verified){   
                // res.redirect is not working here, only works at server.js
                // res.redirect('/not_found');
                return res.status(400).json({ error: { msg: "token not verified!" } })
          }else{     
              const findUser = await Essential.findOne({pwchangetoken: token});
              if (!findUser){
                // res.redirect('/');
                return res.status(400).json({ error: { msg: "user not found!" } }) 
                } else {
                  console.log(findUser.email)
                req.session.email = findUser.email
                  console.log('session',req.session)
                return res.status(200).json({ success: {msg: 'token is valid!'}})
              }
            }      
      }catch(err){
        next(err)
      }
    }
  }

const pwReset = async(req, res, next) => {
    //we just use the email for this session, afterwards we should destroy the session
    //previously we got req.session.email as undefined was becase we must have with Credentials: true in axios in the frontend, 
    //like this    const authAxios = axios.create({
                // baseURL: url,
                // headers: { "Content-Type": "application/json",},     
                // withCredentials: true                    
                // }) 

   let email = req.session.email
    console.log('email',email)
    console.log('session',req.session)
    const pw = req.body.newPassword;
    
    //we added useFindAndModify: false based on the advice from MongoDB
    Essential.findOneAndUpdate({email: email}, {password: pw, pwchangetoken: null},{useFindAndModify: false})
    .then(response=>{
      req.session.destroy((err)=>{
              if(err){
                return next(err)
              } else {
                return res.status(200).json({ success: { msg: "password updated!" } })
              }
            })
    }).catch(error=>{
      return next(error)
    })
  }
  module.exports = { pwResetCheck, pwReset }

    // const updatePW = await Essential.findOneAndUpdate({email: email}, {password: pw, pwchangetoken: ''})

    //   if(!updatePW) {
    //     //or I can import the customerError to be used here for a more specific idea
    //         return next(customerError('There is an error'))
    //   } else {
    //     req.session.destroy((err)=>{
    //       if(err){
    //         return next(err)
    //       } else {
    //         return res.status(200).json({ success: { msg: "password updated!" } })
    //       }
    //     })
    // }




//1st create route for check the token

//2nd check the token from the req.body

//3rd verify teh token with jwt.verify 

//4tha you get the user and the id, and check in the colletion essential for the user OR
//4thb use findOneAndUpdate by searching with the token

//5th if you don't find the user then return status 400 saying wrong tokenb

//6th if you find the user then return with everything is fine

//extra thing I wrote for practice

// const alternative = async(req, res, next) =>{
// console.log(req.body)

// const token = req.body.token

// if(!token){
//     return res.status(401).json({msg: "no token"})
// }else{
//     const verified = await jwt.verify(token, process.env.JWT_SECRET)
    
//     try{
//     if(!verified){   
//               // res.redirect is not working here, only works at server.js
//               // res.redirect('/not_found');
//               return res.status(200).json({ error: { msg: "token not verified!" } })
//         }else{     
//             const findUser = await Essential.findOne({pwchangetoken: token});
//             if (!findUser){
//               // res.redirect('/');
//               return res.status(200).json({ error: { msg: "user not found!" } }) 
//             } else {
//               // res.redirect('/reset_password');
//               const newPW = req.body.newPassword;
//               await Essential.findOneAndUpdate({email: findUser.email }, {password: newPW})

//               return res.status(200).json({ success: { msg: "password updated!" } });
//             }
//           }      
//     }catch(err){
//       next(err)
//     }
//   }
// }