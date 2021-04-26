//This is the file to create tokens
const jwt = require('jsonwebtoken');
//const cookieParser = require('cookie-parser');

const tokenCreation = (body) => {
    //const { email } = body
    let token = jwt.sign({ body }, process.env.JWT_SECRET)

    res.cookie('token', token, {httpOnly: true })
    res.json({
        message: 'Login successed',
        token
    })
}

const tokenCheck = (req, res, next) =>{
    let token = req.cookies.token

    if(!token) {
        let error = new Error('You do not have a valid token!');
        return next(error)
    }

    try { 
        const letUsVerify = jwt.verify(token, process.env.JWT_SECRET)
        console.log(letUsVerify)
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