const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

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