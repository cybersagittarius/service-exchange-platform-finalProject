const dotenv = require('dotenv')
const passport = require('passport')
const path = require('path')

dotenv.config({path: '../config/config.env'})


const twitterStrategy = () => {

let env = {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackUrl: process.env.CALLBACK_URL    
}

//just to check if we successfully acquire env values
console.log('Our config values:', env);

//setting up password strategy
let TwitterStrategy = require('passport-twitter').Strategy;

//receiving incoming user and store it in session
passport.serializeUser(async (userTwitter, done)=>{
    console.log('[PASSPORT] Serialise user called');
    //store the received user in database
    user=userTwitter;
    //just check the user
    console.log(user)
    done(null, userTwitter);
})

//read received user out of the session into object
passport.deserializeUser(async (user, done)=>{
    console.log('[PASSPORT] Deserialise user called');
    done(null, user)
})

//create an instance of GitHubStrategygit, this is a class taking constructor and method 
let twitterStrategy = new TwitterStrategy({
    clientID: env.clientId,
    clientSecret: env.clientSecret,
    callbackURL: env.callbackUrl
},

(token, tokenSecret, profile, callback) => {
    console.log('[LOGIN RESPONSE');
    console.log( profile.username, profileUrl)
    callback(null, profile)

    User.findOrCreate({ twitterId: profile.id }, (err, user) => {
        return callback(err, user)
            })
        }
    )

passport.use(twitterStrategy);
} 

module.exports = { twitterStrategy }

//prototype
// passport.use(new TwitterStrategy({
//     consumerKey: TWITTER_CONSUMER_KEY,
//     consumerSecret: TWITTER_CONSUMER_SECRET,
//     callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
//   },
//   function(token, tokenSecret, profile, cb) {
//     User.findOrCreate({ twitterId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));