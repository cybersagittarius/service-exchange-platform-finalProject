const dotenv = require('dotenv')
const passport = require('passport')
const path = require('path')

dotenv.config({path: '../config/config.env'})

const googleStrategy = () => {

let env = {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackUrl: process.env.CALLBACK_URL    
}

//just to check if we successfully acquire env values
console.log('Our config values:', env);

//setting up password strategy
let GoogleStrategy = require('passport-google-oauth20').Strategy;

//receiving incoming user and store it in session
passport.serializeUser(async (userGoogle, done)=>{
    console.log('[PASSPORT] Serialise user called');
    //store the received user in database
    user=userGoogle;
    //just check the user
    console.log(user)
    done(null, userGoogle);
})

//read received user out of the session into object
passport.deserializeUser(async (user, done)=>{
    console.log('[PASSPORT] Deserialise user called');
    done(null, user)
})

//create an instance of GitHubStrategyt, this is a class taking constructor and method 
let googleStrategy = new GoogleStrategy({
    clientID: env.clientId,
    clientSecret: env.clientSecret,
    callbackURL: env.callbackUrl
},

(accessToken, refreshToken, profile, callback) => {
    console.log('[LOGIN RESPONSE');
    console.log( profile.username, profileUrl)
    callback(null, profile)

    User.findOrCreate({ googleId: profile.id }, (err, user) => {
        return callback(err, user)
            })
        }
    )
    
passport.use(googleStrategy);
} 

module.exports = {googleStrategy }

//prototype: this is google oauth version 2.0
// var GoogleStrategy = require('passport-google-oauth20').Strategy;

// passport.use(new GoogleStrategy({
//     clientID: GOOGLE_CLIENT_ID,
//     clientSecret: GOOGLE_CLIENT_SECRET,
//     callbackURL: "http://www.example.com/auth/google/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));