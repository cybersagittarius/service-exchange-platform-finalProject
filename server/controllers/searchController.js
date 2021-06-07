const express = require ('express');
const jwt = require("jsonwebtoken");
const User = require('../models/userModel')

// const checkToken4Search = async(req, res, next) => {
   
//     // (token===null) threw an error because token is undefine. Better do !token
//     if(!req.user){
//         await limitedSearch(req, res, next)
//         } else{
//         await fullSearch(req, res, next)
//         }     

// const limitedSearch = async(req, res, next) => {
//     // we want to find all users with the same lookselection and country
//     const { lookselection, country, region } = req.body

//     // get id from lookselection
//     let arrayOfSkillsIds = lookselection.map(item=>item.id);

//     // take the Ids and the country to search for users
//     // to do this we will use the user model and the find method
//     // User.find({condition},{config})
//     await User.find({country: country, region: region, "skills.id": {$in: arrayOfSkillsIds} }, {_id:0, email:0, firsname:0, lastname:0})
//     .then(data=>{
//         res.json(data)
//     }).catch(error=>{
//         res.send(error.message)
//     })      
// }

// const fullSearch = async(req, res, next) => {
//     const { lookselection, country, region } = req.body

//     let arrayOfSkillsIds = lookselection.map(skill=>skill.id);
//     await User.find({country: country, region: region, "skills.id": {$in: arrayOfSkillsIds} }, {_id:0})
//     .then(data=>{
//         res.json(data)
//     }).catch(error=>{
//         res.send(error.message)
//     })   
//     }
// }

// module.exports = checkToken4Search

//1. takes 2 function  searchController.limitedSearch searchController.fullSearch
// receive data from frontend to check the identity of user
//if, else =>first check if the user is auth
//2. no auth, limitedSearch() => 
     // get the data from the database    
     //generate the limited search outcome, 
//3. with auth fullSearch() =>
    // get the data from the database
    // generate the full outcome


// Version with Sebastian
const checkToken4Search = async(req, res, next) => {
    //look at auth again to determine where the token comes from, 
    //the previous auth file has this //&& authHeader.split(' ')[1];
    //it was causing an issue, now commented out
    
    //we do not do { token } because we are not destructuring, there is only one set of info to be assgined to req.headers.token
    let token = null;
    if(req.headers.authorization){
        token = req.headers.authorization.split(" ")[1]
    }
    //there's a bearer token in here
    //Bearer + token   
    //const token = req.headers.token
    
    //(token===null) threw an error because token is undefine. Better do !token
    if(!token){
        console.log("only limited search allowed because there is no token")
        await limitedSearch(req, res, next)
    } else {
        jwt.verify(token, process.env.JWT_SECRET, (err,decoded)=>{
            if(err){
                console.log("only limited search allowed because the token is not valid")
                limitedSearch(req, res, next)
            }else{
                console.log("full search allowed")
                fullSearch(req, res, next)
            } 
        });
    }
}

const limitedSearch = (req, res, next) => {
    // we want to find all users with the same lookselection and country
    console.log(req.body)
    const { lookselection, country } = req.body //decide if we should include region later

    // get id from lookselection
    let arrayOfSkillsIds = lookselection.map(item=>item.id);

    // take the Ids and the country to search for users
    // to do this we will use the user model and the find method
    // User.find({condition},{config})
    //region: region, we can decide if we want to include them after country: country
    User.find({country: country, "skills.id": {$in: arrayOfSkillsIds} }, {_id:false, email:false, firstname:false, lastname:false, hobby: false})
    .then(data=>{
        res.json(data)
    }).catch(error=>{
        res.send(error.message)
    })      
}

const fullSearch = (req, res, next) => {
    //take out region from deconstructuring for now
    console.log(req.body)
    const { lookselection, country } = req.body    

    let arrayOfSkillsIds = lookselection.map(item=>item.id);

    //take out region: region after country: country for now
    User.find({country: country, "skills.id": {$in: arrayOfSkillsIds} }, {_id:0})
    .then(data=>{
        res.json(data)
    }).catch(error=>{
        res.send(error.message)
    })   
}

module.exports = checkToken4Search 



