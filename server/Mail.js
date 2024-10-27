const nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

// setup email data with unicode symbols
let mailOptions = {
  from: '"Your Name" <your-email@gmail.com>',
  to: 'recipient-email@example.com',
  subject: 'Hello ✔',
  text: 'Hello world?',
  html: '<b>Hello world?</b>'
};