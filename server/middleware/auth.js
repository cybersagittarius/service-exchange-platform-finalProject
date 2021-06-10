const jwt = require('jsonwebtoken');
require ('dotenv').config();

const auth = (req, res, next) => {
    //req.headers authorisation is an array
    console.log(req.headers)

    const authHeader = req.headers['authorization'] //there's a bearer token in here
    //Bearer + token
    const token = authHeader && authHeader.split(' ')[1];
    console.log(token);
    
    if(!token){ 
        console.log('I am not there!')
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

module.exports = auth