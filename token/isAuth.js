//check if the authentication works

const { verify } = require('jsonwebtoken');

const isAuth = (req) => {
    const authorisation = req.headers['authorization'];
    if(!authorisation) throw new Error('You need to login.');

    const token = authorisation.split(' ')[1];
    const {userId }= verify(token, process.env.ACCESS_TOKEN);
    return userId;
}

module.exports = { isAuth }