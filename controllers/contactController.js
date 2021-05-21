const express = require('express')
const Contact = require('../models/contactModel')

const contactUser = async(req, res, next) => {

    const contact = new Contact(req.body)
    
    const { name, email, message } = contact     
      
  await contact.save();

    res.status(200).json({contact, msg: "Message Received!"})    
}

module.exports = contactUser