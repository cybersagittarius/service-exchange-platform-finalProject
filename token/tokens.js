//This is the file to create tokens
const jwt = require('jsonwebtoken');
//const cookieParser = require('cookie-parser');

//this email is what is passed down from body.email in 
const tokenCreation = (email) => {    
    let token = jwt.sign({ email }, process.env.JWT_SECRET)
   }


const tokenCheck = async (req, res, next) =>{
    let token = req.cookies.token

    if(!token) {
        let error = new Error('You do not have a valid token!');
        return next(error)
    }
    try { 
        const letUsVerify = await jwt.verify(token, process.env.JWT_SECRET)
        if(!letUsVerify){
            console.log('Not verifying ......');
        }
        next()
    }
    catch(error) {
        next(error)
    }
}

module.exports = { tokenCreation, tokenCheck }




//Create tokens

// const createAccessToken = (userId) => {
//     return sign({ userId }, process.env.ACCESS_TOKEN, {
//         expiredsIn: '3d',
//     });
// };

// const createRefreshToken = (userId) => {
//     return sign({ userId}, process.env.REFRESH_TOKEN, {
//         expiredsIn: '3d',
//     });
// };

// const sendAccessToken = (res, req, accesstoken) =>{
//     res.send({
//         accesstoken, 
//         email: req.body.email,
//     })
// }

// const sendRefreshToken = (res, token) =>{
//     res.cookie('refreshetoken', token, {
//         httpOnly: true,
//         path: 'refresh_token',
//     })
// }

// module.exports = { 
//     createAccessToken,
//     createRefreshToken,
//     sendAccessToken,
//     sendRefreshToken
// }