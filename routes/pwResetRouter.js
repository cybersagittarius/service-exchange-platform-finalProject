const express = require('express');
const router = express.Router();
const pwResetController = require('../controllers/emailControllers/pwResetController');

// const path = require('path');
// const fs = require('fs');
// const usersPath = path.join(__dirname, '..', 'model', 'users.json');

// router.get('/', (req, res)=>{
//     const body = req.body;

//     fs.readFile(usersPath, (err, data)=>{
//         if(err){
//             throw err
//         }else{
//             const newData = JSON.parse(data)
//             res.send(newData)

            //if we do not parse data and just use res.send(data), on browser the data will be downloaded to a file
//         }
//     })
// })

router.post('/', (req, res)=>{
    
    const body = req.body.email;

    pwResetController.checkEmail(body)
    .then(response=>{
         res.send(response)
    })    
    .catch(error=>{
     console.log(error);
     res.send("Oops! something went wrong")
    })
})

module.exports = router
