const sendPwResetEmail = (token) =>{              

    const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: `${process.env.EMAIL_ADDRESS}`,
                pass: `${process.env.EMAIL_PASSWORD}`,
            },
        });

    const mailOptions = {
        from: 'poohbear@gmail.com', 
        to: `${user.email}`, 
        subject: 'Link to Reset Password',
        text: 'fill out later'
        };
                
        console.log('sending mail');

        transporter.sendMail(mailOptions, (err, res)=>{
            if(err){
                console.log('there was an error: ', err);
                } else {
                console.log('here is the res: ', res);
                resolve(res.status(200).json('recovery email sent')); 
                }
            })           
        } 

module.exports = {
    sendPwResetEmail
}