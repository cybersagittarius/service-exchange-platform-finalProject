const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
//const auth = require(' ');
console.log('no users!')

const User = require('../models/userModel');

const registerUser = async(req, res, next) => {
    //destructuring the req.body
  const user = new User(req.body)
    await user.save()
    
    const payload = {user: {id: user.id, name: user.firstname}}    
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: 360000})      
      
    res.status(200).json({token, user});      
    
  
} 

module.exports = registerUser
