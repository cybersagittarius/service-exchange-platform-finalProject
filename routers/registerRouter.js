const express = require('express');
const router = express.Router();
const registerController = require('../controllers/registerController');

const path = require('path');
const fs = require('fs');

const usersPath = path.join(__dirname, '..', 'modal', 'users.json')

router.get('/', (req, res)=>{
    
    console.log(req.body);

    fs.readFile(usersPath, (err, data)=>{
        if(err){
            return err
        }else{
            //incoming data through fetch
            let newData = JSON.parse(data)
            console.log(newData)
            res.json(newData)   
        }
    })
})       

router.post('/', (req, res)=>{
    const body=req.body;

    registerController.saveUsers(body)
    .then(response=>{
        res.send(response)
    })
    .catch(error=>{
        console.log(error);
        res.send("Error in saving users");
    })
})

module.exports = router; 