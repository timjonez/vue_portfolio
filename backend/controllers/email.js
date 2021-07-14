var nodemailer = require('nodemailer');
const dotenv = require('dotenv');

dotenv.config();

const host =  process.env.EMAIL_HOST
const user =  process.env.USERNAME
const password = process.env.PASSWORD


var transporter = nodemailer.createTransport({
    port: 587,
    host: host,
    auth: {
      user: user,
      pass: password
    },
  });

exports.sendEmail = (subject, message, next) => {
  const emailData = {
    from: 'noreply@tim-jones.dev',
    to: 'timjonez@protonmail.com',
    subject: subject,
    text: message
  }
  transporter.sendMail(emailData, function(error, info){
    next(error);
  });
};
  