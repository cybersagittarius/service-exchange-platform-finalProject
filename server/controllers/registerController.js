const express = require('express');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const cloudinary = require('cloudinary').v2

const User = require('../models/userModel');
const Essential = require('../models/essentialModel')

const registerUser = async(req, res, next) => {
  //get an new instance because this is for registration
   
    const {password, email, offerSelection:skills, ...userData} = req.body;
   //const {firstname, lastname, country, region, email, username } = user
   //console.log(req.body);
  try {
     let checkUser = await User.findOne({ email: email });
     if (checkUser) {
       return res
         .status(400)
         .json({ error: { msg: "email already registered" } });
     }
     //not upload(user.savedImage) here, it has to come from the req.body
     const user = new User({ email, skills, ...userData });
     const result = await cloudinary.uploader.upload(req.body.savedImage);
     user.avatar_url = result.secure_url;

     const essential = new Essential({ email, password });
     //this line does not work
     await essential.save();
     await user.save();
     //separate avatar out to handle the storage to MongoDB
     //const { avatar, ...user } = body
     //this is only for testing
     //console.log (body)

     //const userNew = await User({ ...userData, avatar_url: result.secure_url })

     //user info, no sensitive data shall be included
     //const payload = { user: { id: user._id, email: user.email } };
     const payload = { user: { id: user._id, email: user.email, username: user.username } };
    //  const payload = { essential : { id: essential._id, email: essential.email } };
     const token = jwt.sign(payload, process.env.JWT_SECRET, {
       expiresIn: 360000,
     });

     //res.sendStatus stops after the status being sent, does not send out json
     //next is not needed because res is already used to send out info we need
     res.status(200).json({ token, user });
   } catch (err) {
     return next(err);
   }      
} 

module.exports = registerUser