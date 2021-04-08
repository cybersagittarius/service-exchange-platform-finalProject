const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

const path = require('path');
const fs = require('fs');
const usersPath = path.join(__dirname, '..', 'modal', 'users.json');

router.get('/', (req, res)=>{
    
    const body = req.body;
        
    fs.readFile(usersPath, (err, data)=>{
        if(err) {
            throw err
        }else{                     
            res.send(data);
        }    
    })
})

router.post('/', (req, res)=>{
    const body = req.body;

    loginController.checkUser(body)
    .then(response=>{
        res.send(response)
    })
    .catch(error=>{
        console.log(error)
        res.send('wrong information')
    })
})

module.exports = router;