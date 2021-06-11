const User = require('../models/userModel');
const express = require("express");
//const session = request('express-session');

const profileUser= async (req, res, next) => {  
  // we only update
  // firstname, lastname, country, region, username, skills, avatar
  // we post   description
  // email is not to be modified

  console.log(req.user) //req.user comes from login controller
  console.log(req.body)
  try {
    //id: user._id. req.user._id, instead of req.user.id is used, because in login controller the payload takes _id as one part of the jwt generator                                        
    const user = await User.findByIdAndUpdate(req.user.id, req.body, {new: true}) 
    //const user = await User.findOneAndUpdate({id: req.user._id}, {new: true})      

    if (!user) {
      return res.status(400).json({ errors: {msg: "no user found!"} });
    }

    res.status(200).json(user)    
    
    } catch (err) {
      return next(err);
      }  
  }


module.exports = profileUser;