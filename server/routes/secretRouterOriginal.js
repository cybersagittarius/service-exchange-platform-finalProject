const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
//const token = require('../token/tokens')

router.post('/', async(req, res, next)=>{
    const token = req.body.token;

    if(token == null){
        return res.sendStatus(401);
    } else {
        const autHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        await jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
            if(err) return res.sendStatus(403);

            req.user = user;
            next()
        })        
    }
})

// router.get ('/', token.tokenCheck, (req, res) =>{
//     res.json({
//         message: 'You got the secret from me! Open Sesame!',
//         cookies: req.cookies
//     })
//     // we do not redirect from one page to another in the backend
//     // we do so in the frontend
//     .then(res.redirect('/profile'))
//     .catch((err) => console.log(err))
// })

module.exports = router 




