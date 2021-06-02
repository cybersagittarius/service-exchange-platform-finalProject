const express = require ('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('./models/userModel')

const searchController = async(req, res, next) => {
    const { token } = req.body.token;
    if(token===null){
        //const { lookselection, country, region } = req.body
        await res.status(401).json({msg: "return limited search"})
        } else {
            const verified = jwt.verify(token, process.env.JWT_SECRET);
            if(!verified){
                await res.status(401).json({msg: "returne limited search"})
                }else{
                    await res.status(200).json({msg: "return full search"})
                    } 
                }
            }
    
  module.exports = searchController
// const limitedSearch = async(req, res, next) => {
//     const { token } = req.body.token;
//     if(token===null){
//         //const { lookselection, country, region } = req.body
//         res.status(401).json({msg: "return limited search"})
//     }
// }

// const fullSearch = async(req, res, next) => {
//     const { token } = req.body.token;
//     if(token!==null){
//         const verified = jwt.verify(token, process.env.JWT_SECRET);
//         if(!verified){
//             res.status(401).json({msg: "returne limited search"})
//         }
//         else{
//             res.status(200).json({msg: "return full search"})
//         } 
//     }
// }

// module.exports = { limitedSearch, fullSearch }

//1. takes 2 function  searchController.limitedSearch searchController.fullSearch
// receive data from frontend to check the identity of user
//if, else =>first check if the user is auth
//2. no auth, limitedSearch() => 
     // get the data from the database    
     //generate the limited search outcome, 
//3. with auth fullSearch() =>
    // get the data from the database
    // generate the full outcome



