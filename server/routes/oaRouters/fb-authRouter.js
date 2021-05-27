const dotenv = require('dotenv');
const express = require('express');
const router = express.Router();

const path = require('path');
const passport = require('passport')

const fbController = require('../../controllers/oaControllers/fb-authController')

dotenv.config({path: '../config/config.env'})

router.use(passport.initialize())

fbController.facebookStrategy();

//route which redirect us to gibhut for authentication to log us in
router.get('/auth/facebook', passport.authenticate('facebook'));

//CALLBACK route will wait for the login response
//Either successful logins or login cancellation will be handled 
router.get('/auth/facebook/callback', passport.authenticate('facebook', { 
                                   //successfual authentication, redirect home
    failtureRedirect: '/login'}), (req, res) =>{
    
    console.log('[CALLBACK]');
    console.log('Login was successful.')
    res.json('You are logged in');
    
    //once login is successful, user will be redirect to profile page
    res.redirect('/profile')
});

//prototype
// app.get('/auth/facebook',
//   passport.authenticate('facebook'));

// app.get('/auth/facebook/callback',
//   passport.authenticate('facebook', { failureRedirect: '/login' }),
//   function(req, res) {
//     // Successful authentication, redirect home.
//     res.redirect('/');
//   });

//see http://www.passportjs.org/packages/passport-facebook/ for how to request more user info