const express = require('express');

const logoutUser = async(req, res, next)=>{
    
    if(token == null){
        return res.send(401).json({msg: "You do not have a token!"});
    } else {
        const autHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        await jwt.verify(token, process.env.JWT_SECRET, (err, user)=>{
            if(err) return res.send(403).json({msg: "Verification failed!"});

            req.user = user;
            next()
        })        
    }
}

module.exports = logoutController