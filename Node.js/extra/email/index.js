const nodemailer = require("nodemailer")

let transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 25,
    secure:true, 
    auth: {
        user: 'ana@outlook.com',
        pass: '1230456'
    }
})

transporter.sendMail({
    from: "Ana <ana@outlook.com>",
    to:"anacarol.alves1@outlook.com",
    subject: 'test',
    text:' text'
}).then(message => {
    console.log(message)
}).catch( err => {
    console.log(err)
})