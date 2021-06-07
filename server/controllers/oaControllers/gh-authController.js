const dotenv = require('dotenv')
const passport = require('passport')
const path = require('path')

dotenv.config({path: '../config/config.env'})

const githubStrategy = () => {

let env = {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackUrl: process.env.CALLBACK_URL    
}

//just to check if we successfully acquire env values
console.log('Our config values:', env);

//setting up password strategy
let GitHubStrategy = require('passport-github').Strategy;

//receiving incoming user and store it in session
passport.serializeUser(async (userGithub, done)=>{
    console.log('[PASSPORT] Serialise user called');
    //store the received user in database
    user=userGithub;
    //just check the user
    console.log(user)
    done(null, userGithub);
})

//read received user out of the session into object
passport.deserializeUser(async (user, done)=>{
    console.log('[PASSPORT] Deserialise user called');
    done(null, user)
})

//create an instance of GitHubStrategygit, this is a class taking constructor and method 
let githubStrategy = new GitHubStrategy({
    clientID: env.clientId,
    clientSecret: env.clientSecret,
    callbackURL: env.callbackUrl
},

(accessToken, refreshToken, profile, callback) => {
    console.log('[LOGIN RESPONSE');
    console.log( profile.username, profileUrl)
    callback(null, profile)

    User.findOrCreate({ githubId: profile.id }, (err, user) => {
        return callback(err, user)
            })
        }
    )
    passport.use(githubStrategy);
} 

module.exports = { githubStrategy }