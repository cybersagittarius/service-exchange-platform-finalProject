const dotenv = require('dotenv')
const passport = require('passport')
const path = require('path')

dotenv.config({path: '../config/config.env'})

const facebookStrategy = () => {

let env = {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackUrl: process.env.CALLBACK_URL    
}

//just to check if we successfully acquire env values
console.log('Our config values:', env);

//setting up password strategy
let FacebookStrategy = require('passport-facebook').Strategy;

//receiving incoming user and store it in session
passport.serializeUser(async (userFacebook, done)=>{
    console.log('[PASSPORT] Serialise user called');
    //store the received user in database
    user=userFacebook;
    //just check the user
    console.log(user)
    done(null, userFacebook);
})

//read received user out of the session into object
passport.deserializeUser(async (user, done)=>{
    console.log('[PASSPORT] Deserialise user called');
    done(null, user)
})

//create an instance of GitHubStrategygit, this is a class taking constructor and method 
let facebookStrategy = new FacebookStrategy({
    clientID: env.clientId,
    clientSecret: env.clientSecret,
    callbackURL: env.callbackUrl
},

(accessToken, refreshToken, profile, callback) => {
    console.log('[LOGIN RESPONSE');
    console.log( profile.username, profileUrl)
    callback(null, profile)

    User.findOrCreate({ facebookId: profile.id }, (err, user) => {
        return callback(err, user)
            })
        }
    )

passport.use(facebookStrategy);
} 

module.exports = { facebookStrategy }

//prototype
// passport.use(new FacebookStrategy({
//     clientID: FACEBOOK_APP_ID,
//     clientSecret: FACEBOOK_APP_SECRET,
//     callbackURL: "http://localhost:3000/auth/facebook/callback"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     User.findOrCreate({ facebookId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));

