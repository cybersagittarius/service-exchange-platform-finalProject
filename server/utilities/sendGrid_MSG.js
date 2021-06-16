const sgMail = require('@sendgrid/mail')
require('dotenv').config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendEmail2Users = (toUser, fromUser, text, subject) => {

    const msg = {
        to: `${toUser}`, // Change to your recipient
        from: 'service.exchange.platform.2021@gmail.com', // Change to your verified sender
        subject: `${subject}`,
        text: `${text}`,
        html: `
              <strong>Please contact me at ${fromUser}</strong>              
              `,   
    }
    return sgMail.send(msg)
}

module.exports = sendEmail2Users
