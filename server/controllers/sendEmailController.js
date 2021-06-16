const customerError = require("../config/customError");
require("dotenv").config();
const sendEmail = require('../utilities/sendGrid_MSG')

const sendEmail2User = async(req, res, next) => {

    //toUser is the recepient, fromUser is the sender
    const {toUser, fromUser, text, subject} = req.body
    console.log(toUser.email, fromUser.email, text, subject)    
    
        
        sendEmail(toUser, fromUser, text, subject)
        .then(res.json({ msg: "an email was sent to the recipient", status: 200 }))  
        .catch(err=>err.message)              
        }  


module.exports = sendEmail2User