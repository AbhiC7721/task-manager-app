const sgMail = require('@sendgrid/mail')
require('dotenv').config()

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'abhinabachowdhury@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`  
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'abhinabachowdhury@gmail.com',
        subject: 'Sorry to see you go.',
        text: `We are really sorry to lose you ${name}. Please do provide us suggestions to improve our services.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}