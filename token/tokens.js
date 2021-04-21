//This is the file to create tokens
const { sign } = require('jsonwebtoken');

//Create tokens

const createAccessToken = (userId) => {
    return sign({ userID }, process.env.ACCESS_TOKEN, {
        expiredsIn: '60m',
    });
};

const createRefreshToken = (userId) => {
    return sign({ userId}, process.env.REFRESH_TOKEN, {
        expiredsIn: '3d',
    });
};

const sendAccessToken = (res, req, accesstoken) =>{
    res.send({
        accesstoken, 
        email: req.body.email,
    })
}

const sendRefreshToken = (res, token) =>{
    res.cookie('refreshetoken', token, {
        httpOnly: true,
        path: 'refresh_token',
    })
}

module.exports = {
    createAccessToken,
    createRefreshToken,
    sendAccessToken,
    sendRefreshToken
}