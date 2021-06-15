const express = require('express');
const Essential = require('../models/essentialModel');

const profilePWChange = async(req, res, next) => {
  
  //let {email} = req.user ?
  let { email } = req.user
  //let email = req.userInfo.user.email
  console.log('is there a req.body', req)
  let essential = await Essential.findOne({email: email}) 

  try {
    if(!essential) {
      return res.json({msg: 'no user found!', status: 404})
    } 
    //get the password from req.body
    let password = req.body.newPassword
    
    //tell the model to put this into the database
    essential.password = password 
    //save the newly updated pw to the database
    await essential.save()
    //tell user that it was successful
    return res.json({msg: "updated as you wish!", status: 200})
    
  } catch (error) {
     return res.json({msg: error, status: 500})
  }
}

module.exports = profilePWChange
 


