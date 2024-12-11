const nodemailer = require('nodemailer');

// Create a transporter using Gmail's SMTP settings
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'shaikriyaz222@gmail.com',  // Your Gmail address
    pass: process.env.EMAIL_APP_PASSWORD,     // Your Gmail App password (not your regular Gmail password)
  },
});
module.exports = {transporter};