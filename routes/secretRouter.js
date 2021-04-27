const express = require('express');
const router = express.Router();
const token = require('../token/tokens')

router.get ('/', token.tokenCheck, (req, res) =>{
    res.json({
        message: 'You got the secret from me! Open Sesame!',
        cookies: req.cookies
    })
    // we do not redirect from one page to another in the backend
    // we do so in the frontend
    //.then(res.redirect('/profile'))
    .catch((err) => console.log(err))
})

module.exports = router 




