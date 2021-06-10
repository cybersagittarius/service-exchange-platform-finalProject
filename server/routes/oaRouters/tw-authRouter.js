const dotenv = require('dotenv');
const express = require('express');
const router = express.Router();

const path = require('path');
const passport = require('passport')

const twController = require('../../controllers/oaControllers/tw-authController')

dotenv.config({path: '../config/config.env'})

router.use(passport.initialize())

twController.twitterStrategy();

//prototype
// app.get('/auth/twitter',
//   passport.authenticate('twitter'));

// app.get('/auth/twitter/callback', 
//   passport.authenticate('twitter', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });


//route which redirect us to gibhut for authentication to log us in
router.get('/auth/twitter', passport.authenticate('twitter'));

//CALLBACK route will wait for the login response
//Either successful logins or login cancellation will be handled 
router.get('/auth/twitter/callback', passport.authenticate('twitter', { 
                                   //successfual authentication, redirect home
    failtureRedirect: '/login'}), (req, res) =>{
    
    console.log('[CALLBACK]');
    console.log('Login was successful.')
    res.json('You are logged in');
    
    //once login is successful, user will be redirect to profile page
    res.redirect('/profile')
});