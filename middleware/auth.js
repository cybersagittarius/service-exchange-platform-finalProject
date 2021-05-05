const jwt = require('jsonwebtoken');
require ('dotenv').config();

module.exports = function (req, res, next){
    const authHeader = req.headers['authorization'] //there's a bearer token in here
    const token = authHeader && authHeader.split(' ')[1];
    
    if(!token){ 
        console.log('I am here!')
        return res.status(401).json({msg: "no token, authorisation denied"});
    } 
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded.user
       
        next()
    }catch(err){
        res.status(401).json({msg: "token is not valid!"})
    }
}