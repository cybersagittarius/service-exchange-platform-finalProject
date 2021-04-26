const customError = require('../config/customError');
const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const token = require('../token/tokens');

// const path = require('path');
// const fs = require('fs');
// const usersPath = path.join(__dirname, '..', 'model', 'users.json');

// router.get('/', (req, res)=>{
    
//     const body = req.body;
        
//     fs.readFile(usersPath, (err, data)=>{
//         if(err) {
//             throw err
//         }else{                     
//             res.send(data);
//         }    
//     })
// })

//as explained by Rob, using async in a route does not guarantee the function would get to the error stage
router.post('/', async (req, res)=>{
    // const body = req.body;
    /*
    req.body = {
        userNAME : 'sebastian',
        PASSWORD : '123456'
    }
    */
    const body = {
        email: req.body.email,
        password: req.body.passWord,
    }    

    //in loginController data would be checked
    await loginController.checkUser(body)
    .then(()=>{
        const { email } = body
        token.tokenCreation(body)     
        console.log("Token created!")
        // response=>{        
        // res.json(response)
    })
    .catch(error=>{
        console.log(error)
        res.send('wrong information')
    })
    .finally((customError)=> {return customError})  

    res.redirect('/secret');
    // const { _id, email } = tokenBody
    // let token = jwt.sign({ _id: tokenBody._id, email: tokenBody.email }, JWT_SECRET)

    //give a token
})

module.exports = router;