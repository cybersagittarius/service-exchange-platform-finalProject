const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

// const path = require('path');
// const fs = require('fs');

// const usersPath = path.join(__dirname, '..', 'model', 'users.json')

// router.get('/', (req, res, next)=>{
    
//     console.log(req.body);

//     fs.readFile(usersPath, (err, data)=>{
//         if(err){
//             next(err)
//         }else{
//             //incoming data through fetch
//             let newData = JSON.parse(data)
//             console.log(newData)
//             res.json(newData)
//             next()   
//         }
//     })
//     next();
// })       

router.post('/', (req, res, next)=>{
    //this console.log shall be removed after testing and debugging
    console.log('I am being called?')
    const body= {
        firstname: req.body.firstName,
        lastname: req.body.lastName,
        country: req.body.country,
        region: req.body.region,
        email: req.body.email,
        username: req.body.userName,
        password: req.body.passWord,
        confirmpw: req.body.confirmPW,
        avatar: req.body.savedImage,
        skills: req.body.offerSelection
    }
    
    //separate avatar out to handle the storage to MongoDB
    //const {avatar, ...bodyRest} = body
    //this is only for testing
    //console.log (bodyRest)

    //const result = await cloudinary.upload.upload( avatar )
    //const userNew = await User({ ...userData, avatar_url: result.secure_url })
        
    registerController.registerUsers()
    .then(response=>{
        res.send(response)
        next()
    })
    .catch(error=>{
        console.log(error);
        //res.send("Error in saving users");
        next(error)
    })
})

module.exports = router; 