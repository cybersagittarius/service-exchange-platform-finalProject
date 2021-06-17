const sgMail = require('@sendgrid/mail')
require('dotenv').config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendEmail = (sender, recipient, subject, text, username) => {

    const msg = {
        to: `${recipient}`, // Change to your recipient
        from: 'service.exchange.platform.2021@gmail.com', // Change to your verified sender               
        html: `
            <h1>Service Exchange</h1>
            <h2>${subject}</h>,
            <p>${text}</p>
            <strong>Please contact ${username} at ${sender} </strong>                          
              `,   
    }
    return sgMail.send(msg)
}

module.exports = sendEmail
