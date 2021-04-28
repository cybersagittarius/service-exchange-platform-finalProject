const dotenv = require('dotenv');
const express = require('express');
const router = express.Router();

const path = require('path');
const passport = require('passport')

const ghController = require('../../controllers/oaControllers/gh-authController')

dotenv.config({path: '../config/config.env'})

router.use(passport.initialize())

ghController.githubStrategy();

//route which redirect us to gibhut for authentication to log us in
router.get('/auth/github', passport.authenticate('github'));

//CALLBACK route will wait for the login response
//Either successful logins or login cancellation will be handled 
router.get('/auth/github/callback', passport.authenticate('github', { 
                                   //successfual authentication, redirect home
    failtureRedirect: '/login'}), (req, res) =>{
    
    console.log('[CALLBACK]');
    console.log('Login was successful.')
    res.json('You are logged in');
    
    //once login is successful, user will be redirect to profile page
    res.redirect('/profile')
});

router.get('/profile', (req, res) =>{
    console.log('User: ', user)
    const { username, profileUrl } = user

    res.send(`
    <h1>User Profile</h1>
    <div>Username: ${username}</div>
    <div>URL: ${profileUrl})</div>`
    )
})

router.get('/', (req, res) =>{
    res.send(`
        <h1>Login Options</h1>
        <a href='/auth/github'>Github Login</a>
    `);
}); 

module.exports = router;

// let env = {
//     clientId: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     callbackUrl: process.env.CALLBACK_URL    
// }

// //just to check if we successfully acquire env values
// console.log('Our config values:', env);

// //setting up password strategy
// let GitHubStrategy = require('passport-github').Strategy;

// //receiving incoming user and store it in session
// passport.serializeUser(async (userGithub, done)=>{
//     console.log('[PASSPORT] Serialise user called');
//     //store the received user in database
//     user=userGithub;
//     //just check the user
//     console.log(user)
//     done(null, userGithub);
// })

// //read received user out of the session into object
// passport.deserializeUser(async (user, done)=>{
//     console.log('[PASSPORT] Deserialise user called');
//     done(null, user)
// })

// //create an instance of GitHubStrategygit, this is a class taking constructor and method 
// let githubStrategy = new GitHubStrategy({
//     clientID: env.clientId,
//     clientSecret: env.clientSecret,
//     callbackURL: env.callbackUrl
// },

// (accessToken, refreshToken, profile, callback) => {
//     console.log('[LOGIN RESPONSE');
//     console.log( profile.username, profileUrl)
//     callback(null, profile)

//     User.findOrCreate({ githubId: profile.id }, (err, user) => {
//         return callback(err, user)
//         })
//     }
// )

// //register Github login provider at passport
// passport.use(githubStrategy);
