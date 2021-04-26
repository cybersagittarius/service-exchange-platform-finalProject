const express = require('express');
const router = express.Router();
const token = require('../token/tokens')

router.get ('/', token.tokenCheck, (req, res, next) =>{
    res.json({
        message: 'You got the secret from me! Open Sesame!',
        cookies: req.cookies
    })
    .then(res.redirect('/profile'))
    .catch((err) => console.log(err))
} )

module.exports = router 




