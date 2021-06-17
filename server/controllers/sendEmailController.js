const customerError = require("../config/customError");
require("dotenv").config();
const sendEmail = require('../utilities/sendGrid_MSG')

const sendEmailController = async(req, res, next) => {

    //toUser is the recepient, fromUser is the sender
    const {sender, recipient, subject, text, username} = req.body    
        
        sendEmail(sender, recipient, subject, text, username)
        .then(res.json({ msg: "an email was sent to the recipient", status: 200 }))  
        .catch(err=>err.message)              
        }  


module.exports = sendEmailController