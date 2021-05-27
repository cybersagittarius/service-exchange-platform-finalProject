const User = require('../models/userModel');
const jwt = require("jsonwebtoken");
const express = require("express");
//const session = request('express-session');

const profileUser= async (req, res, next) => {  
  
  console.log(req.user)
  
  try {
    //id: user._id  
    const user = await User.findByIdAndUpdate(req.user.id, req.body, {new: true})      

    if (!user) {
      return res.status(400).json({ errors: { msg: "no user found!" } });
    }

    res.status(200).json(user)    
    
    } catch (err) {
      return next(err);
      }  
  }


module.exports = profileUser;