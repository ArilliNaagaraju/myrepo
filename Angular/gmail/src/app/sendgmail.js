required ('dotenv'),config();
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    },
    secure: false, // use SSL
    tls: {
        rejectUnauthorized: false
    }
});

var mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'rllnagaraju@gmail.com',
    subject: 'hi this very import one to do this',
    text: 'your phone is blocked so can you check with the member'
};
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
    console.log(error);
    } else {
    console.log('Email sent: ' + info.response);
    }
});