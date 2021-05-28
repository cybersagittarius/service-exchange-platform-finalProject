const Essential = require("../models/essentialModel");
const User = require('../models/userModel');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const express = require("express");
//const session = request('express-session');

const loginUser = async (req, res, next) => {

  //const [email, password] = [req.body.email, req.body.password];
  const {email, password} = req.body
  const user = { email, password };

  // const user = new User(req.body)
  //const { email, password } = user
  try {
    let findEssentialUser = await Essential.findOne({ email: user.email });

    if (!findEssentialUser) {
      return res.status(400).json({ errors: { msg: "no user found!" } });
    }

    if (findEssentialUser) {
      const isMatch = await bcrypt.compare(password, findEssentialUser.password);
      if (!isMatch) {
        res.status(400).json({ errors: {msg: "invalid password"}})
        //res.status(400).json({ errors: { msg: "Invalid Passwords" } });
      }  
        
      let findUser = await User.findOne({email: user.email})

        //in the previous version, id, not _id(assgined by Mongo) was used. To be consistent using mongo generated id,
        //I changed id: findUser._id to _id: findUser._id    
        const payload = { user: { _id: findUser._id, email: findUser.email, username: findUser.username } };
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "1h",
        })
        res.status(200).json({ token, user: findUser});
      }
    } catch (err) {
      return next(err);
      }  
  }


module.exports = loginUser;
//   const payload = { user: { id: user._id, email: user.email } };

//   const token = await jwt.sign(payload, process.env.JWT_SECRET, {
//   expiresIn: "10m",
// });

// res.status(200).json({ token, email, msg: "Welcome back!" });



//const { email, password } = req.body

// User.findOne({email: email}).exec((err, user)=> {
//         if(err){
//             res.status(500).send("Connection Error")
//         }else if(!user){
//                 console.log('No matching email in our db!');
//                 res.status(400).send("No user with this email registered")
//             }else{
//                 user.comparePassword(password, async (matchError, isMatch)=>{
//                     if(matchError) {
//                         res.status(400).send("Email and password combination is wrong")
//                         }else if(!isMatch){
//                             res.status(400).send("Email and password combination is wrong")
//                             }else{
//                                 const payload = {user: {id: user._id, email: user.email}}

//                                 const token = await jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:'10m'});

//                                 res.status(200).json({token,user, msg: "Welcome back!"})

//                             }
//                         }
//                     )}
//                 })
//             }
